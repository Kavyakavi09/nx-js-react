import { Link } from 'react-router-dom';
import styles from './login-ui.module.css';
export function LoginUi(props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LoginUi!</h1>
      <Link to={"/cart"}> Go to Cart</Link>
    </div>
  );
}
export default LoginUi;
