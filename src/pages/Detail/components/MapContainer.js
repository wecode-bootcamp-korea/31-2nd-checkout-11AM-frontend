import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const MapContainer = ({ latitude, longitude, places }) => {
  const [map, setMap] = useState([]);
  const container = useRef();

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };

    const map = new kakao.maps.Map(container.current, options);
    setMap(map);

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

    const imageSrc = '/images/main-marker.png',
      imageSize = new kakao.maps.Size(50, 50),
      imageOption = { offset: new kakao.maps.Point(25, 50) };

    const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      ),
      markerPosition = new kakao.maps.LatLng(latitude, longitude);

    const residenceMarker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    residenceMarker.setMap(map);
  }, [latitude, longitude, places]);

  useEffect(() => {
    places?.map((place, idx) => {
      return makePlaceMarker(place, map, idx);
    });
  });

  const panTo = (lat, lng, map) => {
    const moveLatLon = new kakao.maps.LatLng(lat, lng);
    map.panTo(moveLatLon);
  };

  return (
    <>
      <MapWrapper ref={container} />
      <MapInfo>
        <InfoList>
          {places?.map((place, idx) => {
            return (
              <InfoListCell key={idx}>
                <PlaceMarkerImage
                  src={`/images/place${idx + 1}.png`}
                  alt="marker"
                  onClick={() => {
                    panTo(place.latitude, place.longitude, map);
                  }}
                />
                <PlaceTitle>{place.place_name}</PlaceTitle>
                <PlaceDesc>{place.description}</PlaceDesc>
              </InfoListCell>
            );
          })}
        </InfoList>
      </MapInfo>
    </>
  );
};

export default MapContainer;

const MapWrapper = styled.div`
  width: 100%;
  height: 550px;
`;

const MapInfo = styled.div`
  margin-top: 60px;
  width: 100%;
`;

const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 50px;
  padding: 0 0 20px;
  overflow: hidden;
  width: 1330px;

  li:first-of-type,
  li:nth-of-type(2),
  li:nth-of-type(3) {
    border-top: 4px solid #000;
  }
`;

const InfoListCell = styled.li`
  position: relative;
  width: 410px;
  height: 100px;
  margin-left: 30px;
  border-bottom: 1px solid #ccc;
  padding: 20px 0 20px 60px;
`;

const PlaceMarkerImage = styled.img`
  width: 34px;
  height: 37px;
  color: #fff;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  font-family: Abel;
  position: absolute;
  top: 23px;
  left: 10px;
  cursor: pointer;
`;

const PlaceTitle = styled.div`
  font-size: 16px;
  color: #333;
  font-weight: 700;
`;

const PlaceDesc = styled.div`
  font-size: 13px;
  color: #333;
  margin-top: 9px;
`;

const { kakao } = window;

const makePlaceMarker = (place, map, idx) => {
  const imageSrc = `/images/place${idx + 1}.png`,
    imageSize = new kakao.maps.Size(30, 35),
    imageOption = { offset: new kakao.maps.Point(20, 40) };

  const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    ),
    markerPosition = new kakao.maps.LatLng(place.latitude, place.longitude);

  const placeMarker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
  });

  placeMarker.setMap(map);
};
