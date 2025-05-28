import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Container, BodyWrapper, Body } from '../styles/Global';
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { BoxType } from '../components/Box/BoxType.js';
import SpeechButton from '../components/Button/SpeechButton';
import back from "../assets/back.svg";
import axios from 'axios';
import BottomNavigation from '../components/Navigation/BottomNavigation'; 

function ManualDetail() {
  const [manualContent, setManualContent] = useState({ emergencyName: '', manualDetail: '' });
  const navigate = useNavigate();
  const { emergencyName } = useParams();

  useEffect(() => {
    const fetchManualData = async () => {
      const accessToken = localStorage.getItem('accessToken');

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_APP_URI}/api/v1/manuals/${encodeURIComponent(emergencyName)}?EmergencyName=심장마비`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        setManualContent({
          emergencyName: response.data.data.name,
          manualDetail: response.data.data.detail,
        });
      } catch (error) {
        console.error('API 요청 실패:', error.response?.data || error.message);
      }
    };

    if (emergencyName) {
      fetchManualData();
    }
  }, [emergencyName]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Container>
        <BodyWrapper>
          <Header>
            <img
              className="back"
              src={back}
              style={{ cursor: "pointer" }}
              alt="back"
              onClick={() => navigate(-1)} 
            />
            <AccountWrapper>
              <ManualName>{manualContent.emergencyName}</ManualName>
              <SpeechButton 
                width={28} 
                height={28} 
                mode="tts" 
                textToSpeak={manualContent.manualDetail} 
              />
            </AccountWrapper>
          </Header>
          <Body>
            <InfoWrapper>
              {manualContent.manualDetail}
            </InfoWrapper>
          </Body>
        </BodyWrapper>

        <BottomNavigation /> 
      </Container>
    </motion.div>
  );
}

// 스타일 정의
const Header = styled.header`
  .back {
    position: absolute;
    margin-top: 1.3rem;
    margin-left: -10.8rem;
  }
  margin-bottom: 5rem;
`;

const AccountWrapper = styled.div`
  margin-top: 3rem;
  margin-left: 1rem;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const ManualName = styled.h1`
  font-size: 1.75rem;
  color: #E60400;
`;

const InfoWrapper = styled(BoxType._10radiux_Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 333px; 
  height: auto;
  margin-top: 7rem;
  margin-bottom: 6rem;  
  font-size: 1rem;
  gap: 3rem;
  background-color: #FFFFFF;
  color: #000000;
  white-space: pre-line;
  line-height: 1.6;
  border: 1px solid #FF4F4D;
  border-radius: 10px;
  box-sizing: border-box;

  &:hover {
    color: #000000;
    background-color: #FFFFFF;
    border-color: #FF4F4D;
  }
`;

export default ManualDetail;
