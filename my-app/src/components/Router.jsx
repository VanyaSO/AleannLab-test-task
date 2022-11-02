import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material'
import JobsPage from "./JobsPage";
import JobDetailedPage from "./JobDetailedPage";

export function Router(props) {
    return (
        <BrowserRouter>
            <Box>
                <Routes>
                    <Route path="/"  element={<JobsPage/>} />
                    <Route path="/:name" element={<JobDetailedPage/>} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}