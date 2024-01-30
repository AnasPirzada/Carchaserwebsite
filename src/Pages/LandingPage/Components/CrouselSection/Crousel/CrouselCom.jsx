import React, { useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import './style.css';

const CustomCarousel = () => {
  const videoRef = useRef(null);

  const carouselData = [
    {
      id: 1,
      name: 'Ali',
      videoUrl: './vedio/WhatsApp Video 2024-01-30 at 00.01.01_5d5e957a.mp4',
    },
    { id: 2, name: 'Mohsin', videoUrl: 'url_for_slide_2_video' },
    { id: 3, name: 'ANIA', videoUrl: 'url_for_slide_3_video' },
    { id: 4, name: 'Salman', videoUrl: 'url_for_slide_4_video' },
  ];

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <>
      <div className='m-auto' style={{ width: '90%' }}>
        <Carousel interval={null} controls={true} indicators={false}>
          {carouselData.map(slide => (
            <Carousel.Item key={slide.id}>
              <div className='d-flex justify-content-center align-items-center'>
                <div className='slidebg'>
                  <p
                    className='my-auto d-flex align-items-center'
                    style={{
                      height: '440px',
                      transform: 'rotate(-90deg)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      className='d-flex flex-column justify-content-center align-items-center'
                      style={{
                        fontWeight: '600',
                        fontSize: '32px',
                        color: '#ffff',
                      }}
                    >
                      {slide.name}
                    </span>
                  </p>
                </div>

                <video
                  ref={videoRef}
                  className='d-block w-100'
                  src={slide.videoUrl}
                  alt={`Slide ${slide.id}`}
                  style={{ maxHeight: '400px', maxWidth: '100%' }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                  }}
                  onClick={handlePlayVideo}
                >
                  <img src='./video_play.svg' alt='' />
                </div>
              </div>
              <Carousel.Caption>
                <p
                  className='text-start '
                  style={{
                    color: '#FFFFFF',
                    fontSize: '24px',
                    fontWeight: '400',
                  }}
                >
                  {slide.name}
                </p>
                <p
                  className='text-start '
                  style={{
                    color: '#FFFFFF',
                    fontSize: '16px',
                  }}
                >
                  2 hours ago
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CustomCarousel;
