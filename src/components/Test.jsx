'use client';
import useBreadcrumbStore from "@/hooks/useBreadcrumbStore";
function Test() {
    const breadcrumbs = useBreadcrumbStore((s) => s.breadcrumbs);
    const appendCrumb = useBreadcrumbStore((s) => s.appendCrumb);
    const removeLastCrumb = useBreadcrumbStore((s) => s.removeLastCrumb);
    return (
        <div className="breadcrumbs text-sm w-full pl-16 pt-1 shrink-0">
            <ul>
                {breadcrumbs.map((crumb, index) => {
                    if (index == breadcrumbs.length - 1) return (<li key={index}>{crumb.text}</li>)
                    return (<li key={index}><a href={crumb.href}>{crumb.text}</a></li>)
                })}
            </ul>
            <button className="btn btn-primary" onClick={() => appendCrumb({ text: 'test' + breadcrumbs.length, href: '/admin' })}>test</button>
            <button className="btn btn-primary" onClick={() => removeLastCrumb()}>test</button>
        </div>
    );
}

export default Test;