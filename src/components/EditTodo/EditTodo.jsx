import { Button } from "../Button/Button";
import styles from "./EditTodo.module.css";
import { useState } from "react";

export function EditTodo({
	value,
	onChange,
	onCancelEditedTodo,
	disabled,
	className,
}) {
	const [warning, setWarning] = useState(false);

	return (
		<>
			{!warning ? (
				<li className={styles.item}>
					<input
						value={value}
						onChange={onChange}
						className={styles.input}
						type="text"
					/>
					<button
						className={className}
						disabled={disabled}
						onClick={() => setWarning(true)}
					>
						Zapisz
					</button>

					<Button onClick={onCancelEditedTodo}>Anuluj</Button>
				</li>
			) : (
				<li className={styles.item}>
					<div className={styles.warning}>
						<p>Czy na pewno chcesz edytować zadanie?</p>
						<div className={styles.warningButtons}>
							<Button>Tak</Button>
							<Button>Nie</Button>
						</div>
					</div>
				</li>
			)}
		</>
	);
}
