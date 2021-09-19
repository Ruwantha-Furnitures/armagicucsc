import axios from "axios";

const apiImageUrl = "/api/image";

export function uploadPhoto(image, data) {
  return axios.post(apiImageUrl, image, data);
}

export function deletePhoto(path) {
  return axios.delete(apiImageUrl, path);
}
