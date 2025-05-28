import React, { useState, useEffect, useCallback } from 'react';
import styled from "styled-components";
import { Container, BodyWrapper, Body } from '../styles/Global';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import SearchBar from '../components/SearchBar/SearchBar';
import ManualBox from '../components/Box/ManualBox';
import axios from 'axios';
import BottomNavigation from '../components/Navigation/BottomNavigation'; 

function Manual() {
  const [activeTab, setActiveTab] = useState('general'); 
  const [manualContent, setManualContent] = useState([]);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchResults = (data) => {
    const normalizedData = normalizeManualContent(data);
    setManualContent(normalizedData);
  };

  const normalizeManualContent = (data) => {
    return data.map(item => ({
      emergencyImage: item.imgurl || item.emergencyImage,
      emergencyName: item.name || item.emergencyName,
      summary: item.manualSummary || item.manualSummaries || item.emergencyResponseSummary,
    }));
  };

  const fetchManualData = useCallback(async () => {
    const accessToken = localStorage.getItem('accessToken');
    const categoryMapping = {
      'general': '기본',
      'situational': '상황별',
      'medical': '의학적',
      'traumatic': '외상성'
    };

    const categoryValue = categoryMapping[activeTab];

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_APP_URI}/api/v1/manuals/category`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            category: categoryValue
          }
        }
      );

      const normalizedData = normalizeManualContent(response.data.data);
      setManualContent(normalizedData);
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
                    <ManualBox
                      key={index}
                      thumbnail={item.emergencyImage}
                      title={item.emergencyName}
                      summary={item.summary}
                      emergencyName={item.emergencyName}
                    />
                  ))}
                </CardWrapper>
              ) : (
                <div>로딩 중...</div>
              )}
            </Content>
          </Body>
        </BodyWrapper>

        <BottomNavigation /> 
      </Container>
    </motion.div>
  );
}

const Header = styled.header`
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
  width: 100%;
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 2px solid #FF4F4D;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const Tab = styled.div`
  padding-top: 20px;
  padding-bottom: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
  color: ${(props) => (props.$active ? '#FF4F4D' : '#000000')};
  transition: all 0.3s;
  text-align: center;
  flex-grow: 1;
`;

const Content = styled.div`
  margin: 1rem 0rem 6rem 0rem; 
  font-size: 16px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export default Manual;
