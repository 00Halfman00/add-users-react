import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './Modal.module.css';

export default function Modal({ onClickHandler, message }) {

  return (
    <div className={styles['modal-background']} onClick={onClickHandler}>
      <Card className={styles['card-modal']}>
        <p>{message}</p>
        <Button
          type="button"
          className={styles['modal-button']}
        >
          Clear
        </Button>
      </Card>
    </div>
  );
}
