'use client';
import TransitionLink, { navigateTo } from "@/components/TransitionLink";
import { useState } from "react";

function DasarKompensasiDanBenefitStep3Page() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // handle submit here
        navigateTo('step-2');
    }

    return (
        <form onSubmit={handleFormSubmit} data-transition-page data-animate="enter" className="gap-4 grid grid-cols-1 @max-6xl/main:grid-cols-1 px-8 py-4 fade-in-up fade-out-up">
            <h1 className="col-span-full font-semibold text-3xl flex gap-2">JADWAL PENGGAJIAN</h1>
            <div className="flex flex-col w-full gap-2">
                <div className="overflow-x-auto w-full">
                    <table className="table table-fixed w-full">
                        <tr>
                            <td className="font-bold lg:w-60 w-48"></td>
                            <td className="font-bold w-28"></td>
                            <td className="font-bold w-16"></td>
                            <td className="font-bold w-28"></td>
                            <td colSpan={4} className="font-bold text-left">CUT OFF DATE MULAI</td>
                        </tr>
                        <tr>
                            <td>1. PEMBAYARAN GAJI BULANAN</td>
                            <td className="">TANGGAL</td>
                            <td><input type="text" className="border w-full" name="" id="" /></td>
                            <td className="">PER BULAN</td>
                            <td className="">ANGKA (HARI)</td>
                        </tr>
                        <tr>
                            <td>1. PEMBAYARAN GAJI BULANAN</td>
                            <td className="">HARI KE</td>
                            <td><input type="text" className="border w-7" name="" id="" /></td>
                            <td className="">PER MINGGU</td>
                            <td className="">ANGKA (HARI)</td>
                        </tr>
                        <tr>
                            <td>1. PEMBAYARAN GAJI BULANAN</td>
                            <td className="">TANGGAL</td>
                            <td><input type="text" className="border w-7" name="" id="" /></td>
                            <td className="">PER BULAN</td>
                            <td className="">ANGKA (HARI)</td>
                        </tr>
                        <tr>
                            <td>1. PEMBAYARAN GAJI BULANAN</td>
                            <td className="">TANGGAL</td>
                            <td><input type="text" className="border w-7" name="" id="" /></td>
                            <td className="">PER TAHUN</td>
                            <td className="">ANGKA (HARI)</td>
                        </tr>
                    </table>
                </div >
            </div >
            <div className="col-span-full flex gap-2 justify-end">
                <TransitionLink href="/admin" className="btn btn-info">Kembali</TransitionLink>
                <button type="submit" className="btn btn-success">Simpan & Lanjut</button>
            </div>
        </form >
    );
}

export default DasarKompensasiDanBenefitStep3Page;