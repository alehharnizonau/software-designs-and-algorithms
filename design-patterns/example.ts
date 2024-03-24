import {IShipmentData} from "./src/types";
import {Client} from "./src/Client";

const data: IShipmentData = {
    shipmentID: 1,
    weight: 160,
    fromAddress: 'Atlanta',
    fromZipCode: '72222',
    toAddress: 'Detroit',
    toZipCode: '77777'
}

const client = new Client();
const res = client.request(data).ship();
console.log(res);