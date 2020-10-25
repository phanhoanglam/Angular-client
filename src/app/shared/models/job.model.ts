import {TransferBaseModel} from '@core/models/transfer-base.model';

export interface Job extends TransferBaseModel {
  employerId?: number;
  jobCategoryId?: number;
  jobTypeId?: number;
  name?: string;
  salaryFrom?: number;
  salaryTo?: number;
  description?: string;
  address?: string;
  address_location?: string;
  status?: 'FINDING' | 'CONFIRMING' | 'ACCEPTED';
  expiredAt?: string;
  slug?: string;
  createdAt?: string;
  updatedAt?: string;
}
