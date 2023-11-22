import { useState } from 'react';
import { BarsIcon } from '../assets/icons/BarsIcon';
import { PersonRuningIcon } from '../assets/icons/PersonRuningIcon';
import { Xicon } from '../assets/icons/Xicon';

export const Header = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleToggle = () => {
    setIsHidden(!isHidden);
  };

  return (
    <header className="flex items-center justify-between flex-wrap py-4 px-4">
      <div className="flex items-center">
        <PersonRuningIcon className="h-6 fill-current" />
        <h1 className="text-2xl font-strong">
          Proto<span className="text-details">Fit</span>
        </h1>
      </div>

      {isHidden ? (
        <BarsIcon className="h-6 fill-current" onClick={handleToggle} />
      ) : (
        <Xicon className="h-6 fill-current" onClick={handleToggle} />
      )}

      <nav className={`w-full ${isHidden ? 'hidden' : ''}`}>
        <ul className="flex flex-col items-center [&>li]:py-2">
          <li>
            <a href="#">Option1</a>
          </li>
          <li>
            <a href="#">Option2</a>
          </li>
          <li>
            <a href="#">Option3</a>
          </li>
          <li>
            <a href="#">Option4</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
