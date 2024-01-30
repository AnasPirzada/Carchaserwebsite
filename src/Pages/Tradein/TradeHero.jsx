import React from 'react';

const TradeHero = () => {
  return (
    <>
      <div
        className='bgheroSection mb-5'
        style={{
          height: '800px',
          backgroundImage: `url("/blue-car-speed-motion-stretch-style 1.png")`,
        }}
      >
        <div
          className='w-75 d-flex flex-column mobwteam '
          style={{
            paddingTop: '70px',
            paddingLeft: '70px',
            paddingRight: '70px',
          }}
        >
          <p
            style={{
              fontWeight: '800',
              fontSize: '40px',
              color: '#fff',
            }}
            className='lh-1'
          >
            Looking to sell or upgrade your car?
          </p>
        </div>
        <h2
          className='text-light w-25 ps-5 p-2 mobwteam'
          style={{
            borderRadius: '0px 22px 22px 0px',
            fontWeight: '900',
            fontSize: '30px',
            color: '#FFFFFF',
            background:
              'linear-gradient(270deg, #1985D2 0%, rgba(0, 0, 0, 0) 174.54%)',
          }}
        >
          At Car Chaser,
        </h2>
        <p
          className='text-light w-50 mobwteam'
          style={{
            paddingLeft: '70px',
            paddingRight: '70px',
          }}
        >
          We've got you covered. Share your needs, and let us assist in finding
          your next dream car. We're passionate about finding the perfect match.
        </p>
      </div>

      <div className='d-flex justify-content-center align-items-center my-5'>
        <div className='m-auto ' style={{ width: '60%' }}>
          <div className='text-start m-auto w-75'>
            <p
              style={{
                fontSize: '40px',
                fontWeight: '800',
                color: '#1985D2',
              }}
            >
              Discover the dealership difference
            </p>
            <p
              style={{ color: '#101010', fontSize: '20px', fontWeight: '400' }}
            >
              We ensure you receive top dollar for your trade-in and a valuable
              tax credit for your next purchase. Isn't that wonderful?
            </p>
          </div>
        </div>
        <div className='m-auto ' style={{ width: '40%' }}>
          <div className='text-end'>
            <img src='./usersideimage1.png' alt='' style={{ width: '100%' }} />
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center my-5'>
        <div className='m-auto ' style={{ width: '40%' }}>
          <div className='text-end'>
            <img src='./image 114.png' alt='' style={{ width: '100%' }} />
          </div>
        </div>
        <div className='m-auto ' style={{ width: '60%' }}>
          <div className='text-start m-auto w-75'>
            <p
              style={{
                fontSize: '40px',
                fontWeight: '800',
                color: '#1985D2',
              }}
            >
              Convenience at your fingertips
            </p>
            <p
              style={{ color: '#101010', fontSize: '20px', fontWeight: '400' }}
            >
              Choose your next car from the comfort of your home. We're here to
              assist you in finding a vehicle that suits your lifestyle and
              needs. Plus, our service is completely free with no hidden fees.
            </p>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center my-5'>
        <div className='m-auto ' style={{ width: '60%' }}>
          <div className='text-start m-auto w-75'>
            <p
              style={{
                fontSize: '40px',
                fontWeight: '800',
                color: '#1985D2',
              }}
            >
              Your satisfaction is our priority
            </p>
            <p
              style={{ color: '#101010', fontSize: '20px', fontWeight: '400' }}
            >
              We are dedicated to providing only quality cars and top-notch
              service. Connect with your vehicle acquisition specialist today.
            </p>
          </div>
        </div>
        <div className='m-auto ' style={{ width: '40%' }}>
          <div className='text-end'>
            <img src='./image115.png' alt='' style={{ width: '100%' }} />
          </div>
        </div>
      </div>

      <div>
        <div style={{ width: '100%', border: '1px solid #1985D2' }} />

        <p
          className='my-0 p-3'
          style={{
            fontWeight: '700',
            fontSize: '30px',
            color: '#101010',
          }}
        >
          Step into the next era with Car Chaser
        </p>

        <div
          className=' ms-5  d-flex justify-content-between align-items-center mb-4'
          style={{ width: '40%' }}
        >
          <p
            className='my-0 text-nowrap '
            style={{
              color: '#303030',
              fontSize: '20px',
              fontWeight: '500',
            }}
          >
            Initiate your journey right here.
          </p>

          <button
            className='border-0 rounded-5 ms-4 text-white p-2 w-50'
            style={{ backgroundColor: '#1985D2' }}
          >
            Let's Start
          </button>
        </div>

        <div
          className='mb-5'
          style={{ width: '100%', border: '1px solid #1985D2' }}
        />
      </div>
    </>
  );
};

export default TradeHero;
