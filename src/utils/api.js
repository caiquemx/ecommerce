const getCategories = async () => {
  const ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data;
};

const getProducts = async (CATEGORY_ID, QUERY) => {
  const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?category=$${CATEGORY_ID}&q=$${QUERY}`;
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data.results;
};

const getProductsByCategories = async (CATEGORY_ID) => {
  const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}`;
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data.results;
};

const getDetails = async (PRODUCT_ID) => {
  const ENDPOINT = `https://api.mercadolibre.com/items/${PRODUCT_ID}`;
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data;
};

export {getCategories, getProducts, getProductsByCategories, getDetails};
