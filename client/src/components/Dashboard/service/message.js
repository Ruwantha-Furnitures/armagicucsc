import axios from "axios";

const apiMessageUrl = "/api/message";

export function getMessages() {
  return axios.get(apiMessageUrl);
}

export function addMessage(message) {
  return axios.post(apiMessageUrl, message);
}

export function getMessageDetails(id) {
  return axios.get(apiMessageUrl + "/" + id);
}

export function editMessageDetails(id, message) {
  return axios.put(apiMessageUrl + "/" + id, message);
}

// export function deleteMessage(id) {
//   return axios.delete(apiMessageUrl + "/" + id);
// }
