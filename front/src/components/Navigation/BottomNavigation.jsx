import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import logo_icon from '../../assets/bottom_bar/logo_icon.svg';
import manual_icon from '../../assets/bottom_bar/manual_icon.svg';
import map_icon from '../..//assets/bottom_bar/map_icon.svg';
import chat_icon from '../../assets/bottom_bar/chat.svg';
import my_icon from '../../assets/bottom_bar/my_icon.svg';

function BottomNavigation() {
  const navigate = useNavigate();

  return (
    <Footer>
      <Base /> {/* 바 배경 직접 스타일링 */}
      <StyledIcon src={map_icon} alt="map_icon" style={{ marginLeft: "-10rem" }} onClick={() => navigate("/MapPage")} />
      <StyledIcon src={manual_icon} alt="manual_icon" style={{ marginLeft: "-6rem" }} onClick={() => navigate("/Manual")} />
      <StyledLogoIcon src={logo_icon} alt="logo_icon" />
      <StyledIcon src={chat_icon} alt="chat_icon" style={{ marginLeft: "3.7rem" }} onClick={() => navigate("/Chat")} />
      <StyledIcon src={my_icon} alt="my_icon" style={{ marginLeft: "8rem", marginTop: "-3.5rem" }} onClick={() => navigate("/Mypage")} />
    </Footer>
  );
}

export default BottomNavigation;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 50%;                      
  transform: translateX(-50%);    
  width: 22rem;                   
  height: 5rem;
  z-index: 100;
`;

const Base = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #ffffff, #fceeee);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.08);
  z-index: -1;
`;

const StyledIcon = styled.img`
  position: absolute;
  bottom: 1rem;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledLogoIcon = styled.img`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;
