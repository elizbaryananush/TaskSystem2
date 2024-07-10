import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Route, Routes } from 'react-router'
import MainPage from './MainPage'
import RightPart from '../Components/RightPart'
import SettingsPage from './SettingsPage'


function Layout() {
    return (
        <>
            <Sidebar />
            <Routes>
                <Route path='/' Component={MainPage} />
                <Route path='settings' Component={SettingsPage} />
            </Routes>
            <RightPart />
        </>
    )
}

export default Layout