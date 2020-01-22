export interface FilterProductRequest {

  page?: number;
  pageSize?: number;
  sort?: string;
  search?: string;
  categories?: number[];
  brands?: number[];
  colors?: string[];
  min?: number;
  max?: number;


}
