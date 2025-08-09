'use client';
import TransitionLink, { navigateTo } from "@/components/TransitionLink";
import { useState } from "react";

function ManagemenPenggunaStep1Page() {
    const [RadioValue, setRadioValue] = useState('false');
    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // handle submit here
        navigateTo('step-2');
    }

    return (
        <form onSubmit={handleFormSubmit} data-transition-page data-animate="enter" className="gap-4 grid grid-cols-1 @max-6xl/main:grid-cols-1 px-8 py-4 fade-in-up fade-out-up">
            <h1 className="col-span-full font-semibold text-3xl flex gap-2">DAFTAR PENGGUNA DAN HAK AKSES DIREKTORAT SDM</h1>
            <div className="flex flex-col w-full gap-2">
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>

                            <tr>
                                <td className="font-bold">NO</td>
                                <td className="font-bold">NAMA</td>
                                <td className="font-bold">EMAIL</td>
                                <td className="font-bold">HAK AKSES</td>
                                <td className="font-bold">STATUS</td>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>ABC</td>
                                <td>emalia@peoplepatner.id</td>
                                <td>MASTER ADMIN</td>
                                <td>
                                    <select
                                        name=""
                                        onChange={(e) => {
                                            if (e.target.value === 'aktif') {
                                                e.target.classList.add('bg-success');
                                                e.target.classList.remove('bg-gray-500');
                                            } else {
                                                e.target.classList.remove('bg-success');
                                                e.target.classList.add('bg-gray-500');
                                            }
                                        }}
                                        className="select text-white bg-success"
                                    >
                                        <option value="aktif">Aktif</option>
                                        <option value="non-aktif">Non Aktif</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>DEF</td>
                                <td>emalia@peoplepatner.id</td>
                                <td>MASTER ADMIN</td>
                                <td>
                                    <select
                                        name=""
                                        onChange={(e) => {
                                            if (e.target.value === 'aktif') {
                                                e.target.classList.add('bg-success');
                                                e.target.classList.remove('bg-gray-500');
                                            } else {
                                                e.target.classList.remove('bg-success');
                                                e.target.classList.add('bg-gray-500');
                                            }
                                        }}
                                        className="select text-white bg-success"
                                    >
                                        <option value="aktif">Aktif</option>
                                        <option value="non-aktif">Non Aktif</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>GHI</td>
                                <td>emalia@peoplepatner.id</td>
                                <td>ADMIN LAYANAN MANDIRI PEKERJA</td>
                                <td>
                                    <select
                                        name=""
                                        onChange={(e) => {
                                            if (e.target.value === 'aktif') {
                                                e.target.classList.add('bg-success');
                                                e.target.classList.remove('bg-gray-500');
                                            } else {
                                                e.target.classList.remove('bg-success');
                                                e.target.classList.add('bg-gray-500');
                                            }
                                        }}
                                        className="select text-white bg-success"
                                    >
                                        <option value="aktif">Aktif</option>
                                        <option value="non-aktif">Non Aktif</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>JKL</td>
                                <td>emalia@peoplepatner.id</td>
                                <td>ADMIN DESAIN ORGANISASI</td>
                                <td>
                                    <select
                                        name=""
                                        onChange={(e) => {
                                            if (e.target.value === 'aktif') {
                                                e.target.classList.add('bg-success');
                                                e.target.classList.remove('bg-gray-500');
                                            } else {
                                                e.target.classList.remove('bg-success');
                                                e.target.classList.add('bg-gray-500');
                                            }
                                        }}
                                        className="select text-white bg-success"
                                    >
                                        <option value="aktif">Aktif</option>
                                        <option value="non-aktif">Non Aktif</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
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

export default ManagemenPenggunaStep1Page;