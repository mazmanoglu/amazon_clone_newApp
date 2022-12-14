import coco from "../assets/coco_chanel.jpg";
import dior from "../assets/dior.jpg";

export const initialState = {
  basket: [
    {
      id: "2",
      title: "manneke",
      price: 99.5,
      rating: 5,
      image: coco,
    },
    {
      id: "3",
      title: "Dior J'Adore",
      price: 99.5,
      rating: 7,
      image: dior,
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET": //adding item to the basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET": //remove item from the basket
      // cloned the basket
      let newBasket = [...state.basket];

      //check if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
