import { makeStyles } from '@mui/styles'
import React from 'react'
import Input from './Input'
import LinkButton from './LinkButton'
import { Box, Stack, Typography } from '@mui/material'
import Check from './Check'
const SignUpStyle = makeStyles({
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

const Profile = () => {
  const classes = SignUpStyle()
  return (
    <Box className={classes.boxproducts}>
    <Stack sx={{display:"flex" , justifyContent:"center" , alignItems:"center", gap:"6px"}} direction={"row"}>
    <Typography className={classes.productsTitle} variant='h1'> Profile</Typography>
    </Stack>
    <hr className={classes.break} />
    <Box sx={{display:"flex" ,justifyContent:"space-between" ,gap:"8px"}}>
    <Input  head="First Name" />
    <Input head="Last Name" /> 
    </Box>
    <Input head="Address" />
    <Input head="Address2" />
    <Box sx={{display:"flex" , gap:"8px"}}>
    <Input head="City" />
    <Input head="State" />
    <Input head="Zip" />
    </Box>
    <Input head="Email" />
    <Box sx={{display:"flex" , gap:"8px"}}>
    <Input head="User Name" />
    <Input head="Password" />
    </Box>

    <LinkButton content ="Save Changes" />
    </Box>
  )
}

export default Profile