///añadiendo estilos emotions y renderiando el login de manera básica sin usar los Hooks de React
function App() {
  return (
    <>
      <h1>Welcome to Poke Collection</h1>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default App;
