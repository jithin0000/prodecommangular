import { BaseModel } from './BaseModel';

export interface Photo extends BaseModel{
    imageUrl: string;
    main: boolean;
}