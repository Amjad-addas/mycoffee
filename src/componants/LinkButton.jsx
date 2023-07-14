import { Link } from "@mui/material"
import { makeStyles } from "@mui/styles"


const buttonStyle = makeStyles({
    learnMore:{
        "&.css-1bhi0za-MuiTypography-root-MuiLink-root":{
            width: "fit-content; ",
            cursor:"pointer" ,
            color: "#212529",
            padding: ".5rem 1rem;",
            fontSize: "1.25rem;",
            lineHeight: "1.5;",
            borderRadius: ".3rem;",
            
            backgroundColor: "#ffc107;",
            borderColor: "#ffc107;",
        },
        "&:hover":{
            color: "#212529;",
            backgroundColor: "#e0a800;",
            borderColor: "#d39e00;",
        },

    },
})


const LinkButton = (props) => {
    const classes = buttonStyle()
  return (
    <Link href={props.href} className= {classes.learnMore}>
    {props.content}
    </Link>
  )
}

export default LinkButton