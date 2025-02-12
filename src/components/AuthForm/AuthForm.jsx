import { Link } from 'react-router-dom';
import icon from '../../images/icons.svg';
import css from '../AuthForm/AuthForm.module.css';

const AuthForm = ({
  fields,
  buttonText,
  footer,
  footerLink,
  footerLinkText,
  action,
}) => {
  const handleFocus = event => {
    event.target.parentElement.style = 'border: 1px solid var(--MINT-GREEN);';
  };

  const handleBlur = event => {
    event.target.parentElement.removeAttribute('style');
  };

  const handleToggleShow = event => {
    const input = event.target.closest('div').querySelector('input');
    const img = event.target.closest('div').querySelector('use');

    if (input.type === 'password') {
      input.type = 'text';
      input.style = 'border: none';
      img.setAttribute('href', img.href.baseVal.replace('-off', ''));
    } else {
      input.type = 'password';
      img.setAttribute('href', img.href.baseVal.concat('-off'));
    }

    input.focus();
  };

  return (
    <ul className={css.main}>
      <li>
        <ul className={css.grid}>
          {fields.map((field, index) => (
            <li key={index}>
              {field.type !== 'password' && (
                <input
                  autoFocus={index === 0}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  className={css.inputField}
                />
              )}
              {field.type === 'password' && (
                <div className={css.inputGroup}>
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    autoComplete="current-password"
                  />
                  <svg
                    className={css.toggleShowPass}
                    width="20"
                    height="20"
                    onClick={handleToggleShow}
                  >
                    <use href={`${icon}#icon-eye-off`} />
                  </svg>
                </div>
              )}
            </li>
          ))}
        </ul>
      </li>
      <li>
        <ul className={css.grid}>
          <li>
            <button
              className="button btn-primary"
              type="button"
              onClick={action}
            >
              {buttonText}
            </button>
          </li>
          <li>
            <p className={css.haveAccount}>
              {footer}&nbsp;
              <Link to={footerLink} className={css.sign}>
                {footerLinkText}
              </Link>
            </p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

AuthForm.propTypes = {};

export default AuthForm;
