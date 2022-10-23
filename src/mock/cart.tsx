import { Cart } from "../types";
import { makeid } from "../helpers";
import gino from "../assets/gino.svg"
import golden from "../assets/golden.jpg"

export const CartItems: Cart[] = [
    {
        id: makeid(15),
        name: 'Gino Pepper & Onion Tomato Paste 70g Sachet',
        image: gino,
        size: '70g',
        brand: 'gino',
        unit_price: 150,
        quantity: 1
      },
      {
        id: makeid(15),
        name: 'Gino Curry Powder 5g Sachet',
        image: golden,
        size: '5g',
        brand: 'gino',
        unit_price: 150,
        quantity: 1
      },
      {
        id: makeid(15),
        name: 'Ayoola Poundo Yam Flour 900g Bag',
        image: '',
        size: '900g',
        brand: 'ayoola foods',
        unit_price: 150,
        quantity: 0
      }
]