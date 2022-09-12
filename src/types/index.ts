export interface User {
    id: string;
    email: string;
    password: string; //Might remove this, don't really need to store this on frontend for security reasons(even though we're encryting)
    cart: any[];
}