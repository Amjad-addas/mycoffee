
import { Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
const Check = (props) => {
  return (
    <Box>
 <FormControlLabel control={<Checkbox/>} label={props.title} sx={{marginBottom:"1rem"}} />
    </Box>
  )
}

export default Check