import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import WelcomeJumbotron from "./components/WelcomeJumbotron";
import Release from "./components/release";

function App() {
  return (
    <div className="main-container">
      <div>
        <MyNav></MyNav>
        <WelcomeJumbotron></WelcomeJumbotron>
      </div>
      <div>
        <Release></Release>
      </div>
      <div>
        <MyFooter></MyFooter>
      </div>
      <div></div>
    </div>
  );
}

export default App;
