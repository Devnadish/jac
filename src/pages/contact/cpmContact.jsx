import styled from "styled-components";

const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  /* flex-direction: column; */
  margin: auto;
  border: 0.5px solid  rgba(255, 255, 255, 0.3);
  padding: 1rem;
  border-radius: 8px;
  vertical-align: bottom;
  margin-top: 1rem;
  max-width: 500px;
  width: 100%;
`;

/* ------------------------------------------- */
const InputWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  padding: 0.8rem;
  border-radius: 8px;
 
  width: ${({ width }) =>  width};
`;
const LabelTxt = styled.label``;
/* ------------------------------------------ */
const Input = styled.input`
  outline: none;
 
  width: 100%;
`;
/* ------------------------------------------- */

const Txt = styled.p`
  text-align: ${({ lng }) => (lng === "ar" ? "right" : "left")};
  margin-top: 1.5em;
  padding: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-family: ${({ lng }) => (lng === "ar" ? "tr" : "Segoe UI")};
`;


const SendBtn = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: .5rem;
  width: 50%;
  height: 30px;
  outline: none;
  background-color: blanchedalmond;
  border-radius: 8px;
  box-shadow: 1px 1px 5px #555;
  background-color: #32a852;
  color: white;
  font-family:"cb"
  
  
`;
/* ------------------------------------ */

/* ------------------------------------------- */
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
/* ---------------------------------------------- */
const SectionTitle = styled.div`
  width: 100%;
  background-color: #f79335;
  color: black;
  border-radius: 8px;
`;



const Input1 = styled.input`
  
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: black;
  background-color: white;

  outline: none;
  padding: 5px;
  width: 100%;
  margin-top: 15px;
`;


const Inputarea = styled.textarea`
  
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: black;
  background-color: white;
  resize: vertical;
  outline: none;
  padding: 5px;
  width: 100%;
  margin-top: 15px;
`;

export default {
  Txt,
  Wraper,
  Input,
  CardWrapper,
  SectionTitle,
  InputWraper,
  LabelTxt,
  SendBtn,
  Input1,
  Inputarea
};
