import { Header } from './components/Header';
import { HorizontalCard } from './components/HorizontalCard';
import { MainBtn } from './components/MainBtn';
import { TitleDecorator } from './components/TitleDecorator';
import { Card } from './components/card';
import { areas } from './data/areas';
import { reasons } from './data/reasons';

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
    </main>
  );
};
