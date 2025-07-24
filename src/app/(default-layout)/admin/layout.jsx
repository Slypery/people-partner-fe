import AppendCrumb from "@/components/AppendCrumb";

function adminLayout({children}) {
    return (
        <>
            <AppendCrumb linkEnd="admin" text="Admin" />
            {children}
        </>
    );
}

export default adminLayout;