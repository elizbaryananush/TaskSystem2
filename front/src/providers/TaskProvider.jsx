import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [selectedTaskId, setSelectedTaskId] = useState('');

    return (
        <TaskContext.Provider value={{ selectedTaskId, setSelectedTaskId }}>
            {children}
        </TaskContext.Provider>
    );
};

