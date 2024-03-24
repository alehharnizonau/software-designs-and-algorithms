import {IShipmentData} from "./src/types";
import {Client} from "./src/Client";

const data: IShipmentData = {
    shipmentID: 1,
    weight: 50,
    fromAddress: 'Atlanta',
    fromZipCode: '12222',
    toAddress: 'Detroit',
    toZipCode: '77777'
}

const client = new Client();
const res = client.request(data).ship();
console.log(res);