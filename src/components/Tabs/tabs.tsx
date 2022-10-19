import { Box, Tab, Tabs } from "@mui/material"
import { styled, SxProps, useTheme } from "@mui/material/styles";
import React, { useState } from "react";

import { TabNames } from "./tab-names";




export const TabsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const theme = useTheme()

    //Styling for Tab Component
    const TabStyle: SxProps = {
        textTransform: 'capitalize',
        fontSize: 16,
        fontFamily: "Poppins, sans-serif",
        padding: '8px 12px'
    }
    
    //Styling for Tabs Component. Notice the spelling
    const TabsStyle: SxProps = {
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        },
        '& .MuiTabs-indicatorSpan': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: theme.palette.primary.main,
        },
    }

    return(
        <Box sx={{ margin: '10px 0' }}>
            <Tabs 
                scrollButtons
                allowScrollButtonsMobile
                sx={TabsStyle} 
                value={activeTab} 
                variant="scrollable" 
                centered={true}
                TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan"/> }}
                onChange={(e, val) => setActiveTab(val)}>

                <Tab sx={TabStyle} label="Ingredients"/>
                <Tab sx={TabStyle} label="Snacks"/>
                <Tab sx={TabStyle} label="Vegetables"/>
                <Tab sx={TabStyle} label="Fruits"/>
                <Tab sx={TabStyle} label="Provisions"/>
                <Tab sx={TabStyle} label="Meats"/>
                <Tab sx={TabStyle} label="Others"/>
            </Tabs>
        </Box>
    )
}

