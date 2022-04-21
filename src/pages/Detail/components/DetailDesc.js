import React from 'react';
import styled from 'styled-components';

const DetailDesc = ({ name, description, sub_name }) => {
  return (
    <DetailDescLayout>
      <DescTitle>
        {sub_name}
        <Name>{name}</Name>
      </DescTitle>
      <TextLarge>{description}</TextLarge>
    </DetailDescLayout>
  );
};

export default DetailDesc;

const DetailDescLayout = styled.div`
  width: 1290px;
  margin: 120px auto 0;
`;

const DescTitle = styled.div`
  font-size: 25px;
  color: #222;
  text-align: center;
  font-weight: 500;
  font-family: SpoqaHanSans; ;
`;

const Name = styled.span`
  font-size: 14px;
  display: block;
  letter-spacing: 7px;
  margin-top: 15px;
  font-family: Abel, SpoqaHanSans;

  :after {
    content: '';
    display: block;
    width: 1px;
    height: 40px;
    background: #000;
    margin: 25px auto 0;
  }
`;

const TextLarge = styled.div`
  font-size: 16px;
  line-height: 2.2;
  width: 780px;
  margin: 20px auto 0;
  text-align: center;
`;
