import { Button } from "../Button/Button";
import styles from "./TodoItem.module.css";
import { useState } from "react";

export function TodoItem({
	name,
	done,
	onDeleteButtonClick,
	onDoneButtonClick,
	onUpButtonClick,
	onDownButtonClick,
}) {
	const [editTodo, setEditTodo] = useState(false);
	const [inputValue, setInputValue] = useState("");

	function onEditButtonClick() {
		setEditTodo(true);
	}

	function onCancelEditedTodo() {
		setEditTodo(false)
	}

	function onSaveEditedTodo() {
		
	}

	return (
		<>
			{!editTodo ? (
				<li className={styles.item}>
					<span className={`${styles.name} ${done ? styles.done : ""}`}>
						{name}
					</span>
					{!done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}
					<Button onClick={onDeleteButtonClick} className={styles.redButton}>
						Usuń
					</Button>
					<Button onClick={onEditButtonClick} className={styles.editButton}>
						Edytuj
					</Button>
					<div className={styles.upDownButtons}>
						<Button onClick={onUpButtonClick} className={styles.upButton}>
							<span className={styles.arrowUp}>▲</span>
						</Button>
						<Button onClick={onDownButtonClick} className={styles.downButton}>
							<span className={styles.arrowDown}>▼</span>
						</Button>
					</div>
				</li>
			) : (
				<li className={styles.item}>
					<input
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						className={styles.input}
						type="text"
					/>
					<Button>Zapisz</Button>
					<Button onClick={onCancelEditedTodo}>Anuluj</Button>
				</li>
			)}
		</>
	);
}
