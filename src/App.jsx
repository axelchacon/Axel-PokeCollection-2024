import { useState } from "react";
import SingupForm from "./components/Singup-Form";
import LoginForm from "./components/login-form";
import styled from "@emotion/styled";
import { colors } from "./styles/colors";

///añadiendo estilos emotions y renderiando el login de manera básica sin usar los Hooks de React
function App() {
  const [showLogin, setShowLogin] = useState(true);
  function handleClick(event) {
    event.preventDefault();
    setShowLogin(!showLogin);
  }
  const CustomLink = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    &:hover {
      color: ${colors.pink[400]};
    }
  `;
  return (
    <>
      <h1>Welcome to Poke Collection</h1>
      {showLogin ? <LoginForm /> : <SingupForm />}
      <CustomLink onClick={handleClick}>
        {showLogin ? "Create Account" : "Log in"}
      </CustomLink>
    </>
  );
}

export default App;
