function Nav (){ //{scrolled}
//   const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return(
        <>
        {/* <nav className={`nav${scrolled ? " scrolled" : ""}`}> */}
        <nav className="nav" >
            <ul className="nav-link">
                <li><a href="/">ClubbingPLX</a></li>
            </ul>
        </nav>
        </>
    )
}
export default Nav;