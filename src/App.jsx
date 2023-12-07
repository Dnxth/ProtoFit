import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CardsSection } from './components/CardsSection';
import { ReasonsSection } from './components/ReasonsSection';
import { AboutSection } from './components/AboutSection';
import { MembershipsSection } from './components/MembershipsSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <main className="cursor-default bg-primary text-text lg:mx-10 lg:overflow-x-hidden xl:mx-20">
        <Header />
        <HeroSection />
        <CardsSection />
        <ReasonsSection />
        <AboutSection />
        <MembershipsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
};
