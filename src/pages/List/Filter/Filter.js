import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-multi-date-picker';
import FilterModal from './FilterModal/FilterModal';
import arrowImage from '../../../assets/images/arr_select.png';
import closeButton from '../../../assets/images/btn_close.png';
import countButton from '../../../assets/images/btn_count.png';
import resetButton from '../../../assets/images/btn_reset.png';
import { StyledEngineProvider } from '@mui/styled-engine';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const Filter = ({
  personCount,
  setPersonCount,
  handlePersonSubmit,
  increaseCount,
  decreaseCount,
  countModalActive,
  stayType,
  handleStayType,
  handleStaySubmit,
  handleCountModal,
  stayModalActive,
  handleStayModal,
  handleDate,
  startDatePick,
  endDatePick,
  values,
  setValues,
  handleSearch,
  handleSearchValue,
  searchValue,
  handleResetButton,
  selectLocation,
  handleLocationValue,
}) => {
  const datePickerRef = useRef();
  const [isModal, setModal] = useState(false);

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  const months = [
    ['1월', 'j'],
    ['2월', 'f'],
    ['3월', 'm'],
    ['4월', 'a'],
    ['5월', 'm'],
    ['6월', 'j'],
    ['7월', 'j'],
    ['8월', 'a'],
    ['9월', 's'],
    ['10월', 'o'],
    ['11월', 'n'],
    ['12월', 'd'],
  ];

  const handleLocationModal = () => {
    setModal(!isModal);
  };

  return (
    <StyledEngineProvider injectFirst>
      <FilterContainer>
        <FilterTop>
          <FilterForm onSubmit={handleSearch}>
            <FilterTitle>여행지/숙소</FilterTitle>
            <FilterSearch
              type="text"
              value={searchValue || ''}
              onChange={handleSearchValue}
            />
          </FilterForm>
          <LocationButton type="button" onClick={handleLocationModal}>
            {selectLocation ? selectLocation : '지역선택'}
            {isModal && (
              <FilterModal handleLocationValue={handleLocationValue} />
            )}
          </LocationButton>
          <FilterTitle>날짜</FilterTitle>
          <DatePicker
            numberOfMonths={2}
            value={values}
            months={months}
            weekDays={weekDays}
            ref={datePickerRef}
            onChange={values => setValues(values)}
            range
          >
            <DateSubmit
              type="button"
              startDay={startDatePick}
              endDay={endDatePick}
              onClick={() => {
                handleDate();
                datePickerRef.current.closeCalendar();
              }}
            >
              적용
            </DateSubmit>
          </DatePicker>
          <ButtonWrap>
            <ModalOpen onClick={handleCountModal}>인원:{personCount}</ModalOpen>
            {countModalActive && (
              <FilteredModal>
                <ModalTitleWrap>
                  <ModalTitle>인원</ModalTitle>
                  <ModalClose type="button" onClick={handleCountModal} />
                </ModalTitleWrap>
                <ModalPersonContent>
                  <SortPerson>성인</SortPerson>
                  <PersonCount>
                    <DecreaseButton type="button" onClick={decreaseCount} />
                    <Account value={personCount} onChange={setPersonCount} />
                    <IncreaseButton type="button" onClick={increaseCount} />
                  </PersonCount>
                </ModalPersonContent>
                <SubmitWrap>
                  <PersonSubmit
                    value={personCount}
                    onClick={handlePersonSubmit}
                  >
                    적용하기
                  </PersonSubmit>
                </SubmitWrap>
              </FilteredModal>
            )}
          </ButtonWrap>
          <ButtonWrap>
            <ModalOpen onClick={handleStayModal}>
              {stayType ? stayType : '스테이 유형'}
            </ModalOpen>
            {stayModalActive && (
              <FilteredModal>
                <ModalTitleWrap>
                  <ModalTitle>스테이 유형</ModalTitle>
                  <ModalClose type="button" onClick={handleStayModal} />
                </ModalTitleWrap>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="게스트하우스"
                      control={<Radio />}
                      label="게스트하우스"
                      onClick={handleStayType}
                    />
                    <FormControlLabel
                      value="독채"
                      control={<Radio />}
                      label="독채"
                      onClick={handleStayType}
                    />
                  </RadioGroup>
                </FormControl>
                <SubmitWrap>
                  <PersonSubmit
                    type="button"
                    value={stayType}
                    onClick={handleStaySubmit}
                  >
                    적용하기
                  </PersonSubmit>
                </SubmitWrap>
              </FilteredModal>
            )}
          </ButtonWrap>
          <FilterResetButton type="button" onClick={handleResetButton} />
        </FilterTop>
        <SearchButton>Search</SearchButton>
      </FilterContainer>
    </StyledEngineProvider>
  );
};

