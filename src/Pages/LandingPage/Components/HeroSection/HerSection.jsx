import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './herosection.css';
export const HerSection = () => {
  const generateRandomOptions = (label, count) => {
    const options = Array.from(
      { length: count },
      (_, index) => `${label} ${index + 1}`
    );
    return [, ...options];
  };
  const dummyCarData = [
    {
      label: 'Location',
      options: ['Sidney', 'New York', 'Los Angeles', 'London'],
    },
    { label: 'Vin number', options: ['ABC123', 'DEF456', 'GHI789'] },
    { label: 'Year', options: ['2010', '2015', '2020'] },
    { label: 'Make', options: ['Toyota', 'Honda', 'Ford', 'Chevrolet'] },
    { label: 'Model', options: generateRandomOptions('Model', 5) },
    { label: 'Trim', options: generateRandomOptions('Trim', 3) },
    { label: 'Mileage(KM)', options: generateRandomOptions('Mileage', 10) },
  ];
  return (
    <div>
      <Row className='herobg'>
        <Col lg={5}>
          <div
            className='mx-auto mobw100'
            style={{
              background: 'rgba(0, 0, 0, 0.40)',
              width: '70%',
              height: '85vh',
            }}
          >
            <div className='text-center'>
              <p
                className='my-0 mt-4'
                style={{
                  color: '#FFFFFF',
                  fontSize: '30px',
                  fontWeight: '800',
                }}
              >
                Sell your car!
              </p>
              <p
                className='my-0'
                style={{
                  color: '#FFFFFF',
                  fontSize: '18px',
                  fontWeight: '300',
                }}
              >
                At Top Dollar
              </p>
            </div>

            {dummyCarData.map((data, index) => (
              <div key={index} className='px-5 md-px-5 pt-3'>
                <select className='w-100 p-2' style={{ color: '#777777' }}>
                  <option value=''>{data.label}</option>
                  {data.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <button
              className='border-0  text-white p-2 m-auto mt-4'
              style={{ backgroundColor: '#1985D2', width: '70%' }}
            >
              Signup
            </button>
          </div>
        </Col>
        <Col lg={7} className='d-flex flex-column align-items-start'>
          <p
            className='my-0 mt-5'
            style={{ color: '#F5F5F5', fontWeight: '400', fontSize: '40px' }}
          >
            Selling your car
          </p>
          <p
            className='my-0 '
            style={{ color: '#F5F5F5', fontWeight: '800', fontSize: '40px' }}
          >
            Privately is a Hassle
          </p>
          <p
            className='my-0 '
            style={{ color: '#F5F5F5', fontWeight: '400', fontSize: '15px' }}
          >
            Over 300 dealer are competing for your car.
          </p>
        </Col>
      </Row>
    </div>
  );
};
export default HerSection;
