"use client";
import TransitionLink from "@/components/TransitionLink";
import { useState } from "react";

function Step3Page() {
	const [hasHolding, setHasHolding] = useState("");
	const [isRelevant, setIsRelevant] = useState("");

	return (
		<div data-transition-page data-animate="enter" className="w-full px-8 py-4 fade-in-up fade-out-up">
			<div className="card-body bg-base-100 rounded-box shadow-sm">
				<h2 className="text-2xl">3. Masukkan informasi sebagai berikut</h2>
				<div className="grid grid-cols-[auto_1fr] max-md:grid-cols-1 gap-x-3 gap-y-2">
					<label className="label">Nama Legal Perusahaan</label>
					<select className="select w-full">
						<option>Ya</option>
						<option>Tidak</option>
					</select>

					<label className="label">Terdaftar di Negara</label>
					<input type="text" placeholder="Masukkan nama perusahaan" className="input w-full" />

					<label className="label">Nama Brand/Komersial</label>
					<input type="text" placeholder="Masukkan nama perusahaan" className="input w-full" />

					<label className="label">Tipe Entitas Hukum</label>
					<input type="text" placeholder="Masukkan nama perusahaan" className="input w-full" />

					<label className="label">Tipe Entitas Hukum</label>
					<input type="text" placeholder="Masukkan nama perusahaan" className="input w-full" />

					<label className="label">Nomor Induk Berusaha</label>
					<input type="number" placeholder="Masukkan nama perusahaan" className="input w-full" />

					<label className="label">NPWP Perusahaan</label>
					<input type="number" placeholder="Masukkan nama perusahaan" className="input w-full" />

					<label className="label">Alamat Kantor Pusat</label>
					<input type="number" placeholder="Masukkan nama perusahaan" className="input w-full" />

					<label className="label">Perusahaan & Negara</label>
					<div className="flex flex-1 gap-2">
						<input type="text" placeholder="Nama Perusahaan" className="input w-full" />
						<input type="text" placeholder="Negara" className="input w-full" />
					</div>

					<label className="label">Logo</label>
					<input type="file" className="file-input w-full" />
				</div>

				<div className="card-actions justify-end">
					<TransitionLink href="step-2" className="btn btn-info">
						Kembali
					</TransitionLink>
					<TransitionLink href="step-5" className="btn btn-success">
						Simpan & Lanjut
					</TransitionLink>
				</div>
			</div>
		</div>
	);
}

export default Step3Page;
