import PropTypes from 'prop-types';

import { MainBtn } from './MainBtn';

export const Card = ({
  title,
  text,
  btnColor,
  letterColor,
  cardColor,
  btnLetter,
  Icon,
}) => {
  return (
    <article
      className={`${cardColor} ${letterColor} flex flex-col items-center p-4 rounded-lg`}
    >
      <Icon className="w-20 h-20 fill-current" />
      <h3 className="uppercase font-strong">{title}</h3>
      <p className="font-slim p-4 text-center">{text}</p>
      <MainBtn text="Learn more" btnColor={btnColor} btnLetter={btnLetter} />
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
  Icon: PropTypes.func,
};
