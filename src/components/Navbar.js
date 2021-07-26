import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useEffect, useState, refs, useRef } from 'react';
import NavbarRegular from './NavbarRegular';
import NavbarBurger from './NavbarBurger';
import './Navbar.css';

export default function PortfolioNavbar() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  // react-scroll npm to simplify navbar scrolling to point on page
  const [selected, setSelected] = useState();
  const selectedBtn = useRef(null);

  // const handleBtnClick = (href) => {
  //   setSelected(href)
  //   refs.selected.scrollIntoView()
  // };

  // useEffect(() => {
  //   if (selected && selectedBtn.current) {
  //     selectedBtn.current.scrollIntoView();
  //     setSelected(false);
  //   }
  // }, [selected, selectedBtn.current]);

  // Change to burger menu view on medium devices and below
  const responsiveNav =
    matches
      ? <NavbarRegular />
      : <NavbarBurger />
  return (
    <>
      {responsiveNav}
    </>
  )
};