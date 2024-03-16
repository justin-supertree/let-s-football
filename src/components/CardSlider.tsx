import styled from '@emotion/styled';
import Slider from 'react-slick';

const StyledSliderContainer = styled.div`
  .slick-dots {
    bottom: 20px;
  }

  .slick-dots li {
    margin: 0 4px; // 슬라이더 도트 사이의 간격을 조정합니다.
  }

  .slick-dots li button:before {
    font-size: 10px; // 슬라이더 도트 크기를 조정합니다.
    color: white; // 슬라이더 도트의 색상을 지정합니다.
  }

  .slick-prev,
  .slick-next {
    top: 50%; // 이전/다음 버튼을 세로 중앙에 위치시킵니다.
    transform: translateY(-50%);
    z-index: 1; // 다른 요소 위에 표시되도록 z-index를 설정합니다.
  }

  &.slick-active {
    &.slick-current {
      display: flex;
      align-items: center;
      justify-content: center;

      & > div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .slick-prev {
    left: 10px; // 이전 버튼을 왼쪽으로 이동합니다.
  }

  .slick-next {
    right: 10px; // 다음 버튼을 오른쪽으로 이동합니다.
  }
`;

interface ArrowProps {
  className?: any;
  style?: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function NextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

export function PrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

type Props = {
  slidesToShow: number;
  children: React.ReactNode;
};

const CardSlider = ({ slidesToShow, children }: Props) => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <StyledSliderContainer>
      <Slider {...settings}>{children}</Slider>
    </StyledSliderContainer>
  );
};

export default CardSlider;
