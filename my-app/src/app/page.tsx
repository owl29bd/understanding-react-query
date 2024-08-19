import { Posts } from "./posts";

function getToDos() {
  // Return some data we want to render
  const ret = {
    toDos: [
      {
        todoId: "dummyidone",
        todoText: "todo-01",
        isDone: false,
      },
      {
        todoId: "dummyidtwo",
        todoText: "todo-02",
        isDone: true,
      },
    ],
  };
  return ret;
}

export default function Home() {
  return (
    <main>
      <Posts />
    </main>
  );
}
