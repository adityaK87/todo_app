import { useSelector } from "react-redux";
import "./App.css";
import EditTodo from "./components/EditTodo/EditTodo";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList";

function App() {
	const { toggleForm } = useSelector((state) => state.todos);
	return (
		<div className="App">
			<h1 style={{ textAlign: "center" }} className="heading">
				My_Todo_List
			</h1>

			{toggleForm ? <TaskInput /> : <EditTodo />}

			<TaskList />
		</div>
	);
}

export default App;
