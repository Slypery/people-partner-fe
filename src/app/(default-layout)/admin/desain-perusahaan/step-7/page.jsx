"use client";
import TransitionLink, { navigateTo } from "@/components/TransitionLink";

function DesainPerusahaanStep7Page() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // handle submit here
        navigateTo("step-8");
    };
    return (
        <form onSubmit={handleFormSubmit} data-transition-page data-animate="enter" className="pr-8 py-4 pl-14 w-full gap-x-3 gap-y-2 grid grid-cols-[auto_1fr] max-md:grid-cols-1 fade-in-up fade-out-up">
            <h2 className="flex gap-2 text-2xl col-span-full -ml-6">
                8.
                <span>Cuti dan Izin</span>
            </h2>
            {/* <div className="items-center justify-center col-span-1 p-4 pb-3">
                <div className="mb-0">
                    <h2 className="text-xl text-center font-medium mb-2 block">Pilih Perusahaan</h2>
                    <select className="select md:w-[300px] select-bordered w-full">
                        <option>PT A</option>
                        <option>PT B</option>
                        <option>PT C</option>
                    </select>
                </div>
            </div> */}
            <div className="gap-10 mt-2 lg:grid-cols-2 md:col-span-full sm:col-span-1 grid col-span-1 md:grid-cols-1">
                <div className="col-span-1">
                    <div className="bg-primary text-primary-content py-2 rounded-md">
                        <h3 className="text-lg text-center font-semibold">TIPE CUTI + HARI</h3>
                    </div>
                    <div className="mt-1 rounded-lg flex-1 px-4 pb-4">
                        <div className="flex font-medium items-center mt-0 pt-0 gap-4 mb-4">
                            <span className="flex-1">Tipe Cuti</span>
                            <span className="-mx-3">Tengah</span>
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                    </div>
                    <button type="button" className="btn btn-sm btn-success mx-4">Tambah Item</button>
                    <button type="button" className="btn btn-sm btn-error">Hapus Item</button>
                </div>
                <div className="col-span-1">
                    <div className="bg-primary text-primary-content py-2 rounded-md">
                        <h3 className="text-lg text-center font-semibold">TIPE IZIN + HARI</h3>
                    </div>
                    <div className="mt-1 rounded-lg flex-1 px-4 pb-4">
                        <div className="flex font-medium items-center mt-0 pt-0 gap-4 mb-4">
                            <span className="flex-1">Tipe Cuti</span>
                            <span className="-mx-3">Tengah</span>
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-2">
                            <span className="flex-1">Label kiri</span>
                            <input type="checkbox" className="checkbox" />
                            <span className="w-40 text-right">Label kanan</span>
                        </div>
                    </div>
                    <button type="button" className="btn btn-sm btn-success mx-4">Tambah Item</button>
                    <button type="button" className="btn btn-sm btn-error">Hapus Item</button>
                </div>
            </div>
            <div className="justify-end card-actions col-span-full">
                <TransitionLink href="step-6" className="btn btn-info">
                    Kembali
                </TransitionLink>
                <button className="btn btn-success">Simpan & Lanjut</button>
            </div>
        </form>
    );
}

export default DesainPerusahaanStep7Page;
