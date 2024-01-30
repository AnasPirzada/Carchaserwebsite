import React from 'react';
import Navbar from '../../Components/Navbar/index';
import DetailCounter from './Components/DetailsCounter/DetailCounter';
import MobileDownload from './Components/MobileDownload/MobileDownload';
import Footer from '../../Components/Footer/index';
import './landingPage.css';
import HerSection from './Components/HeroSection/HerSection';
import CrouselSection from './Components/CrouselSection/index.jsx';
const index = () => {
  return (
    <>
      <Navbar />
      <HerSection />
      <DetailCounter />
      <MobileDownload />
      {/* <div
        className='carBg '
        style={{
          height: '100vh',
        }}
      >
        <h1
          style={{
            color: 'white',
            paddingTop: '5em',
            textAlign: 'center',
          }}
        >
          It's our responsibility to sell your car at{' '}
          <span style={{ color: '#1985D2' }}>Best deal</span>
        </h1>
        <p className='text-light pt-1 text-center w-50 m-auto mobw100'>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt .
        </p>
      </div> */}
      <div
        className='carBg '
        style={{
          height: '100vh',
        }}
      >
        <h1
          className='pt-5'
          style={{
            color: 'white',
            textAlign: 'center',
          }}
        >
          It's our responsibility to sell your car at{' '}
          <span style={{ color: '#1985D2' }}>Best deal</span>
        </h1>
        <p className='text-light pt-1 text-center w-50 m-auto mobw100'>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt .
        </p>
      </div>

      <CrouselSection />
      <Footer />
    </>
  );
};

export default index;
