import { useSelector } from "react-redux";
import { ToDoList as _ToDoList } from "./to-do-list";
import { useEffect, useState } from "react";

export const TodoSortList = () => {
  const [sortedList, setSortedList] = useState([]);
  const todo = useSelector((state) => state.todo);

  useEffect(() => {
    setSortedList(todo);
  }, [todo]);

  const taskCounter = (status) => {
    const counter = todo.filter((elem) => elem.status === status);
    return counter.length;
  };

  return (
		<div className="flex justify-center">
			<div className="w-[700px]">
				<div className=" flex  gap-4">
					<button
						type="button"
						className="w-full h-10 bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
						onClick={() => setSortedList(todo)}
					>
						All: {todo.length}
					</button>
					<button
						type="button"
						name="1"
						className="w-full h-10 bg-green-400 text-white font-bold py-2 px-4 rounded hover:bg-green-500"
						onClick={() => setSortedList(todo.filter(({ status }) => status === "Completed"))}
					>
						Completed: {taskCounter("Completed")}
					</button>
					<button
						type="button"
						name="2"
						className="w-full h-10 bg-red-400 text-white font-bold py-2 px-4 rounded hover:bg-red-500"
						onClick={() => setSortedList(todo.filter(({ status }) => status === "Not completed"))
						}
					>
						Not Completed: {taskCounter("Not completed")}
					</button>
				</div>
				<_ToDoList list={sortedList} />
			</div>
		</div>
  );
};
