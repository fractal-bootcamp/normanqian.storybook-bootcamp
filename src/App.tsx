import "./App.css";
import MessageThread from "./components/MessageThread";

type isOutgoing = boolean;
type content = string;
type id = number;
type message = { content: content; id: id };
type messageThread = { messages: message[]; isOutgoing: boolean };

const fakedata: messageThread = {
  messages: [
    { content: "firstmessage", id: 0 },
    { content: "second message here", id: 1 },
    {
      content:
        "lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor ametlorem ipsum sit dolor amet lorem ipsum sit dolor amet",
      id: 2,
    },
  ],
  isOutgoing: true,
};

function App() {
  return (
    <div>
      <MessageThread
        messages={fakedata.messages}
        isOutgoing={fakedata.isOutgoing}
      />
    </div>
  );
}

export default App;
