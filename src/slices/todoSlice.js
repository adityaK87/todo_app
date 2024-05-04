import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [
		{
			id: nanoid(),
			title: "make tea",
		},
		{
			id: nanoid(),
			title: "wash clothes",
		},
		{
			id: nanoid(),
			title: "read book",
		},
	],
	toggleForm: true,
	editTodo: {},
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		todoAdded: (state, action) => {
			state.todos = [...state.todos, action.payload];
		},
		todoDeleted: (state, action) => {
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload
			);
		},
		toggleInputForm: (state, action) => {
			state.toggleForm = !state.toggleForm;
			state.editTodo = { ...state.editTodo, ...action.payload };
		},
		todoEdited: (state, action) => {
			const todoToUpdate = state.todos.find(
				(todo) => todo.id === action.payload.id
			);
			todoToUpdate.title = action.payload.title;
			state.toggleForm = !state.toggleForm;
		},
	},
});

export const { todoAdded, todoDeleted, toggleInputForm, todoEdited } =
	todoSlice.actions;
export default todoSlice.reducer;
