import DecorationTab from 'components/DecorationTab/DecorationTab';
import css from '../BgImageWrapper/BgImageWrapper.module.css';
const BgImageWrapper = props => {
  return (
    <div className={css.imageContainer}>
      <div className={css.image}>
        <DecorationTab />
      </div>
    </div>
  );
};

BgImageWrapper.propTypes = {};

export default BgImageWrapper;
