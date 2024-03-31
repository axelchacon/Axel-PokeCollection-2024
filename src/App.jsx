import SingupForm from "./components/Singup-Form";
import LoginForm from "./components/login-form";

///añadiendo estilos emotions y renderiando el login de manera básica sin usar los Hooks de React
function App() {
  return (
    <>
      <h1>Welcome to Poke Collection</h1>
      {/* <LoginForm /> */}
      <SingupForm />
    </>
  );
}

export default App;
