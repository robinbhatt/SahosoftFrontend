export interface Product {
    id?: number;
    name?: string;
    price?: number;
    salePrice?: number;
    discount?: number;
    pictures?: string;
    shortDetails?: string;
    description?: string;
    stock?: number;
    new?: boolean;
    sale?: boolean;
    category?: string;
    colors?: any[];
    tags?: any[];
    size?: any[];
    variants?: any[];
}

