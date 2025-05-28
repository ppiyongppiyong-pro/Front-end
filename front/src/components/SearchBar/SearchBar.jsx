import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import debounce from 'lodash.debounce';
import MagnifyingGlassIcon from '../../assets/search/magnifying_glass.svg?react';
import { BoxType } from '../Box/BoxType';
import SpeechButton from '../Button/SpeechButton';

const SearchBarContainer = styled(BoxType._4radiux_Box)`
  background-color: #FF4F4D1A;
  border: 1px solid #FF4F4D1A;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

const InputField = styled.input`
  border: none;
  background-color: transparent;
  flex-grow: 1;
  padding: 5px;
  font-size: 14px;
  outline: none;
  height: ${(props) => props.height || '30px'};
  
  &::placeholder {
    color: #aaa;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${(props) => props.height || '30px'};
`;

const SuggestionBox = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SuggestionItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f1f1f1;
  }

  .right-arrow {
    color: #aaa;
    font-size: 14px;
  }
`;

function SearchBar({ width, height, onSearchResults }) {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const suggestionRef = useRef(null);
  const accessToken = localStorage.getItem('accessToken');

  const fetchSuggestions = debounce(async (text) => {
    if (!text || text.startsWith('#')) return setSuggestions([]);
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_APP_URI}/api/v1/manuals/autocomplete`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          EmergencyName: text,
          name: text,
        },
      });
      console.log('자동완성 응답 데이터:', response.data);
      if (Array.isArray(response.data.data)) {
        setSuggestions(response.data.data);
      } else {
        console.warn('예상한 배열이 아닙니다:', response.data);
        setSuggestions([]);
      }
    } catch (err) {
      console.error('자동완성 실패:', err);
    }
  }, 500);

  const performSearch = async (text) => {
    if (!text.trim()) return;

    setLoading(true);
    let url = '';
    let params = {};

    if (text.startsWith('#')) {
      url = `${import.meta.env.VITE_APP_APP_URI}/api/v1/manuals/keyword`;
      params = { keyword: text.substring(1) };
    } else {
      url = `${import.meta.env.VITE_APP_APP_URI}/api/v1/manuals`;
      params = { emergencyName: text, name: text };
    }

    try {
      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
        params,
      });
      console.log('검색 결과:', res.data);
      if (Array.isArray(res.data.data)) {
        onSearchResults(res.data.data);
      } else {
        console.warn('검색 결과가 배열이 아닙니다:', res.data);
        onSearchResults([]);
      }
      setSuggestions([]);
    } catch (err) {
      console.error('검색 실패:', err);
      alert('검색 결과를 불러오지 못했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    fetchSuggestions(text);
  };

  const handleSuggestionClick = (item) => {
    setSearchText(item);
    setSuggestions([]);
    performSearch(item);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      performSearch(searchText);
    }
  };

  const handleSpeechRecognized = (text) => {
    setSearchText(text);
    performSearch(text);
  };

  const handleListeningStateChange = (listening) => {
    setIsListening(listening);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (suggestionRef.current && !suggestionRef.current.contains(e.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <SearchBarContainer width={width} height={height} ref={suggestionRef}>
      <IconWrapper height={height}>
        <MagnifyingGlassIcon width={15} height={15} />
      </IconWrapper>
      <InputField
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={loading}
        height={height}
        placeholder="#검색어 로 입력하면 키워드 검색이 가능해요!"
      />
      <IconWrapper height={height}>
        <SpeechButton
          mode="stt"
          onRecognized={handleSpeechRecognized}
          onListeningChange={handleListeningStateChange}
          isListening={isListening}
          width={15}
          height={15}
        />
      </IconWrapper>
      {suggestions.length > 0 && (
        <SuggestionBox>
          {suggestions.map((item, idx) => (
            <SuggestionItem key={idx} onClick={() => handleSuggestionClick(item)}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MagnifyingGlassIcon width={13} height={13} />
                {item}
              </span>
              <span className="right-arrow">↗</span>
            </SuggestionItem>
          ))}
        </SuggestionBox>
      )}
    </SearchBarContainer>
  );
}

export default SearchBar;
