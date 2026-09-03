function Navbar({className}) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className={className}>
        <div className="flex">
            <div className="m-5 w-full">
                <button onClick={() => scrollTo("home")}>ANTONIL.DEV</button>
            </div>
            <div className="flex m-5 gap-5">
                <button onClick={() => scrollTo("projects")}>Projects</button>
                <button onClick={() => scrollTo("about")}>About</button>
                <button onClick={() => scrollTo("contact")}>Contact</button>
            </div>
      </div>
    </nav>
  );
}

export default Navbar;