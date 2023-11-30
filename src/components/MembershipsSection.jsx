import { TitleDecorator } from './TitleDecorator';
import { plans } from '../data/plans';
import { Card } from './card';

export const MembershipsSection = () => {
  return (
    <section id="membershipsSection" className="p-4 font-primary">
      <div className="flex items-center gap-x-2">
        <TitleDecorator />
        <h2 className="text-2xl">Mermberships</h2>
        <TitleDecorator />
      </div>
      <div className="mt-8 flex flex-col gap-y-5 px-8">
        {plans.map(plan => (
          <Card key={plan.id} {...plan} />
        ))}
      </div>
    </section>
  );
};
