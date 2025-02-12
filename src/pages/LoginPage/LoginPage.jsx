import AuthForm from 'components/AuthForm/AuthForm';
import css from '../LoginPage/LoginPage.module.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = props => {
  const fields = [
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'password', type: 'password', placeholder: 'Password' },
  ];

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/transactions/expense');
  };

  return (
    <li className={css.main}>
      <form className={css.container}>
        <ul className={css.grid}>
          <li>
            <h1 className={css.signIn}>Sign In</h1>
          </li>
          <li>
            <p className={css.description}>
              Welcome back to effortless expense tracking! Your financial
              dashboard awaits.
            </p>
          </li>
        </ul>
        <AuthForm
          fields={fields}
          buttonText="Sign In"
          footer="Don’t have an account? "
          footerLink="/register"
          footerLinkText="Sign Up"
          action={handleLogin}
        />
      </form>
    </li>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
