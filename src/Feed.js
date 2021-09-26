import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventIcon from "@material-ui/icons/Event";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title={"Photo"} color="#70b5f7" />
          <InputOption
            Icon={SubscriptionsIcon}
            title={"Video"}
            color="#E7A33E"
          />
          <InputOption Icon={EventIcon} title={"Event"} color="#C0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title={"Write article"}
            color="#7fc15e"
          />
        </div>
      </div>
      {/* Post */}
      <Post
        name="nguyen kiet"
        description="this is a test"
        message="Hello ae"
      />
    </div>
  );
}

export default Feed;
