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
            <div className="gap-10 mt-2 col-span-full grid grid-cols-2">
                <div className="col-span-1">
                    <div className="bg-primary text-primary-content py-2 rounded-md">
                        <h3 className="text-lg text-center font-semibold">TIPE CUTI + HARI</h3>
                    </div>
                    <div className="mt-1 rounded-lg flex-1 p-4">
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Nama Perusahaan</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Direktorat</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Grup Divisi</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Divisi</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Grup Departemen</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Departemen</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Grup Unit Kerja</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Unit Kerja</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Pekerja Individu</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="bg-primary text-primary-content py-2 rounded-md">
                        <h3 className="text-lg text-center font-semibold">TIPE IZIN + HARI</h3>
                    </div>
                    <div className="mt-1 rounded-lg flex-1 p-4">
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Nama Perusahaan</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Direktorat</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Grup Divisi</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Divisi</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Grup Departemen</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Departemen</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Grup Unit Kerja</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Unit Kerja</span>
                            </label>
                        </div>
                        <div className="border-b border-gray-200 mb-2 pb-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span>Pekerja Individu</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-end card-actions col-span-full">
                <TransitionLink href="step-2" className="btn btn-info">
                    Kembali
                </TransitionLink>
                <button className="btn btn-success">Simpan & Lanjut</button>
            </div>
        </form>
    );
}

export default DesainPerusahaanStep7Page;
