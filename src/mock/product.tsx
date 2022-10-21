import { Product } from "../types";
import { makeid } from "../helpers";
import Gino from "../assets/gino.svg"

export const OneProduct: Product = {
    id: makeid(15),
    name: "Gino Pepper & Onion Tomato Paste 70g Sachet",
    brand: "gino",
    size: "70g",
    unit_price: 150,
    description: "lorem ipsum bla bla bla no be me go waste time dey write description for product wey no exist lol",
    quantity_left: 5,
    tags: ['spices','condiments'],
    image_url: Gino
}

export const Products: Product[] = [
    {
        id: makeid(15),
        name: "Gino Pepper & Onion Tomato Paste 70g Sachet",
        brand: "gino",
        size: "70g",
        unit_price: 150,
        description: "lorem ipsum bla bla bla no be me go waste time dey write description for product wey no exist lol",
        quantity_left: 5,
        tags: ['spices','condiments'],
        image_url: Gino
    },
    {
        id: makeid(15),
        name: "Gino Curry Powder 5g Sachet",
        brand: "gino",
        size: "5g",
        unit_price: 20,
        description: "lorem ipsum bla bla bla no be me go waste time dey write description for product wey no exist lol",
        quantity_left: 51,
        tags: ['spices','condiments'],
        image_url: Gino

    },
    {
        id: makeid(15),
        name: "Gino Pepper & Onion Tomato Paste 70g Sachet",
        brand: "gino",
        size: "70g",
        unit_price: 150,
        description: "lorem ipsum bla bla bla no be me go waste time dey write description for product wey no exist lol",
        quantity_left: 5,
        tags: ['spices','condiments'],
        image_url: Gino

    },
    {
        id: makeid(15),
        name: "Ayoola Poundo Yam Flour 900g Bag",
        brand: "ayoola foods",
        size: "900g",
        unit_price: 2500,
        description: "lorem ipsum bla bla bla no be me go waste time dey write description for product wey no exist lol",
        quantity_left: 5,
        tags: ['spices','condiments'],
        image_url: Gino

    },
    {
        id: makeid(15),
        name: "Knorr Chicken Cubes",
        brand: "knorr",
        size: "700g",
        unit_price: 750,
        description: "lorem ipsum bla bla bla no be me go waste time dey write description for product wey no exist lol",
        quantity_left: 5,
        tags: ['spices','condiments'],
        image_url: Gino

    },
    {
        id: makeid(15),
        name: "Golden Penny Spaghetti",
        brand: "golden penny",
        size: "700g",
        unit_price: 200,
        description: "lorem ipsum bla bla bla no be me go waste time dey write description for product wey no exist lol",
        quantity_left: 5,
        tags: ['spices','condiments'],
        image_url: Gino

    },

]