import React, { useState } from "react";
import "./index.css";

import { nanoid } from "@reduxjs/toolkit";
import { todoAdded } from "../../slices/todoSlice";
import { useDispatch } from "react-redux";

const TaskInput = () => {
	const [inputText, setInputText] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (/^\s*$/.test(inputText)) {
			alert("Enter a task");
			setInputText("");
			return;
		} else {
			dispatch(
				todoAdded({
					id: nanoid(),
					title: inputText,
				})
			);
			setInputText("");
		}
		console.log("HandleSubmit");
	};

	return (
		<form onSubmit={handleSubmit} className="input-container">
			<input
				type="text"
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
				className="input-field"
				placeholder="Add todo"
			/>
			<button type="submit" className="btn">
				Add
			</button>
		</form>
	);
};

export default TaskInput;
