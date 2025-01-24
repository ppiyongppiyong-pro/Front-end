import React, { useState, useEffect, useCallback } from 'react';
import styled from "styled-components";
import { Container, BodyWrapper, Body } from '../styles/Global';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import bar from "../assets/bottom_bar/bar.svg";
import logo_icon from "../assets/bottom_bar/logo_icon.svg";
import manual_icon from "../assets/bottom_bar/manual_icon.svg";
import map_icon from "../assets/bottom_bar/map_icon.svg";
import chat_icon from "../assets/bottom_bar/chat.svg";
import my_icon from "../assets/bottom_bar/my_icon.svg";
import SearchBar from '../components/SearchBar/SearchBar';
import ManualBox from '../components/Box/ManualBox';
import axios from 'axios';

function Manual() {
  const [activeTab, setActiveTab] = useState('general');
  const [manualContent, setManualContent] = useState([]);
  const navigate = useNavigate();

  const goMy = () => navigate("/Mypage");
  const goManual = () => navigate("/Manual");
  const goMap = () => navigate("/MapPage"); 
  const goChat = () => navigate("/Chat");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchResults = (data) => {
    setManualContent([data]);  // 검색 결과를 상태에 저장
  };

  const fetchManualData = useCallback(async () => {
    const accessToken = localStorage.getItem('accessToken');
    const categoryMapping = {
      'general': '1. 기본',
      'situational': '2. 상황별',
      'medical': '3. 의학적',
      'traumatic': '5. 외상성'
    };
    
    const categoryValue = categoryMapping[activeTab];

    const formattedCategory = `3. 의학적`;
    const formattedCategory2 = categoryValue;  

    console.log("API 요청 시작");
    console.log(`요청 URL: http://52.79.245.244/api/v1/manual/getCategory`);
    console.log(`요청 헤더: Authorization: Bearer ${accessToken}`);
    console.log(`요청 파라미터:`, { Category: formattedCategory, category: formattedCategory2 });

    try {
      const response = await axios.get(
        `http://52.79.245.244/api/v1/manual/getCategory`, 
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            Category: formattedCategory,
            category: formattedCategory2
          },
          paramsSerializer: params => {
            return Object.keys(params)
              .map(key => `${key}=${encodeURIComponent(params[key])}`)
              .join('&');
          }
        }
      );
      console.log("API 응답 성공", response.data);
      setManualContent(response.data);
    } catch (error) {
      console.error('API 요청 실패:', error.response?.data || error.message);
    } finally {
      console.log("API 요청 종료");
    }
  }, [activeTab]);

  
  useEffect(() => {
    fetchManualData();
  }, [fetchManualData]); 

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Container>
        <BodyWrapper>
          <Header>
            <img className="logo" src={logo} alt="logo" />
          </Header>
          <Body>
            <SearchArea>
              <SearchBar onSearchResults={handleSearchResults} />
            </SearchArea>
            <TabContainer>
              <Tab $active={activeTab === 'general'} onClick={() => handleTabClick('general')}>기본</Tab>
              <Tab $active={activeTab === 'situational'} onClick={() => handleTabClick('situational')}>상황별</Tab>
              <Tab $active={activeTab === 'medical'} onClick={() => handleTabClick('medical')}>의학적</Tab>
              <Tab $active={activeTab === 'traumatic'} onClick={() => handleTabClick('traumatic')}>외상성</Tab>
            </TabContainer>
            <Content>
              {manualContent.length > 0 ? (
                <CardWrapper>
                  {manualContent.map((item, index) => (
                    <ManualBox key={index} thumbnail={item.emergencyImage} title={item.emergencyName} summary={item.manualSummaries} />
                  ))}
                </CardWrapper>
              ) : (
                <div>로딩 중...</div>
              )}
            </Content>
          </Body>
        </BodyWrapper>
        <Footer>
          <Base>
            <img src={bar} width="100%" alt="footer_bar" />
          </Base>
          <StyledIcon src={map_icon} alt="map_icon" style={{ marginLeft: "-10rem" }} onClick={goMap} />
          <StyledIcon src={manual_icon} alt="manual_icon" style={{ marginLeft: "-6rem" }} onClick={goManual} />
          <StyledLogoIcon src={logo_icon} alt="logo_icon" />
          <StyledIcon src={chat_icon} alt="chat_icon" style={{ marginLeft: "3.7rem" }} onClick={goChat} />
          <StyledIcon src={my_icon} alt="my_icon" style={{ marginLeft: "8rem", marginTop: "-3.5rem" }} onClick={goMy} />
        </Footer>
      </Container>
    </motion.div>
  );
}

// 스타일링
const Header = styled.header`
  position: relative;
  .logo {
    position: absolute;
    margin-top: 1.3rem;
    margin-left: -10.8rem;
  }
`;

const SearchArea = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 2px solid #FF4F4D;
  margin-bottom: 20px;
`;

const Tab = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
  color: ${(props) => (props.$active ? '#FF4F4D' : '#000000')};
  transition: all 0.3s;
`;

const Content = styled.div`
  margin-top: 20px;
  font-size: 16px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;  
`;

const Footer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border: none;
  margin: 0;
`;

const Base = styled.div``;

const StyledLogoIcon = styled.img`
  position: absolute;
  width: 4rem;
  margin-left: -1.9rem;
  margin-top: -4.35rem;
`;

const StyledIcon = styled.img`
  position: absolute;
  margin-top: -3.7rem;
`;

export default Manual;
