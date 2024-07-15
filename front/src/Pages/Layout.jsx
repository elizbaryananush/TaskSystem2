import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { Route, Routes } from 'react-router';
import MainPage from './MainPage';
import RightPart from '../Components/RightPart';
import SettingsPage from './SettingsPage';
import AddNewTask from '../Components/AddNewTask';
import { TaskProvider } from '../providers/TaskProvider';

function Layout() {
    const [taskDisplay, setTaskDisplay] = useState('none');

    return (
        <TaskProvider>
            <>
                <Sidebar />
                <AddNewTask display={taskDisplay} setTaskDisplay={setTaskDisplay} />
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/settings' element={<SettingsPage />} />
                </Routes>
                <RightPart setTaskDisplay={setTaskDisplay} />
            </>
        </TaskProvider>
    );
}

export default Layout;
