import { useState } from "react";
import Routing from "./components/routing/Routing";
import Navbar from "./components/nav-bar/Navbar";
import { ToastContainer } from "react-toastify";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} logout={logout} />

      <Routing login={login} />
      <ToastContainer />
    </div>
  );
}

export default App;
