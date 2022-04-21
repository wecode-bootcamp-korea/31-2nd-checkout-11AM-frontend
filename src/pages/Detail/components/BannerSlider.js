import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const BannerSlider = ({ name, image, sub_name, region }) => {
  return (
    <BannerWrapper>
      <ResidenceName>{name}</ResidenceName>
      <StyledSwiper
        className="banner"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        modules={[Navigation]}
      >
        {image?.map((image, idx) => {
          return (
            <SwiperSlide key={idx}>
              <ResidenceImg src={image} alt="residenceImages" />
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
      <ResidenceInfo>
        <InfoDesc>{sub_name}</InfoDesc>
        <InfoName>
          {name}
          <InfoLocation>{`제주 / ${region}`}</InfoLocation>
        </InfoName>
      </ResidenceInfo>
    </BannerWrapper>
  );
};

export default BannerSlider;

const BannerWrapper = styled.div`
  position: relative;
  max-width: 1800px;
  width: 100%;
  margin: 0 auto;
`;

const ResidenceName = styled.div`
  font-size: 15px;
  color: black;
  padding: 40px 0 30px 20px;
`;

const ResidenceImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 650px;

  .swiper-button-prev,
  .swiper-button-next {
    width: 60px;
    height: 60px;
    font-size: 10px;
    background-color: black;
    opacity: 0.5;
    color: white;
    :hover {
      opacity: 1;
    }
  }

  .swiper-button-prev {
    background-image: url(https://www.stayfolio.com/web/images/journal-detail-arrow-left.png);
    left: 0;
  }

  .swiper-button-next {
    background-image: url(https://www.stayfolio.com/web/images/journal-detail-arrow-right.png);
    right: 0;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
`;

const ResidenceInfo = styled.div`
  position: absolute;
  ${({ theme }) => theme.flexLayout('row', 'center', 'space-evenly')};
  z-index: 1;
  width: 730px;
  margin-left: -365px;
  left: 50%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
`;

const InfoDesc = styled.span`
  ${({ theme }) => theme.flexLayout('row', 'center', 'center')};
  width: 500px;
  padding: 0 20px;
  height: 80px;
  border-right: 0.5px solid gray;
  font-size: 26px;
`;

const InfoName = styled.div`
  font-size: 18px;
  padding: 0 20px;
  color: #fff;
  font-weight: 700;
  text-align: center;
`;

const InfoLocation = styled.p`
  font-size: 12px;
  color: #a5a5a5;
  margin-top: 6px;
`;
