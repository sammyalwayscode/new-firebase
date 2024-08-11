import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { basedb, baseStorage } from "../Base";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  // uploadBytesResumable,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";

const PostImage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();

  // const uploadImage = (e) => {
  //   const file = e.target.files[0];
  //   const fileRef = ref(baseStorage, "myImage" + file.name);
  //   const storageRef = uploadBytesResumable(fileRef, file);
  //   getDownloadURL(storageRef.snapshot.ref).then((url) => {
  //     setAvatar(url);
  //   });
  // };

  const postData = async () => {
    // Step 1: Upload avatar to Firebase Storage
    const storageRef = ref(baseStorage, `avatars/${avatar.name}`);
    await uploadBytes(storageRef, avatar);

    // Step 2: Get the download URL
    const avatarURL = await getDownloadURL(storageRef);

    addDoc(collection(basedb, "techcampus"), {
      description,
      title,
      avatar: avatarURL,
    });
    alert("Data posted sucessfully");
    navigate("/getimage");
    setTitle("");
  };

  // const postData = async () => {
  //   addDoc(collection(basedb, "techcampus"), {
  //     description,
  //     title,
  //     avatar: await avatar,
  //   });
  //   alert("Data posted sucessfully");
  //   navigate("/getimage");
  //   setTitle("");
  // };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setAvatar(e.target.files[0])}
        accept="image/*"
      />
      <br />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br />
      <button onClick={postData}>Submmit</button>
    </div>
  );
};

export default PostImage;
