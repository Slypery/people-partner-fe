import Breadcrumbs from "@/components/Breadcrumbs";
import { LogoLight } from "@/components/Logo";
import TransitionLink from "@/components/TransitionLink";

function DefaultLayout({ children }) {
    return (
        <div id="adminLayout" data-animate="enter" className="flex flex-col items-center h-screen max-h-screen overflow-auto bg-base-100 fade-in fade-out">
            <nav className="bg-secondary/5 shadow-sm navbar">
                <div className="flex flex-1 items-center">
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
                                <ul tabIndex={0} className="z-1 p-2 rounded-box w-64 bg-base-100 shadow-sm dropdown-content menu">
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
                    <div className="flex gap-6 mr-4 ml-auto">
                        <TransitionLink href="" className="pt-0.5 pl-[1px] border-2 border-secondary rounded-full size-6 overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-secondary"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
                        </TransitionLink>
                        <TransitionLink href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-secondary"><path fill="none" d="M0 0h24v24H0z"></path><path d="M22 20H2V18H3V11.0314C3 6.04348 7.02944 2 12 2C16.9706 2 21 6.04348 21 11.0314V18H22V20ZM5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path></svg>
                        </TransitionLink>
                        <TransitionLink href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-error"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path></svg>
                        </TransitionLink>
                    </div>
                </div>
            </nav>
            {/* <Breadcrumbs /> */}
            <main className="@container/main flex flex-col w-screen h-full max-h-[calc(100vh-4rem)] overflow-auto scrollbar-thin scrollbar-track-white/0 scrollbar-thumb-accent" style={{ scrollbarGutter: 'stable' }}>
                {children}
                <footer className="flex items-center mt-auto px-8 w-full h-12 shrink-0 text-base-content/80">
                    © 2025 People Partners Group
                </footer>
            </main>
            <TransitionLink href="" className="right-0 bottom-0 absolute def-border-w border-secondary/50 shadow-sm rounded-field overflow-hidden bg-base-100 text-xs -translate-x-10 -translate-y-6 link link-secondary">
                <div className="flex flex-col bg-secondary/5 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 shrink-0"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 8C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8H21ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path></svg>
                    <span>Gina</span>
                </div>
            </TransitionLink>
        </div>
    );
}

export default DefaultLayout;