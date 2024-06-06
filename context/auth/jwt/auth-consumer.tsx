'use client';


// import { SplashScreen } from '@/components/LoadingScreen-screen';

import {AuthContext} from './auth-context';
import React from "react";

// ----------------------------------------------------------------------
interface Props {
    children: React.ReactNode
}

export function AuthConsumer({children}: Props) {
    return (
        <AuthContext.Consumer>
            {/*<SplashScreen />*/}
            {(auth:any) => (auth.loading ? <div>Loading ...</div> : children)}
        </AuthContext.Consumer>
    );
}

