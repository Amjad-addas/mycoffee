import { Box, Stack, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const inpuStyle = makeStyles({
    inputForm:{
        display: "block",

        height: "calc(1.5em + .75rem + 2px);",
        padding: ".375rem .75rem;",
        fontSize: "1rem;",
        fontWeight:" 400;",
        lineHeight: "1.5;",
        color:" #495057;",
        backgroundColor: "#fff;",
        backgroundClip:" padding-box;",
        outline:" none",
        border: "1px solid #ced4da;",
        borderRadius: ".25rem;",
        transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out;",
        "&:focus":{
            boxShadow:" inset 0 -1px 0 #dddddd00, 1px 1px 6px #ffc107, -1px -1px 6px #ffc107",
            
        }
    },
})
const Input = (props) => {
    const classes = inpuStyle()
  return (
   <Box width={"100%"}>
    <Stack>
        <Typography sx={{display:"inline-block" ,marginBottom:"0.5rem" , fontSize:"1rem", fontWeight:"400" ,color:"#212529"}}>
        {props.head}
        </Typography>
        <input className={classes.inputForm} type="text" />
    </Stack>
    <Box sx={{height:"2rem"}} ></Box>
   </Box>
        

  )
}

export default Input