export default Filter;

const FilterContainer = styled.div`
  margin-top: 50px;
  border-top: 3px solid #000;
  button {
    cursor: pointer;
  }
`;

const FilterTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #e9e9e9;

  .rmdp-arrow {
    border: solid #000;
    border-width: 0 2px 2px 0;
  }

  .rmdp-week-day {
    color: #000;
  }

  .rmdp-input {
    width: 210px;
    height: 36px;
    line-height: 36px;
    font-size: 15px;
    padding: 0 10px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }

  .rmdp-arrow-container {
    display: none !important;
  }

  .rmdp-day {
    &.rmdp-range {
      background-color: #000;
      color: #000;

      span {
        color: #fff;
      }
    }

    &.rmdp-today {
      span {
        background-color: #000;
        color: #fff;
      }
    }
    span {
      color: #000;

      &:not(.rmdp-disabled):not(.rmdp-day-hidden) {
        &:hover {
          background-color: #000;
        }
      }
    }
  }
`;
const FilterForm = styled.form``;

const LocationButton = styled.button`
  margin-right: 10px;
  width: 100px;
  height: 36px;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  background: #fcfcfc;
`;

const ButtonWrap = styled.div`
  position: relative;
  margin-left: 10px;
`;

const FilterResetButton = styled.button`
  position: absolute;
  top: 12px;
  right: 0;
  width: 36px;
  height: 36px;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  background: #f9f9f9 url(${resetButton}) no-repeat center center;
  background-size: 36px;
`;

const ModalOpen = styled.button`
  position: relative;
  width: 210px;
  height: 36px;
  line-height: 36px;
  font-size: 15px;
  padding: 0 10px;
  text-align: left;
  border: 1px solid #c0c4d6;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    right: 0;
    width: 36px;
    height: 36px;
    background: url(${arrowImage}) no-repeat center center;
    background-size: 20px;
  }
`;

const FilteredModal = styled.div`
  position: absolute;
  top: 130%;
  left: 0;
  padding: 20px;
  background: #fff;
  border: 1px solid #fafafa;
  box-shadow: 4px 4px 10px rgb(0 0 0 / 30%);
  z-index: 1;

  .MuiFormGroup-root {
    padding-top: 10px;
  }
`;

const ModalTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.p`
  font-size: 18px;
`;

const ModalClose = styled.button`
  width: 30px;
  height: 30px;
  font-size: 0;
  border: 0;
  background: url(${closeButton}) no-repeat center;
  background-size: 30px;
`;

const ModalPersonContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const SortPerson = styled.p`
  font-size: 14px;
  white-space: nowrap;
`;

const PersonCount = styled.div`
  display: flex;
  margin-left: 70px;
`;

const DecreaseButton = styled.button`
  width: 32px;
  height: 32px;
  font-size: 0;
  border: 1px solid #e4e4e4;
  background: url(${countButton}) no-repeat 0 0;
  background-size: 29px 100px;
`;

const Account = styled.input`
  width: 40px;
  text-align: right;
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
`;

const IncreaseButton = styled.button`
  width: 32px;
  height: 32px;
  font-size: 0;
  border: 1px solid #e4e4e4;
  background: url(${countButton}) no-repeat 0 -50px;
  background-size: 29px 100px;
`;

const SubmitWrap = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const PersonSubmit = styled.button`
  font-size: 14px;
  width: 150px;
  background: #000;
  color: #fff;
  border: #000;
  padding: 8px 0;
  border-radius: 20px;
`;

const FilterTitle = styled.span`
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  margin-right: 10px;
  vertical-align: middle;
`;

const DateSubmit = styled.button`
  font-size: 14px;
  width: 150px;
  background: #000;
  color: #fff;
  border: #000;
  padding: 8px 0;
  margin: 20px 0;
  border-radius: 20px;
`;

const FilterSearch = styled.input`
  position: relative;
  width: 210px;
  height: 36px;
  line-height: 36px;
  font-size: 15px;
  padding: 0 10px;
  margin-right: 10px;
  text-align: left;
  border: 1px solid #c0c4d6;
  border-radius: 5px;
  background: #fff;
`;

const SearchButton = styled.button`
  display: block;
  font-size: 14px;
  width: 150px;
  color: #fff;
  border: #000;
  border-radius: 20px;
  margin: 30px auto 0;
  padding: 8px 0;
  background: #000;
`;
