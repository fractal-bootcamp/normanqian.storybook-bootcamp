import "./post.css";

const Post = () => {
  return (
    <div className="container">
      <div className="name">
        Helena <span className="header">in Group Name</span>{" "}
      </div>
      <div className="time">3 min ago</div>
      <div className="image">
        <img className="image" src="Norman-Qian-220618-Raw-004.jpeg"></img>
      </div>
      <div className="description">Post description</div>
      <div className="icontext">
        <img src=""></img>21 likes <img src=""></img>4 comments
      </div>
    </div>
  );
};

export default Post;
