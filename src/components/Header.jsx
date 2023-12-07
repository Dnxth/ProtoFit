import { useState } from 'react';
import { BarsIcon } from '../assets/icons/BarsIcon';
import { PersonRuningIcon } from '../assets/icons/PersonRuningIcon';
import { XIcon } from '../assets/icons/XIcon';

export const Header = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleToggle = () => {
    setIsHidden(!isHidden);
  };

  return (
    <header className="flex flex-wrap items-center justify-between gap-y-2 bg-primary p-4 text-text">
      <div className="flex items-center">
        <PersonRuningIcon className="h-6 fill-current" />
        <h1 className="font-strong text-2xl">
          Proto<span className="text-details">Fit</span>
        </h1>
      </div>

      {isHidden ? (
        <BarsIcon
          className="h-6 fill-current lg:hidden"
          onClick={handleToggle}
        />
      ) : (
        <XIcon className="h-6 fill-current lg:hidden" onClick={handleToggle} />
      )}

      <nav className={`w-full ${isHidden ? 'hidden' : ''} lg:block lg:w-fit`}>
        <ul className="flex flex-col items-center font-primary lg:flex-row lg:gap-x-4 [&>li]:py-2">
          <li>
            <a className="hover:text-details" href="#reasonsSection">
              Why join?
            </a>
          </li>
          <li>
            <a className="hover:text-details" href="#aboutSection">
              About us
            </a>
          </li>
          <li>
            <a className="hover:text-details" href="#membershipsSection">
              Memberships
            </a>
          </li>
          <li>
            <a className="hover:text-details" href="#NewsletterSection">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
