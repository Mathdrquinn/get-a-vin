import axios from 'axios';
import copy from 'copy-to-clipboard';

const vin = '123ewjnkfm1e3rf';

const copyToClipboard = () => copy(vin);
const getVin = () => axios.get('http://www.randomvin.com/getvin.php?type=real')
.then((vin) => {
    console.log(vin);
    debugger;
});

const Index = () => (
    <main>
        <h1>Generate a <abbr title="Vehicle Identification Number">VIN</abbr></h1>
        <p>A dynamic flexible form for accessibly generating <abbr title="Vehicle Identification Numbers">VINs</abbr></p>

        <form onSubmit="">
            <button type="submit">Get VIN</button>
        </form>

        <section>
            <h2>Result: <em>{vin}</em></h2>
            <button type="button" onClick={copyToClipboard}>Copy to Clipboard</button>
        </section>

        <button onClick={getVin}>get vin</button>
    </main>
  )
  
  export default Index;