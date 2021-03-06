import React, { useState, useContext } from 'react';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Drawer from '../../../reusecore/src/elements/Drawer';
import Image from '../../../reusecore/src/elements/Image';
import { DrawerContext } from '../../../common/src/contexts/DrawerContext';
import InnerWrapper, { SpreadButton } from './drawerSection.style';
import Link from 'next/link';
import { menuItems } from '../../../common/src/data/Charity';
import heartImage from '../../../common/src/assets/image/charity/heart-red.png';
import User from '../../../components/User';
import Signout from '../../../components/Signout';
const DrawerSection = () => {
  const [toggleState, setToggleState] = useState(false);
  const { state, dispatch } = useContext(DrawerContext);

  const handleActiveClass = () => {
    setToggleState(!toggleState);
  };

  const handleDrawerToggle = () => {
    dispatch({
      type: 'TOGGLE'
    });
    handleActiveClass();
  };

  const scrollItems = [];

  menuItems.forEach(item => {
    scrollItems.push(item.path.slice(1));
  });

  return (
    <Drawer
      width="420px"
      placement="right"
      drawerHandler={
        <button
          className={`drawer_btn ${toggleState ? 'active' : ''}`}
          onClick={handleActiveClass}
          aria-label="drawer toggle button"
        >
          <ul className="grid">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
          <i className="flaticon-plus-symbol " />
        </button>
      }
      open={state.isOpen}
      toggleHandler={handleDrawerToggle}
    >
      <InnerWrapper>
        <Scrollspy
          className="scrollspy__menu"
          items={scrollItems}
          offset={-81}
          currentClassName="active"
        >
          {menuItems.map((menu, index) => (
            <li key={`menu_key${index}`}>
              <Link href={menu.path}>
                <a>{menu.label}</a>
              </Link>
            </li>
          ))}

          <User>
            {({ data }) => {
              const me = data ? data.me : null;
              return (
                <div>
                  {me && (
                    <>
                      <Signout />
                    </>
                  )}
                  {!me && (
                    <li key={34}>
                      <Link href="/join">
                        <a>Join the Initiative</a>
                      </Link>
                    </li>
                  )}
                </div>
              );
            }}
          </User>
        </Scrollspy>
        {/* <SpreadButton>
          <span className="text">SPREAD</span>
          <Image src={heartImage} alt="Charity Landing" />
        </SpreadButton> */}
      </InnerWrapper>
    </Drawer>
  );
};

export default DrawerSection;
