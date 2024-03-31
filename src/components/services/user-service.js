import { tokenKey } from "../../config";
import apiFetch from "./api-fetch";
export function createUser(userData) {
  return apiFetch("/signup", { body: userData }).then((usuarioData) => {
    const { token, ...usuarios } = usuarioData;
    sessionStorage.setItem(tokenKey, token);
    //console.log("user-user", usuarios); // {id: 5, email: 'axelchacon1234@mail.com', first_name: 'Axel Diego', last_name: 'Chacón Pérez'}
    //console.log("user-usuarioData", usuarioData); // {id: 5, email: 'axelchacon1234@mail.com', first_name: 'Axel Diego', last_name: 'Chacón Pérez', token: 'qCKUYzbKXtFoNXjNn9g1ftv1'}
    return usuarios;
  });
}
