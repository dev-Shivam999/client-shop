/// <reference types="vite/client" />

type Products = {
  brand: string;

  category: string;
  color: string;
  description: string;
  discount:number;
  id:number;
  image: string;
  model: string;
  price:number;
  title: string;
};

interface API {
    success?:boolean

    message?: string;
    products: Products[];
}
interface API2 {
    products: Products[];
    pro: Products[];
}

interface LO{
    success: boolean;

    message: string;
    products?: Products[];
}
interface Add{
    success: boolean;
}