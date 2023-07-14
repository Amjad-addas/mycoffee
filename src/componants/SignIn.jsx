import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Input from './Input'
import { makeStyles } from '@mui/styles'
import Check from './Check'
import LinkButton from './LinkButton'
const SignInStyle = makeStyles({
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
    input:{
        margin:"2rem"
    }


})
const SignIn = () => {
    const classes =SignInStyle()
  return (
    <Box className={classes.boxproducts}>
            <Stack sx={{display:"flex" , justifyContent:"center" , alignItems:"center", gap:"6px"}} direction={"row"}>
            <Typography className={classes.productsTitle} variant='h1'> Sign  In</Typography>
            </Stack>
        <Input  head="User Name" />
        <Input head="Password" /> 
        <Check title="Remember Me"/>
        <LinkButton content ="Login" />
    </Box>
  )
}

export default SignIn