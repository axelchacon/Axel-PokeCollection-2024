import { useState } from "react";
import Input from "./input";
import { createUser } from "./services/user-service";

function SingupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    //console.log(formData); //{email: 'eatable1@mail.com', password: 'eatable1', first_name: 'axel', last_name: 'chacon'}
    createUser(formData)
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
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
        <Input
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          label="First Name"
        />
        <Input
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          label="Last Name"
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default SingupForm;
