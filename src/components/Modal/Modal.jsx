import styles from "Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faCircleCheck,
	faPenToSquare,
	faFloppyDisk,
	faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";

export function Modal() {
	return (
		<>
			<div className={styles.container}>
				<ul>
					<li>+ Dodaj nowe zadanie</li>
					<li>
						<FontAwesomeIcon icon={faCircleCheck} /> Zaznacz zadanie jako
						zrobione
					</li>
					<li>
						<FontAwesomeIcon icon={faTrashCan} /> Usuń zadanie
					</li>
					<li>
						<FontAwesomeIcon icon={faPenToSquare} /> Edytuj zadanie
					</li>
					<li>
						<FontAwesomeIcon icon={faFloppyDisk} /> Zapisz edytowane zadanie
					</li>
					<li>
						<FontAwesomeIcon icon={faRectangleXmark} /> Przerwij edycje zadania
					</li>
				</ul>
			</div>
		</>
	);
}
