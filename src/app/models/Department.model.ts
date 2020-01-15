import { BaseModel } from './BaseModel';
import { Category } from './Category.model';

export interface Department extends BaseModel{
    
    name: string;
    category?: Category
}