import { useState } from "react";
import styles from "./Form.module.css";

export function Form({ onFormSubmit }) {
	const [inputValue, setInputValue] = useState("");

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onFormSubmit(inputValue);
			}}
			className={styles.form}
		>
			<input
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				className={styles.input}
				type="text"
			/>
			<button
				className={
					inputValue.length === 0 ? styles.disabledButton : styles.formButton
				}
				disabled={inputValue.length === 0}
			>
				Dodaj
			</button>
		</form>
	);
}
