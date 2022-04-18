import React from 'react';
import styled from 'styled-components';
import ModalDateFrame from '../../../components/ModalDateFrame';

const FilterModal = ({ handleLocationValue }) => {
  return (
    <ModalDateFrame>
      <DateTitle>어디로 떠날까요?</DateTitle>
      <LocationList>
        <LocationListTitle>제주</LocationListTitle>
        <LocationItem value="" onClick={handleLocationValue}>
          제주전체
        </LocationItem>
        <LocationItem value="제주시" onClick={handleLocationValue}>
          제주시
        </LocationItem>
        <LocationItem value="서귀포시" onClick={handleLocationValue}>
          서귀포시
        </LocationItem>
        <LocationItem value="동부" onClick={handleLocationValue}>
          동부권
        </LocationItem>
        <LocationItem value="서부" onClick={handleLocationValue}>
          서부권
        </LocationItem>
      </LocationList>
    </ModalDateFrame>
  );
};

export default FilterModal;

const DateTitle = styled.p`
  width: 100%;
  font-size: 36px;
  font-weight: 700;
  padding-bottom: 30px;
  border-bottom: 1px solid #e9e9e9;
  text-align: left;
`;
const LocationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
  font-size: 20px;
`;
const LocationListTitle = styled.div`
  width: 100%;
  margin-bottom: 70px;
  font-weight: 700;
  text-align: center;
`;
const LocationItem = styled.button`
  padding: 0 30px;
  border: 0 none;
  font-size: 16px;
  background: #fff;
  cursor: pointer;
`;
