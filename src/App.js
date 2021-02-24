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

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.author} />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome name="Akash"></Welcome>
      <Comment author="Abidur" text="Read The Book" date={new Date()}></Comment>
    </div>
  );
}

export default App;
