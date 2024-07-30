import { collection, getDocs } from "firebase/firestore";
import { basedb } from "../Base";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetImage = () => {
  const [getmyBase, setGetMyBase] = useState([]);

  const getData = async () => {
    const data = await getDocs(collection(basedb, "techcampus"));
    setGetMyBase(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(getmyBase);

  return (
    <div>
      {getmyBase.map((data) => (
        <section key={data.id}>
          <img src={data.avatar} height="300" width="300" alt="" />
          <h2>Title: {data.title} </h2>
          <Link to={`/detail/${data.id}`}>
            <p>See more</p>
          </Link>
        </section>
      ))}
    </div>
  );
};

export default GetImage;
