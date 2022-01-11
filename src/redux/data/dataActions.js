// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();
      const cost = await store
        .getState()
        .blockchain.smartContract.methods.PUBLIC_SALES_PRICE()
        .call();

      dispatch(
        fetchDataSuccess({
          totalSupply,
          cost,
          availableForMint: 7,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
