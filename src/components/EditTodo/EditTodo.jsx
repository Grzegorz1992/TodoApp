import { Button } from "../Button/Button";
import styles from "./EditTodo.module.css";

export function EditTodo({
	value,
	onChange,
	onCancelEditedTodo,
	onSaveEditedTodo,
}) {
	return (
		<li className={styles.item}>
			<input
				value={value}
				onChange={onChange}
				className={styles.input}
				type="text"
			/>
			<Button onClick={onSaveEditedTodo}>Zapisz</Button>

			<Button onClick={onCancelEditedTodo}>Anuluj</Button>
		</li>
	);
}
