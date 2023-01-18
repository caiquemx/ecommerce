const getCategories = async () => {
  const ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data;
};

export default getCategories;
