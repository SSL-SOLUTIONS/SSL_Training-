import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from "mdb-react-ui-kit";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the token from the cookie
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Clear any other session or local storage data if needed
    localStorage.removeItem("token");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          {/* Logo on the left side */}
          <NavLink to="/" className="navbar-brand">
            <img className="logo" src="/logo.png" alt="Logo"></img>
          </NavLink>

          {/* Navbar toggle button for smaller screens */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* Unordered list on the right side */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mt-1">
                
                  <NavLink className="nav-link mx-2 mt-2" to="/pannel">
                    Pannel
                  </NavLink>
              
              </li>
              <li className="nav-item mt-1">
                <MDBNavbar expand="lg" light bgColor="light">
                  <MDBContainer fluid>
                    <MDBNavbarNav
                      className="me-auto ps-lg-0"
                      style={{ paddingLeft: "0.15rem" }}
                    >
                      <MDBNavbarItem className="position-static">
                        <MDBDropdown>
                          <MDBDropdownToggle
                            style={{ color: "black", margin: "0" }}
                            tag="a"
                            className="nav-link"
                          >
                            Categories
                          </MDBDropdownToggle>
                          <MDBDropdownMenu
                            className="mt-0  justify-content-center"
                            style={{
                              borderTopLeftRadius: "0",
                              borderTopRightRadius: "0",
                            }}
                          >
                            <MDBContainer>
                              <MDBRow className="my-6">
                                <MDBCol
                                  md="4"
                                  lg="12"
                                  className="div-categ-back mb-3 mb-lg-0"
                                >
                                  <MDBListGroup flush>
                                    <MDBListGroupItem
                                      className="text-uppercase font-weight-bold "
                                      tag="a"
                                      action
                                    >
                                      <Link to="/courses"> Development</Link>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem tag="a" action>
                                      <Link to="/courses"> Amazon</Link>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem tag="a" action>
                                      <Link to="/courses"> Google</Link>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem tag="a" action>
                                      <Link to="/courses">Free Lancing</Link>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem tag="a" action>
                                      <Link to="/courses">
                                        Digital Marketing
                                      </Link>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem tag="a" action>
                                      <Link to="/courses">AI/ML</Link>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem tag="a" action>
                                      <Link to="/courses">Microsoft</Link>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem tag="a" action>
                                      <Link to="/courses">Database</Link>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem tag="a" action>
                                      <Link to="/courses">Photography</Link>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem tag="a" action>
                                      <Link to="/courses">Writing</Link>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem tag="a" action>
                                      <Link to="/courses">Graphics Design</Link>
                                    </MDBListGroupItem>
                                  </MDBListGroup>
                                </MDBCol>
                              </MDBRow>
                            </MDBContainer>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBNavbarItem>
                    </MDBNavbarNav>
                  </MDBContainer>
                </MDBNavbar>
              </li>
              <li className="nav-item mt-1">
                <NavLink className="nav-link mx-2 mt-2" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item mt-1">
                <NavLink to="/pricing" className="nav-link mx-2 mt-2">
                  Pricing
                </NavLink>
              </li>

              <li className="nav-item mt-1">
                <NavLink to="/privacy" className="nav-link mx-2 mt-2">
                  Privacy Policy
                </NavLink>
              </li>
              <li className="nav-item mt-1">
                <NavLink to="/blog" className="nav-link mx-2 mt-2">
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item mt-1">
                <NavLink to="/contact" className="nav-link mx-2 mt-2">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item mt-2 ml-4">
                {document.cookie.includes("token") ? (
                  <button className="my-btn" onClick={handleLogout}>
                    Logout
                  </button>
                ) : (
                  <button className="my-btn">
                    <NavLink to="/SignUp">Create Account</NavLink>
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
