import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const Todo = () => {
  const [task, setTask] = useState("");

  const [myTodo, setMyTodo] = useState([]);

  const createTask = async () => {
    await addDoc(collection(db, "todo"), {
      task,
      done: false,
    });
    setTask("");
    alert("Task Created");
  };

  //   const getTask = async() => {
  //     const data = await getDocs(collection(db, "todo"));
  //     setMyTodo(data.docs.map((myDoc) => ({ ...myDoc.data(), id: myDoc.id })))
  //   }

  const editTask = async (id, done) => {
    await updateDoc(doc(db, "todo", id), {
      done: !done,
    });
  };

  const getInstantTask = async () => {
    const users = collection(db, "todo");
    onSnapshot(users, (snapshot) => {
      const r = [];
      snapshot.forEach((doc) => {
        r.push({ ...doc.data(), id: doc.id });
        // console.log(r);
        console.log(snapshot);
      });
      setMyTodo(r);
    });
  };

  useEffect(() => {
    // getTask()
    getInstantTask();
  }, []);

  return (
    <div
      style={{
        marginLeft: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Enter a Todo"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />{" "}
      <button onClick={createTask}>Add Todo</button>
      <h4>Todo</h4>
      {myTodo.map(
        (todo) =>
          todo.done === false && (
            <section key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => editTask(todo.id, todo.done)}
              />
              <span> {todo.task} </span>
            </section>
          )
      )}
      <h4>Complected</h4>
      {myTodo.map(
        (todo) =>
          todo.done === true && (
            <section key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => editTask(todo.id, todo.done)}
              />
              <span> {todo.task} </span>
            </section>
          )
      )}
    </div>
  );
};

export default Todo;
