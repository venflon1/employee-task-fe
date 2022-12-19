import "../styles.css";

const NavbarApp = (props) => {
  const { appName } = props;

  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 appName">
          ReactTaskEmployee App
        </span>
      </div>
    </nav>
  );
};

export default NavbarApp;
