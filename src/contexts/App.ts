import { createContext } from "react";
import { User, Product, Order, Cart } from '../types';

type AppContextType = {
    appData: {
        currentUser: User|null;
        savedItems: Product[]|null;
        orders: Order[]|null;
        cart: Cart[]|null
    }|null
    setAppData: Function
}
 
export const AppDataContext = createContext<AppContextType>({
    appData: null,
    setAppData: () => {}
})