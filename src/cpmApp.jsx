import styled,{keyframes} from "styled-components";


const keyf=keyframes`
  0%{
    transform: translateY(-100%);
  }
  50%{
    transform: translateY(-50%);
  }
  100%{
    transform: translateY(0);
  }
`;




const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 300px;
  width: 100%;
  max-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.bgLighter};
  animation: ${keyf}  1s linear;
 z-index: 0;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.text};
  position: absolute;
 
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 10px 10px;
  z-index:1;
  @media (max-width: 500px) {
    /* padding: 10px 20px; */
    flex-direction: column;
    justify-content: center;
    background-color:"green";
    /* top:80px; */
  }
`;











const CallBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  position: fixed;
  bottom:15px;
  left:15px;
  max-width: 60px;
  max-height: 60px;
  width: 100%;
  height: 100%;
  border:2px solid #fff;
  
  border-radius: 50px!important;
  box-shadow: 1px 1px 5px #555;
  background-color: #32a852;
  cursor: pointer !important;
 z-index: 40;
`;



const LoaderWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  width:250px;
height: 250px;
 
position: relative;;
background-image: url("/loaderLogo.png");
background-repeat: no-repeat;
background-size: contain;

border-radius: 8px;
  
`;

const LogoTxtA = styled.p`
width: 100%;
/* position: absolute;
bottom:-90px;
left:0px; */
color: white;
 
font-size:2rem;
font-family: "tb";
@media (max-width: 500px) {
  font-size:1rem;
  }

`;
const LogoTxtE = styled.p`
width: 100%;
color: white;
/* position: absolute;
bottom:-40px;
left:0px; */
 
font-size:2rem;
font-family: "tb";
@media (max-width: 500px) {
  font-size:1.2rem;
  }


`;


export default {Container,BodyWrapper,CallBtn,LoaderWraper,LogoTxtA,
    LogoTxtE}