import React from 'react';
import copyToClipboard from 'copy-to-clipboard';
import { getRandomVin } from '../data/vins.js';
import { NotificationBar } from '../components/NotificationBar.jsx';
import axios from 'axios';

const getVehicleByVin = (vin) => axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/${vin}?format=json`)
    .then(resp => resp.data.Results
        .filter(r => r.Variable)
        .filter(r => r.Value))
    .then(results => results.reduce((sum, r) => ({ ...sum, [r.Variable]: r.Value }), {}))

class Index extends React.Component {
    state = {
        vins: { [getRandomVin()]: null },
    };

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.copyVin = this.copyVin.bind(this);
        this.getVins = this.getVins.bind(this);
    }

    componentDidMount() {
        const vin = this.getVins()[0];
        getVehicleByVin(vin)
            .then(vehicleInfo => {
                this.setState({ vins: { [vin]: vehicleInfo } });
            })
    }

    onSubmit(e) {
        e.preventDefault();
        const vin = getRandomVin();
        getVehicleByVin(vin)
            .then(vehicleInfo => {
                this.setState({ vins: { [vin]: vehicleInfo, ...this.state.vins } });
            })
            .then(() => copyToClipboard(vin));
    }

    copyVin() {
        copyToClipboard(this.getVins()[0]);
    }

    getVins() {
        return Object.keys(this.state.vins);
    }

    render() {
        return (
            <main id="main">
                <h1>Generate a <abbr title="Vehicle Identification Number">VIN</abbr></h1>
                <p>Making it easy to generate and copy <abbr title="Vehicle Identification Numbers">VINs</abbr></p>

                <form onSubmit={this.onSubmit}>
                    <h2 aria-live="polite">Result: <em>{this.getVins()[0]}</em></h2>
                    <button type="button" onClick={this.copyVin}>Copy to Clipboard</button>
                    <button type="submit">Get and Copy new VIN</button>
                    <h3>Vehicle Info</h3>
                    <pre><code>
                    {
                        ((vehicleInfo) => {
                            return vehicleInfo
                                ? (
                                    JSON.stringify(vehicleInfo, null, 4)
                                )
                                : 'Loading...'
                        })(this.state.vins[this.getVins()[0]])
                    }
                    </code></pre>
                </form>

                {
                    this.getVins().length > 1
                    ? (
                        <section>
                            <h2>History</h2>
                            <dl>
                                {this.getVins().slice(1).map((v) => (
                                    <>
                                        <dt key={`${v}-term`}>
                                            {v}
                                        </dt>
                                        <dd key={`${v}-definition`}>
                                            <pre><code>{JSON.stringify(this.state.vins[v], null, 4)}</code></pre>
                                        </dd>
                                    </>
                                ))}
                            </dl>
                        </section>
                    )
                    : null
                }
            </main>
        );
    }
}

export default Index;