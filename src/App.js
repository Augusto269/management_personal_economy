import React, { useState } from "react";
import ProtectedRoutes from "./Utils/Routers/ProtectedRoutes";
import { Language } from "./Utils/Context/Context";
import MainTheme from "./Utils/Themes/MainTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './views/Home/Home'
import Login from './views/Login/Login'



function App() {
  const [lang, setLang] = useState("es");

  return (
    <>
      <ThemeProvider theme={MainTheme}>
        <Language.Provider value={{ lang, setLang }}>
          <Router>
            <Switch>
              <ProtectedRoutes path="/" exact component={Home} />
              <ProtectedRoutes path="/home" component={Home} />
              <ProtectedRoutes path="/auth" component={Login} />
            </Switch>
          </Router>
        </Language.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;

