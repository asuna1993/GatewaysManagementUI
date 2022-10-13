export interface Gateway {
    id: string;
    serialNumber: string;
    name: string;
    ipAdress: string;
}

export interface GatewayDTO {
    serialNumber: string;
    name: string;
    ipAdress: string;
}
