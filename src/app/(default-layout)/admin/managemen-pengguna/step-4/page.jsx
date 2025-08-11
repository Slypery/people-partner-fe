'use client';
import TransitionLink, { navigateTo } from "@/components/TransitionLink";
import { useState } from "react";

function ManagemenPenggunaStep4Page() {
    const [RadioValue, setRadioValue] = useState('false');
    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // handle submit here
        navigateTo('step-5');
    }

    return (
        <form onSubmit={handleFormSubmit} data-transition-page data-animate="enter" className="gap-4 grid grid-cols-1 @max-6xl/main:grid-cols-1 px-8 py-4 fade-in-up fade-out-up">
            <h1 className="col-span-full font-semibold text-3xl flex gap-2 uppercase">Akuntabilitas Pengguna (SG HR) - Modul Desain Organisasi</h1>
            <div className="flex flex-col w-full gap-2">
                <div className="mb-4 space-y-3">
                    <div className="grid lg:grid-cols-5 grid-cols-2">
                        <div className="grid-cols-1">
                            <h4>DIVISI</h4>
                        </div>
                        <div className="grid-cols-1">
                            <h4>: HUMAN RESOURCE</h4>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-5 grid-cols-2">
                        <div className="grid-cols-1">
                            <h4>DEPARTEMEN</h4>
                        </div>
                        <div className="grid-cols-1 flex">
                            <h4>:&nbsp; </h4>
                            <select name="" className="select" id="">
                                <option className="select" value="">ORGANIZATION DEVELOPMENT</option>
                                <option className="select" value="">ORGANIZATION DEVELOPMENT</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-5 grid-cols-2">
                        <div className="grid-cols-1">
                            <h4>SECTION</h4>
                        </div>
                        <div className="grid-cols-1 flex">
                            <h4>:&nbsp; </h4>
                            <select name="" className="select" id="">
                                <option className="select" value="">ORGANIZATION DEVELOPMENT</option>
                                <option className="select" value="">ORGANIZATION DEVELOPMENT</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        <tr>
                            <td className="font-bold"></td>
                            <td className="font-bold"></td>
                            <td className="font-bold"></td>
                            <td className="font-bold text-center bg-blue-100 px-4 py-2 " colSpan={6}>HUMAN RESOURCE TEAM</td>
                        </tr>
                        <tr>
                            <td className="font-bold">NO</td>
                            <td className="font-bold">MODUL</td>
                            <td className="font-bold">FITUR</td>
                            <td className="font-bold w-12 bg-blue-100 px-4 py-2 ">STAF</td>
                            <td className="font-bold w-12 bg-blue-100 px-4 py-2 ">SUPERVISOR</td>
                            <td className="font-bold w-12 bg-blue-100 px-4 py-2 ">MANAGER</td>
                            <td className="font-bold w-12 bg-blue-100 px-4 py-2 ">HEAD</td>
                            <td className="font-bold w-12 bg-blue-100 px-4 py-2 ">DIREKTUR</td>
                            <td className="font-bold w-12 bg-blue-100 px-4 py-2 ">DIREKTUR UTAMA</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">1.</td>
                            <td className="px-4 py-2">DESAIN ORGANISASI</td>
                            <td className="px-4 py-2">MEMBUAT POSISI BARU</td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">2.</td>
                            <td className="px-4 py-2">DESAIN ORGANISASI</td>
                            <td className="px-4 py-2">MEMBUAT ANALISA JABATAN</td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">3.</td>
                            <td className="px-4 py-2">DESAIN ORGANISASI</td>
                            <td className="px-4 py-2">MEMBUAT MANPOWER PLANNING</td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">4.</td>
                            <td className="px-4 py-2">DESAIN ORGANISASI</td>
                            <td className="px-4 py-2">MENGANALISA PENGAJUAN MPP</td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="bg-blue-100 px-4 py-2 text-center">
                                <input type="checkbox" />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="col-span-full flex gap-2 justify-end">
                <TransitionLink href="/admin" className="btn btn-info">Kembali</TransitionLink>
                <button type="submit" className="btn btn-success">Simpan & Lanjut</button>
            </div>
        </form>
    );
}

export default ManagemenPenggunaStep4Page;