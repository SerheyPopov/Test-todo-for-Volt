import { useDispatch } from "react-redux";
import { editToDo, deleteToDo } from "../redax/todo-slice";
import Icon from "../img/svg/icon.svg";

export const ToDoList = ({ list }) => {
  const dispatch = useDispatch();

  const handleChangeStatus = (status, id) => {
    let newStatus;
    const nCompleted = "Not completed";
    switch (status) {
      case "Completed": {
        newStatus = nCompleted;
        break;
      }
      case nCompleted: {
        newStatus = "Completed";
        break;
      }

      default: {
        newStatus = nCompleted;
        break;
      }
    }
    dispatch(editToDo({ "status": newStatus, id }));
  };

  return (
		<div className="flex justify-center mt-5">
			<ul className="mb-10 w-full">
				{list.map(({ id, status, title, todo, time }) => (
					<li key={id} className="border-b-2 border-[#4fc0ff]">
						<div className="p-4 bg-white hover:scale-105 hover:shadow-todo hover:border-l-8 border-[#6ec9f8]">
							<div
								className="flex justify-between items-center cursor-pointer"
								onClick={() => handleChangeStatus(status, id)}
							>
								<p className="text-lg font-bold">{title}</p>
								<p
									className={
										status === "Completed" ? "text-sm text-green-500" : "text-sm text-red-500"
									}
								>
									{status}
								</p>
							</div>

							<p
								className={
									status === "Completed" ? "mt-2 break-words line-through text-gray-400" : "mt-2 break-words"
								}
							>
								{todo}
							</p>
							<div className="flex justify-between items-center">
								<p className="mt-4 text-sm text-gray-400">{time}</p>
								<button type="button" className="mt-4" onClick={() => dispatch(deleteToDo(id))}>
									<svg className="w-6 h-6 hover:fill-red-500">
										<use href={`${Icon}#trash`} />
									</svg>
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
  );
};
