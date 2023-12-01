import womenTraining from '../assets/imgs/womenTraining.png';
import { NewsletterForm } from './NewsletterForm';

export const NewsletterSection = () => {
  return (
    <section
      id="NewsletterSection"
      className="relative flex flex-col items-center p-4 font-primary text-text lg:pt-0"
    >
      <img src={womenTraining} className="" />
      <h2 className="font-strong text-xl text-details md:text-4xl">
        Join our newsletter
      </h2>
      <p className="text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <NewsletterForm />
    </section>
  );
};
