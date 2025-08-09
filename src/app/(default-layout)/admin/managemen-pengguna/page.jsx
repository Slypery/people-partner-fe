'use client';
import TransitionLink, { navigateTo } from "@/components/TransitionLink";

function ManagemenPenggunaPage() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // handle submit here
        navigateTo('step-6');
    }
    return (
        <div data-transition-page data-animate="enter" className="pr-8 py-4 pl-14 w-full gap-x-3 gap-y-2 grid grid-cols-[auto_1fr] max-md:grid-cols-1 fade-in-up fade-out-up">
            <div className="grid col-span-full grid-cols-4">
                <div className="items-center justify-center hidden md:flex md:col-span-1">
                    <div className="border-secondary border-2 w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                        <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Ikon 2" className="h-38 mt-3 mx-3 rounded-md object-cover" />
                        <div className="items-center text-center card-body">
                            <h2 className="card-title">Manajemen Pengguna</h2>
                        </div>
                    </div>
                </div>
                <div className="card-body col-span-4 md:col-span-3 w-full">
                    <TransitionLink href={'managemen-pengguna/step-1'} className=" transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border px-4 border-secondary/90 py-0 rounded-4xl">
                        <h3 className="text-lg text-secondary font-normal">1. DAFTAR PENGGUNA DAN HAK AKSES DIREKTORAT/DIVISI SDM</h3>
                    </TransitionLink>
                    <div className="border px-4 border-secondary/90 py-0 rounded-4xl">
                        <h3 className="text-lg text-secondary font-normal">2. DAFTAR NAMA PENGGUNA DAN HAK AKSES</h3>
                    </div>
                    <div className="border px-4 border-secondary/90 py-0 rounded-4xl">
                        <h3 className="text-lg text-secondary font-normal">&nbsp;    </h3>
                    </div>
                    <div className="border px-4 border-secondary/90 py-0 rounded-4xl">
                        <h3 className="text-lg text-secondary font-normal">4. AKUNTABILITAS PENGGUNA - MODUL LAYANAN MANDIRI PEKERJA</h3>
                    </div>
                    <div className="border px-4 border-secondary/90 py-0 rounded-4xl">
                        <h3 className="text-lg text-secondary font-normal">5. AKUNTABILITAS PENGGUNA - MODUL DESAIN ORGANISASI</h3>
                    </div>
                    <div className="border px-4 border-secondary/90 py-0 rounded-4xl">
                        <h3 className="text-lg text-secondary font-normal">6. AKUNTABILITAS PENGGUNA - MODUL REKRUTMENT DAN SELEKSI</h3>
                    </div>
                    <div className="border px-4 border-secondary/90 py-0 rounded-4xl">
                        <h3 className="text-lg text-secondary font-normal">7. AKUNTABILITAS PENGGUNA - MODUL HUBNGAN DAN INDUSTRIAL</h3>
                    </div>
                    <div className="border px-4 border-secondary/90 py-0 rounded-4xl">
                        <h3 className="text-lg text-secondary font-normal">8. AKUNTABILITAS PENGGUNA - MODUL KOMPENSASI DAN BENEFIT</h3>
                    </div>
                    <div className="border px-4 border-secondary/90 py-0 rounded-4xl">
                        <h3 className="text-lg text-secondary font-normal">9. AKUNTABILITAS PENGGUNA - MODUL ASESMEN</h3>
                    </div>
                    <div className="border px-4 border-secondary/90 py-0 rounded-4xl">
                        <h3 className="text-lg text-secondary font-normal">10. AKUNTABILITAS PENGGUNA - MODUL MANAJEMEN KINERJA</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagemenPenggunaPage;
