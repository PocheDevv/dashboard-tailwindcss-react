export const SideBar = ({ paginaActual, setPagina }) => {
    const links = [
        { id: "dashboard", label: "Inicio / Dashboard", icon: "layout-dashboard" },
        { id: "dominios", label: "Mis Dominios", icon: "globe" },
        { id: "hosting", label: "Hosting / VPS", icon: "hard-drive" },
        { id: "soporte", label: "Soporte Técnico", icon: "life-buoy" },
    ];

    return (
        <aside className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col justify-between">
            <div className="p-6">
                <div className="flex items-center gap-3 text-emerald-400 font-bold text-xl tracking-wider uppercase mb-8">
                    <i data-lucide="server" className="w-6 h-6"></i>
                    <span>CloudHost</span>
                </div>

                <nav className="space-y-2">
                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => setPagina(link.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all text-left ${paginaActual === link.id
                                    ? "bg-emerald-500/10 text-emerald-400"
                                    : "text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                                }`}
                        >
                            <i data-lucide={link.icon} className="w-5 h-5"></i>
                            <span>{link.label}</span>
                        </button>
                    ))}
                </nav>
            </div>

            <div className="p-4 border-t border-gray-700">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-gray-950">
                        UD
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-200">Usuario Demo</p>
                        <p className="text-xs text-gray-500">pro-plan@cloudhost.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};