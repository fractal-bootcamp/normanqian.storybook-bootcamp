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

/*
const fakedata: messageThread = {
  messages: [
    { content: "firstmessage", id: 0 },
    { content: "second message here", id: 1 },
    {
      content:
        "lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor ametlorem ipsum sit dolor amet lorem ipsum sit dolor amet",
      id: 2,
    },
    {
      content:
        "lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor ametlorem ipsum sit dolor amet lorem ipsum sit dolor amet",
      id: 2,
    },
    {
      content:
        "lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor ametlorem ipsum sit dolor amet lorem ipsum sit dolor amet",
      id: 2,
    },
    {
      content:
        "lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor ametlorem ipsum sit dolor amet lorem ipsum sit dolor amet",
      id: 2,
    },
  ],
  isOutgoing: true,
};
*/
