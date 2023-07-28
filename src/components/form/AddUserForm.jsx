import { useRef } from 'react';
import styles from './AddUserForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

export default function AddUserForm({ onAddUser, onChangeMessage, onChangeModalFlag }) {
  const nameRef = useRef();
  const ageRef = useRef();
  const genderRef = useRef();

  const clearRefs = () => {
    nameRef.current.value = '';
    ageRef.current.value = '';
    genderRef.current.value = '';
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      id: Math.floor(Math.random() * 10000),
      name: nameRef.current.value,
      age: ageRef.current.value,
      gender: genderRef.current.value,
    };
    if (!userData.name.trim() || !userData.age || !userData.gender) {
      onChangeMessage('Please fill out all fields');
      onChangeModalFlag((prevState) => !prevState);
    } else if (+userData.age < 1 || +userData.age > 100) {
      onChangeMessage('Please enter a valid age');
      onChangeModalFlag((prevState) => !prevState);
    } else if (
      userData.gender !== 'Male' &&
      userData.gender !== 'Female' &&
      userData.gender !== 'male' &&
      userData.gender !== 'female'
    ) {
      onChangeMessage('Please enter a valid gender');
      onChangeModalFlag((prevState) => !prevState);
    } else {
      onAddUser((prevState) => {
        return [...prevState, userData];
      });
      clearRefs();
    }
  };

  return (
    <Card className={styles['form-card']}>
      <form onSubmit={submitHandler}>
        <div className={styles['user-inputs-container']}>
          <label htmlFor="name">Name</label>
          <input type="text" ref={nameRef} />
          <label htmlFor="age">Age</label>
          <input type="number" ref={ageRef} />
          <label htmlFor="gender">Gender</label>
          <input type="text" ref={genderRef} />
        </div>
        <div className={styles['button-container']}>
          <Button type="submit" disabled={false} className={styles['form-button']}>
            Add User
          </Button>
        </div>
      </form>
    </Card>
  );
}
