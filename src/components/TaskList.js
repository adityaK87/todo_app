import React from "react";
import TodoCard from "./TodoCard/TodoCard";

import { useSelector } from "react-redux";
const TaskList = () => {
	const { todos } = useSelector((state) => state.todos);
	console.log(todos);
	return (
		<div>
			{todos.map((todo) => (
				<TodoCard key={todo.id} {...todo} />
			))}
		</div>
	);
};

export default TaskList;
