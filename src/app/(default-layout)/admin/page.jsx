import AppendCrumb from "@/components/AppendCrumb";
import TransitionLink from "@/components/TransitionLink";

function AdminDashboardPage() {
	return (
		<div data-transition-page data-animate="enter" className="gap-6 grid grid-cols-3 @max-lg/main:grid-cols-1 @max-3xl/main:grid-cols-2 mx-auto my-auto px-8 fade-in-up fade-out-up">
			<AppendCrumb linkEnd="dashboard" text="Dashboard" />
			<h1 className="col-span-full font-semibold text-2xl md:text-3xl text-center">Hello Good People! Selamat Datang di People Patner System... <br /> Sebelum dimulai, silahkan pilih menu dibawah ini :</h1>
			<TransitionLink href="/admin/desain-perusahaan/step-1" className="border-secondary border-2 w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
				<img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Ikon 1" className="h-38 mt-3 mx-3 rounded-md object-cover" />
				<div className="items-center text-center card-body">
					<h2 className="card-title">Desain Perusahaan</h2>
				</div>
			</TransitionLink>
			<TransitionLink href="/admin/managemen-pengguna" className="border-secondary border-2 w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
				<img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Ikon 2" className="h-38 mt-3 mx-3 rounded-md object-cover" />
				<div className="items-center text-center card-body">
					<h2 className="card-title">Manajemen Pengguna</h2>
				</div>
			</TransitionLink>
			<TransitionLink href="/admin/dasar-kompensasi-dan-benefit" className="border-secondary border-2 w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
				<img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Ikon 3" className="h-38 mt-3 mx-3 rounded-md object-cover" />
				<div className="items-center text-center card-body">
					<h2 className="card-title">Dasar Kompensasi dan Benefit</h2>
				</div>
			</TransitionLink>
		</div>
	);
}

export default AdminDashboardPage;
