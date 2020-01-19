import {BaseModel} from '../BaseModel';
import {Product} from '../Product.model';

export interface Cart extends BaseModel{
  products?: Product[];
  total?: number;
}
