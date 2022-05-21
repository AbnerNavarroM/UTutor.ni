import React from 'react';
import SignUp from './SignInUp/SignUp';
import SignIn from './SignInUp/SignIn';
import Index from './BodyLandPage/Index';
import { Routes, Route } from 'react-router';

export default function BodyIndex() {
    return (
        <div className="container-fluid">
            <Routes>
                <Route path="/" element={<Index />}/> //This is LandPage
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </div>
    )
}
