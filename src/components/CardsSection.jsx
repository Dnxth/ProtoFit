import { areas } from '../data/areas';
import { Card } from './Card';

export const CardsSection = () => {
  return (
    <section className="flex w-full flex-col gap-y-5 bg-gradient-to-t from-primary to-black px-8 pb-4 pt-8 md:flex-row md:gap-x-5">
      {areas.map(area => (
        <Card key={area.id} {...area} />
      ))}
    </section>
  );
};
