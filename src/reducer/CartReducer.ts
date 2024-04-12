type QuantityIncrement = {
  type: "increment";
  payload: { id: number };
};
type QuantityDecrement = {
  type: "decrement";
  payload: { id: number };
};

type AddToCart = {
  type: "addToCart";
  payload: { item: Item };
};

type RemoveFromCart = {
  type: "removeFromCart";
  payload: { id: number };
};

export type CartActions =
  | QuantityIncrement
  | QuantityDecrement
  | AddToCart
  | RemoveFromCart;

export interface Item {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

export type CartItems = {
  item: Item[];
};

export const CartReducer = (state: CartItems, action: CartActions) => {
  switch (action.type) {
    case "addToCart":
      console.log("adicionando");
      if (state.item.find((item) => item.id === action.payload.item.id))
        return state;
      else
        return {
          item: [...state.item, action.payload.item],
        };
    case "removeFromCart":
      return {
        item: state.item.filter((item) => item.id !== action.payload.id),
      };
    case "increment":
      console.log("incrementando");
      const filteredIncrementArray = state.item.filter(
        (item) => item.id === action.payload.id
      );
      if (filteredIncrementArray.length === 0) {
        return {
          item: [
            ...state.item,
            {
              id: 1,
              name: "Fall Limited Edition Sneakers",
              price: 125,
              img: "../../../../public/images/image-product-1-thumbnail.jpg",
              quantity: 1,
            },
          ],
        };
      } else {
        return {
          item: state.item.map((item) =>
            item.id === action.payload.id
              ? item.quantity !== 99
                ? { ...item, quantity: item.quantity + 1 }
                : item
              : item
          ),
        };
      }
    case "decrement":
      const filteredDecrementArray = state.item.filter(
        (item) => item.id === action.payload.id
      );
      if (filteredDecrementArray[0]?.quantity === 1) {
        return {
          item: state.item.filter((item) => item.id !== action.payload.id),
        };
      } else {
        return {
          item: state.item.map((item) =>
            item.id === action.payload.id
              ? item.quantity !== 0
                ? { ...item, quantity: item.quantity - 1 }
                : item
              : item
          ),
        };
      }

    default:
      return state;
  }
};
