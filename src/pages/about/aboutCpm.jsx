import styled, { css } from "styled-components";

const Wraper = styled.div``;
/* ------------------------------------------- */
const ImageWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1rem;
  margin: 1rem 0;
  width: 100%;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  /* padding: 7px; */
  border-radius: 8px;
`;
/* ------------------------------------------- */
const Image = styled.img`
  width: ${({ w }) => w};
  height: auto;
  object-fit: contain;
  border-radius: 8px;
`;
/* ------------------------------------------- */
const Txt = styled.p`
  text-align: ${({ lng }) => (lng === "ar" ? "right" : "left")};
  margin-top: 1.5em;
  padding: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-family: ${({ lng }) => (lng === "ar" ? "tr" : "Segoe UI")};
`;
/* ------------------------------------------- */
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  /* background-color: red; */
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
`;
/* ---------------------------------------------- */
const SectionTitle = styled.div`
  /* width: 80%; */
  background-color: #f79335;
  color: black;
  padding: 0 1rem;
  border-radius: 4px;
`;

const Hr = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-color: rgba(255, 255, 255, 0.3);
`;

const selectBtnCss = css`
  color: white;
  border: 0;
  padding: 0.2rem 1rem;
  border-radius: 4px;
  width: 80%;

  font-size: 0.9rem;
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

const SelectBtn1 = styled.div`
  ${selectBtnCss}
  background-color:${({ type1 }) =>
    type1===true ? "rgba(255,255,255,.1)" : "transpernt"};
  border-bottom: ${({ type1 }) =>
    type1===true ? "3px solid rgba(250,0,0,0.9)" : "2px solid rgba(200,100,0,0.9)"};
`;

const SelectBtn2 = styled.div`
  ${selectBtnCss}
  background-color:${({ type1 }) =>
    type1===true ? "transpernt" : "rgba(255,255,255,.1)"};
  border-bottom: ${({ type1 }) =>
    type1===true ? "2px solid rgba(200,100,0,0.9)" : "3px solid rgba(250,0,0,0.9)"};
`;

export default {
  Txt,
  Wraper,
  ImageWraper,
  Image,
  CardWrapper,
  SectionTitle,
  Hr,
  SelectBtn1,
  SelectBtn2,
};
