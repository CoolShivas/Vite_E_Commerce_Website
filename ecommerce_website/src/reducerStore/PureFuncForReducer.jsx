const PureFuncForReducer = (currState, action) => {
  //   if (action.type === "SET_LOADING") {
  //     return {
  //       ...currState,
  //       isLoading: true,
  //     };
  //   } else if (action.type === "SET_API_DATA") {
  //     const featuredData = action.payload.filter((currElement) => {
  //       return currElement.featured === true;
  //     });
  //     return {
  //       ...currState,
  //       isLoading: false,
  //       products: action.payload,
  //       featureProducts: featuredData,
  //     };
  //   } else if (action.type === "API_ERROR") {
  //     return {
  //       ...currState,
  //       isLoading: false,
  //       isError: true,
  //     };
  //   }

  // Instead of If else conditions using Switch Statements

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...currState,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featuredData = action.payload.filter((currElement) => {
        return currElement.featured === true;
      });
      return {
        ...currState,
        isLoading: false,
        products: action.payload,
        featureProducts: featuredData,
      };

    case "API_ERROR":
      return {
        ...currState,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...currState,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...currState,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...currState,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return currState;
  }
};

export default PureFuncForReducer;
