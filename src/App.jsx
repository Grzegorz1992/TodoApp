import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";

function App() {
	const todos = [
		{ name: "Zapłać rachunki", done: false, id: 1 },
		{ name: "Wyrzuć śmieci", done: true, id: 2 },
	];

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div>
					<h1>Do zrobienia</h1>
					<h2>5 zadań</h2>
				</div>
				<button className={styles.button}>+</button>
			</header>
			<Form />
			<ul>
				{todos.map((todo) => (
					<TodoItem key={todo.id} name={todo.name} done={todo.done} />
				))}
			</ul>
		</div>
	);
}

export default App;
