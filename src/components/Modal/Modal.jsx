import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faCircleCheck,
	faPenToSquare,
	faFloppyDisk,
	faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";

export function Modal({onClick}) {
	return (
		<div className={styles.container}>
			<button className={styles.closeModal} onClick={onClick}>x</button>
			<div className={styles.item}>
				<p className={styles.check}>
					<FontAwesomeIcon icon={faCircleCheck} />
				</p>
				<p>Zaznacz zadanie jako zrobione</p>
			</div>
			<div className={styles.item}>
				<p className={styles.trash}>
					<FontAwesomeIcon icon={faTrashCan} />
				</p>
				<p>Usuń zadanie</p>
			</div>
			<div className={styles.item}>
				<p className={styles.edit}>
					<FontAwesomeIcon icon={faPenToSquare} />
				</p>
				<p>Edytuj zadanie</p>
			</div>
			<div className={styles.item}>
				<p className={styles.disk}>
					<FontAwesomeIcon icon={faFloppyDisk} />
				</p>
				<p>Zapisz edytowane zadanie</p>
			</div>
			<div className={styles.item}>
				<p className={styles.xmark}>
					<FontAwesomeIcon icon={faRectangleXmark} />
				</p>
				<p>Przerwij edycje zadania</p>
			</div>
		</div>
	);
}
