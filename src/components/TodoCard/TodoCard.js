import { useState } from "react";
import { BsTrashFill, BsCheckSquare } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import "./index.css";

import { todoDeleted, toggleInputForm } from "../../slices/todoSlice";
import { useDispatch } from "react-redux";

const TodoCard = ({ title, id }) => {
	const [toggleComplete, setToggleComplete] = useState(false);
	const dispatch = useDispatch();

	return (
		<div className="todo-card">
			<div style={{ padding: "0px 16px" }}>
				<h3
					className={
						toggleComplete ? "toggle-complete" : "toggle-incomplete"
					}>
					{title}
				</h3>
			</div>
			<div className="todo-btns">
				<BsCheckSquare
					onClick={() => setToggleComplete(!toggleComplete)}
					className="completed-task"
					size={20}
				/>
				<FaEdit
					onClick={() =>
						dispatch(toggleInputForm({ id: id, title: title }))
					}
					className="edit-task"
					size={20}
				/>
				<BsTrashFill
					onClick={() => dispatch(todoDeleted(id))}
					className="delete-task"
					size={20}
				/>
			</div>
		</div>
	);
};

export default TodoCard;
