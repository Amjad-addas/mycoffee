import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const coffeeStyle = makeStyles({
    boxCoffe:{
        backgroundColor:"antiquewhite",
        color:"",
        margin:"3rem auto",
        padding:"3rem",
        borderRadius:"0.25rem",
        maxWidth:"720px"
    },
    coffeeTitle:{
        "&.css-1sra7t5-MuiTypography-root":{
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
    coffeePragraph:{
        "&.css-37jdci-MuiTypography-root":{
        display:"flex",
        alignItems:"center",
        marginBottom:"1rem",
        fontWeight:"400",
        lineHeight:"1.5",
        textAlign:"left",
        color:"#212529"
    }
    }
})
const Coffee = () => {
    const classes = coffeeStyle()
    return (
    <Box className={classes.boxCoffe}>
        <Typography className={classes.coffeeTitle} variant='h2' >
        Coffee is very important
        </Typography>
        <hr className={classes.break} />
        <Box>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Coffee Could Strengthen Your DNA
            </Typography>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Caffeine stimulates your nervous system, signaling fat cells to break down body fat.
            </Typography>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Coffee appears to be protective against two types of cancer: liver and colorectal cancer.
            </Typography>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Coffee Could Help Reduce Your Risk of Diabetes.
            </Typography>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Coffee Could Help Reverse Liver Damage from Drinking.
            </Typography>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Coffee Could Reduce Your Risk of Parkinson's Disease.
            </Typography>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Coffee Could Make Physical Activity Feel Easier.
            </Typography>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Coffee Could Help Reduce Your Risk of Digestive Diseases.
            </Typography>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Coffee Could Decrease Your Risk of Multiple Sclerosis.
            </Typography>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Coffee Could Help Lower Your Risk of Basal Cell Carcinoma.
            </Typography>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Coffee Could Help Protect Against Heart Failure.
            </Typography>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Coffee Could Help Reduce Your Risk of Alzheimer's.
            </Typography>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Coffee Could Help Reduce Post-Workout Muscle Pain.
            </Typography>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Coffee Gives You an Opportunity to Take a Break at Work.
            </Typography>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Coffee help you obtain numerous nutrients and antioxidants.
            </Typography>
            <Typography variant='p' className={classes.coffeePragraph}>
            <ArrowRightIcon/>
            Caffeine provides a short-term memory boost.
            </Typography>
        </Box>
    </Box>
  )
}

export default Coffee