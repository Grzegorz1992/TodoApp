import { useState } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubheading } from "./utils/getSubheading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "./components/Modal/Modal";

function App() {
	const [isFormShown, setIsFormShown] = useState(false);
	const [todos, setTodos] = useState([
		{ name: "Zapłać rachunki", done: false, id: 1 },
		{ name: "Wyrzuć śmieci", done: true, id: 2 },
	]);
	const [showModal, setShowModal] = useState(false);

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

	function moveUpItem(id) {
		const updatedTodos = [...todos];
		const index = updatedTodos.findIndex((todo) => todo.id === id);

		if (index > 0) {
			[updatedTodos[index - 1], updatedTodos[index]] = [
				updatedTodos[index],
				updatedTodos[index - 1],
			];

			setTodos(updatedTodos);
		} else {
			const [movedItem] = updatedTodos.splice(index, 1);
			updatedTodos.push(movedItem);

			setTodos(updatedTodos);
		}
	}
	function moveDownItem(id) {
		const updatedTodos = [...todos];
		const index = updatedTodos.findIndex((todo) => todo.id === id);

		if (index < updatedTodos.length - 1) {
			[updatedTodos[index], updatedTodos[index + 1]] = [
				updatedTodos[index + 1],
				updatedTodos[index],
			];

			setTodos(updatedTodos);
		} else {
			const [movedItem] = updatedTodos.splice(index, 1);
			updatedTodos.unshift(movedItem);

			setTodos(updatedTodos);
		}
	}

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div>
					<button
						className={styles.dotsButton}
						onClick={() => setShowModal(true)}
					>
						<FontAwesomeIcon icon={faEllipsis} />
					</button>
					{showModal && <Modal onClick={() => setShowModal(false)} />}

					<h1>TodoApp</h1>
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
						onUpButtonClick={() => moveUpItem(id)}
						onDownButtonClick={() => moveDownItem(id)}
					/>
				))}
			</ul>
		</div>
	);
}

export default App;
