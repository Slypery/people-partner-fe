import AppendCrumb from "@/components/AppendCrumb";

function DesainPerusahaanLayout({ children }) {
    return (
        <>
            <AppendCrumb linkEnd="desain-perusahaan" text="Desain Perusahaan" />
            {children}
        </>
    );
}

export default DesainPerusahaanLayout;