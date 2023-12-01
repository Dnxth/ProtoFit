import { TitleDecorator } from './TitleDecorator';
import { Carousel } from './Carousel';

export const AboutSection = () => {
  return (
    <section
      id="aboutSection"
      className="flex flex-col items-center p-4 font-primary"
    >
      <article className="">
        <div className="flex items-center gap-x-4">
          <TitleDecorator />
          <h2 className="text-2xl lg:text-3xl xl:text-4xl">About Us</h2>
          <TitleDecorator />
        </div>
        <div className="lg:flex lg:items-center lg:gap-x-4 xl:my-4">
          <div className="lg:w-3/4 [&>p]:pt-4 [&>p]:text-center [&>p]:font-slim [&>p]:text-sm xl:[&>p]:text-base">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys text ever since the
              1500s
            </p>
          </div>
          <Carousel />
        </div>
      </article>
    </section>
  );
};
