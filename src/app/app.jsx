// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import {
  createBrowserRouter,
  Link,
  RouterProvider
} from "react-router-dom";
import {LoginUi} from '../../login/ui/src/lib/login-ui'
import Cart from '../../cart/src/lib/cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginUi />
  },
  {
    path: '/cart',
    element: <Cart />
  },
]);

export function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
