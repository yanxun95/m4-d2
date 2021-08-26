import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import WelcomeJumbotron from "./components/WelcomeJumbotron";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import history from "./data/history.json"

function App() {
  return (
    <div className="main-container">
      <div>
        <MyNav></MyNav>
      </div>
      <div>
        <WelcomeJumbotron></WelcomeJumbotron>
        <WarningSign text="This is a Alret!"></WarningSign>
        <MyBadge color="primary" text="This is the badge"></MyBadge>
        <BookList books={history}></BookList>
      </div>
      <div>
        <MyFooter></MyFooter>
      </div>
      <div></div>
    </div >
  );
}

export default App;
