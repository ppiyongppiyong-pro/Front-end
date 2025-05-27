import { useNavigate } from 'react-router-dom';
import { Container, BodyWrapper, Body } from '../styles/Global';
import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import axios from 'axios';
import spinner from "../assets/spinner.gif";

const Redirection = () => {
  const code = new URL(document.location.toString()).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    if (!code) {
      alert('코드가 없습니다. 다시 로그인해주세요.');
      navigate('/');
      return;
    }

    console.log('인가코드:', code);
    console.log('uri:', import.meta.env.VITE_APP_APP_URI);

    axios
      .post(`${import.meta.env.VITE_APP_APP_URI}/auth/login/kakao?code=${code}`)
      .then((response) => {
        console.log('응답 데이터:', response.data);

        const { accessToken, name } = response.data.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('name', name);

        navigate('/MapPage');
      })
      .catch((error) => {
        console.error('에러 발생:', error);
        alert('로그인 실패. 다시 시도해주세요.');
        navigate('/');
      });
  }, [code, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <BodyWrapper>
          <Body>
            <img
            id="loading"
            src={spinner}
            alt="loading spinner"
            style={{ marginTop: "200%", width: "130px"}}
            />
          </Body>
        </BodyWrapper>
      </Container>
    </motion.div>
  );
};

export default Redirection;
