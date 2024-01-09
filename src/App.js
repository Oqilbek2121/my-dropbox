import './components/style/style.css';
import * as ROUTER from "./Router/Routes";
import { PulseLoader } from "react-spinners";
import Dashboard from "./components/Dashboard";
import Private from "./components/private/Private";
import React, { useState, useEffect } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/SignUpAndLogIn/Login.jsx";
import Signup from "./components/SignUpAndLogIn/Signup.jsx";
import ResetPassword from "./components/SignUpAndLogIn/ResetPassword.jsx";
import UpdateProfile from "./components/SignUpAndLogIn/UpdateProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    setPageLoading(true);
    setTimeout(() => {
      setPageLoading(false);
    }, 8000);
  }, []);

  return (
    <>
      <main className="main">
        <Router>
          { pageLoading ? ((<PulseLoader className="loading d-flex justify-content-center align-items-center position-absolute" size={40} color={"#198754"} pageLoading={pageLoading} />)) : (
            <AuthProvider>
              <Switch>
                <Private exact path={ROUTER.HOME} component={Dashboard} />
                <Private path={ROUTER.PROFILE} component={UpdateProfile} />
                <Private exact path={ROUTER.FOLDER} component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path={ROUTER.RESET} component={ResetPassword} />
              </Switch>
            </AuthProvider>
          )}
        </Router>
      </main>
    </>
  );
};

export default App;