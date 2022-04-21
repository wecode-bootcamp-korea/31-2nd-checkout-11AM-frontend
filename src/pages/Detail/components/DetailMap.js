import React from 'react';
import styled from 'styled-components';
import MapContainer from './MapContainer';

const DetailMap = ({
  address,
  name,
  email,
  phone_number,
  latitude,
  longitude,
  places,
}) => {
  return (
    <DetailMapLayout>
      <MapText>
        {`${name}의 위치는 [ ${address} ]
        입니다.`}
      </MapText>
      <Map>
        <MapContainer
          latitude={latitude}
          longitude={longitude}
          places={places}
        />
        <MapTitle>
          <MapTitleGreeting>
            HELLO. <br />
            {name}
          </MapTitleGreeting>
          <MapTitleDesc>
            {address} <br />
            {phone_number} <br />
            {email}
          </MapTitleDesc>
        </MapTitle>
      </Map>
    </DetailMapLayout>
  );
};

export default DetailMap;

const DetailMapLayout = styled.div`
  margin: 0 auto;
`;

const MapText = styled.div`
  width: 1290px;
  margin: 120px auto 20px;
  text-align: center;
`;

const Map = styled.div`
  position: relative;
  width: 100%;
  z-index: 0;
`;

const MapTitle = styled.div`
  position: absolute;
  left: 200px;
  top: 100px;
  width: 290px;
  height: 250px;
  padding: 22px 30px 30px;
  background: #fff;
  z-index: 10;
`;

const MapTitleGreeting = styled.div`
  font-size: 24px;
  line-height: 1.5;
`;

const MapTitleDesc = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.6;
`;
