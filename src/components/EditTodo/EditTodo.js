import React, { useState } from "react";
import "../TaskInput/index.css";

import { useSelector, useDispatch } from "react-redux";
import { todoEdited } from "../../slices/todoSlice";
const EditTodo = () => {
	const { editTodo } = useSelector((state) => state.todos);
	const [updatedText, setUpdatedText] = useState(editTodo.title);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (/^\s*$/.test(updatedText)) {
			alert("Enter a todo");
			setUpdatedText("");
			return;
		} else {
			dispatch(todoEdited({ id: editTodo.id, title: updatedText }));
		}
	};
	return (
		<form onSubmit={handleSubmit} className="input-container">
			<input
				type="text"
				value={updatedText}
				onChange={(e) => setUpdatedText(e.target.value)}
				className="input-field"
				placeholder="Update todo"
			/>
			<button type="submit" className="edit-btn">
				Edit
			</button>
		</form>
	);
};

export default EditTodo;
