var intialData = {
  bestSellerData: [],
  preOrderData: [],
  backInStock: [],
};
const bestSellerReducer = (data = intialData, action) => {
  switch (action.type) {
    case "SELLER": {
      return {
        ...data,
        bestSellerData: action.payload,
      };
    }
    case "PRE": {
      return {
        ...data,
        preOrderData: action.payload,
      };
    }
    case "STOCK": {
      return {
        ...data,
        backInStock: action.payload,
      };
    }
    default: {
      return data;
    }
  }
};
export default bestSellerReducer;
