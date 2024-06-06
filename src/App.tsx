import "./App.css";
import Post from "./components/post";

type isOutgoing = boolean;
type content = string;
type id = number;
type message = { content: content; id: id };
type messageThread = { messages: message[]; isOutgoing: boolean };

function App() {
  return (
    <div>
      <Post />
    </div>
  );
}

export default App;
