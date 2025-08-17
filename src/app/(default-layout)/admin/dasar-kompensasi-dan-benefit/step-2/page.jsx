'use client';
import TransitionLink, { navigateTo } from "@/components/TransitionLink";
import { useState } from "react";

function DasarKompensasiDanBenefitStep2Page() {
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
                    <table className="table table-fixed lg:w-[50%] w-full">
                        <tr>
                            <td className="font-bold lg:w-60 w-48"></td>
                            <td className="font-bold w-24">PREMI PERUSAHAAN</td>
                            <td className="font-bold w-24">PREMI PEKERJA</td>
                        </tr>
                        <tr>
                            <td>BPJS KESEHATAN</td>
                            <td className="relative"><input type="text" onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                if (e.target.value > 100) { e.target.value = 100 }; if (e.target.value < 0) { e.target.value = 0 }
                            }} className="bg-base-300 pr-5 rounded-md border w-full" /><span className="absolute right-5">%</span></td>
                            <td className="relative"><input type="text" onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                if (e.target.value > 100) { e.target.value = 100 }; if (e.target.value < 0) { e.target.value = 0 }
                            }} className="bg-base-300 pr-5 rounded-md border w-full" /><span className="absolute right-5">%</span></td>
                        </tr>
                        <tr>
                            <td>BPJS KESEHATAN</td>
                            <td className="relative"><input type="text" onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                if (e.target.value > 100) { e.target.value = 100 }; if (e.target.value < 0) { e.target.value = 0 }
                            }} className="bg-base-300 pr-5 rounded-md border w-full" /><span className="absolute right-5">%</span></td>
                            <td className="relative"><input type="text" onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                if (e.target.value > 100) { e.target.value = 100 }; if (e.target.value < 0) { e.target.value = 0 }
                            }} className="bg-base-300 pr-5 rounded-md border w-full" /><span className="absolute right-5">%</span></td>
                        </tr>
                        <tr>
                            <td>BPJS KESEHATAN</td>
                            <td className="relative"><input type="text" onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                if (e.target.value > 100) { e.target.value = 100 }; if (e.target.value < 0) { e.target.value = 0 }
                            }} className="bg-base-300 pr-5 rounded-md border w-full" /><span className="absolute right-5">%</span></td>
                            <td className="relative"><input type="text" onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                if (e.target.value > 100) { e.target.value = 100 }; if (e.target.value < 0) { e.target.value = 0 }
                            }} className="bg-base-300 pr-5 rounded-md border w-full" /><span className="absolute right-5">%</span></td>
                        </tr>
                        <tr>
                            <td>BPJS KESEHATAN</td>
                            <td className="relative"><input type="text" onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                if (e.target.value > 100) { e.target.value = 100 }; if (e.target.value < 0) { e.target.value = 0 }
                            }} className="bg-base-300 pr-5 rounded-md border w-full" /><span className="absolute right-5">%</span></td>
                            <td className="relative"><input type="text" onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                if (e.target.value > 100) { e.target.value = 100 }; if (e.target.value < 0) { e.target.value = 0 }
                            }} className="bg-base-300 pr-5 rounded-md border w-full" /><span className="absolute right-5">%</span></td>
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

export default DasarKompensasiDanBenefitStep2Page;