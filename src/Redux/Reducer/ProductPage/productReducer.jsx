var intialData = {
    products:[]
  };
  const productReducer = (data = intialData, action) => {
    switch (action.type) {
      case "PROD": {
        return {
          ...data,
          products: action.payload,
        };
      }
      default: {
        return data;
      }
    }
  };
  export default productReducer;
  