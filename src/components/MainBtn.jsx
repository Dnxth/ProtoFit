import PropTypes from 'prop-types';

export const MainBtn = ({ text, btnColor, btnLetter }) => {
  return (
    <a
      href="#"
      className={`${btnLetter} ${btnColor} rounded-full px-4 py-1 font-strong`}
    >
      {text}
    </a>
  );
};

MainBtn.propTypes = {
  text: PropTypes.string,
  btnColor: PropTypes.string,
  btnLetter: PropTypes.string,
};
