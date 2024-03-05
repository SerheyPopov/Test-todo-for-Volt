import CreateTask from "./component/CreateTask";
import TodoSortList from "./component/TodoSortList";
import { getCurrentDay } from "./utils/getCurrentDay";

const App = () => {
	return (
		<div className="pt-10 flex justify-center  min-h-screen  bg-gradient-to-r from-[#edfcff] to-[#dbf6ff]">
			<div className="w-[1200px] ">
				<div className="mb-5 rounded-lg h-20  bg-gradient-to-r from-[#2ff1fd] to-[#52bffa] flex items-center justify-between px-10">
					<h1 className="text-3xl font-bold text-white  ">Daily schedule planner</h1>
					<p className="text-3xl font-bold text-white  ">{getCurrentDay()}</p>
				</div>

				<div className="flex justify-center">
					<CreateTask />
					<TodoSortList />
				</div>
			</div>
		</div>
	);
};

export default App;
