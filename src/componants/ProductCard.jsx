import { Box, Card, Typography } from "@mui/material"
import LinkButton from "./LinkButton"
import { makeStyles } from "@mui/styles";

const  productCardStyle =  makeStyles({
    productCard:{

        display:"flex",
        flexDirection: "column;",
        gap: "12px;",
        justifyContent: "start;",
        padding:"1.25rem",

    }
})

export const ProductCard = (props) => {
    const classes = productCardStyle()
  return (
    <Card  >
    <img width={"100%"} src={props.img} alt="" />
<Box className={classes.productCard}>
<Typography sx={{textAlign:"start"}} variant="h5">
        product name
    </Typography>
    <Typography sx={{textAlign:"start"}} variant="p">
        product content
    </Typography>
    <LinkButton href={props.href} content = "Show Details"/>
</Box>
</Card>
  )
}
