import { JobCategory } from './job-category';
import { TransferBaseModel } from './transfer-base.model';
import { JobType } from './job-type';
export interface Job extends TransferBaseModel {
    name: string;
    description: string;
    address: string;
    slug: string;
    slaryFrom: string;
    slaryTo: string;
    addressLocation: AddressLocation;
    status: string;
    expiredAt: Date;
    createdAt: Date;
    jobType: JobType;
    jobCategory: JobCategory;
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

export class FilterJob{
    page: number;
    size: number;
    salaryFrom: number;
    salaryTo: number;
    names: string;
    location: string;
    categories: any[];
    skills: any[];
    types: any[];
}