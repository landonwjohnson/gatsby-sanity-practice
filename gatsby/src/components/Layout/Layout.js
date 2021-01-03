import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Footer from "./Footer";
import "normalize.css";
import GlobalStyles from "../../styles/GlobalStyles";
import Typography from "../../styles/Typography";
function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Nav />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.nodeytar,
};

export default Layout;
