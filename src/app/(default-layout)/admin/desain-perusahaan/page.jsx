import TransitionLink from "@/components/TransitionLink";
import Step1Page from "./step-1/page";

function AdminDesainPerusahaanPage() {
    return (
        <div data-transition-page data-animate="enter" className="fade-in-up fade-out-up">
            {/* <Step1Page /> */}
            <TransitionLink href={'desain-perusahaan/step-1'} className="btn btn-primary">Mulai</TransitionLink>
        </div>
    );
}

export default AdminDesainPerusahaanPage;