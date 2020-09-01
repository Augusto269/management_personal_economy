import React, { useState } from "react";
import ProtectedRoutes from "./Utils/Routers/ProtectedRoutes";
import { Language } from "./Utils/Context/Context";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './views/Home/Home'
import Login from './views/Login/login'



function App() {
  const [lang, setLang] = useState("es");

  return (
    <>
        <Language.Provider value={{ lang, setLang }}>
          <Router>
            <Switch>
              <ProtectedRoutes path="/" exact component={Home} />
              <ProtectedRoutes path="/home" component={Home} />
              <ProtectedRoutes path="/auth" component={Login} />
            </Switch>
          </Router>
        </Language.Provider>
    </>
  );
}

export default App;

