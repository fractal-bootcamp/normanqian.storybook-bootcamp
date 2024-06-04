import "./messageThread.css";

const Message = () => {
  return (
    <div className="sentContainer">
      <div className="sent">
        <div className="messageContent">
          I just completed my first 10k run this morning, and I feel amazing! It
          was a bit of a struggle towards the end, but pushing through the last
          kilometer was so rewarding. Now, I'm enjoying a big breakfast to
          refuel. If anyone wants to join me for a run next week, let me know! I
          just completed my first 10k run this morning, and I feel amazing! It
          was a bit of a struggle towards the end, but pushing through the last
          kilometer was so rewarding. Now, I'm enjoying a big breakfast to
          refuel. If anyone wants to join me for a run next week, let me know!
        </div>
      </div>

      <img className="avatar" src="Norman-Qian-220618-Raw-004.jpeg"></img>
    </div>
  );
};

const MessageThread = () => {
  return <Message></Message>;
};

export default MessageThread;

//
