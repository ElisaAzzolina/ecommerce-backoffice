const URL = "https://api.escuelajs.co/api/v1/";

export function GET(type, id = "") {
  return fetch(URL + type + id).then((res) => res.json());
}
