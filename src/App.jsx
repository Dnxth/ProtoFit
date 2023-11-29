import { Header } from './components/Header';
import { MainBtn } from './components/MainBtn';
import { areas } from './data/areas';
import { Card } from './components/card';
import { TitleDecorator } from './components/TitleDecorator';
import { reasons } from './data/reasons';
import { HorizontalCard } from './components/HorizontalCard';
import { plans } from './data/plans';
import { Footer } from './components/Footer';
import womenTraining from './assets/imgs/womenTraining.png';
import { Carousel } from './components/Carousel';

export const App = () => {
  return (
    <>
      <Header />
      <main className="bg-primary text-text">
        <section className="w-screen h-[40vh] bg-[url('./assets/imgs/manTraining.jpeg')] relative bg-cover bg-center flex flex-col items-end justify-center pr-2">
          <div className="flex flex-col gap-y-2 justify-center items-center z-40">
            <h2 className="w-48 font-strong uppercase text-4xl text-center leading-7">
              Your <span className="text-details">best</span>{' '}
              <span className="w-full">option</span>
            </h2>
            <MainBtn
              text="Detailled"
              btnColor="bg-details"
              btnLetter="text-primary"
            />
          </div>
          <div className="w-full h-3/5 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
        </section>
        <section className="w-full bg-gradient-to-t from-primary to-black px-8 pt-8 flex flex-col gap-y-5">
          {areas.map(area => (
            <Card key={area.id} {...area} />
          ))}
        </section>
        <section className="p-4 font-primary">
          <div className="flex items-center gap-x-2">
            <h2 className="text-2xl">Rasons to join</h2>
            <TitleDecorator />
          </div>
          {reasons.map(reason => (
            <HorizontalCard key={reason.id} {...reason} />
          ))}
        </section>
        <section className="font-primary pt-4 px-4 ">
          <article className="pb-8 [&>p]:font-slim [&>p]:text-center [&>p]:text-sm">
            <div className="flex items-center gap-x-2 pb-8">
              <TitleDecorator />
              <h2 className="text-2xl">About Us</h2>
              <TitleDecorator />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys text ever since the
              1500s
            </p>
          </article>
          <Carousel />
        </section>
        <section className="px-4 ont-primary">
          <div className="flex items-center gap-x-2">
            <TitleDecorator />
            <h2 className="text-2xl py-8">Mermberships</h2>
            <TitleDecorator />
          </div>
          <div className="flex flex-col gap-y-5 px-8">
            {plans.map(plan => (
              <Card key={plan.id} {...plan} />
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center px-4 pb-10 text-text font-primary relative">
          <img src={womenTraining} className="" />
          <h2 className="font-strong text-xl text-details">
            Join our newsletter
          </h2>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <form className="flex justify-between flex-wrap gap-1 w-3/4 pt-4 [&>input]:bg-transparent [&>input]:border-2 [&>input]:border-text [&>input]:rounded-md [&>input]:p-1 [&>input]:placeholder:text-text [&>input]:placeholder:text-sm [&>input]:z-40 ">
            <input type="text" placeholder="First Name" className="w-[49%]" />
            <input type="text" placeholder="Last Name" className="w-[49%]" />

            <div className="flex justify-between w-full p-1 border-2 border-text rounded-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent placeholder:text-text placeholder:text-sm"
              />
              <button className="bg-details text-primary py-1 px-2 rounded-md">
                Send
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};
