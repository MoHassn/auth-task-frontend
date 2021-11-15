import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  const [data, setData] = useState("");

  // useEffect(() => {
  //   const token = localStorage.getItem("jwt");
  //   if (token === null) {

  // }, [])

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          {data}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
      {data}
    </div>
  );
}

export default App;
