import Link from 'next/link';

const Header = () => (
    <div className="header">
      <div className="header-nav">
          <div className="brand">
            <Link href="/">
              <img src="/images/logo-horizontal.png" alt="Logo" />
            </Link>
          </div>
      </div>      
    </div>
);

export default Header;