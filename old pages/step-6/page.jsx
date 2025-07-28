"use client";
import { useState } from "react";

function Step6Page() {
	return (
		<div data-transition-page data-animate="enter" className="w-full px-8 py-4 fade-in-up fade-out-pop-up">
			<div className="w-full mx-auto">
				<div className="card bg-base-100 shadow-xl">
					<div className="card-body overflow-x-auto">
						<h2 className="card-title text-2xl">6. Selanjutnya, buatlah struktur organisasi dasar</h2>
						<div className="mt-0">
							<div className="flex flex-col gap-[-4] lg:flex-row">
								{/* KIRI */}
								<div className="w-full lg:w-1/4 min-w-[300px] flex items-center justify-center p-4 pb-3">
									<div className="w-[250px] mb-0">
										<h2 className="text-xl text-center font-medium mb-2 block">Pilih Perusahaan</h2>
										<select className="select select-bordered w-full">
											<option>PT A</option>
											<option>PT B</option>
											<option>PT C</option>
										</select>
									</div>
								</div>
								{/* KANAN */}
								<div className="w-full min-w-[300px] overflow-x-auto lg:w-3/4 min-h-screen px-3 mt-0 pt-0 flex items-center justify-center">
									<div className="card bg-base-100 min-h-3/4 shadow-md w-full max-w-2xl">
										<div className="card-body">
											<div className="bg-blue-500 text-white px-4 py-2 rounded-t-md">
												<h3 className="text-lg text-center font-semibold">Nama Perusahaan</h3>
											</div>
											<div className="border border-blue-500 rounded-lg flex-1 p-4">
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
								</div>
							</div>

							{/* <div className="flex flex-col">
                <label htmlFor="">Pilih perusahaan</label>
                <select className="select select-bordered w-full max-w-sm">
                  <option value="tidak">Tidak</option>
                  <option value="ya">Ya</option>
                </select>
              </div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Step6Page;
