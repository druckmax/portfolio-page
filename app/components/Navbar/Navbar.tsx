import * as Dialog from '@radix-ui/react-dialog';
import { getTranslations } from '../i18n/getTranslations';
import logoWhite from './img/logoWhite.png';
import './_Navbar.scss';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  return (
    <nav id="home" className="navbar">
      <img className="nav-logo" src={logoWhite.src} alt="cursive font of the name as a logo" />
      <MobileNav />
      <NavItems className="flex-navigation" />
    </nav>
  );
}

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger">
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button type="button" className="hamburger-content" aria-label="Open navigation">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </Dialog.Trigger>

        <Dialog.Overlay className="nav-overlay" />

        <Dialog.Content className="toggle-menu" aria-label="Main navigation">
          <Dialog.Title className="sr-only">Navigation</Dialog.Title>

          <NavItems className="toggle-menu-content" handleOpen={() => setOpen(false)} />

          <Dialog.Trigger asChild>
            <button type="button" className="hamburger-close" aria-label="Close navigation" />
          </Dialog.Trigger>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

const NavItems = ({ className, handleOpen }: { className: string; handleOpen?: () => void }) => {
  const t = getTranslations();
  return (
    <ul className={className} onClick={handleOpen} onKeyDown={() => {}}>
      <li>
        <Link href="#home">{t('nav.home')}</Link>
      </li>
      <li>
        <Link href="#projects">{t('nav.projects')}</Link>
      </li>
      <li>
        <Link href="#about">{t('nav.about')}</Link>
      </li>
      <li>
        <Link href="#contact">{t('nav.contact')}</Link>
      </li>
    </ul>
  );
};
