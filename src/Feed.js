import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import CreateIcon from "@material-ui/icons/Create";
import EventIcon from "@material-ui/icons/Event";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import {
  addDoc,
  collection,
  onSnapshot,
  Timestamp,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Feed.css";
import { db } from "./firebase";
import InputOption from "./InputOption";
import Post from "./Post";
import { selectUser } from "./features/userSlice";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  async function addPost() {
    const data = {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: Timestamp.now(),
    };
    try {
      const docRef = await addDoc(collection(db, "posts"), data);

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function updateData() {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }

  useEffect(() => {
    updateData();
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    addPost();
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
