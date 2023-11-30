import { TitleDecorator } from './TitleDecorator';
import { reasons } from '../data/reasons';
import { HorizontalCard } from './HorizontalCard';

export const ReasonsSection = () => {
  return (
    <section id="reasonsSection" className="p-4 font-primary">
      <div className="flex items-center gap-x-2">
        <h2 className="text-2xl">Rasons to join</h2>
        <TitleDecorator />
      </div>
      {reasons.map(reason => (
        <HorizontalCard key={reason.id} {...reason} />
      ))}
    </section>
  );
};
