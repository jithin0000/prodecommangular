export interface ProductRequestDto {

    name: string;
    description: string;
    price: string;
    quantity: string;
    category_id: number;
    photos: number[];
    rating: number;
}