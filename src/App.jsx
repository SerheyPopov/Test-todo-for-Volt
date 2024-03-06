import { CreateTask as _CreateTask } from "./component/create-task";
import { TodoSortList as _TodoSortList } from "./component/todo-sort-list";
import { getCurrentDay } from "./utils/get-current-day";

export const App = () => {
  return (
		<div className="pt-10 flex justify-center  min-h-screen  bg-gradient-to-r from-[#edfcff] to-[#dbf6ff]">
			<div className="w-[1200px] ">
				<div className="mb-5 rounded-lg h-20  bg-gradient-to-r from-[#2ff1fd] to-[#52bffa] flex items-center justify-between px-10">
					<h1 className="text-3xl font-bold text-white  ">Daily schedule planner</h1>
					<p className="text-3xl font-bold text-white  ">{getCurrentDay()}</p>
				</div>

				<div className="flex justify-center">
					<_CreateTask />
					<_TodoSortList />
				</div>
			</div>
		</div>
  );
};
