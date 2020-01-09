import Link from 'next/link';

const Header = () => (
    <div className="header">
      <div className="header-nav">
          <div className="brand">
            <Link href="/">
              <a>
                <img src="/images/logo-horizontal.png" alt="Logo" />
              </a>
            </Link>
          </div>
      </div>      
    </div>
);

export default Header;