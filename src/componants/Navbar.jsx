import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {  Button, Link, ListItem, Stack,} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { makeStyles } from "@mui/styles";
import logo from './img/mycoffee.png'
import { ArrowDropDown, } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useState , useEffect, useRef } from 'react';
let k =0
const SearchGerr  = styled('div')(()=>({
  display:'flex',
  alignItems:'center',
  backgroundColor:'#ffc107',
  borderRadius:'5px',
  padding: '0 8px'
})
  
)
const StyledInputBase = styled(InputBase)(() => ({
  '& .MuiInputBase-input': {
    backgroundColor:'#fff',
    borderRadius:'5px',
    padding: '8px 12px',
      '&:focus': {
        boxShadow: "inset 0 -1px 0 #dddddd00, 1px 1px 6px #ffc107, -1px -1px 6px #ffc107"

      },

  },
}));
const Main = styled('div')(() => ({
    display:'flex',
    justifyContent:'space-between',
    backgroundColor:'#5A020Cce',
    padding:'8px 16px',
    position: "sticky;",
     alignItems:"center",
      top:" 0px;",
      zIndex:" 99999;",

  }));

const logoStyle = makeStyles({
  linkForImageLogo:{
    display:'flex',
    alignItems:'center',
    gap: '8px',
    textDecoration:'none !important',
    minWidth:"140px",
    fontSize: '1.25rem', 
    cursor: 'pointer',
    transition: '0.5s',
    "&:hover": {
      textShadow: '1px 1px 10px #fff, -1px -1px 10px #fff',
      transform: 'rotate(-1deg)'
    }

  },
  imgLogo :{
    width:"40px" , height:"40px%"
  },
  itemeList:{
    whiteSpace:'nowrap',
    position:"relative",
    cursor: 'pointer',
    transition: '0.5s',
    textTransform:'capitalize',
    color:'#fff',
    "&:hover": {
      textShadow: '1px 1px 10px #fff, -1px -1px 10px #fff',
      marginLeft:'16px'
    }

  },
  dropJoin:{
    display:"none"
  },
  dropActive:{
    position: "absolute",
    top: '58px',
    display: 'flex',
    flexDirection: "column",
    justifyContent:"space-between",
    left: "50px",
    padding: "8px 2px",
    border:"0.8px solid rgba(0,0,0,.15)",
    width:"calc(100% + 3rem)",
    overflowX: "hidden",

  },
  dropLink:{
    "&.MuiLink-root":{
      display: "block",
      width: "100%",
      padding: ".25rem 1.5rem",
      clear: "both",
      fontWeight: "400",
      color: "#212529",
      textAlign: "inherit",
      whiteSpace: "nowrap",
      backgroundColor: "transparent;",
      height:"28%",
      border: "0",
    },
    "&:hover":{
      color: "#16181b",
      textDecoration: "none",
      backgroundColor: "#f8f9fa",
    }
  }

}) ;

export default function Navbar() {
  const [open , setOpen]=useState(false)
  const [openP , setOpenP]=useState(false)

  let menuRef = useRef()
  let menuRefP= useRef()
  useEffect(()=>{
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false)
      }
    }
    document.addEventListener('mousedown',handler)
  })

  useEffect(()=>{
    
    let handler = (e)=>{
      if(!menuRefP.current.contains(e.target)){
        setOpenP(false)
      }
    }
    document.addEventListener('mousedown',handler)
  })
  const classes = logoStyle();
  return (
    <Main className="nav" >
      <Link href='/' variant='a' color={'#fff'} className={classes.linkForImageLogo}>
    <img src={logo } className={classes.imgLogo} alt="my coffee" />
    My Coffee
    </Link>
    <Box id="nav-links" className="links">
    <Box 
    display={'flex'}
    alignItems={'center'}
    sx={{gap:'6px',padding:'8px 16px '}}
    
    >

    <Stack id="sublink" direction={'row'} sx={{display:'flex',justifyContent:'space-between',alignItems:'center',
      position:"absolute",
      left:"160px"
  }}>
      <ListItem  className={classes.itemeList}>
       <Link href='/'  color={'#fff'}>
        home
       </Link>
      </ListItem>
      <ListItem  className={classes.itemeList}
      onClick={()=>(setOpen(!open))}
      
      ref={menuRef}
      >
      join us   
       <ArrowDropDown/>
 
        <Box id='items' sx={{height:"100px" , backgroundColor:"#fff"}} className= {`${open?classes.dropActive:classes.dropJoin }`}>
            <Link  href='signin' variant='a' className={classes.dropLink}> sign in</Link>
            <Link href='signup' variant='a' className={classes.dropLink}>sign up</Link>
            <Link href='profile' variant='a'className={classes.dropLink}>profile</Link>
        </Box>


      </ListItem>
      <ListItem className={classes.itemeList}>
      <Link href='/coffee' color={'#fff'}>
        coffee
        </Link>
      </ListItem>
      <ListItem className={classes.itemeList}>
      <Link variant='a'color={'#fff'} sx={{display:'flex', alignItems:'center' }}onClick={()=>(setOpenP(!openP))}
      ref={menuRefP}
    
      >
        product
        <ArrowDropDown/>
        <Box id='item' className= { `r ${openP?classes.dropActive:classes.dropJoin}`} sx={{backgroundColor:"#fff", height:"200px"}}>
            <Link href='product-detail' variant='a' className={classes.dropLink}> coffee americano</Link>
            <Link href='product-detail' variant='a'className={classes.dropLink}>cafee latte</Link>
            <Link href='product-detail' variant='a'className={classes.dropLink}>cappuccino</Link>
            <Link href='product-detail' variant='a'className={classes.dropLink}>espresso</Link>
            <Link  href='all-products'    variant='a'className={classes.dropLink}>all product</Link>
        </Box>
        </Link>
      </ListItem >
      <ListItem className={classes.itemeList}>
      <Link href='about' variant='a'color={'#fff'}>
        about
        </Link>
      </ListItem>
    </Stack>
    </Box>
    <Box   sx={{
      display:"flex",
      padding:'8px',
    }}>
    <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <SearchGerr sx={{marginLeft:'6px'}}>
        <Button sx={{
          color:'#212529',
          padding:'8px 12px 8px 8px',
          
        }}>Search</Button>
        <Link variant='a'>
        <SettingsIcon sx={{color:'#212529' ,cursor:'pointer' , padding:'0px 8px'}}/>
        </Link>
      </SearchGerr>
    </Box>
    </Box>
    <Box className="dash" sx={{cursor:"pointer",padding:"0.25rem 0.75rem" ,color:"#fff" , backgroundColor:"rgba(255,255,255,.1)"}}

    onClick={function(){
      const link =document.getElementById("nav-links")?document.getElementById("nav-links"):""

      if(k===0){
        link.style.display="flex"
        k=1
      }else{
        link.style.display="none"
        k=0
      }   

    }}
    >
      <DehazeIcon/>
    </Box>
    </Main>
  );
}