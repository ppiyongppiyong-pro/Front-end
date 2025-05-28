import { Container, BodyWrapper, Body } from '../styles/Global';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';

import logo from "../assets/logo.svg";
import logout from "../assets/logout/logout.svg";
import { BoxType } from '../components/Box/BoxType';
import EditableInputBox from "../components/Input/EditableInputBox";
import BottomNavigation from '../components/Navigation/BottomNavigation'; 

function Mypage() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    phoneNumber: '',
    gender: '',
    parentPhoneNumber: '',
    address: '',
  });

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      console.log('로그인이 필요합니다.');
      navigate('/');
      return;
    }

    axios.get(`${import.meta.env.VITE_APP_APP_URI}/api/v1/members/profiles`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then(response => {
      const data = response.data?.data || response.data;
      setUserInfo({
        email: data.email,
        username: data.name,
        phoneNumber: data.phoneNumber,
        gender: data.gender,
        parentPhoneNumber: data.parentPhoneNumber,
        address: data.address,
      });
    })
    .catch(error => {
      console.error('마이페이지 오류:', error);
      setUserInfo({});
    });
  }, [navigate]);

  const handleLogout = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (!accessToken) {
      navigate('/');
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_APP_URI}/auth/logout`, 
        { email, password },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 200) {
        localStorage.clear();
        navigate('/'); 
      } else {
        alert('로그아웃 실패');
      }
    } catch (error) {
      alert('로그아웃 실패');
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Container>
        <BodyWrapper>
          <Header>
            <img className="logo" src={logo} alt="logo" />
            <AccountWrapper>
              <UserName>{userInfo.username}</UserName>
              <LogoutButton onClick={handleLogout}>
                <img className="logout" src={logout} alt="logout" />
              </LogoutButton>
            </AccountWrapper>
          </Header>
          <Body>
            <InfoWrapper>
              <EditableInputBox id="email" label="아이디" value={userInfo.email} canEdit={false} />
              <EditableInputBox id="gender" label="성별" value={userInfo.gender} canEdit={false} />
              <EditableInputBox id="username" label="이름" value={userInfo.username} patchKey="username" onValueChange={val => setUserInfo(prev => ({ ...prev, username: val }))} />
              <EditableInputBox id="phoneNumber" label="전화번호" value={userInfo.phoneNumber} patchKey="phoneNumber" onValueChange={val => setUserInfo(prev => ({ ...prev, phoneNumber: val }))} />
              <EditableInputBox id="parentPhoneNumber" label="보호자 전화번호" value={userInfo.parentPhoneNumber} patchKey="parentPhoneNumber" onValueChange={val => setUserInfo(prev => ({ ...prev, parentPhoneNumber: val }))} />
              <EditableInputBox id="address" label="주소" value={userInfo.address} patchKey="address" onValueChange={val => setUserInfo(prev => ({ ...prev, address: val }))} />
            </InfoWrapper>
            <ButtonWrapper>
              <SignoutButton>회원탈퇴</SignoutButton>
            </ButtonWrapper>
          </Body>
        </BodyWrapper>
        <BottomNavigation /> 
      </Container>
    </motion.div>
  );
}

const LogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Header = styled.header`
  .logo {
    position: absolute;
    margin-top: 1.3rem;
    margin-left: -10.8rem;
  }
`;

const AccountWrapper = styled.div`
  margin-top: 4rem;
  margin-left: 0.5rem;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const UserName = styled.h1`
  font-size: 1.25rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 7rem;
  gap: 0.5rem;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 6rem;
`;

const SignoutButton = styled(BoxType._10radiux_Box)`
  background-color: #FFFFFF;
  border: 1px solid #E60400;
  font-size: 1rem;
  width: 310px;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E60400;
  cursor: pointer;

  &:hover {
    background-color: #E60400;
    border-color: #E60400;
    color: #ffffff;
  }
`;

export default Mypage;
