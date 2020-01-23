import { Cart } from './dto/Cart';

export interface User{
    username: string,
    password: string,
    fullName: string,
    carts?: Cart[]
}