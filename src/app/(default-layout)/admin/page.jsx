import AppendCrumb from "@/components/AppendCrumb";
import TransitionLink from "@/components/TransitionLink";

function AdminDashboardPage() {
	return (
		<>
			<AppendCrumb linkEnd="dashboard" text="Dashboard" />
			<div data-transition-page data-animate="enter" className="gap-6 grid grid-cols-3 @max-lg/main:grid-cols-1 @max-3xl/main:grid-cols-2 px-8 py-4 fade-in-up fade-out-up">
				<h1 className="col-span-full font-light text-2xl md:text-3xl text-center">Hello Good People! Selamat Datang di People Patner System... <br /> Sebelum dimulai, silahkan pilih menu dibawah ini :</h1>
				<TransitionLink href="/admin/desain-perusahaan" className="outline-3 outline-transparent hover:outline-secondary w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
					<figure className="h-48 bg-base-300">
						<img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=400&h=300&q=80" alt="Ikon 1" className="w-full h-full object-cover" />
					</figure>
					<div className="items-center text-center card-body">
						<h2 className="card-title">Desain Perusahaan</h2>
					</div>
				</TransitionLink>
				<TransitionLink href="/admin/managemen-pengguna" className="outline-3 outline-transparent hover:outline-secondary w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
					<figure className="h-48 bg-base-300">
						<img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&h=300&q=80z" alt="Ikon 2" className="w-full h-full object-cover" />
					</figure>
					<div className="items-center text-center card-body">
						<h2 className="card-title">Manajemen Pengguna</h2>
					</div>
				</TransitionLink>
				<TransitionLink href="/admin/desain-perusahaan" className="outline-3 outline-transparent hover:outline-secondary w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
					<figure className="h-48 bg-base-300">
						<img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&h=300&q=80" alt="Ikon 3" className="w-full h-full object-cover" />
					</figure>
					<div className="items-center text-center card-body">
						<h2 className="card-title">Dasar Kompensasi dan Benefit</h2>
					</div>
				</TransitionLink>

			</div>
		</>
	);
}

export default AdminDashboardPage;
