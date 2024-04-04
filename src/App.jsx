import { useEffect, useState } from "react";

import { createUser, getUser } from "./components/services/user-service";
import AuthenticatedApp from "./AuthenticatedApp";
import UnathenticatedApp from "./UnathenticatedApp";
import { login } from "./components/services/auto-sevice";

///añadiendo estilos emotions y renderiando el login de manera básica sin usar los Hooks de React
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }, []);
  function handleLogin(credentials) {
    login(credentials)
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }
  function handleSignup(userData) {
    createUser(userData)
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }
  return user ? (
    <AuthenticatedApp />
  ) : (
    <UnathenticatedApp onLogin={handleLogin} onSignup={handleSignup} />
  );
}

export default App;
