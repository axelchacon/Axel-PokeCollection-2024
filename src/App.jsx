import { useEffect, useState } from "react";

import { getUser } from "./components/services/user-service";
import AuthenticatedApp from "./AuthenticatedApp";
import UnathenticatedApp from "./UnathenticatedApp";

///añadiendo estilos emotions y renderiando el login de manera básica sin usar los Hooks de React
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }, []);

  return user ? <AuthenticatedApp /> : <UnathenticatedApp />;
}

export default App;
