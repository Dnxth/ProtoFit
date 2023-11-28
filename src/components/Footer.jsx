import { PhoneIcon } from '../assets/icons/PhoneIcon';
import { LetterIcon } from '../assets/icons/LetterIcon';
import { InstagramIcon } from '../assets/icons/InstagramIcon';
import { FacebookIcon } from '../assets/icons/FacebookIcon';
import { TwitterIcon } from '../assets/icons/TwitterIcon';
import { YoutubeIcon } from '../assets/icons/YoutubeIcon';

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center font-primary py-8 bg-details text-primary [&>h3]:font-strong [&>h3]:py-4 [&>span]:text-sm">
      <h3>Address</h3>
      <span className="text-center w-2/4">
        Republic of Belarus Minsk city <br /> Dzerzhinsky avenue 15
      </span>
      <h3>Contact</h3>

      <span className="flex items-center gap-x-2">
        <PhoneIcon fill="currentColor" /> +375(44)-777-24-12
      </span>
      <span className="flex items-center gap-x-2">
        <LetterIcon fill="currentColor" /> gym24@protofit.com
      </span>

      <nav>
        <ul className="flex gap-x-8 pt-8 text-primary [&>li]:border-2 [&>li]:border-primary [&>li]:rounded-full [&>li]:p-2">
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