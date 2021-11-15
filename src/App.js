import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import { Switch, Route, useHistory } from "react-router-dom";

function App() {
  const [data, setData] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log("useEffect");
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
    fetch("http://localhost:3000/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log("res", res);
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        if (data.code === 200) {
          setData(data.message);
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        history.push("/login");
        console.log(err);
      });
  });
  return (
    <div className="App">
      <Nav isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/">
          <div className="m-5 p-5">{data} </div>
        </Route>
        <Route path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/register">
          <Register setIsLoggedIn={setIsLoggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
