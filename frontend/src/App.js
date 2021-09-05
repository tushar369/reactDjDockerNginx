import { Switch, Route } from "react-router-dom";
import Homepage from "./components/hompage/Homepage";
import Login from "./components/accounts/Login";
// import SignUp from "./components/accounts/SignUp";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
