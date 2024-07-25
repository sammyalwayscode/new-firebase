import { collection, getDocs } from "firebase/firestore";
// to delete
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetData = () => {
  const [getData, setGetData] = useState([]);

  const getallData = async () => {
    const data = await getDocs(collection(db, "myProfile"));
    setGetData(data.docs.map((myDoc) => ({ ...myDoc.data(), id: myDoc.id })));
  };

  console.log(getData);

  useEffect(() => {
    getallData();
  }, []);

  const deleteData = async (id) => {
    await deleteDoc(doc(db, "myProfile", id));
    alert("Data has been deleted");
    window.location.reload();
  };

  return (
    <div>
      {getData.map((data) => (
        <section key={data.id}>
          <p>name: {data.myName} </p>
          <p>email: {data.email}</p>
          <p>bio: {data.bio}</p>
          <Link to={`/edit/${data.id}`}>
            <button>Edit</button>
          </Link>
          <button
            onClick={() => {
              deleteData(data.id);
            }}
          >
            Delete
          </button>
          <hr />
        </section>
      ))}
    </div>
  );
};

export default GetData;
