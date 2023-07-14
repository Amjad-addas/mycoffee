import { Box, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import pro1 from './img/pro1.jpg'


import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';
import LinkButton from './LinkButton';
const productDetailStyle = makeStyles({
    boxproducts:{
        backgroundColor:"antiquewhite",
        margin:"3rem auto",
        padding:"3rem",
        borderRadius:"0.25rem",
        maxWidth:"960px",
        border:"solid 1px #ffc107",

    },
    productsTitle:{
        "&.css-o2w69a-MuiTypography-root":{

        fontSize:"2rem",
        textAlign:"start",
        fontWeight:"500",
        marginBottom:"0.75rem"
    }
},
    break:{
            
        borderTop: "1px solid rgba(0,0,0,0.1)",
        margin:"1.5rem 0"
    },
    productsPragraph:{
        "&.css-37jdci-MuiTypography-root":{
        display:"flex",
        alignItems:"center",
        gap:"4px",
        marginBottom:"1rem",
        fontSize:"1.25rem",
        fontWeight:"400",
        lineHeight:"1.5",
        textAlign:"left",
        color:"#212529"
    }
    },
    container:{

            padding:"3rem",
            display:"flex",

            justifyContent:"start",


    }, 
    button:{
        display:"flex",
        justifyContent:"start",
        gap:"16px"
    }
})

const ProductDetail = () => {
    const classes = productDetailStyle()
  return (
    <Box className={classes.boxproducts}>
    <Stack sx={{display:"flex" , justifyContent:"center" , alignItems:"center", gap:"6px"}} direction={"row"}>
    <Typography className={classes.productsTitle} variant='h1'> Product Details</Typography>
    </Stack>
    <hr className={classes.break}/>
    <Box id="container"  className={classes.container}>
        <Card id='imgCard' sx={{width:"33.333%"}} >
            <img height="100%" width="100%" src={pro1} alt="" />
        </Card>
        <Box id="cont" sx={{width:"66%" , backgroundColor:"#fff" ,padding:"1.25rem"}}>
            <Typography variant='h5' className={classes.productsTitle}>
                Product Name
            </Typography>
            <hr className={classes.break}/>
            <Typography variant='p' className={classes.productsPragraph}>
            Description
            </Typography>
            <hr className={classes.break}/>
            <Typography variant="p" className={classes.productsPragraph}>
            Current Price:
            <span style={{display:"block" ,backgroundColor:"black" , borderRadius:"50%", color:"#fff"
                            ,padding:"0.5rem"
        }}> $10</span>
            </Typography>
            <hr className={classes.break}/>
            <Box className={classes.button}>
            <LinkButton content="Add To Card"  />
            <LinkButton content={<StarIcon sx={{color:"#fff"}}/>}/>
            </Box>
        </Box>
    </Box>

    </Box>
   
  )
}

export default ProductDetail