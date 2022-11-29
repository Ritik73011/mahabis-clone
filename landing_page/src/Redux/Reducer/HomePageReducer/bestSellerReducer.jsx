var intialData = {
  bestSellerData: [],
};
const bestSellerReducer = (data = intialData, action) => {
  switch (action.type) {
    case "SELLER": {
      return {
        ...data,
        bestSellerData: [...data.bestSellerData, action.payload],
      };
    }
    default: {
      return data;
    }
  }
};
export default bestSellerReducer;
