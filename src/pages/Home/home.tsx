import { Tabs, Tab } from "@mui/material"
import React from "react"
import { Navbar, TabsSection } from "../../components"

export const HomePage: React.FC = () => {
    return(
        <React.Fragment>
            <Navbar signedIn={false}/>
            <main>
                <Tabs value={1}>
                    <Tab label="Home"/>
                    <Tab label="About"/>
                </Tabs>
            </main>
        </React.Fragment>
    )
}