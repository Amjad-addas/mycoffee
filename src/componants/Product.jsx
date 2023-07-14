import { Box, Stack } from "@mui/material"
import { makeStyles } from "@mui/styles";
import pro1 from "./img/pro1.jpg"
import pro2 from "./img/pro2.jpg"
import pro3 from "./img/pro3.jpg"
import pro4 from "./img/pro4.jpg"
import pro5 from "./img/pro5.jpg"
import pro6 from "./img/pro6.jpg"


import { ProductCard } from "./ProductCard";

const  productStyle =  makeStyles({
    productStack:{
        "&.css-nen11g-MuiStack-root":{
                display:"grid",
                gridTemplateColumns: "repeat(auto-fill ,minmax(300px , 1fr))",
                gap:"12px",
                padding:"0 7rem",

            
        },
        productImage:{
            margin:"100px"
        }
        
    },
    productCard:{

        display:"flex",
        flexDirection: "column;",
        gap: "12px;",
        justifyContent: "start;",
        padding:"1.25rem",

    }
})
const Product = (props) => {
    const classes= productStyle( )
  return (
        <Box sx={{padding:"3rem"}}>
            <Stack id="productStack" className={classes.productStack}>
                <ProductCard href="product-detail"  img={pro1} />
                <ProductCard href="product-detail"img={pro2} />
                <ProductCard href="product-detail" img={pro3} />
                <ProductCard href="product-detail" img={pro4} />
                <ProductCard href="product-detail" img={pro5} />
                <ProductCard href="product-detail" img={pro6} />
  
            </Stack>
        </Box>
  )
}

export default Product