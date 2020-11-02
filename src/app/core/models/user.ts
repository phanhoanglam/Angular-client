import { TransferBaseModel } from '@core/models/transfer-base.model';

export class UserEmployee implements TransferBaseModel {
    id?: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
}

export class UserEmployer implements TransferBaseModel {
    id?: string;
    name: string;
    phone: string;
    email: string;
    password: string;
}
