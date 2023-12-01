import { useState } from 'react';

export const Carousel = () => {
  const imgs = [
    'gymBackground1',
    'gymBackground2',
    'gymBackground3',
    'gymBackground4',
    'gymBackground5',
    'gymBackground6',
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const handlePreview = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(imgs.length - 1);
    }
  };

  const handleNext = () => {
    if (imageIndex < imgs.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };

  const img = imgs[imageIndex];
  return (
    <article className="mt-4 rounded-md bg-secondary p-4 font-primary lg:w-full">
      <img
        src={new URL(`../assets/imgs/${img}.webp`, import.meta.url).href}
        className="aspect-video rounded-md object-cover"
      />

      <div className="flex justify-between pt-4">
        <p>
          Proto<span className="text-details">Fit</span>
        </p>
        <div className="flex gap-7 font-strong [&>button]:scale-150 [&>button]:text-details">
          <button onClick={handlePreview}>{'<'}</button>
          <button onClick={handleNext}>{'>'}</button>
        </div>
      </div>
    </article>
  );
};
