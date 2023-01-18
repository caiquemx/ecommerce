const getCategories = async () => {
  const ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data;
};

const getProducts = async () => {
  const ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY';
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data.results;
};

export {getCategories, getProducts};
