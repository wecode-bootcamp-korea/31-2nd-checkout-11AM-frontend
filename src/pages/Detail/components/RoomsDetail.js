import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const RoomsDetail = ({ rooms, name }) => {
  const navigate = useNavigate();

  const goToRoomDetail = id => {
    navigate(`room/${id}`);
  };

  return (
    <RoomsDetailWrapper>
      <RoomsSliderBg />
      <SliderWrapper>
        <RoomsDetailTitle>
          ROOM
          <TitleUnderLine />
          <RoomsDetaildesc>
            ROOM LIST
            <br />
            <ResidenceName>{name}</ResidenceName>
          </RoomsDetaildesc>
        </RoomsDetailTitle>
        <RoomsDetailSlider
          spaceBetween={50}
          slidesPerView={2.3}
          slidesPerGroup={2}
          modules={[Navigation]}
          navigation
        >
          {rooms?.map(
            ({ id, room_name, price, person, bedspace, images }, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <RoomCell>
                    <RoomImg src={images[0]} alt="room Image" />
                    <RoomInfo>
                      <RoomName>{room_name}</RoomName>
                      <RoomPrice>{`₩${parseInt(price)}~`}</RoomPrice>
                      <RoomInfoEtc>{`기준 ${person}명 • 침구 ${bedspace} 개`}</RoomInfoEtc>
                      <BookButton onClick={() => goToRoomDetail(id)}>
                        BOOK
                      </BookButton>
                    </RoomInfo>
                  </RoomCell>
                </SwiperSlide>
              );
            }
          )}
        </RoomsDetailSlider>
      </SliderWrapper>
    </RoomsDetailWrapper>
  );
};

export default RoomsDetail;

const RoomsDetailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  margin-top: 70px;
`;

const RoomsSliderBg = styled.div`
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
  background: #f5f5f5;
  height: 700px;
  z-index: -1;
`;

const SliderWrapper = styled.div`
  width: 1290px;
  margin: 0 auto;
`;

const RoomsDetailTitle = styled.div`
  font-size: 40px;
  font-weight: 900;
  padding-top: 200px;
`;

const TitleUnderLine = styled.div`
  width: 80px;
  height: 4px;
  margin-top: 20px;
  background-color: black;
`;

const RoomsDetaildesc = styled.div`
  font-size: 34px;
  font-weight: 700;
  padding-top: 200px;
`;

const ResidenceName = styled.div`
  width: 300px;
  font-size: 25px;
  padding-top: 20px;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
`;
const RoomsDetailSlider = styled(Swiper)`
  position: absolute;
  top: 120px;
  left: 50%;
  right: 0;
  margin-left: -230px;

  .swiper-slide {
    display: flex;
    justify-content: row;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    width: 70px;
    height: 70px;
    color: white;
    background-color: black;
    opacity: 1;

    :hover {
      opacity: 0.5;
    }
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }
`;

const RoomCell = styled.div`
  position: relative;
  width: 460px;
  height: 460px;
`;

const RoomImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const RoomInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 140px;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
`;
const RoomName = styled.p`
  position: absolute;
  bottom: 75px;
  left: 30px;
  font-size: 24px;
  font-weight: 500;
`;
const RoomPrice = styled.p`
  position: absolute;
  bottom: 75px;
  right: 30px;
  font-size: 21px;
  font-family: Abel, SpoqaHanSans;
`;
const RoomInfoEtc = styled.p`
  position: absolute;
  bottom: 35px;
  left: 30px;
  font-size: 14px;
`;
const BookButton = styled.p`
  position: absolute;
  bottom: 25px;
  right: 30px;
  font-size: 13px;
  line-height: 25px;
  border-bottom: 1px solid #fff;
  display: block;
  letter-spacing: 1.5px;
  font-family: Abel, SpoqaHanSans;
  cursor: pointer;
`;
