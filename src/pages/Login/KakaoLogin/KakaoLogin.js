import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import styled from 'styled-components';
import { API } from '../../../config';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = location.search;
  const accessCode = new URLSearchParams(queryString).get('code');

  const sendCodeToBack = () => {
    const option = {
      url: `${API.KAKAO_LOGIN}?code=${accessCode}`,
      method: 'GET',
    };
    axios(option).then(res => {
      if (res.status === 200) {
        localStorage.setItem(USER_TOKEN, res.data.token);
        navigate('/');
      } else {
        navigate('/login');
        alert('로그인이 실패하였습니다.');
      }
    });
  };

  useEffect(() => {
    sendCodeToBack();
  }, []);

  return (
    <KakaoLoginLayout>
      <CircularProgress color="grey" />
      <Loading>로그인중입니다</Loading>
    </KakaoLoginLayout>
  );
};

export default KakaoLogin;

const USER_TOKEN = 'checkout_user';

const KakaoLoginLayout = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Loading = styled.h1`
  position: absolute;
  left: -35%;
  top: 130%;
  width: 200px;
  font-size: 11px;
`;
