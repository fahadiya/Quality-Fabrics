// // import './Header.css';
// // import { useEffect, useState } from 'react';
// // // import logo from '../assets/logo.png';

// // const Header: React.FC = () => {
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const onScroll = () => {
// //       setScrolled(window.scrollY > 50);
// //     };

// //     window.addEventListener('scroll', onScroll);

// //     // Cleanup on unmount
// //     return () => {
// //       window.removeEventListener('scroll', onScroll);
// //     };
// //   }, []);

// //   return (
// //     <div className={`header ${scrolled ? 'scrolled' : ''}`}>
// //       <h1>MY WEBSITE</h1>
// //       {/* <img src={logo} alt="Quality Logo" className="logo" /> */}
// //       <nav className="navigation">
// //         <a href="/">Home</a>
// //         <a href="/about">About</a>
// //         <a href="/services">Services</a>
// //         <a href="/projects">Projects</a>
// //         <a href="/contact">Contact</a>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Header;
// import './Header.css';
// import { useEffect, useState } from 'react';

// const Header: React.FC = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', onScroll);

//     return () => {
//       window.removeEventListener('scroll', onScroll);
//     };
//   }, []);

//   return (
//     <header className={`header ${scrolled ? 'scrolled' : ''}`}>
//       <h1>MY WEBSITE</h1>
//       {/* <img src={logo} alt="Quality Logo" className="logo" /> */}
//       <nav className="navigation">
//         <a href="/">Home</a>
//         <a href="/about">About</a>
//         <a href="/services">Services</a>
//         <a href="/projects">Projects</a>
//         <a href="/contact">Contact</a>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// Header.tsx
import './Header.css';
import { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <h1>MY WEBSITE</h1>
      <nav className="navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
