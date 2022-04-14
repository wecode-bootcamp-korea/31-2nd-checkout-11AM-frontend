import React from 'react';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from './KakaoLogin/KakaoAuth';

const Login = () => {
  return (
    <LoginLayout>
      <LoginTitleWrap>
        <LoginTitle>LOGIN</LoginTitle>
        <LoginSub>로그인</LoginSub>
      </LoginTitleWrap>
      <LoginForm>
        <InputWrap>
          <LoginInput placeholder="이메일 아이디" />
          <LoginInput placeholder="비밀번호" />
        </InputWrap>
        <LoginBtn login onClick={e => e.preventDefault()}>
          LOGIN
        </LoginBtn>
        <LoginBtn search onClick={e => e.preventDefault()}>
          비회원 예약조회
        </LoginBtn>
        <SignupWrap>
          <h3>회원가입</h3>
          <h3>비밀번호 찾기</h3>
        </SignupWrap>
      </LoginForm>
      <LoginSocialWrap>
        <LoginSocialTitle>SNS 계정으로 로그인하기</LoginSocialTitle>
        <LoginList>
          {SOCIAL_LIST.map(list => {
            return (
              <LoginItems key={list.id}>
                {list.id === 2 ? (
                  <KaKaoLoginBtn href={KAKAO_AUTH_URL}>
                    <KakaoBtnImg src={list.src} alt={list.alt} />
                  </KaKaoLoginBtn>
                ) : (
                  <KakaoBtnImg src={list.src} alt={list.alt} />
                )}
              </LoginItems>
            );
          })}
        </LoginList>
      </LoginSocialWrap>
    </LoginLayout>
  );
};

export default Login;

const SOCIAL_LIST = [
  {
    id: 1,
    name: 'naver',
    alt: 'loginIcon',
    src: 'https://www.stayfolio.com/web/images/sns_naver.png',
  },
  {
    id: 2,
    name: 'kakao',
    alt: 'loginIcon',
    src: 'https://www.stayfolio.com/web/images/sns_kakao.png',
  },
  {
    id: 3,
    name: 'fb',
    alt: 'loginIcon',
    src: 'https://www.stayfolio.com/web/images/sns_fb.png',
  },
  {
    id: 4,
    name: 'apple',
    alt: 'loginIcon',
    src: 'https://www.stayfolio.com/web/images/sns_apple.png',
  },
];

const LoginLayout = styled.section`
  margin: 0 auto;
  min-height: 800px;
`;

const LoginTitleWrap = styled.div`
  width: 100%;
  height: 206px;
  padding-top: 70px;
  text-align: center;
`;

const LoginTitle = styled.h1`
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 13px;
  text-indent: 13px;
`;

const LoginSub = styled.h3`
  margin-top: 15px;
  font-size: 15px;
`;

const InputWrap = styled.div`
  margin: 18px 0 25px;
`;

const LoginForm = styled.form`
  margin: 0 auto;
  width: 360px;
  border-top: 1px solid #000000;
`;

const LoginInput = styled.input`
  width: 100%;
  height: 45px;
  margin-top: 13px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #dddddd;
  outline: none;
  &::placeholder {
    color: #bbbbbb;
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  height: ${({ login }) => (login ? '55px' : '45px')};
  margin-bottom: 10px;
  border: none;
  color: #ffffff;
  font-size: 13x;
  letter-spacing: 3px;
  background-color: ${({ login }) => (login ? '#000000' : '#d8d8d8')};
  cursor: pointer;
`;

const SignupWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: #676767;
  font-size: 14px;
`;

const LoginSocialWrap = styled.div`
  width: 360px;
  text-align: center;
  margin: 80px auto 0;
`;
const LoginSocialTitle = styled.h3`
  width: 100%;
  margin-bottom: 40px;
`;

const KakaoBtnImg = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

const KaKaoLoginBtn = styled.a``;

const LoginList = styled.ul`
  display: flex;
  justify-content: center;
`;

const LoginItems = styled.li`
  margin: 0 10px;
`;
