import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wraper = styled.div``;

/* ------------------------------------------- */
const ImageWraper = styled.div`
  display: flex;
  align-items: end;
  justify-content: flex-end;
  overflow: hidden;
  width: 100%;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  padding: 7px;
  border-radius: 8px;
`;
/* ------------------------------------------- */
const Image = styled.img`
  width: 100%;
  height: auto;
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
  width: 98%;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
/* ------------------------------------------- */
const SliderWraper = styled.div`
  margin: auto;
  width: 80%;
  padding: 0;
`;

/* ----------------___________------------------------------ */
const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80%;
  background-color: #474442;
  border: 1px solid #6d6b6a;
  color: #dddddd;
  border-radius: 6px;
`;
/* *************************************************** */
const ModelTxt = styled.p`
  text-align: ${({ lng }) => (lng === "ar" ? "right" : "left")};
  padding: 0.5rem;
  font-size: 0.8rem;
  font-family: ${({ lng }) => (lng === "ar" ? "tr" : "Segoe UI")};
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

/* *************************************************** */
const LTxt = styled.p`
  text-align: ${({ lng }) => (lng === "ar" ? "right" : "left")};
  padding: 0.5rem;
  font-size: 1rem;
  font-family: ${({ lng }) => (lng === "ar" ? "tr" : "Segoe UI")};
`;
/* *************************************************** */
const RTxt = styled.p`
  text-align: ${({ lng }) => (lng === "ar" ? "right" : "left")};
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: #098123;
  font-family: ${({ lng }) => (lng === "ar" ? "tr" : "Segoe UI")};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;
/* -------------------------- */
const LinkTxt = styled(Link)`
  display: flex;
  padding: 0;
  margin: 0;
`;

const VerticalDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  gap: 1em;
`;
/* --------------------------------------- */
const BackArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.5rem;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #777777;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;
/* ---------------------------------------------------- */
const CpmSlider = styled(Slider)`
  padding: 5px;
  background-color: #9c9c9c;
`;
const ProdctPageWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const TableWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  margin-top: 1rem;
  overflow: auto;
  @media (max-width: 500px) {
    font-size: 0.6rem;
    overflow: auto;
  }
`;

const SliderImage = styled.img`
  border-radius: 8px;
  max-width: 50%;
  width: 80%;
  height: auto;
`;
/* ----------------------------------------- */
const SelecttionWraper = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
`;
/* ----------------------------------------- */
const BtnSelect = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: #6d6c6c;
  color: #e4e4e4;
  width: 100%;
  font-size: 1rem;
  height: 55px;
  margin: auto;
  cursor: pointer;
`;
/* ----------------------------------------- */
export default {
  Txt,
  Wraper,
  ImageWraper,
  Image,
  CardWrapper,
  SectionTitle,
  SliderWraper,
  CpmSlider,
  SliderImage,
  ProdctPageWraper,
  TableWraper,
  ModelTxt,
  RTxt,
  LTxt,
  BackArrow,
  LinkTxt,
  Container,
  SelecttionWraper,
  BtnSelect,
  VerticalDiv,
};
