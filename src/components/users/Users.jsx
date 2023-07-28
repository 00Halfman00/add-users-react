import styles from './Users.module.css';
import Card from '../UI/Card';
import ListUser from './ListUser';

export default function Users({ users }) {
  return (
    <Card className={styles['users-card']}>
      <p className={styles['users-heading']}>Added Users</p>
      <ul>
        {users.map((user) =>
          <ListUser user={user} key={user.id}/>
        )}
      </ul>
    </Card>
  );
}
