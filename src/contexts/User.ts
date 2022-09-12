import { createContext } from "react";
import { User } from '../types';

type UserContextType = {
    currentUser: User|null;
    setCurrentUser: Function
}
 
export const UserContext = createContext<UserContextType>({
    currentUser: null,
    setCurrentUser: () => {}
})