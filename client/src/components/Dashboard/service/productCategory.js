import axios from "axios";

const apiProductCategoryUrl = "/api/category";

export function getProductCategories() {
  return axios.get(apiProductCategoryUrl);
}

export function addProductCategories(category) {
  return axios.post(apiProductCategoryUrl, category);
}

export function getProductCategoriesDetails(id) {
  return axios.get(apiProductCategoryUrl + "/" + id);
}

export function editProductCategoriesDetails(id, category) {
  return axios.put(apiProductCategoryUrl + "/" + id, category);
}

export function deleteProductCategoriesDetails(id) {
  return axios.delete(apiProductCategoryUrl + "/" + id);
}
