import './NavBar.css';

const NavBar = () => {
  // Navigation links 
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Resources', href: '#' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="navbar-logo">
          Learn@House
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div>
          <button className="navbar-btn">Contact</button>
        </div>
        
      </div>
    </nav>
  );
};

export default NavBar;