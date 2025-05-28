import { Container, BodyWrapper, Body } from '../styles/Global';
import { motion } from "framer-motion";
import React, { useState } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { BoxType } from '../components/Box/BoxType';  
import Input from "../components/Input/Input";
import logo from "../assets/logo.svg";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();  

  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    username: '',
    phoneNumber: '',
    gender: '',
    parentPhoneNumber: '',
    address: '',
  });

  const [errors, setErrors] = useState({});

  const patterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    phone: /^010-\d{4}-\d{4}$/,
  };

  const validateField = (field, value) => {
    if (!value.trim()) {
      return '필수 입력 항목입니다.';
    }

    if (field === 'email' && !patterns.email.test(value)) {
      return '유효한 이메일을 입력해주세요.';
    }

    if (field === 'password' && !patterns.password.test(value)) {
      return '비밀번호는 8자 이상, 영문+숫자 조합이어야 합니다.';
    }

    if ((field === 'phoneNumber' || field === 'parentPhoneNumber') && !patterns.phone.test(value)) {
      return '010-0000-0000 형식으로 입력해주세요.';
    }

    if (field === 'gender' && value !== '남성' && value !== '여성') {
      return '성별은 "남성" 또는 "여성"으로 입력해주세요.';
    }

    return '';
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSignupData((prev) => ({ ...prev, [id]: value }));

    const errorMsg = validateField(id, value);
    setErrors((prev) => ({ ...prev, [id]: errorMsg }));
  };

  const handleSignup = async () => {
    const fieldOrder = [
      'email',
      'password',
      'phoneNumber',
      'parentPhoneNumber',
      'username',
      'address',
      'gender',
    ];

    const newErrors = {};
    let firstInvalidField = '';

    for (const field of fieldOrder) {
      const value = signupData[field].trim();
      const errorMsg = validateField(field, value);

      if (errorMsg) {
        newErrors[field] = errorMsg;
        if (!firstInvalidField) firstInvalidField = field;
      }
    }

    setErrors(newErrors);

    if (firstInvalidField) {
      alert(`"${firstInvalidField}" 항목을 확인해주세요.`);
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_APP_URI}/auth/signup`, signupData, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('회원가입 성공:', response.data);
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('회원가입 실패:', error.response?.data || error.message);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <SignUpContainer>
        <BodyWrapper>
          <Header>
            <img className="logo" src={logo} alt="logo" />
            <TextWrapper>
              <PageName>회원가입</PageName>
            </TextWrapper>
          </Header>
          <Body>
            <InputWrapper>
              {[
                { id: 'email', label: '아이디', placeholder: '이메일을 아이디로 입력해주세요.' },
                { id: 'password', label: '비밀번호', placeholder: '영문+숫자 8자 이상으로 설정해주세요.', type: 'password' },
                { id: 'phoneNumber', label: '전화번호', placeholder: '010-0000-0000' },
                { id: 'parentPhoneNumber', label: '보호자 전화번호', placeholder: '010-0000-0000' },
                { id: 'address', label: '주소', placeholder: '거주지를 한글로 입력해주세요.' },
                { id: 'username', label: '닉네임', placeholder: '닉네임을 한글로 입력해주세요.' },
                { id: 'gender', label: '성별', placeholder: '성별을 입력해주세요.(남성/여성)' },
              ].map(({ id, label, placeholder, type = 'text' }) => (
                <div key={id} style={{ width: '100%' }}>
                  <InputName>{label}</InputName>
                  <Input
                    id={id}
                    width="310px"
                    height="41px"
                    placeholder={placeholder}
                    type={type}
                    value={signupData[id]}
                    onChange={handleChange}
                  />
                  {errors[id] && <ErrorMessage>{errors[id]}</ErrorMessage>}
                </div>
              ))}
            </InputWrapper>

            <ButtonWrapper>
              <SignupButton onClick={handleSignup}>회원가입</SignupButton>
            </ButtonWrapper>

            <Login onClick={() => navigate('/')}>로그인</Login>
          </Body>
        </BodyWrapper>
      </SignUpContainer>
    </motion.div>
  );
}

const SignUpContainer = styled(Container)`
  background: linear-gradient(179.98deg, #ffffff 20.02%, rgba(255, 243, 243, 0.671667) 73.6%, rgba(253, 226, 225, 0.51) 99.98%) !important;
`;

const Header = styled.header`
  position: relative;
  .logo {
    position: absolute;
    margin-top: 1.3rem;
    margin-left: -10.8rem;
  }
`;

const TextWrapper = styled.div`
  margin-top: 5rem;
  margin-left: 1rem;
  position: absolute;
  text-align: left;
`;

const PageName = styled.h1`
  font-size: 1.25rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  width: 100%;
`;

const InputName = styled.p`
  text-align: left;
  margin-left: 2rem;
  margin-top: 2rem;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
`;

const SignupButton = styled(BoxType._10radiux_Box)`
  background-color: #ff4f4dcc;
  border: 1px solid #ff4f4dcc;
  font-size: 1rem;
  width: 310px;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;

const Login = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    color: #0000004d;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  text-align: left;
  margin-left: 2rem;
  margin-top: 0.25rem;
`;

export default Signup;
