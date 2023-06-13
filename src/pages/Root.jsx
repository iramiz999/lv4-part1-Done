import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Appbar from "MUI-components/Appbar";
import Drawerr from "MUI-components/Drawer";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;
const Root = () => {

  const showDrawer = () => {
    setdrawerType("temporary")
    setnoneorblock("block")
    
  }

  const hideDrawer = () => {
    setnoneorblock("none")
    setdrawerType("temporary")
    
  }
  
  

const [drawerType, setdrawerType] = useState("permanent");
  const [noneorblock, setnoneorblock] = useState("none");
  const [myMOde, setmyMOde] = useState(


    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: myMOde,
      // @ts-ignore
      ali: {
        main: "#64748B",
        contrastText: "#fff",
      },
      favcolor:{
        main:grey[300]
      }
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>

        <Appbar
          drawerWidth={drawerWidth} 
        showDrawer={showDrawer}        
         />


        <Drawerr  
          noneorblock={noneorblock}
          drawerWidth={drawerWidth}
          setmyMOde={setmyMOde}
          drawerType={drawerType}
           hideDrawer={hideDrawer}         

         
           />

        <Box
          component="main"
          sx={{

            ml:{sm:`${drawerWidth}px`},
            display: " flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
