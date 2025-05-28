import React, { useState, useEffect } from 'react';
import EditIcon from '../../assets/input/edit.svg';
import styled from 'styled-components';
import { BoxType } from '../Box/BoxType';
import axios from 'axios';

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: ${(props) => props.height || 'auto'};
  margin-bottom: 0.75rem;
`;

const InputName = styled.p`
  text-align: left;
  margin-left: 0.5rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  width: 100%;
`;

const InputContainer = styled(BoxType._10radiux_Box).withConfig({
  shouldForwardProp: (prop) => prop !== 'editable'
})`
  background-color: ${({ editable }) => (editable ? '#ffffff' : '#FF4F4D1A')};
  border: 1px solid #FF4F4D;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  height: ${(props) => props.height || '2.5rem'};  

  &:hover {
    background-color: ${({ editable }) => (editable ? '#ffffff' : '#FF4F4D1A')};
    border-color: #FF4F4D;
  }
`;

const InputField = styled.input`
  border: none;
  background-color: transparent;
  flex-grow: 1;
  padding: 4px 0;
  font-size: 0.875rem;
  outline: none;
  height: 100%;
  cursor: ${(props) => (props.readOnly ? 'not-allowed' : 'auto')};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
`;

function EditableInputBox({
  id,
  width,
  height,
  label,
  value = '',
  canEdit = true, 
  patchKey,
  onValueChange = () => {},
}) {
  const [isEditable, setIsEditable] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handleIconClick = () => {
    if (!isEditable) {
      setIsEditable(true);
      return;
    }

    if (patchKey) {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      axios.patch(`${import.meta.env.VITE_APP_APP_URI}/api/v1/members/profiles`, {
        [patchKey]: currentValue
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        alert(`${label} 수정 완료`);
        onValueChange(currentValue);
        setIsEditable(false); 
      })
      .catch(err => {
        console.error(`${label} 수정 실패`, err);
        alert('수정에 실패했습니다.');
      });
    }
  };

  return (
    <InputBoxContainer height={height}>
      <InputName>{label}</InputName>
      <InputContainer width={width} height={height} editable={isEditable}>
        <InputField
          id={id}
          type="text"
          height={height}
          readOnly={!isEditable}
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        />
        {canEdit && (
          <IconWrapper onClick={handleIconClick} height={height}>
            <img src={EditIcon} alt="edit" style={{ width: 15, height: 15 }} />
          </IconWrapper>
        )}
      </InputContainer>
    </InputBoxContainer>
  );
}

export default EditableInputBox;
