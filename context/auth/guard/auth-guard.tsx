"use client"

import React, {useState, useEffect, useCallback} from 'react';

import {useRouter} from 'next/navigation';


import {useAuthContext} from '../hooks';
import LoadingScreen from "@/components/ui/LoadingScreen";


// ----------------------------------------------------------------------
interface AuthGuardProps {
    children: React.ReactNode
}

const AuthGuard: React.FC<AuthGuardProps> = ({children}) => {
    const {loading}: any = useAuthContext();

    return <>{loading ? <LoadingScreen/> : <Container> {children}</Container>}</>;
}
export default AuthGuard

// ----------------------------------------------------------------------
interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    const router = useRouter();

    const {authenticated, method}: any = useAuthContext();

    const [checked, setChecked] = useState(false);

    const check = useCallback(() => {
        if (!authenticated) {
            const searchParams = new URLSearchParams({
                returnTo: window.location.pathname,
            }).toString();

            // const loginPath = loginPaths[method];
            const loginPath = '/login';

            const href = `${loginPath}?${searchParams}`;

            router.replace(href);
        } else {
            setChecked(true);
        }
    }, [authenticated, method, router]);

    useEffect(() => {
        check();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!checked) {
        return null;
    }

    return <>{children}</>;
}


