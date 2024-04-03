import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "./styles/colors";
import LoginForm from "./components/login-form";
import SingupForm from "./components/Singup-Form";

function UnathenticatedApp({ onLogin }) {
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
      {showLogin ? <LoginForm onLogin={onLogin} /> : <SingupForm />}
      <CustomLink onClick={handleClick}>
        {showLogin ? "Create Account" : "Log in"}
      </CustomLink>
    </>
  );
}

export default UnathenticatedApp;
