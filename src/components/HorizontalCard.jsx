import PropTypes from 'prop-types';

export const HorizontalCard = ({ Icon, title, text }) => {
  return (
    <article className="flex items-center justify-center gap-x-7 pt-10 lg:w-1/2">
      <Icon className="h-16 w-40 fill-details" />
      <div className="flex flex-col gap-y-4">
        <h3 className="font-strong text-lg leading-4 tracking-wider xl:text-xl">
          {title}
        </h3>
        <p className="font-slim text-sm leading-none xl:text-lg xl:leading-5">
          {text}
        </p>
      </div>
    </article>
  );
};

HorizontalCard.propTypes = {
  Icon: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
};
