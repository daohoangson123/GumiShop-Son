const initState = {
    myCart: [],
    productData: [],
  };
  
  const rootReducer = (state = initState, action) => {
    
  
    switch (action.type) {
      case "Set_Product_Data":
          console.log(action.payload)
          return {
              ...state,
              productData: action.payload
          }
      case "Add_To_Cart":
        action.payload.amount = 1;
        return {
          ...state,
          myCart: [...state.myCart, action.payload],
        };
  
      case "Remove_In_Cart":
        const cart = [...state.myCart];
        return cart.filter((product, index) => product.id !== action.payload);
      
      default:
        return state;
    }
  };
  export default rootReducer;