export interface DeliveryAddress {
    name: string;
    phone_number: string;
    street_address: string;
    city: string;
    state: string;
}


export interface User {
    id: string
    email: string;
    phone_number: string[]|null;
    name: string;
    still_exists: boolean;
    user_delivery_address: DeliveryAddress[]|null;
}

export interface Cart {
    id: string;
    name: string;
    size: string;
    brand: string;
    unit_price: number;
    quantity: number;
    image: string;
};

export interface Brand {
    name: string;
}

export interface Product {
    id: string;
    name: string;
    brand: string;
    size?: string;
    unit_price: number; 
    description?: string;
    quantity_left: number;
    tags?: string[];
    image_url?:string;
}
export interface Order {
    user_id: string;
    order_num: string;
    order_status: "pending"|"delayed"|"delivered"|"failed"|"in transit",
    order_type: "wholesale"|"retail",
    items: Cart,
    delivery_address: DeliveryAddress
}

export interface Filters {
    active: boolean,
    minPrice?:number,
    maxPrice?: number,
    priceArrangement?: 'ascending'|'descending'
}
export interface AppContextType {
    currentUser: User|null;
    savedItems: Product[]|null;
    orders: Order[]|null;
    cart: Cart[]|null
}