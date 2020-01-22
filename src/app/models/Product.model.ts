import { Category } from './Category.model';
import { Photo } from './Photo.model';
import { BaseModel } from './BaseModel';
import { Color } from './Color.model';

export interface Product extends BaseModel{
    name: string;
    description: string,
    price: number,
    quantity: number,
    category: Category,
    rating: number;
    size: number,
    color: string;
    properties:[],
    photos: Photo[],
    colors: Color[]
}