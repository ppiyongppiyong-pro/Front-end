import React, { useState, useCallback, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

// 컴포넌트
import InputText from "../components/Chat/InputText";
import Message from "../components/Chat/Message";

// 스타일
import { Container, BodyWrapper, Body } from "../styles/Global";
import back from "../assets/chat/back.svg";

// 수정된 CallGPT
import { CallGPT } from "../components/Chat/gpt";

const Chat = () => {
  const navigate = useNavigate();
  const backBtn = () => navigate("/MapPage");

  // 음성 인식
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const toggleListening = useCallback(() => {
    if (listening) {
      SpeechRecognition.stopListening();
      setInput(transcript);
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ language: "ko-KR", continuous: true });
    }
  }, [listening, transcript, resetTranscript]);

  // 상태
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isInputting, setInputting] = useState(false);

  // 스크롤
  const messageEndRef = useRef(null);
  const scrollBottom = useCallback(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // 스크롤 유지
  useEffect(() => {
    scrollBottom();
  }, [messages, scrollBottom]);

  // 초기 안내 메시지
  const greetedRef = useRef(false);
  useEffect(() => {
    if (!greetedRef.current && messages.length === 0) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "안녕하세요, 응급 상황 대처 도우미 뿅뿅입니다😊 궁금한 점이 있다면 무엇이든 물어보세요!",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      greetedRef.current = true;
    }
  }, [messages]);

  // 입력 처리
  const handleInputChange = useCallback((value) => {
    setInput(value);
    setInputting(true);
    setTimeout(() => setInputting(false), 500);
  }, []);

  // 전송
  const handleSendMessage = useCallback(async () => {
    if (!input.trim()) {
      alert("메시지를 입력하세요!");
      return;
    }

    const userMessage = {
      role: "user",
      content: input.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // (A) 기존 messages 길이를 기록 → 새로 추가될 '로딩 메시지' 인덱스 계산
    const prevLength = messages.length;
    // 로딩 메시지는 prevLength + 1 인덱스가 될 예정

    // 사용자 + 로딩 메시지를 한 번에 추가
    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        role: "assistant",
        content: "",
        isLoading: true,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);

    setInput("");
    setLoading(true);
    scrollBottom();

    try {
      // GPT 호출
      const response = await CallGPT({ prompt: userMessage.content });

      // (B) 응답 오면, '로딩 메시지' 인덱스를 이용해 메시지 교체
      // 사용자 메시지 1개 + 로딩 메시지 1개 → 새로 추가된 2개  
      // 로딩 메시지 인덱스 = prevLength + 1
      const loadingIndex = prevLength + 1;

      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === loadingIndex
            ? {
                ...msg,
                content: `[${response.title}]\n\n${response.emergency_detail}`,
                isLoading: false,
              }
            : msg
        )
      );
    } catch (error) {
      console.error("AI 응답 에러:", error);

      // 에러 시 로딩 메시지 교체
      const loadingIndex = messages.length + 1; // or prevLength + 1
      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === loadingIndex
            ? {
                ...msg,
                content: "죄송합니다. 응답을 가져오는 데 문제가 발생했습니다.",
                isLoading: false,
              }
            : msg
        )
      );
    } finally {
      setLoading(false);
    }
  }, [input, messages, scrollBottom]);

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
              onClick={backBtn}
            />
          </Header>
          <Body>
            <HomepageMessage>
              {messages.map((message, idx) => (
                <Message
                  key={idx}
                  $role={message.role}
                  content={message.content}
                  isLoading={message.isLoading || false}
                  isInputting={isInputting}
                  timestamp={message.timestamp}
                />
              ))}
              <div ref={messageEndRef} />
            </HomepageMessage>

            <HomepageInput>
              <MessageInput>
                <button className="speech" onClick={toggleListening}>
                  {listening ? (
                    <HiSpeakerXMark style={{ color: "#FF4F4D" }} size={25} />
                  ) : (
                    <HiSpeakerWave style={{ color: "#FF4F4D" }} size={25} />
                  )}
                </button>
                <InputText
                  placeholder={listening ? "녹음 중..." : "메시지를 입력하세요"}
                  value={input}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <button className="send" onClick={handleSendMessage} disabled={isLoading}>
                  <RiSendPlaneFill style={{ color: "white" }} size={16} />
                </button>
              </MessageInput>
            </HomepageInput>
          </Body>
        </BodyWrapper>
      </Container>
    </motion.div>
  );
};

export default Chat;

// styled-components...
const Header = styled.header`
  .back {
    position: absolute;
    margin-top: 1.3rem;
    margin-left: -10.8rem;
  }
  margin-bottom: 5rem;
`;

const HomepageMessage = styled.div`
  margin: auto;
  padding: 0 1em;
  height: 840px;
  margin-bottom: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: left;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const HomepageInput = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 6em 2em 2em 2em;
  width: 100%;
  background: linear-gradient(0deg, #fff 25%, transparent);
  box-sizing: border-box;
`;

const MessageInput = styled.div`
  position: relative;
  margin: auto;
  max-width: 390px;

  .speech {
    position: absolute;
    left: 5px;
    bottom: 10px;
    padding: 0 12px;
    height: 30px;
    width: 30px;
    background-color: transparent;
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }

  .send {
    position: absolute;
    right: 11px;
    bottom: 9px;
    width: 35px;
    height: 35px;
    background: #ff7775;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px 0px rgba(69,66,66,0.75);
  }
`;
