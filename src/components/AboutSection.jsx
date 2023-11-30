import { TitleDecorator } from './TitleDecorator';
import { Carousel } from './Carousel';

export const AboutSection = () => {
  return (
    <section id="aboutSection" className="p-4 font-primary ">
      <article className="pb-4 [&>p]:pt-4 [&>p]:text-center [&>p]:font-slim [&>p]:text-sm">
        <div className="flex items-center gap-x-2">
          <TitleDecorator />
          <h2 className="text-2xl">About Us</h2>
          <TitleDecorator />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys text ever since the 1500s
        </p>
      </article>
      <Carousel />
    </section>
  );
};
