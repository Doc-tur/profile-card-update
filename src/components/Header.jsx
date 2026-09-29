const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        Learn@House
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="../LandingPage.jsx">About</a>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#resources">Resources</a>
      </nav>

      <button className="contact-btn">
        Contact
      </button>

      <button className="menu-btn">
        ☰
      </button>
    </header>
  );
};

export default Header;