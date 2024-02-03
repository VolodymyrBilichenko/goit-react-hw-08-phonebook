import React, { Suspense } from 'react';
import { AppBar } from 'components/appBar/AppBar';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
    return (
        <>
        <AppBar/>
        <Suspense fallback={null}>
            <Outlet/>
        </Suspense>
        
        </>
    )
};
