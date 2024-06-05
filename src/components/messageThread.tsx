import "./messageThread.css";

type isOutgoing = boolean;
type content = string;
type id = number;
type message = { content: content; id: id };
type messageThread = { messages: message[]; isOutgoing: boolean };

const Message = (props: message) => {
  let isFirstMessage = false;

  if (props.id == 0) {
    isFirstMessage = !isFirstMessage;
  }

  return (
    <div className="sentContainer">
      <div className="sent">
        <div className="messageContent"> {props.content} </div>
      </div>
      <div className="avatarContainer">
        {isFirstMessage ? (
          <img className="avatar" src="Norman-Qian-220618-Raw-004.jpeg"></img>
        ) : (
          <img className="avatar" src=""></img>
        )}
      </div>
    </div>
  );
};

const MessageThread = (props: messageThread) => {
  return (
    <div className="messageThread">
      {props.messages.map((message) => {
        return (
          <div>
            <Message id={message.id} content={message.content} />
          </div>
        );
      })}
    </div>
  );
};

export default MessageThread;
