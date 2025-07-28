'use client';
import TransitionLink, {navigateTo} from "@/components/TransitionLink";
import { useState } from "react";

function DesainPerusahaanStep1Page() {
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
        <form onSubmit={handleFormSubmit} data-transition-page data-animate="enter" className="gap-4 grid grid-cols-2 @max-6xl/main:grid-cols-1 px-8 py-4 fade-in-up fade-out-up">
            <h1 className="col-span-full font-semibold text-3xl flex gap-2">Informasi Perusahaan</h1>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl flex gap-2">
                    1.
                    <span>
                        Sebutkan nama perusahaan dan negara tempat beroprasi
                    </span>
                </h2>
                <div className="flex gap-2 ml-6">
                    <input type="text" name="nama_perusahaan[]" defaultValue="value" className="bg-base-200 px-4 rounded-field w-full outline-0 cursor-not-allowed" readOnly tabIndex={-1} />
                    <input type="text" name="tempat_beroprasi[]" defaultValue="value" className="bg-base-200 px-4 rounded-field w-full outline-0 cursor-not-allowed" readOnly tabIndex={-1} />
                    <button type="button" className="btn btn-success">Revisi</button>
                    <button type="button" className="text-base-100 btn btn-error">Hapus</button>
                </div>
                <div className="flex gap-2 ml-6">
                    <input type="text" name="nama_perusahaan[]" defaultValue="value" className="bg-base-200 px-4 rounded-field w-full outline-0 cursor-not-allowed" readOnly tabIndex={-1} />
                    <input type="text" name="tempat_beroprasi[]" defaultValue="value" className="bg-base-200 px-4 rounded-field w-full outline-0 cursor-not-allowed" readOnly tabIndex={-1} />
                    <button type="button" className="btn btn-success">Revisi</button>
                    <button type="button" className="text-base-100 btn btn-error">Hapus</button>
                </div>
                <div className="flex gap-2 ml-6">
                    <input type="text" name="nama_perusahaan[]" defaultValue="value" className="bg-base-200 px-4 rounded-field w-full outline-0 cursor-not-allowed" readOnly tabIndex={-1} />
                    <input type="text" name="tempat_beroprasi[]" defaultValue="value" className="bg-base-200 px-4 rounded-field w-full outline-0 cursor-not-allowed" readOnly tabIndex={-1} />
                    <button type="button" className="btn btn-success">Revisi</button>
                    <button type="button" className="text-base-100 btn btn-error">Hapus</button>
                </div>
                <div className="flex gap-2 ml-6">
                    <input type="text" name="nama_perusahaan[]" defaultValue="value" className="bg-base-200 px-4 rounded-field w-full outline-0 cursor-not-allowed" readOnly tabIndex={-1} />
                    <input type="text" name="tempat_beroprasi[]" defaultValue="value" className="bg-base-200 px-4 rounded-field w-full outline-0 cursor-not-allowed" readOnly tabIndex={-1} />
                    <button type="button" className="btn btn-success">Revisi</button>
                    <button type="button" className="text-base-100 btn btn-error">Hapus</button>
                </div>
                <button type="button" className="ml-6 btn btn-primary">Tambah</button>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl flex gap-2">
                    2.
                    <span>
                        Apakah perusahaan anda memiliki holding company?
                    </span>
                </h2>
                <div className="flex ml-6 text-xl items-center text-primary gap-2">
                    <input id="radioYa" type="radio" value="true" name="isHoldingCompanyExist" onChange={handleRadioChange} className="radio radio-primary" />
                    <label htmlFor="radioYa" className="cursor-pointer">Ya</label>
                    <input id="radioTidak" type="radio" value="false" name="isHoldingCompanyExist" onChange={handleRadioChange} className="radio radio-primary ml-4" defaultChecked />
                    <label htmlFor="radioTidak" className="cursor-pointer">Tidak</label>
                </div>
                <h2 data-animate={RadioValue == 'true' ? 'enter' : 'exit'} className="text-2xl ml-6 fade-in fade-out data-[animate='exit']:pointer-events-none">Sebutkan Nama perusahaannya</h2>
                <select name="holding_company" data-animate={RadioValue == 'true' ? 'enter' : 'exit'} {...{ disabled: RadioValue == 'true' ? '' : 'y' }} defaultValue="Pick a color" className="select ml-6 w-96 text-xl fade-in fade-out data-[animate='exit']:pointer-events-none">
                    <option>Perusahan 1</option>
                    <option>Perusahan 2</option>
                    <option>Perusahan 3</option>
                </select>

            </div>
            <div className="col-span-full flex gap-2 justify-end">
                <TransitionLink href="/admin" className="btn btn-info">Kembali</TransitionLink>
                <button type="submit" className="btn btn-success">Simpan & Lanjut</button>
            </div>
        </form>
    );
}

export default DesainPerusahaanStep1Page;