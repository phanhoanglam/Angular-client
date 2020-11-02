import { TransferBaseModel } from './transfer-base.model';
import { JobType } from './job-type';
export interface Job extends TransferBaseModel {
    name: string;
    address: string;
    slug: string;
    slaryFrom: string;
    slaryTo: string;
    addressLocation: AddressLocation;
    createdAt: Date;
    jobType: JobType;
    employer: JobEmployer;
}

export interface AddressLocation {
    x: string;
    y: string;
}

export interface JobEmployer {
    id: number;
    name: string;
    avatar: string;
    address: string;
    nationality: string;
    rating: string;
}