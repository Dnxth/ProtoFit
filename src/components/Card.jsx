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
      className={`${cardColor} ${letterColor} flex flex-col items-center rounded-lg p-4 xl:py-10`}
    >
      {Icon ? (
        <Icon className="h-20 w-20 fill-current" />
      ) : (
        <h2 className="font-strong text-7xl">
          <span className="font-primary text-4xl">$</span>
          {number}
        </h2>
      )}

      <h3 className="text-center font-strong text-lg uppercase md:w-4/5 lg:w-2/3">
        {title}
      </h3>
      <p className="p-3 text-center font-slim">{text}</p>
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
