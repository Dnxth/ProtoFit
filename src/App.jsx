import { Header } from './components/Header';
import { MainBtn } from './components/MainBtn';
import { areas } from './data/areas';
import { Card } from './components/card';
import { TitleDecorator } from './components/TitleDecorator';
import { reasons } from './data/reasons';
import { HorizontalCard } from './components/HorizontalCard';
import gymBackground1 from './assets/imgs/gymBackground1.jpg';
import gymBackground2 from './assets/imgs/gymBackground2.jpg';
import { WavesTop } from './assets/vectors/WavesTop';
import { WavesBottom } from './assets/vectors/WavesBottom';
import { plans } from './data/plans';

export const App = () => {
  return (
    <main className="bg-primary text-text">
      <Header />
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
      <section className="relative font-primary p-4 ">
        <WavesTop className="fill-secondary absolute top-0 left-0" />
        <article className="flex flex-col items-center [&>p]:font-slim [&>p]:text-center [&>p]:text-sm [&>p]:pt-2">
          <h2 className="text-2xl z-40">About us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys text ever since the
            1500s
          </p>
          <div className="w-full h-60 relative [&>img]:scale-75 [&>img]:rounded-2xl [&>img]:border-solid [&>img]:border-4 [&>img]:border-details">
            <img src={gymBackground1} className="absolute top-0 left-10" />
            <img
              src={gymBackground2}
              className="absolute bottom-0 right-10 z-10"
            />
          </div>
        </article>
        <WavesBottom className="fill-secondary absolute bottom-0 left-0" />
      </section>
      <section className="p-4 font-primary">
        <div className="flex items-center gap-x-2">
          <TitleDecorator />
          <h2 className="text-2xl py-8">Pricing</h2>
          <TitleDecorator />
        </div>
        <div className="flex flex-col gap-y-5 px-8">
          {plans.map(plan => (
            <Card key={plan.id} {...plan} />
          ))}
        </div>
      </section>
    </main>
  );
};
