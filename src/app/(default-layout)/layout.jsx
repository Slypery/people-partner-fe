import Breadcrumbs from "@/components/Breadcrumbs";
import { LogoLight } from "@/components/Logo";
import TransitionLink from "@/components/TransitionLink";

function DefaultLayout({ children }) {
    return (
        <main id="adminLayout" data-animate="enter" className="@container/main flex flex-col items-center [&>div]:max-w-7xl h-screen max-h-screen overflow-auto bg-base-200 bg-stripe-diagonal scrollbar-thin scrollbar-track-white/0 scrollbar-thumb-accent stripe-color-base-300/30 fade-in fade-out" style={{ scrollbarGutter: 'stable' }}>
            <div className="top-0 z-10 sticky flex mb-4 px-2 w-full bg-gradient-to-b from-30% from-base-200">
                <nav className="flex items-center mx-4 px-4 border-primary/10 rounded-box w-full min-h-16 bg-base-100/90 shadow shadow-black/10 backdrop-blur-sm translate-y-4" style={{ borderWidth: 'var(--border)' }}>

                    {/* dropdown navigation links when screen width is below lg (64rem) */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex={0} className="z-1 mt-3 p-2 rounded-box w-64 bg-base-100/[.97] shadow menu menu-sm dropdown-content">
                            <li><TransitionLink href="/main-menu">Main Menu</TransitionLink></li>
                            <li>
                                <details>
                                    <summary>Menu</summary>
                                    <ul>
                                        <li>
                                            <details>
                                                <summary>Desain Perusahaan</summary>
                                                <ul>
                                                    <li><TransitionLink href="/desain-perusahaan/dashboard">Dashboard</TransitionLink></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <summary>Layanan Mandiri</summary>
                                                <ul>
                                                    <li><TransitionLink href="/layanan-mandiri/dashboard">Dashboard</TransitionLink></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <summary>Rekrutmen</summary>
                                                <ul>
                                                    <li><TransitionLink href="/rekrutmen/dashboard">Dashboard</TransitionLink></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <summary>Assesmen</summary>
                                                <ul>
                                                    <li><TransitionLink href="/assesmen/dashboard">Dashboard</TransitionLink></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <summary>Kompensasi dan Benefit</summary>
                                                <ul>
                                                    <li><TransitionLink href="/kompensasi-dan-benefit/dashboard">Dashboard</TransitionLink></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <summary>Hubungan Industrial</summary>
                                                <ul>
                                                    <li><TransitionLink href="/hubungan-industrial/dashboard">Dashboard</TransitionLink></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <summary>Master Admin</summary>
                                                <ul>
                                                    <li><TransitionLink href="/admin">Dashboard</TransitionLink></li>
                                                    <li><TransitionLink href="/admin/desain-perusahaan">Desain Perusahaan</TransitionLink></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <summary>Manajemen Kinerja</summary>
                                                <ul>
                                                    <li><TransitionLink href="/manajemen-kinerja/dashboard">Dashboard</TransitionLink></li>
                                                    <li>
                                                        <details>
                                                            <summary>Submenu 2</summary>
                                                            <ul>
                                                                <li><a>Subsubmenu 1</a></li>
                                                                <li><a>Subsubmenu 2</a></li>
                                                            </ul>
                                                        </details>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>

                    {/* navbrand */}
                    <a className="max-lg:ml-auto px-5 text-xl !no-underline btn btn-link">
                        <LogoLight className="size-8" />
                        <span className="text-secondary">People</span> Partner
                    </a>

                    {/* regular navigation link when screen width is above or equal to lg (64rem) */}
                    <div className="hidden lg:flex">
                        <ul className="px-1 menu menu-horizontal">
                            <li><TransitionLink href="/main-menu">Main Menu</TransitionLink></li>
                            <li className="dropdown">
                                <div tabIndex={0} role="button" className="menu-dropdown-toggle">Menu</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-64 p-2 shadow-sm">
                                    <li>
                                        <details>
                                            <summary>Desain Perusahaan</summary>
                                            <ul>
                                                <li><TransitionLink href="/desain-perusahaan/dashboard">Dashboard</TransitionLink></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>Layanan Mandiri</summary>
                                            <ul>
                                                <li><TransitionLink href="/layanan-mandiri/dashboard">Dashboard</TransitionLink></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>Rekrutmen</summary>
                                            <ul>
                                                <li><TransitionLink href="/rekrutmen/dashboard">Dashboard</TransitionLink></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>Assesmen</summary>
                                            <ul>
                                                <li><TransitionLink href="/assesmen/dashboard">Dashboard</TransitionLink></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>Kompensasi dan Benefit</summary>
                                            <ul>
                                                <li><TransitionLink href="/kompensasi-dan-benefit/dashboard">Dashboard</TransitionLink></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>Hubungan Industrial</summary>
                                            <ul>
                                                <li><TransitionLink href="/hubungan-industrial/dashboard">Dashboard</TransitionLink></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>Master Admin</summary>
                                            <ul>
                                                <li><TransitionLink href="/admin">Dashboard</TransitionLink></li>
                                                <li><TransitionLink href="/admin/desain-perusahaan">Desain Perusahaan</TransitionLink></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>Manajemen Kinerja</summary>
                                            <ul>
                                                <li><TransitionLink href="/manajemen-kinerja/dashboard">Dashboard</TransitionLink></li>
                                                <li>
                                                    <details>
                                                        <summary>Submenu 2</summary>
                                                        <ul>
                                                            <li><a>Subsubmenu 1</a></li>
                                                            <li><a>Subsubmenu 2</a></li>
                                                        </ul>
                                                    </details>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* miscellaneous */}
                    <div className="ml-auto">
                        <button className="btn btn-primary">Logout</button>
                    </div>

                </nav>
            </div>
            <Breadcrumbs />
            {children}
        </main>
    );
}

export default DefaultLayout;