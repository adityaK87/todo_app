import "./App.css";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList";

function App() {
	return (
		<div className="App">
			<h1 style={{ textAlign: "center" }} className="heading">
				My_Todo_List
			</h1>

			<TaskInput />
			<TaskList />
		</div>
	);
}

export default App;
