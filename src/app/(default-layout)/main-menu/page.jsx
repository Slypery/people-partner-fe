import AppendCrumb from "@/components/AppendCrumb";
import TransitionLink from "@/components/TransitionLink";
import Image from "next/image";

function LoggedInPage() {
    return (
        <div data-transition-page data-animate="enter" className="gap-6 grid grid-cols-4 @max-3xl/main:grid-cols-2 @max-xl/main:grid-cols-1 @max-6xl/main:grid-cols-3 mx-auto my-auto p-8 fade-in-up fade-out-up">
            <AppendCrumb linkEnd="main-menu" text="Main Menu" />
            <TransitionLink href="" className="border-secondary border-2 w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="mx-3 mt-3 rounded-md h-38 object-cover" />
                <div className="card-body">
                    <h2 className="card-title">Desain Organisasi</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="border-secondary border-2 w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="mx-3 mt-3 rounded-md h-38 object-cover" />
                <div className="card-body">
                    <h2 className="card-title">Layanan Mandiri</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="border-secondary border-2 w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="mx-3 mt-3 rounded-md h-38 object-cover" />
                <div className="card-body">
                    <h2 className="card-title">Rekrutmen</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="border-secondary border-2 w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="mx-3 mt-3 rounded-md h-38 object-cover" />
                <div className="card-body">
                    <h2 className="card-title">Assesmen</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="border-secondary border-2 w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="mx-3 mt-3 rounded-md h-38 object-cover" />
                <div className="card-body">
                    <h2 className="card-title">Kompensasi dan Benefit</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="border-secondary border-2 w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="mx-3 mt-3 rounded-md h-38 object-cover" />
                <div className="card-body">
                    <h2 className="card-title">Hubungan Industrial</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
            <TransitionLink href="/admin" className="border-secondary border-2 w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="mx-3 mt-3 rounded-md h-38 object-cover" />
                <div className="card-body">
                    <h2 className="card-title">Master Admin</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="border-secondary border-2 w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="mx-3 mt-3 rounded-md h-38 object-cover" />
                <div className="card-body">
                    <h2 className="card-title">Manajemen Kinerja</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
        </div>
    );
}

export default LoggedInPage;