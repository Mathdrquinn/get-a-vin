import React from 'react';
import copyToClipboard from 'copy-to-clipboard';
import { getRandomVin } from '../data/vins.js';
import { NotificationBar } from '../components/NotificationBar.jsx';

class Index extends React.Component {
    state = {
        vins: [getRandomVin()],
    };

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.copyVin = this.copyVin.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const vin = getRandomVin();
        this.setState({ vins: [vin, ...this.state.vins] });
        copyToClipboard(vin);
    }

    copyVin() {
        copyToClipboard(this.state.vins[0]);
    }

    render() {
        return (
            <main id="main">
                <h1>Generate a <abbr title="Vehicle Identification Number">VIN</abbr></h1>
                <p>A dynamic flexible form for accessibly generating <abbr title="Vehicle Identification Numbers">VINs</abbr></p>

                <form onSubmit={this.onSubmit}>
                    <button type="submit">Get and Copy new VIN</button>
                </form>

                <section aria-live="polite">
                    <h2>Result: <em>{this.state.vins[0]}</em></h2>
                    <button type="button" onClick={this.copyVin}>Copy to Clipboard</button>
                </section>

                {
                    this.state.vins.length > 1
                    ? (
                        <section>
                            <h2>History</h2>
                            <ul>
                                {this.state.vins.slice(1).map((v) => (
                                    <li>{v}</li>
                                ))}
                            </ul>
                        </section>
                    )
                    : null
                }
            </main>
        );
    }
}

export default Index;