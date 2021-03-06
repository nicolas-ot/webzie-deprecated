import './slider.scss';
import { ReactNode } from 'react';
import Slick from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Settings } from 'react-slick';

interface SliderProps {
  children: ReactNode | ReactNode[];
  rows?: number;
}

interface ArrowProps {
  className?: string;
  style?: {};
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'white' }}
      onClick={onClick}
    />
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'white' }}
      onClick={onClick}
    />
  );
};

const Slider: React.FC<SliderProps> = ({ children, rows }) => {
  const settings: Settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    rows: rows || 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1245,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slick {...settings}>{children}</Slick>;
};

export default Slider;
