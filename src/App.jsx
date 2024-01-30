import { useState } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubheading } from "./utils/getSubheading";
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
	const [isFormShown, setIsFormShown] = useState(false);
	const [todos, setTodos] = useState([
		{ name: "Zapłać rachunki", done: false, id: 1 },
		{ name: "Wyrzuć śmieci", done: true, id: 2 },
	]);
	const [draggedItem, setDraggedItem] = useState(null);

	function addItem(newTodoName) {
		setTodos((prevTodos) => [
			...prevTodos,
			{ name: newTodoName, done: false, id: Math.random() },
		]);
		setIsFormShown(false);
	}

	function deleteItem(id) {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	}

	function finishItem(id) {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => {
				if (todo.id !== id) {
					return todo;
				}
				return {
					...todo,
					done: true,
				};
			})
		);
	}

	function handleDragStart(id) {
		setDraggedItem(id);
	}

	function handleDragOver(event) {
		event.preventDefault();
	}

	function handleDrop(id) {
		if (draggedItem !== id) {
			const updatedTodos = [...todos];
			const draggedIndex = todos.findIndex((todo) => todo.id === draggedItem);
			const dropIndex = todos.findIndex((todo) => todo.id === id);

			[updatedTodos[draggedIndex], updatedTodos[dropIndex]] = [
				updatedTodos[dropIndex],
				updatedTodos[draggedIndex],
			];

			setTodos(updatedTodos);
			setDraggedItem(null);
		}
	}

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div>
					<h1>Do zrobienia</h1>
					<h2>{getSubheading(todos.length)}</h2>
				</div>
				{!isFormShown && (
					<button
						onClick={() => setIsFormShown(true)}
						className={styles.button}
					>
						+
					</button>
				)}
			</header>
			{isFormShown && (
				<Form onFormSubmit={(newTodoName) => addItem(newTodoName)} />
			)}
			<ul>
				{todos.map(({ id, name, done }) => (
					<TodoItem
						key={id}
						name={name}
						done={done}
						onDeleteButtonClick={() => deleteItem(id)}
						onDoneButtonClick={() => finishItem(id)}
						onDragStart={() => handleDragStart(id)}
						onDragOver={handleDragOver}
						onDrop={() => handleDrop(id)}
					/>
				))}
			</ul>
		</div>
	);
}

export default App;
