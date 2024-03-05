import { useDispatch } from "react-redux";
import { addToDo } from "../redax/TodoSlice";
import { useState } from "react";
import { getCurrentDay } from "../utils/getCurrentDay";

const CreateTask = () => {
	const [text, setText] = useState("");
	const [title, setTitle] = useState("");

	const dispatch = useDispatch();

	const handleFieldSubmit = () => {
		if (text !== "" && title !== "") {
			dispatch(
				addToDo({
					title: title,
					todo: text,
					id: Date.now(),
					status: "Not completed",
					time: getCurrentDay(),
				})
			);
		}
	};

	return (
		<div className="flex justify-center  mr-10 h-full w-[460px]">
			<div className="w-full  bg-white rounded-lg overflow-hidden shadow-md">
				<div className="px-6 py-4">
					<form>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
								Title:
							</label>
							<input
								type="text"
								id="title"
								className="w-full h-10 px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
								placeholder="Enter title (3-35 characters)"
								value={title}
								minLength="3"
								maxLength="35"
								required
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text">
								Text:
							</label>
							<input
								type="text"
								id="text"
								className="w-full h-10 px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
								placeholder="Enter text (3-100 characters)"
								value={text}
								minLength="3"
								maxLength="100"
								required
								onChange={(e) => setText(e.target.value)}
							/>
						</div>
						<button
							type="submit"
							onClick={handleFieldSubmit}
							className="w-full bg-[#6fcbff] hover:bg-[#52bffa] text-white font-bold py-2 px-4 rounded"
						>
							Create ToDo
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateTask;
