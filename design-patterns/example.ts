import {IShipmentData} from "./src/types";
import {Client} from "./src/Client";

const data: IShipmentData = {
    shipmentID: 1,
    weight: 2,
    fromAddress: 'Mogilev',
    fromZipCode: '21200',
    toAddress: 'Minsk',
    toZipCode: '25200'
}

const client = new Client();
const res = client.request(data).ship();
console.log(res);