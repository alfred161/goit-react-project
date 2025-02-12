import icon from '../../images/icons.svg';
import css from './DecorationTab.module.css';

const DecorationTab = props => {
  return (
    <div className={css.container}>
      <div className={css.balanceTrendIcon}>
        <svg className={css.icon} width="15" height="17">
          <use href={`${icon}#icon-arrow-up`} />
        </svg>
      </div>
      <div>
        <h3 className={css.yourBalance}>Your balance</h3>
        <h2 className={`${css.balance} bold`}>$632.000</h2>
      </div>
      <div className={css.balancePercent}>
        <h4>+1.29%</h4>
      </div>
    </div>
  );
};

DecorationTab.propTypes = {};

export default DecorationTab;
