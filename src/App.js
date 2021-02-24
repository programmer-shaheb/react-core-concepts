import logo from "./logo.svg";
import "./App.css";

function Welcome(props) {
  return (
    <div>
      <h1>Hello,{props.name}</h1>
    </div>
  );
}

function Avatar(props) {
  return (
    <img
      src="{props.user.avatarUrl}"
      alt="{props.user.name}"
      className="Avatar"
    />
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome name="Abidur"></Welcome>
    </div>
  );
}

export default App;
