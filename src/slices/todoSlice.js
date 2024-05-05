import { createSlice } from "@reduxjs/toolkit";

// Function to load todos from localStorage
const loadTodosFromLocalStorage = () => {
	try {
		const todos = localStorage.getItem("todos");
		if (todos === null) {
			return;
		}
		return JSON.parse(todos);
	} catch (err) {
		console.error("Error loading todos from localStorage:", err);
		return;
	}
};

// Function to save todos to localStorage
const saveTodosToLocalStorage = (todos) => {
	try {
		localStorage.setItem("todos", JSON.stringify(todos));
	} catch (err) {
		console.error("Error saving todos to localStorage:", err);
	}
};

const initialState = {
	todos: loadTodosFromLocalStorage() || [],
	toggleForm: true,
	editTodo: {},
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		todoAdded: (state, action) => {
			state.todos = [...state.todos, action.payload];
			saveTodosToLocalStorage(state.todos);
		},
		todoDeleted: (state, action) => {
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload
			);
			saveTodosToLocalStorage(state.todos);
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
			saveTodosToLocalStorage(state.todos);
		},
	},
});

export const { todoAdded, todoDeleted, toggleInputForm, todoEdited } =
	todoSlice.actions;
export default todoSlice.reducer;
