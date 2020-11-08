import { TransferBaseModel } from './transfer-base.model';

export class JobCategory implements TransferBaseModel{
    id?: string;
    name: string;
    jobCount: number;
}