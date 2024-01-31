import { Button } from "../Button/Button";
import styles from "./TodoItem.module.css";

export function TodoItem({
	name,
	done,
	onDeleteButtonClick,
	onDoneButtonClick,
	onEditButtonClick,
}) {
	return (
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
				<Button className={styles.upDownButton}>△</Button>
				<Button className={styles.upDownButton}>▽</Button>
			</div>
		</li>
	);
}
