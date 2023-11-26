import PropTypes from 'prop-types';

import { MainBtn } from './MainBtn';

export const Card = ({
  title,
  text,
  btnColor,
  letterColor,
  cardColor,
  btnLetter,
  btnText,
  Icon,
  number,
}) => {
  return (
    <article
      className={`${cardColor} ${letterColor} flex flex-col items-center p-4 rounded-lg`}
    >
      {Icon ? (
        <Icon className="w-20 h-20 fill-current" />
      ) : (
        <h2 className="font-strong text-7xl">
          <span className="font-primary text-4xl">$</span>
          {number}
        </h2>
      )}

      <h3 className="uppercase font-strong text-lg text-center">{title}</h3>
      <p className="font-slim p-3 text-center">{text}</p>
      <MainBtn text={btnText} btnColor={btnColor} btnLetter={btnLetter} />
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  btnColor: PropTypes.string,
  letterColor: PropTypes.string,
  cardColor: PropTypes.string,
  btnLetter: PropTypes.string,
  btnText: PropTypes.string,
  Icon: PropTypes.func,
  number: PropTypes.string,
};
