import { MainBtn } from './MainBtn';

export const HeroSection = () => {
  return (
    <section className="relative flex h-[40vh] w-screen flex-col items-end justify-center bg-[url('./assets/imgs/manTraining.webp')] bg-cover bg-center md:h-[60vh] lg:bg-top">
      <div className="z-40 flex flex-col items-center justify-center gap-y-2 md:absolute md:right-28 md:top-28 lg:right-44 lg:top-40 xl:right-80 xl:top-44">
        <h2 className="w-48 text-center font-strong text-4xl uppercase leading-7 md:w-80 md:text-6xl md:leading-[45px] xl:w-96 xl:text-7xl">
          Your <span className="text-details">best</span>{' '}
          <span className="w-full">option</span>
        </h2>
        <MainBtn
          text="Join now"
          btnColor="bg-details"
          btnLetter="text-primary"
        />
      </div>
      <div className="absolute bottom-0 left-0 h-3/5 w-full bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};
