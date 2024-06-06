"use client"


import {useAuthContext} from '../hooks';
import {useRouter, useSearchParams} from "next/navigation";
import React, {useCallback, useEffect} from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

// ----------------------------------------------------------------------

interface GuestGuardProps {
    children: React.ReactNode
}
const GuestGuard:React.FC<GuestGuardProps> = ({children})=> {
    const {loading}:any = useAuthContext();
 
    return <>{loading ? <LoadingScreen/> : <Container> {children}</Container>}</>;
}
export default GuestGuard


// ----------------------------------------------------------------------

interface ContainerProps {
    children: React.ReactNode
}

const Container:React.FC<ContainerProps> = ({children})=> {
    const router = useRouter();

    const searchParams = useSearchParams();

    const returnTo = searchParams.get('returnTo') || '/profile' /*paths.dashboard.root*/;

    const {authenticated}:any = useAuthContext();

    const check = useCallback(() => {
        if (authenticated) {
            router.replace(returnTo);
        }
    }, [authenticated, returnTo, router]);

    useEffect(() => {
        check();
    }, [check]);

    return <>{children}</>;
}

