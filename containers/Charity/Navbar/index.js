import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../../../reusecore/src/elements/UI/Logo';
import Image from '../../../reusecore/src/elements/Image';
import Container from '../../../common/src/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';
import Link from 'next/link';
import logoImage from '../../../common/src/assets/image/charity/giadLogo.png';
import heartImage from '../../../common/src/assets/image/charity/heart-red.png';

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Logo
          logoWrapperStyle={{ maxWidth: '170px' }}
          href="/"
          logoSrc={logoImage}
          className="logo"
          title="Global Initiative against Disasters"
        />
        <MenuWrapper>
          <AnchorLink className="smooth_scroll" href="/join#signup" offset={81}>
            <span
              style={{
                fontSize: '10px',
                width: '200px',
                textAlign: 'center',
                position: 'relative',
                top: '-35px',
                right: '-295px'
              }}
            >
              <Link href="/join">
                <span>PEOPLE'S AUTOMOTIVE, CONSTRUCTION</span>
              </Link>
            </span>
            <span
              style={{
                fontSize: '10px',
                width: '200px',
                textAlign: 'center',
                position: 'relative',
                top: '-20px',
                right: '-135px'
              }}
            >
              <Link href="/join">
                <span>AND MANUFACTURING CITY</span>
              </Link>
            </span>

            <Link href="/join">
              <span>Join the Initiative</span>
            </Link>
          </AnchorLink>
          {/* <Button>
            <span className="text">SPREAD</span>
            <Image src={heartImage} alt="Charity Landing" />
          </Button> */}
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
