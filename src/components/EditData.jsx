import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const EditData = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newBio, setNewBio] = useState("");

  const editData = async () => {
    // const userDoc = doc(db, "myProfile", id)
    // const newFilds = {newName,newEmail, newBio }
    // await updateDoc(userDoc, newFilds)
    await updateDoc(doc(db, "myProfile", id), {
      myName: newName,
      email: newEmail,
      bio: newBio,
    });

    alert("Data has been edited");
    navigate("/");
  };

  return (
    <div>
      <p> {id} </p>
      <input
        type="text"
        placeholder="Enter your name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter your bio"
        value={newBio}
        onChange={(e) => setNewBio(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          editData(id);
        }}
      >
        Edit Profile
      </button>
    </div>
  );
};

export default EditData;
