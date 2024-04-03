import { useState } from "react";
import SingupForm from "./components/Singup-Form";
import LoginForm from "./components/login-form";

///añadiendo estilos emotions y renderiando el login de manera básica sin usar los Hooks de React
function App() {
  const [showLogin, setShowLogin] = useState(true);
  function handleClick(event) {
    event.preventDefault();
    setShowLogin(!showLogin);
  }
  return (
    <>
      <h1>Welcome to Poke Collection</h1>
      {showLogin ? <LoginForm /> : <SingupForm />}
      <button onClick={handleClick}>
        {showLogin ? "Create Account" : "Log in"}
      </button>
    </>
  );
}

export default App;
