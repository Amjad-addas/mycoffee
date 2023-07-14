import React from 'react'
import { ProductCard } from './ProductCard'
import Product from './Product'
import { Box, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import pro1 from "./img/pro1.jpg"
import pro2 from "./img/pro2.jpg"
import pro3 from "./img/pro3.jpg"
import pro4 from "./img/pro4.jpg"
import pro5 from "./img/pro5.jpg"
import pro6 from "./img/pro6.jpg"

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

    container:{
        "&.css-nen11g-MuiStack-root":{
            display:"grid",
            gridTemplateColumns: "repeat(auto-fill ,minmax(200px , 1fr))",
            gap:"18px",
            padding:"0 5rem"
        
    },



    },
})
const Products = () => {
    const classes = productDetailStyle()
  return (
    
    <Box className={classes.boxproducts}>
        <Stack sx={{display:"flex" , justifyContent:"center" , alignItems:"center", gap:"6px"}} direction={"row"}>
        <Typography variant="h1" className={classes.productsTitle} > All Products </Typography>
        </Stack>
        <hr className={classes.break}/>
        <Box paddingTop={"3rem"}>
        <Stack  className={classes.container}>
                <ProductCard href="product-detail"  img={pro1} />
                <ProductCard href="product-detail"  img={pro2} />
                <ProductCard href="product-detail"  img={pro3} />
                <ProductCard href="product-detail" img={pro4} />
                <ProductCard href="product-detail" img={pro5} />
                <ProductCard  href="product-detail" img={pro6} />
  
        </Stack>
        </Box>
    </Box>
  )
}

export default Products