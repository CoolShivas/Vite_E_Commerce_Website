const PureFuncForReducer = (currState, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...currState,
      isLoading: true,
    };
  } else if (action.type === "SET_API_DATA") {
    const featuredData = action.payload.filter((currElement) => {
      return currElement.featured === true;
    });
    return {
      ...currState,
      isLoading: false,
      products: action.payload,
      featureProducts: featuredData,
    };
  } else if (action.type === "API_ERROR") {
    return {
      ...currState,
      isLoading: false,
      isError: true,
    };
  }
};

export default PureFuncForReducer;
