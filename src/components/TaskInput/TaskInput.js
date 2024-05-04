import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./index.css";
const TaskInput = () => {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = () => {
		console.log("HandleSubmit");
	};

	return (
		<form onSubmit={handleSubmit} className="input-container">
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
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
