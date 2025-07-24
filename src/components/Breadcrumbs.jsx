'use client';
import useBreadcrumbStore from "@/hooks/useBreadcrumbStore";
import TransitionLink from "./TransitionLink";
function Breadcrumbs() {
    const breadcrumbs = useBreadcrumbStore((s) => s.breadcrumbs);
    var href = '';
    return (
        <div className="breadcrumbs text-sm w-full pl-16 pt-1 shrink-0">
            <ul>
                {
                    breadcrumbs.map((crumb, index) => {
                        if (index == breadcrumbs.length - 1) return (<li key={index}>{crumb.text}</li>)
                        href += '/' + crumb.linkEnd;
                        return (<li key={index}><TransitionLink href={href} selector={breadcrumbs.at(-1).transitionPage}>{crumb.text}</TransitionLink></li>)
                    })
                }
            </ul>
        </div>
    );
}

export default Breadcrumbs;