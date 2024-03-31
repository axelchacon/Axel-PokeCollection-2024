// auth-service.js
import apiFetch from "./api-fetch";

export function login(credentials) {
  return apiFetch("/login", { body: credentials });
}
