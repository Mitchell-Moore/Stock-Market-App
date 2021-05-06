const getStock = async (stock) => {
  const url = new URL(process.env.REACT_APP_SERVER_ADDRESS + "/getStock");

  const body = stock;
  const requestObject = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ stock: stock }),
  };

  console.log(requestObject);
  try {
    return await fetch(url, requestObject).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }
};

const getStockList = async (search) => {
  const url = new URL(
    process.env.REACT_APP_SERVER_ADDRESS +
      `/autoCompleteStockSearch?search=${search}`
  );
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

const getAllStockList = async (search) => {
  const url = new URL(
    process.env.REACT_APP_SERVER_ADDRESS + `/getAllStockList`
  );
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

export { getStock, getStockList, getAllStockList };
