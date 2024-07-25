import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const PostData = () => {
  const [myName, setMyName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const bioPost = async () => {
    addDoc(collection(db, "myProfile"), {
      myName,
      email,
      bio,
    });
    setMyName("");
    setEmail("");
    setBio("");
    alert("Data posted successfuly ");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={myName}
        onChange={(e) => setMyName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter your bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <br />
      <button onClick={bioPost}>Submmit</button>
    </div>
  );
};

export default PostData;
