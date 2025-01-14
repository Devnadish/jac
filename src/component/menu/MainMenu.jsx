import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import menuItem from "./enMenu.json";
import armenuItem from "./arMenu.json";
import styled from "styled-components";
import i18n from "../../i18n";
const LogoWraper = styled.div`
max-width: 230px;
width:100%;
display: flex;
align-items: center;
justify-content: center;
/* border:1px solid; */
/* height: 60px; */
position: relative;;
background-image: url("/jaclogo.png");
background-repeat: no-repeat;
background-size: contain;
background-position: center;
`;


const LogoTxtA = styled.p`

position: absolute;
bottom:0px;
left:${({langx})=>langx==="en" && "-300px"};
right:${({langx})=>langx==="ar" && "-110px"};
width: 100%;
padding: 3px;
display:block;
font-size:.8rem;
font-family: "cb";
/* text-align: right; */
color: rgba(255,255,255,.6);
background-color: rgba(55,55,55,.4);
border-radius:4px;

@media (max-width: 500px) {
 /* display:none; */
 right:${({langx})=>langx==="ar" && "-5px"};
  }

`;
const LogoTxtE = styled.p`
position: absolute;

/* left:${({langx})=>langx==="en" && "200px"}; */
/* right:${({langx})=>langx==="ar" && "210px"}; */
width: 100%;
bottom:0px;
padding: 3px;
font-size:.7rem;
font-family: "tr";
color: rgba(255,255,255,.6);
background-color: rgba(55,55,55,.4);
border-radius:4px;
@media (max-width: 500px) {
  /* display:none; */
  /* right:${({langx})=>langx==="en" && "0"}; */
  /* left:${({langx})=>langx==="en" && "-110px"}; */
  bottom:0px;
  }
`;


function MainMenu({ setLangDirection,language, setLanguage ,flag,setFlag}) {
  let pages = menuItem;
  // console.log(language);
  if (language === "ar") {
     pages = armenuItem;
  } else {
     pages = menuItem;
  }
  // console.log(language);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
const lang=()=>{
  setLanguage(pre=>pre === "ar" ? "en" : "ar");
  if (language === "ar") {
    i18n.changeLanguage("en");
    setLangDirection(pre=>"ltr");
    setFlag(pre=>"ar.svg")
  } else {
    i18n.changeLanguage("ar");
    setLangDirection(pre=>"rtl");
    setFlag(pre=>"en.svg")
  }
  handleCloseNavMenu()
}
  return (
    <AppBar position="sticky" color="warning" sx={{zIndex:100,borderRadius:1.5 }}>
      <Container maxWidth="xl" sx={{display:"flex",justifyContent:"space-between",}}>
        <Toolbar disableGutters >
          {/* ---------------------Moobilmenu Box Menu ---------------------- */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                padding: 0,
                margin: 0,
                
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  component={Link}
                  to={page.link}
                  key={page.id}
                 
                  onClick={handleCloseNavMenu}
                  sx={{display:"flex",justifyContent:"end"}}
                 
                >
                  <Typography textAlign="left" sx={{ fontFamily:"cb" }}>{page.name}</Typography>
                </MenuItem>
              ))}
              <MenuItem  sx={{display:"flex",justifyContent:"center"}}  onClick={lang}>
              
              <img src={flag} width={"25"} loading={"lazy"} />
              </MenuItem>
               
            </Menu>
          </Box>


          
          {/* ---------------------logo Box ---------------------- */}
          
          {/* --------------------Desk top -menu Box Menu ---------------------- */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "1rem",
              direction:language==="ar"? "rtl":"ltr"
            }}
          >
            {pages.map((page) => (
              // <Link to={page.link} underline={"none"}>
              <Button
                component={Link}
                to={page.link}
                key={page.id}
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" ,fontFamily:"cb"}}
              >
                {page.name}
              </Button>




              // </Link>
            ))}
            <Button  sx={{display:"flex",justifyContent:"center"}}  onClick={lang}>
             
              <img src={flag} width={"25"} loading={"lazy"} />
              </Button>
              
          </Box>

          {/* ---------------------Language Box ---------------------- */}
          {/* <Language
            language={language}
            setLanguage={setLanguage}
            setLangDirection={setLangDirection}
           
          
          /> */}
        </Toolbar>
        <LOGO language={language} />
      </Container>
    </AppBar>
  );
}
export default MainMenu;
/* ------------------------------------------------------ */
const LOGO = ({language}) => {
  return (
    <>
      
        <LogoWraper>

        {/* {language==="ar" ?  <LogoTxtA langx={language}>الخريمي التجارية</LogoTxtA>: <LogoTxtE langx={language}>Alkhuraimi Trading</LogoTxtE>} */}

       
       
        {/* <LogoTxtE langx={language}> Saeed Alkhuraimi Trading Est </LogoTxtE>
        <LogoTxtA langx={language}>موسسة سعيد الخريمي التجارية</LogoTxtA> */}
        </LogoWraper>
     
    </>
  );
};
/* ------------------------------------------------------ */
