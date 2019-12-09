export const getAllCategories = () => {
  return fetch('http://stream-restaurant-menu-svc.herokuapp.com/category');
};

export const getCategorDetails = short_name => {
  return fetch(
    `http://stream-restaurant-menu-svc.herokuapp.com/item?category=${short_name}`
  );
};
