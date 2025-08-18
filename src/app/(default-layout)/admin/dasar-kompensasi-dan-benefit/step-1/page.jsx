'use client';
import TransitionLink, { navigateTo } from "@/components/TransitionLink";
import { useState } from "react";

function DasarKompensasiDanBenefitStep1Page() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // handle submit here
        navigateTo('step-2');
    }

    return (
        <form onSubmit={handleFormSubmit} data-transition-page data-animate="enter" className="gap-4 grid grid-cols-1 @max-6xl/main:grid-cols-1 px-8 py-4 fade-in-up fade-out-up">
            <h1 className="col-span-full font-semibold text-3xl flex gap-2">STRUKTUR BENEFIT</h1>
            <div className="flex flex-col w-full gap-2">
                <div className="overflow-x-auto w-full">
                    <table className="table table-fixed w-full min-w-[500px]">
                        <tr>
                            <td className="font-bold" colSpan={2}>Komponen Gaji</td>
                            <td className="font-bold" colSpan={2}>Status Pajak</td>
                            <td className="font-bold" colSpan={2}>PTKP</td>
                        </tr>
                        <tr>
                            <td className="">1. Gaji Pokok</td>
                            <td className=""><input type="checkbox" className="w-5 h-6" name="" id="" /></td>
                            <td className="w-5" colSpan={2}><span className="mr-3">TK/0</span> Tidak Kawin Tanpa Tanggungan</td>
                            <td className="">Rp 50.000.000,00</td>
                            <td className=""><input type="checkbox" className="w-5 h-6" name="" id="" /></td>
                        </tr>
                        <tr>
                            <td className="">1. Gaji Pokok</td>
                            <td className=""><input type="checkbox" className="w-5 h-6" name="" id="" /></td>
                            <td className="w-5" colSpan={2}><span className="mr-3">TK/0</span> Tidak Kawin Tanpa Tanggungan</td>
                            <td className="">Rp 50.000.000,00</td>
                            <td className=""><input type="checkbox" className="w-5 h-6" name="" id="" /></td>
                        </tr>
                        <tr>
                            <td className=""><button className="text-primary">+ Jenis Tunjangan</button></td>
                            <td className=""></td>
                            <td className="w-5" colSpan={2}><span className="mr-3">TK/0</span> Tidak Kawin Tanpa Tanggungan</td>
                            <td className="">Rp 50.000.000,00</td>
                            <td className=""><input type="checkbox" className="w-5 h-6" name="" id="" /></td>
                        </tr>
                        <tr>
                            <td className=""></td>
                            <td className=""></td>
                            <td className="w-5" colSpan={2}><span className="mr-3">TK/0</span> Tidak Kawin Tanpa Tanggungan</td>
                            <td className="">Rp 50.000.000,00</td>
                            <td className=""><input type="checkbox" className="w-5 h-6" name="" id="" /></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="col-span-full flex gap-2 justify-end">
                <TransitionLink href="/admin" className="btn btn-info">Kembali</TransitionLink>
                <button type="submit" className="btn btn-success">Simpan & Lanjut</button>
            </div>
        </form >
    );
}

export default DasarKompensasiDanBenefitStep1Page;