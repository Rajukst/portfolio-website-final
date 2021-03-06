import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./WebPages/Footer/Footer";
import Header from "./WebPages/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
