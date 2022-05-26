import tokenService from "./tokenService";

const BASE_URL = "/api";

export async function create(id, data) {
  return fetch(`${BASE_URL}/city/${id}/reviews`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Bad credentials! I hate you!");
  });
}

export async function deleteReview(id) {
  return fetch(`${BASE_URL}/reviews/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}
