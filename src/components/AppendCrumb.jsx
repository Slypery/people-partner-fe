'use client';
import useBreadcrumbStore from "@/hooks/useBreadcrumbStore";
import { useEffect } from "react";
function AppendCrumb({linkEnd, text, transitionPage="[data-transition-page]"}) {
    const a = useBreadcrumbStore((s) => s.appendCrumb);
    const rm = useBreadcrumbStore((s) => s.removeLastCrumb);
    useEffect(() => {
        a({linkEnd, text, transitionPage});
        return () => rm();
    }, [])
    return null;
}

export default AppendCrumb;