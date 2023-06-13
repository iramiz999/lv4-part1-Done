import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.ali.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.ali.main,
    scale: "0.99"
  },
}));

const Create = () => {

const [title, settitle] = useState("");
const [amount, setamount] = useState(0);

const navigate = useNavigate()



  return (
    <Box sx={{ width: "380px" }} component="form">
      <TextField
      autoComplete="off"
      onChange={(eo) => {
        settitle(eo.target.value)
        
      }
      }
        fullWidth={true}
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />

      <TextField
      onChange={(eo) => {
        setamount(Number(eo.target.value))
        
      }
      }
        fullWidth={true}
        label="Your Amount"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <ColorButton
      onClick={() => {
        fetch("http://localhost:3001/mydata",{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({title,amount})

          

        })
        .then(() => {
          navigate('/')

          
        }
        )
        
        
      }
      }
      
      sx={{ mt: "22px" }} variant="contained">
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Create;
