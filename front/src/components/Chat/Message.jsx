import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Message = ({
  content,
  className,
  $role,
  isLoading = false,
  timestamp,
}) => {
  // AOS 초기화
  useEffect(() => {
    AOS.init({ duration: 1000 }); // 애니메이션 지속 시간 설정
  }, []);

  console.log("----- 메시지 테스트 -----");
  console.log("로딩 중인지 확인>>>> ", isLoading);
  console.log("역할 확인>>>> ", $role);
  console.log("------------------------");

  return (
    <MessageComponent className={className} $role={$role}>
      <MessageProfileComponent $role={$role}>
        <span className="emoji">{$role === "user" ? "" : "🚨"}</span>
        <span className="timestamp">{timestamp}</span>
      </MessageProfileComponent>
      <MessageContent
        data-aos={$role === "user" ? "" : "fade-right"}
      >
        {isLoading ? (
          <span>...Loading</span>
        ) : (
          <span>
            {content
              .replace(/😊\s*/g, "😊\n")
              .replace(/\.\s*/g, ".\n")
              .replace(/\\n/g, "\n")
              .split("\n")
              .map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
          </span>
        )}
      </MessageContent>
    </MessageComponent>
  );
};

export const MessageComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;

  ${(props) =>
    props.$role === "user" &&
    `
      align-items: flex-end;
    `}
`;

export const MessageProfileComponent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  ${(props) =>
    props.$role === "user" &&
    `
      flex-direction: row-reverse;
    `}

  && .emoji {
    font-size: 20px;
  }

  && .timestamp {
    margin: 0 5px;
    font-size: 0.8em;
    color: #888;
  }
`;

const MessageContent = styled.div`
  border: 1px solid #FF4F4D;
  color: #FF4F4D;
  border-radius: 15px;
  padding: 10px;
  max-width: 68%;
  word-wrap: break-word;
`;

export default Message;