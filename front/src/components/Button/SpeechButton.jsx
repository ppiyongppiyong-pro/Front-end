import React, { useCallback } from 'react';
import styled from 'styled-components';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { ReactComponent as SpeechIcon } from '../../assets/speech/speech_mark.svg';

const SpeechButton = ({ onRecognized, width = 24, height = 24 }) => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const toggleListening = useCallback(() => {
    if (listening) {
      SpeechRecognition.stopListening();
      onRecognized(transcript);  // 음성 인식 완료 후 검색어 전달
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ language: 'ko-KR', continuous: true });
    }
  }, [listening, transcript, resetTranscript, onRecognized]);

  return (
    <Button onClick={toggleListening} $listening={listening}>
      <SpeechIcon width={width} height={height} />
    </Button>
  );
};

// 스타일링: transient props ($listening) 적용
const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    fill: ${(props) => (props.$listening ? '#FF4F4D' : '#E60400')};
    transition: fill 0.3s ease;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export default SpeechButton;
