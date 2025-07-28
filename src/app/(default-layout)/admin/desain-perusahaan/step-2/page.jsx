'use client';
import TransitionLink, { navigateTo } from "@/components/TransitionLink";

function DesainPerusahaanStep2Page() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // handle submit here
        navigateTo('step-4');
    }
    return (
        <form onSubmit={handleFormSubmit} data-transition-page data-animate="enter" className="pr-8 py-4 pl-14 w-full gap-x-3 gap-y-2 grid grid-cols-[auto_1fr] max-md:grid-cols-1 fade-in-up fade-out-up">
            <h2 className="flex gap-2 text-2xl col-span-full -ml-6">
                3.
                <span>
                    Masukkan informasi sebagai berikut
                </span>
            </h2>

            <label className="label">Nama Legal Perusahaan</label>
            <select className="w-full select">
                <option>Perusahaan 1</option>
                <option>Perusahaan 2</option>
                <option>Perusahaan 3</option>
            </select>

            <label className="label">Terdaftar di Negara</label>
            <input type="text" placeholder="contoh: Indonesia" className="w-full input" />

            <label className="label">Nama Brand/Komersial</label>
            <input type="text" placeholder="Nama alias perusahaan untuk branding/komersial (jika ada)" className="w-full input" />

            <label className="label">Tipe Entitas Hukum</label>
            <input type="text" placeholder="contoh: PT, CV, Yayasan, dll." className="w-full input" />

            <label className="label">Nomor Induk Berusaha</label>
            <input type="text" placeholder="contoh: 1234567890123" className="w-full input" />

            <label className="label">NPWP Perusahaan</label>
            <input type="text" placeholder="contoh: 01.234.567.8-999.000" className="w-full input" />

            <label className="label">Alamat Kantor Pusat</label>
            <input type="text" placeholder="contoh: Jl. Merdeka No. 123, Jakarta Pusat" className="w-full input" />

            <label className="label">Nomor Telepon & Email Resmi</label>
            <div className="flex flex-1 gap-2">
                <input type="text" placeholder="contoh: 021-12345678" className="w-full input" />
                <input type="email" placeholder="contoh: company@example.com" className="w-full input" />
            </div>

            <label className="label">Logo</label>
            <input type="file" className="w-full file-input" />

            <div className="justify-end card-actions col-span-full">
                <TransitionLink href="step-1" className="btn btn-info">
                    Kembali
                </TransitionLink>
                <button className="btn btn-success">
                    Simpan & Lanjut
                </button>
            </div>
        </form>
    );
}

export default DesainPerusahaanStep2Page;