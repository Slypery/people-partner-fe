"use client";
import TransitionLink from "@/components/TransitionLink";
import { useState } from "react";

function Step2Page() {
	const [hasHolding, setHasHolding] = useState("");
	const [isRelevant, setIsRelevant] = useState("");

	return (
		<div data-transition-page data-animate="enter" className="px-8 py-4 fade-in-up fade-out-up">
			<div className="card-body rounded-box bg-base-100 shadow-sm overflow-x-auto">
				<h2 className="text-2xl mx-auto">2. Apakah perusahaan anda memiliki holding company?</h2>
				<div className="flex mt-7 gap-4 flex-col items-center">
					<select value={hasHolding} onChange={(e) => setHasHolding(e.target.value)} className="select select-bordered w-full">
						<option value="tidak">Tidak</option>
						<option value="ya">Ya</option>
					</select>
					{hasHolding === "ya" && (
						<>
							<h2 className="text-center text-2xl ">Sebutkan nama perusahaannya</h2>
							<select value={isRelevant} onChange={(e) => setIsRelevant(e.target.value)} className="select select-bordered w-full">
								<option value="">Pilih</option>
								<option value="ya">Ya</option>
								<option value="tidak">Tidak</option>
							</select>
						</>
					)}
				</div>

				<div className="card-actions justify-end">
					<TransitionLink href="step-1" className="btn btn-info ml-auto">
						Kembali
					</TransitionLink>
					<TransitionLink href="step-3" className="btn btn-success">
						Simpan & Lanjut
					</TransitionLink>
				</div>
			</div>
		</div>

		// <div data-transition-page data-animate="enter" className="fade-in-up fade-out-up">
		//   <div className="w-full mx-auto p-4">
		//     <div className="card bg-base-100 shadow-xl p-6">
		//       <div className="card-body overflow-x-auto">
		//         <h2 className="card-title text-2xl">2. Apakah perusahaan anda memiliki holding company?</h2>
		//         <div className="flex justify-center mt-5 min-w-[600px]">
		// <select value={hasHolding} onChange={(e) => setHasHolding(e.target.value)} className="select select-bordered w-full max-w-sm">
		//   <option value="tidak">Tidak</option>
		//   <option value="ya">Ya</option>
		// </select>

		// {hasHolding === "ya" && (
		//   <div>
		//     <label className="block mb-2 font-medium">Apakah pengalaman kerjanya relevan?</label>
		//     <select value={isRelevant} onChange={(e) => setIsRelevant(e.target.value)} className="select select-bordered w-full max-w-sm">
		//       <option value="">Pilih</option>
		//       <option value="ya">Ya</option>
		//       <option value="tidak">Tidak</option>
		//     </select>
		//   </div>
		// )}
		//         </div>
		//       </div>
		//     </div>
		//   </div>
		// </div>
	);
}

export default Step2Page;
