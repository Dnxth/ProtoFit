import { TitleDecorator } from './TitleDecorator';
import { plans } from '../data/plans';
import { Card } from './Card';

export const MembershipsSection = () => {
  return (
    <section id="membershipsSection" className="p-4 font-primary lg:pb-0">
      <div className="flex items-center gap-x-4">
        <TitleDecorator />
        <h2 className="text-2xl lg:text-3xl xl:text-4xl">Mermberships</h2>
        <TitleDecorator />
      </div>
      <div className="mt-8 flex flex-col gap-y-5 px-8 md:flex-row md:gap-x-5 xl:px-40">
        {plans.map(plan => (
          <Card key={plan.id} {...plan} />
        ))}
      </div>
    </section>
  );
};
