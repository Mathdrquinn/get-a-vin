import React from 'react';
import copyToClipboard from 'copy-to-clipboard';
import { getRandomVin } from '../data/vins.js';
import { NotificationBar } from '../components/NotificationBar.jsx';

class Index extends React.Component {
    state = {
        vin: "1J4PP2GK1AW132691",
    };

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.copyVin = this.copyVin.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const vin = getRandomVin();
        this.setState({ vin });
        copyToClipboard(vin);
    }

    copyVin() {
        copyToClipboard(this.state.vin);
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
                    <h2>Result: <em>{this.state.vin}</em></h2>
                    <button type="button" onClick={this.copyVin}>Copy to Clipboard</button>
                </section>

                <NotificationBar />
            </main>
        );
    }
}

export default Index;