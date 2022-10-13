export interface Device {
    id: string;
    uid: number;
    vendor: string;
    createdAt: Date;
    statusId: number;
    status: string;
    gatewayId: string;
    gateway: string;
}

export interface DeviceDTO {
    uid: number;
    vendor: string;
    statusId: number;
}