import styles from './ListUser.module.css';
import Card from '../UI/Card';

export default function ListUsers({user}){
  return (
    <Card className={styles['li-card']}>
      <li>
      <span>name:  {user.name}</span><span>age: {user.age}</span><span>gender:  {user.gender}</span>
    </li>
    </Card>
  )
}
