import DecorationTab from 'components/DecorationTab/DecorationTab';
import hero from '../../images/bg.png';
import css from './BgImageWrapper.module.css';

const BgImageWrapper = props => {
  return (
    <li className={css.main}>
      <img src={hero} className={css.hero} alt="Hero" />
      <DecorationTab />
    </li>
  );
};

BgImageWrapper.propTypes = {};

export default BgImageWrapper;
