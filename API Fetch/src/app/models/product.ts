export interface ProductSummary {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
}

export interface Product extends ProductSummary {
  brand?: string;
  category: string;
  rating: number;
  stock: number;
  images: string[];
}

export interface ProductResponse {
  products: ProductSummary[];
  total: number;
  skip: number;
  limit: number;
}

export interface CartItem {
  readonly id: number;
  readonly title: string;
  readonly thumbnail: string;
  readonly price: number;
  readonly stock: number;
  readonly quantity: number;
}
