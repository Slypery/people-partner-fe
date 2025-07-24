import AppendCrumb from "@/components/AppendCrumb";
import TransitionLink from "@/components/TransitionLink";
import Image from "next/image";

function LoggedInPage() {
    return (
        <div data-transition-page data-animate="enter" className="gap-4 grid grid-cols-4 w-full @max-lg/main:grid-cols-1 @max-3xl/main:grid-cols-2 @max-5xl/main:grid-cols-3 px-8 py-4 fade-in-up fade-out-up">
            <AppendCrumb linkEnd="main-menu" text="Main Menu" />
            <TransitionLink href="" className="w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure className="h-40 bg-base-300">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Desain Organisasi</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure className="h-40 bg-base-300">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Layanan Mandiri</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure className="h-40 bg-base-300">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Rekrutmen</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure className="h-40 bg-base-300">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Assesmen</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure className="h-40 bg-base-300">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Kompensasi dan Benefit</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure className="h-40 bg-base-300">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Hubungan Industrial</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
            <TransitionLink href="/admin" className="w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure className="h-40 bg-base-300">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Master Admin</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure className="h-40 bg-base-300">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Manajemen Kinerja</h2>
                    <p>Description</p>
                </div>
            </TransitionLink>
        </div>
    );
}

export default LoggedInPage;