import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { basedb, baseStorage } from "../Base";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const PostImage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const fileRef = ref(baseStorage, "myImage" + file.name);
    const storageRef = uploadBytesResumable(fileRef, file);
    getDownloadURL(storageRef.snapshot.ref).then((url) => {
      setAvatar(url);
    });
  };

  const postData = async () => {
    addDoc(collection(basedb, "techcampus"), {
      description,
      title,
      avatar: await avatar,
    });
    alert("Data posted sucessfully");
    navigate("/getimage");
    setTitle("");
  };

  return (
    <div>
      <input type="file" onChange={uploadImage} />
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
