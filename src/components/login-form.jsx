import { useState } from "react";
import { login } from "./services/auto-sevice";
import Input from "./input";

function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(formData); //{ email: 'axelchacon@mail.com', password:"12344"}
    onLogin(formData);
    //{id: 2, email: 'axelchacon@mail.com', first_name: 'Axel', last_name: 'Chacon', token: 'Xo5HE99xPtS8c7xdenqTSLWA'}
  }
  //handleChange = (e) =>setFormData({ ...formData, password: e.target.value })
  function handleChange(event) {
    const { name, value } = event.target;
    //console.log({name, value}) ==== name:email, value:1234
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div>
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
    </div>
  );
}

export default LoginForm;
