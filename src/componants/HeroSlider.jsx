import { Box, Stack } from '@mui/material'
import { makeStyles } from "@mui/styles";
import s1 from '../componants/img/img1.jpg'

const  sliderStyle =  makeStyles({
    imageSlider:{
        width:"100%",
        opacity:"1",


      
      },
    stackSlider:{
      position:"static"
      
    }
    

       
    
})
const HeroSlider = () => {
    const classes= sliderStyle()
  return (
<Box>
  <Stack className={classes.stackSlider}>
        <img  className={classes.imageSlider}  src={s1} alt="" />

      </Stack>
</Box>
  )
}

export default HeroSlider