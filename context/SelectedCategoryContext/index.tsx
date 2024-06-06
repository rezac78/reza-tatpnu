"use client"

import {createContext, useContext, useEffect, useState} from "react";

const SelectedCategoryContext = createContext(undefined)

export function SelectedCategoryWrapper({children}:any) {

    const [selectedCat, setSelectedCat] = useState(false)
    useEffect(() => {
        if (selectedCat && window !== undefined) {
            window.localStorage.setItem('selectedCat', JSON.stringify(selectedCat))
            window.scrollTo({
                top: 580,
                behavior: "smooth",
            })
        }
    }, [selectedCat]);
    useEffect(() => {
        if (window !== undefined) {// @ts-ignore
            const prev = JSON.parse(window.localStorage.getItem('selectedCat'))
            if (prev && prev?.title) {
                setSelectedCat(prev)
            }
        }
    }, []);


    return (// @ts-ignore
        <SelectedCategoryContext.Provider value={{
            selectedCat,
            setSelectedCat
        }}>
            {children}
        </SelectedCategoryContext.Provider>
    )
}

export function useSelectedCategoryContext() {
    return useContext(SelectedCategoryContext)
}