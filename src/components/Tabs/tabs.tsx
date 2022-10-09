import { Tab, Tabs } from "@mui/material"
import { styled, SxProps, useTheme } from "@mui/material/styles";
import React, { useState } from "react";

import { TabNames } from "./tab-names"
export const TabsSection: React.FC = () => {
    return(
        <TabsLayout>
            <CustomTab labelName="Ingredients"/>
            <CustomTab labelName="Snacks"/>
            <CustomTab labelName="Vegetables"/>
            <CustomTab labelName="Fruits"/>
            <CustomTab labelName="Provisions"/>
            <CustomTab labelName="Meats"/>
            <CustomTab labelName="Others"/>
        </TabsLayout>
    )
}

type TabsLayoutProps = {
    children: React.ReactNode
}

const TabsLayout: React.FC<TabsLayoutProps> = ({children}) => {
    const theme = useTheme()

    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (event:React.SyntheticEvent, newValue:number) => {
        setActiveTab(newValue)
        console.log(newValue)
    }
    
    const TabStyles: SxProps = {
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
        <Tabs 
            value={activeTab}
            onChange={handleClick}
            sx={TabStyles}
            TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan"/> }}
            variant="fullWidth" centered>
            { children }
        </Tabs>
    )
}

type CustomTabProps = {
    labelName: string,
}

const CustomTab: React.FC<CustomTabProps> = ({ labelName }) => {
    const TabStyles: SxProps = {
        textTransform: 'capitalize',
        fontSize: 16,
        margin: '0 20px',
        fontFamily: "Poppins, sans-serif"
    }
    
    return(
        <Tab 
            disableRipple
            sx={TabStyles}
            label={labelName}/>
    )
}