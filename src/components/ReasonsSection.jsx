import { TitleDecorator } from './TitleDecorator';
import { reasons } from '../data/reasons';
import { HorizontalCard } from './HorizontalCard';

export const ReasonsSection = () => {
  return (
    <section id="reasonsSection" className="p-4 font-primary">
      <div className="flex items-center gap-x-4">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl">Rasons to join</h2>
        <TitleDecorator />
      </div>
      <div className="lg:flex lg:w-full lg:lg:flex-wrap lg:px-4 lg:py-8">
        {reasons.map(reason => (
          <HorizontalCard key={reason.id} {...reason} />
        ))}
      </div>
    </section>
  );
};
