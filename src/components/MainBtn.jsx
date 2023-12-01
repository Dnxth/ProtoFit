import PropTypes from 'prop-types';

export const MainBtn = ({ text, btnColor, btnLetter }) => {
  return (
    <a
      href="#"
      className={`${btnLetter} ${btnColor} flex items-baseline gap-4 rounded-full px-4 py-1 font-strong`}
    >
      {text}
      <span>{'>'}</span>
    </a>
  );
};

MainBtn.propTypes = {
  text: PropTypes.string,
  btnColor: PropTypes.string,
  btnLetter: PropTypes.string,
};
