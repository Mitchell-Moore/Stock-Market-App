const getStock = async () => {
  const url = new URL(process.env.REACT_APP_SERVER_ADDRESS);
  console.log(url);
  const requestObject = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    return await fetch(url, requestObject).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }
};

const getStockList = async () => {
  const url = new URL(process.env.REACT_APP_SERVER_ADDRESS + "/getStockList");
  const requestObject = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    return await fetch(url, requestObject).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }
};

export { getStock, getStockList };
