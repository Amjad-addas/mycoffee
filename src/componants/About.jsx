import { Box, Card, Stack, Typography } from '@mui/material'
import React from 'react'

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { makeStyles } from '@mui/styles';

const aboutStyle = makeStyles({
    boxabout:{
        backgroundColor:"antiquewhite",
        color:"",
        margin:"3rem auto",
        padding:"3rem",
        borderRadius:"0.25rem",
        maxWidth:"960px",
        border:"solid 1px #ffc107",

    },
    aboutTitle:{
        "&.css-o2w69a-MuiTypography-root":{
        color:"#71131E",
        fontSize:"2rem",
        textAlign:"center",
        fontWeight:"500"
    }
},
    break:{
            
        borderTop: "1px solid rgba(0,0,0,0.1)",
        margin:"1.5rem 0"
    },
    aboutPragraph:{
        "&.css-37jdci-MuiTypography-root":{
        display:"flex",
        
        marginBottom:"1rem",
        fontSize:"1.25rem",
        fontWeight:"400",
        lineHeight:"1.5",
        textAlign:"left",
        color:"#212529"
    }
    }
})
const About = () => {
    const classes = aboutStyle()
  return (

   <Box className={classes.boxabout}>
    <Stack sx={{display:"flex" , justifyContent:"center" , alignItems:"center", gap:"6px"}} direction={"row"}>
    <ErrorOutlineIcon sx={{color:"#71131E" , fontSize:"2.5rem", fontWeight:"500"}} />
    <Typography id="about" className={classes.aboutTitle} variant='h1'> About My Coffee Company </Typography>
    </Stack>
    <hr className={classes.break}/>

      <Stack sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center", gap:"12px"}} direction={"row"}>

       <Typography className={classes.aboutPragraph} variant='p'>
       <ArrowRightIcon sx={{fontSize:"2.25rem" , color:"#71131E"}} />
      My Coffee company is a pioneer in the field of coffee for more than 50 years 
         </Typography>
      <Card sx={{
        width:"150px",
        height:"100px",
        borderRadius:"50%",
        backgroundColor:"#71131E"
      }}><img src= "" alt="" /></Card>

      </Stack>
      <hr className={classes.break}/>
      <Stack sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center", gap:"12px"}} direction={"row"}>

       <Typography className={classes.aboutPragraph} variant='p'>
       <ArrowRightIcon  sx={{fontSize:"2.25rem" , color:"#71131E"}}/>
       My Coffee Owns coffee plantations in many countries for the most common types of coffee
         </Typography>
      <Card sx={{
        width:"150px",
        height:"100px",
        borderRadius:"50%",
        backgroundColor:"#71131E"
      }}><img src= "" alt="" /></Card>

      </Stack>
      <hr className={classes.break}/>
      <Stack sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center", gap:"12px"}} direction={"row"}>

<Typography className={classes.aboutPragraph} variant='p'>
<ArrowRightIcon  sx={{fontSize:"2.25rem" , color:"#71131E"}}/>
My Coffee is one of the largest coffee suppliers in the world
  </Typography>
<Card sx={{
 width:"150px",
 height:"100px",
 borderRadius:"50%",
 backgroundColor:"#71131E"
}}><img src= "" alt="" /></Card>

        </Stack>
        <hr className={classes.break}/>
    <Stack sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center", gap:"12px"}} direction={"row"}>

    <Typography className={classes.aboutPragraph} variant='p'>
    <ArrowRightIcon  sx={{fontSize:"2.25rem" , color:"#71131E"}}/>
    My Coffee Company factories fill coffee to international standards
    </Typography>
    <Card sx={{
    width:"150px",
    height:"100px",
    borderRadius:"50%",
    backgroundColor:"#71131E"
    }}><img src= "" alt="" /></Card>

    </Stack>
    <hr className={classes.break}/>
    <Stack sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center", gap:"12px"}} direction={"row"}>

    <Typography className={classes.aboutPragraph} variant='p'>
    <ArrowRightIcon  sx={{fontSize:"2.25rem" , color:"#71131E"}}/>
    Quality of products is much more important to a My Coffee company
    </Typography>
    <Card sx={{
    width:"150px",
    height:"100px",
    borderRadius:"50%",
    backgroundColor:"#71131E"
    }}><img src= "" alt="" /></Card>

    </Stack>
    <hr className={classes.break}/>
    <Stack sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center", gap:"12px"}} direction={"row"}>

    <Typography className={classes.aboutPragraph} variant='p'>
    <ArrowRightIcon sx={{fontSize:"2.25rem" , color:"#71131E"}}/>
    We offer you rare types of exquisite international coffee
    </Typography>
    <Card sx={{
    width:"150px",
    height:"100px",
    borderRadius:"50%",
    backgroundColor:"#71131E"
    }}><img src= "" alt="" /></Card>

    </Stack>
    <hr className={classes.break}/>
    <Stack sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center", gap:"12px"}} direction={"row"}>

    <Typography className={classes.aboutPragraph} variant='p'>
    <ArrowRightIcon  sx={{fontSize:"2.25rem" , color:"#71131E"}}/>
    The company's workers are experts and have high efficiency
    </Typography>
    <Card sx={{
    width:"150px",
    height:"100px",
    borderRadius:"50%",
    backgroundColor:"#71131E"
    }}><img src= "" alt="" /></Card>

    </Stack>
    <hr className={classes.break}/>
    <Stack sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center", gap:"12px"}} direction={"row"}>

    <Typography className={classes.aboutPragraph} variant='p'>
    <ArrowRightIcon  sx={{fontSize:"2.25rem" , color:"#71131E"}}/>
    My Coffee company have fast drinks stores everywhere
    </Typography>
    <Card sx={{
    width:"150px",
    height:"100px",
    borderRadius:"50%",
    backgroundColor:"#71131E"
    }}><img src= "" alt="" /></Card>

    </Stack>
    <hr className={classes.break}/>
</Box>
   
)
}

export default About