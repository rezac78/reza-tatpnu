import React from 'react';
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading: boolean,
    className?: string
}

const ButtonLoading = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({loading, className = '', children, ...props}, ref) => {

        return (
            <Button disabled={loading}
                    ref={ref}
                    className={'relative ' + className}
                    {...props}
            >
            <span
                className={`${loading ? 'block' : 'hidden'} absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2`}>
                <Loader2 className={'h-6 w-6 animate-spin'}/>
            </span>
                <span className={`${loading && 'invisible'}`}>{children}</span>
            </Button>
        );
    })
ButtonLoading.displayName = "ButtonLoading"

export default ButtonLoading;