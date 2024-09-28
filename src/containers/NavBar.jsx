import { logo } from './exports';
import styles from '../../src/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    // The navigation menu content
    const Menu = () => (
      <>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#features">Features</a>
        <a href="#solution">Solution</a>
      </>
    );

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <nav className='flex w-full py-6 md:mb-8 justify-between items-center navbar'>
          <div className=''>
            <img src={logo} alt="Logo" className='w-[124px] h-[32px]'/>
          </div>

          <div className='md:flex md:gap-10 lg:gap-12 xl:gap-14 text-white hidden'>
            <Menu />
          </div>

          <div className='md:hidden'>
            <FontAwesomeIcon 
                icon={toggleMenu ? faClose : faBars} 
                onClick={() => setToggleMenu((prev) => !prev)}
                className='cursor-pointer text-white'
            />
          </div>

          {/* Menu to be toggled on smaller screens */}
          {toggleMenu && 
            <div className='absolute gap-5 items-center flex flex-col top-20 right-0 p-6 min-w-[140px] bg-black-gradient rounded-xl md:hidden text-white z-20 sidebar'>
              <Menu />       
            </div>
          }
        </nav>
      </div>
    </div>

  )
}

export default NavBar
