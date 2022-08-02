import React from 'react';
import styled from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';



const Container = styled.div`
height: 60px;
`;

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
align-items:center;
justify-content: space-between;
`;
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;
const Language = styled.span`
font-size:14px;
cursor:pointer;
`;
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`;
const Input = styled.input`
border:none;
`;

const Center = styled.div`
flex:1;
text-align:center;
`;
const Logo = styled.h1`
font-weight:bold;
text-transform:uppercase;
`;

const Right = styled.div`flex:1;
display:flex;
justify-content: space-around;
gap:5px;
`;
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
display:flex;
align-items:space-between;
`;
const Badge = styled.div`
transform: translateY(-14px);
border-radius:50%;
background:green;
width:16px;
height:16px;
display:flex;
justify-content:center;
align-items:center;
`;
const Bitem = styled.span`

color:#fff;
font-size:14px;
font-weight:bold;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <SearchIcon />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    Akash
                </Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>LOGIN</MenuItem>
                <MenuItem>
                <FontAwesomeIcon icon={faCartShopping} size='lg' color='green' />
                {/* size-> lg xs 6x, color-> black red green etc */}
                <Badge>
                    <Bitem>2</Bitem>
                </Badge>
                
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar