import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { Route, Routes } from 'react-router';
import MainPage from './MainPage';
import RightPart from '../Components/RightPart';
import AddNewTask from '../Components/AddNewTask';
import { TaskProvider } from '../providers/TaskProvider';
import HashtagsPage from './HashtagsPage';
import PendingPage from './PendingPage';
import CanceledPage from './CanceledPage';

function Layout() {
    const [taskDisplay, setTaskDisplay] = useState(false);

    return (
        <TaskProvider>
            <>
                <Sidebar />
                <AddNewTask display={taskDisplay} setTaskDisplay={setTaskDisplay} />
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/hashtags' element={<HashtagsPage />} />
                    <Route path='/pending' element={<PendingPage />} />
                    <Route path='/canceled' element={<CanceledPage />} />
                </Routes>
                <RightPart setTaskDisplay={setTaskDisplay} />
            </>
        </TaskProvider>
    );
}

export default Layout;
