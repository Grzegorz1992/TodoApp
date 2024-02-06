import { Button } from "../Button/Button";
import styles from "./EditTodo.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

export function EditTodo({
	value,
	onChange,
	onCancelEditedTodo,
	disabled,
	className,
	onSaveEditedTodo,
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
						<FontAwesomeIcon icon={faFloppyDisk} />
					</button>

					<Button className={styles.xmark} onClick={onCancelEditedTodo}><FontAwesomeIcon icon={faRectangleXmark} /></Button>
				</li>
			) : (
				<li className={styles.item}>
					<div className={styles.warning}>
						<p>Czy na pewno chcesz zapisać zmiany w tym zadaniu?</p>
						<div className={styles.warningButtons}>
							<Button onClick={onSaveEditedTodo}>Tak</Button>
							<Button onClick={() => setWarning(false)}>
								Nie
							</Button>
						</div>
					</div>
				</li>
			)}
		</>
	);
}
