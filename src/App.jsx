import { Header } from './components/Header';
import { MainBtn } from './components/MainBtn';
import { Card } from './components/card';
import { areas } from './data/areas';

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
        <div className="w-full absolute top-full left-0 bg-gradient-to-t from-primary to-black px-8 pt-8 flex flex-col gap-y-5">
          {areas.map(area => (
            <Card key={area.id} {...area} />
          ))}
        </div>
      </section>
    </main>
  );
};

/*
<Card
  title="Cardio training Section"
  text="been the industrys standard dummy text ever since the 1500s, when an
  unknown printer took a galley of type and scrambled"
  btnColor="bg-details"
  letterColor="text-text"
  cardColor="bg-secondary"
  btnLetter="text-primary"
/>
*/
