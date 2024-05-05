import React from "react";
import TodoCard from "./TodoCard/TodoCard";

import { useSelector } from "react-redux";
const TaskList = () => {
	const { todos } = useSelector((state) => state.todos);
	return (
		<div>
			{todos?.length !== 0 ? (
				todos.map((todo) => <TodoCard key={todo.id} {...todo} />)
			) : (
				<h1>Enter your first todo item</h1>
			)}
		</div>
	);
};

export default TaskList;
