import { Department } from './Department.model';

export interface Category{
    id: number;
    name: string;
    createAt: string;
    updatedAt?: string;
  departments?: Department[];
}
