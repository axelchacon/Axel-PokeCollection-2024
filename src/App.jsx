import { useState } from "react";
import Input from "./components/input";

///añadiendo estilos emotions y renderiando el login de manera básica sin usar los Hooks de React
function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  //handleChange = (e) =>setFormData({ ...formData, password: e.target.value })
  function handleChange(event) {
    const { name, value } = event.target;
    //console.log({name, value}) ==== name:email, value:1234
    setFormData({ ...formData, [name]: value });
  }
  return (
    <>
      <h1>Welcome to Poke Collection</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@mail.com"
          label="Email"
        />
        <Input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="******"
          label="Password"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default App;
