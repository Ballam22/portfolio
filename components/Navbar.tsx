import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const navs = [
    { text: 'Home', href: '/', dataCy: 'homePageLink' },
    { text: 'About', href: '/about', dataCy: 'aboutPageLink' },
    { text: 'Portfolio', href: '/portfolio', dataCy: 'portfolioPageLink' },
    { text: 'Contact', href: '/contact', dataCy: 'contactPageLink' },
    // { text: '', href: '' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          Portofolio.
        </Link>

        <ul className="nav-links">
          {navs.map((nav) => (
            <li data-test-id={nav.dataCy} key={`nav-${nav.href}`}>
              <Link
                href={nav.href}
                className={`nav-item ${
                  router.pathname === String(nav.href) ? 'active' : ''
                }`}
              >
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
