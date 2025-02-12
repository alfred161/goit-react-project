import AuthForm from 'components/AuthForm/AuthForm';
import { useNavigate } from 'react-router-dom';
import css from '../RegisterPage/RegisterPage.module.css';

const RegisterPage = props => {
  const fields = [
    { name: 'name', type: 'text', placeholder: 'Name' },
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'password', type: 'password', placeholder: 'Password' },
  ];

  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/transactions/expense');
  };

  return (
    <li className={css.main}>
      <form className={css.container}>
        <ul className={css.grid}>
          <li>
            <h1 className={css.signUp}>Sign Up</h1>
          </li>
          <li>
            <p className={css.description}>
              Step into a world of hassle-free expense management! Your journey
              towards financial mastery begins here.
            </p>
          </li>
        </ul>
        <AuthForm
          fields={fields}
          buttonText="Sign Up"
          footer="Already have an account?"
          footerLink="/login"
          footerLinkText="Sign In"
          action={handleSignUp}
        />
      </form>
    </li>
  );
};

RegisterPage.propTypes = {};

export default RegisterPage;
