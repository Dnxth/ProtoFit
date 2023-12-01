import { PhoneIcon } from '../assets/icons/PhoneIcon';
import { LetterIcon } from '../assets/icons/LetterIcon';
import { InstagramIcon } from '../assets/icons/InstagramIcon';
import { FacebookIcon } from '../assets/icons/FacebookIcon';
import { TwitterIcon } from '../assets/icons/TwitterIcon';
import { YoutubeIcon } from '../assets/icons/YoutubeIcon';

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-details py-4 font-primary text-primary">
      <article className="md:flex md:w-3/4 md:items-start md:justify-center">
        <div className="flex flex-col items-center md:w-1/2">
          <h3 className="py-4 font-strong">Address</h3>
          <span className="w-2/4 text-center text-sm">
            Republic of Belarus Minsk city Dzerzhinsky avenue 15
          </span>
        </div>
        <div className="flex flex-col items-center md:w-1/2">
          <h3 className="py-4 font-strong">Contact</h3>
          <span className="flex items-center gap-x-2 text-sm">
            <PhoneIcon fill="currentColor" /> +375(44)-777-24-12
          </span>
          <span className="flex items-center gap-x-2 text-sm">
            <LetterIcon fill="currentColor" /> gym24@protofit.com
          </span>
        </div>
      </article>

      <nav>
        <ul className="flex gap-x-8 pt-8 text-primary [&>li]:rounded-full [&>li]:border-2 [&>li]:border-primary [&>li]:p-2">
          <li>
            <a href="#">
              <InstagramIcon fill="currentColor" />
            </a>
          </li>
          <li>
            <a href="#">
              <FacebookIcon fill="currentColor" className="px-[3px]" />
            </a>
          </li>
          <li>
            <a href="#">
              <TwitterIcon fill="currentColor" />
            </a>
          </li>
          <li>
            <a href="#">
              <YoutubeIcon fill="currentColor" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
