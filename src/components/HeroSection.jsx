import { MainBtn } from './MainBtn';

export const HeroSection = () => {
  return (
    <section className="relative flex h-[40vh] w-screen flex-col items-end justify-center bg-[url('./assets/imgs/manTraining.webp')] bg-cover bg-center pr-2">
      <div className="z-40 flex flex-col items-center justify-center gap-y-2">
        <h2 className="w-48 text-center font-strong text-4xl uppercase leading-7">
          Your <span className="text-details">best</span>{' '}
          <span className="w-full">option</span>
        </h2>
        <MainBtn
          text="Detailled"
          btnColor="bg-details"
          btnLetter="text-primary"
        />
      </div>
      <div className="absolute bottom-0 left-0 h-3/5 w-full bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};
