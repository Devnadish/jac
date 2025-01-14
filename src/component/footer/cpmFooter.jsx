import styled from "styled-components";
const Wraper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  margin-top: 50px;

  width: 100%;
  background-color: #a8a8a84c;
  border-top: 1px solid;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 1px 1px 5px #555;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ImageWrpaer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  /* background-image:url("./whitelogo.png"); */
`;
const Image = styled.img`
  width: 80px;
  height: auto;
`;

const Linemsg1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 40px;
  background-color: green;
  border-radius: 8px;
  border: 1px solid white;
  @media (max-width: 500px) {
   font-size: .8rem;
  }
`;

const Linemsg2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: #6d7457;
  border-radius: 8px;
  border: 1px solid white;
  @media (max-width: 500px) {
   font-size: .8rem;
  }
`;

const Agncy = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
  width: 60%;
  border-radius: 8px;
  padding: .5rem;
  border: 1px solid rgba(255,255,255,.4);

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Hr = styled.hr`
  margin: 5px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const SubAgncy = styled.div`
  width: 38%;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,.4);
  padding: .5rem;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Txt = styled.p`
  padding: .5rem 1rem;
  font-size: 1.1rem;
  @media (max-width: 500px) {
   font-size: .8rem;
  }
`;
export default {
  Wraper,
  Txt,
  ImageWrpaer,
  Image,
  Linemsg1,
  Linemsg2,
  Agncy,
  SubAgncy,
  Hr
};
