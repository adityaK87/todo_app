import { useState } from "react";
import { BsTrashFill, BsCheckSquare } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

import "./index.css";
const TodoCard = (props) => {
	const [toggleComplete, setToggleComplete] = useState(false);

	return (
		<div className="todo-card">
			<div style={{ padding: "0px 16px" }}>
				<h3
					className={
						toggleComplete ? "toggle-complete" : "toggle-incomplete"
					}>
					{props.title}
				</h3>
			</div>
			<div className="todo-btns">
				<BsCheckSquare className="completed-task" size={20} />
				<FaEdit className="edit-task" size={20} />
				<BsTrashFill className="delete-task" size={20} />
			</div>
		</div>
	);
};

export default TodoCard;
