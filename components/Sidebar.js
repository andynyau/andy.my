import Link from 'next/link';

const Sidebar = () => (
    <div className="sidebar">
        <div className="nav">
            <button id="btnMenuToggle" className="toggle-button">
              <div></div>
              <div></div>
              <div></div>
            </button>
            <ul className="menu">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <a href="#" className="sub-menu-link">
                  Life                  
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Topic 1</a>
                  </li>
                  <li>
                      <a href="#">Topic 2</a>
                    </li>                  
                </ul>
              </li>
              <li>
                  <a href="#" className="sub-menu-link">
                    Discovery                    
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Topic 3</a>
                    </li>
                  </ul>
                </li>              
            </ul>
        </div>        
    </div>    
);

export default Sidebar;