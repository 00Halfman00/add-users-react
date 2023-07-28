import { useState } from 'react';
import styles from './App.module.css';
import Card from './components/UI/Card';
import AddUserForm from './components/form/AddUserForm';
import Users from './components/users/Users';
import Modal from './components/modal/Modal';

function App() {
  const [users, setUsers] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const displayUsers = users[0] ? <Users users={users}/> : <p style={{textAlign:"center"}}>No users have been added</p>

  const onClickHandler = () => {
    setModalFlag((prevState) => !prevState);
  };

  return (
    <Card className={styles['App']}>
      <AddUserForm onAddUser={setUsers} onChangeModalFlag={setModalFlag} onChangeMessage={setErrorMessage}/>
      {displayUsers}
      {modalFlag && <Modal onClickHandler={onClickHandler} message={errorMessage}/>}
    </Card>
  );
}

export default App;
