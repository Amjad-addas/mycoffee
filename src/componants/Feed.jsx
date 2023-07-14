import { Box, Stack, Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import { makeStyles } from "@mui/styles";
import HeroSlider from './HeroSlider';
import Product from './Product';
import LinkButton from './LinkButton';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
const  heroStyle =  makeStyles({
    heroTitle:{
        "&.css-o2w69a-MuiTypography-root":{
            fontSize: '3.5rem',
            fontWeight: '300',
            lineHeight: '1.2',
            marginBottom: '.5rem',
            color: "#71131E",
        }},
        heroParagraph:{
            "&.css-37jdci-MuiTypography-root":{
                fontSize: '1.5rem',
                fontWeight: '300',
                marginBottom: '1rem',
                color: "#71131E",
                display:"flex",
                gap: "8px",
                textAlign:"center"
            },
        },
        heroSubTitle:{
            "&.css-37jdci-MuiTypography-root":{
                textAlign:"start"
            }
        },
        break:{
            
            borderTop: "1px solid rgba(0,0,0,0.1)",
            margin:"1.5rem 0"
        },


       
    }
)

export const Feed = () => {
    const classes = heroStyle()
  return (
    
<>
    <Box sx={{backgroundColor:"antiquewhite" ,textAlign:"center"}}>
        <Stack padding={"1rem"}>
        <Typography variant='h1' className={classes.heroTitle}>
            my coffee
        </Typography>
        <Typography variant='p'className={classes.heroParagraph}>
        Coffee world in your hands. 
        </Typography>
        </Stack>
        <HeroSlider/>
        <Stack padding={"4rem 2rem"}>
            <Typography  variant='h1' className={`${classes.heroSubTitle} ${classes.heroTitle} `}>
            Coffee is my world
            </Typography>
            <Typography variant='p'className={`${classes.heroSubTitle} ${classes.heroParagraph} `}>
            Many good health reasons to drink coffee. 
            </Typography>
            <hr className={classes.break}/>
            <Typography variant='p'className={`${classes.heroSubTitle} ${classes.heroParagraph} `}>
            Caffeine stimulates your nervous system, signaling fat cells to break down body fat.
            </Typography>
            <Typography variant='p'className={`${classes.heroSubTitle} ${classes.heroParagraph} `}>
            Coffee appears to be protective against two types of cancer: liver and colorectal cancer.
            </Typography>
            <LinkButton href ="product-detail" content = "Learn More"/>
        </Stack>

    </Box>
    <hr className={classes.break}/>
    <Box sx={{textAlign:"center"}}>
        <Typography variant='h1' className={classes.heroTitle}>
        Latest products
        </Typography>
    <Product />
    </Box>
    <Box sx={{padding:"4rem 2rem", backgroundColor:"antiquewhite" , color:"#71131E", margin:"50px" }}>
        <Typography variant='p' className={`${classes.heroSubTitle} ${classes.heroParagraph} `}>

        <InfoIcon/>
        An additional note 
        </Typography>
        <Typography variant='p' className={`${classes.heroSubTitle} ${classes.heroParagraph} `}>
            <BookmarkAddIcon/>
        When people think of coffee, they usually think of its ability to provide an energy boost. However, according to some research, it can also offer some other important health benefits, such as a lower risk of liver cancer, type 2 diabetes, and heart failure. 
        </Typography>
    </Box>
</>
  )
}
