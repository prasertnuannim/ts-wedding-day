import ActiveSectionContextProvider from "./active-section";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ActiveSectionContextProvider>
            {children}
        </ActiveSectionContextProvider>
    )
}