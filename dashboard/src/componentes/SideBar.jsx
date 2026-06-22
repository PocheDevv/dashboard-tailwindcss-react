export const SideBar = () => {
    return (
        <aside class="w-64 bg-gray-800 border-r border-gray-700 flex flex-col justify-between">
            <div class="p-6">
                <div class="flex items-center gap-3 text-emerald-400 font-bold text-xl tracking-wider uppercase mb-8">
                    <i data-lucide="server" class="w-6 h-6"></i>
                    <span>CloudHost</span>
                </div>

                <nav class="space-y-2">
                    <a href="#"
                        class="flex items-center gap-3 px-4 py-3 bg-emerald-500/10 text-emerald-400 rounded-lg font-medium transition-all">
                        <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
                        <span>Inicio / Dashboard</span>
                    </a>
                    <a href="#"
                        class="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-750 hover:text-gray-200 rounded-lg font-medium transition-all">
                        <i data-lucide="globe" class="w-5 h-5"></i>
                        <span>Mis Dominios</span>
                    </a>
                    <a href="#"
                        class="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-750 hover:text-gray-200 rounded-lg font-medium transition-all">
                        <i data-lucide="hard-drive" class="w-5 h-5"></i>
                        <span>Hosting / VPS</span>
                    </a>
                    <a href="#"
                        class="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-750 hover:text-gray-200 rounded-lg font-medium transition-all">
                        <i data-lucide="life-buoy" class="w-5 h-5"></i>
                        <span>Soporte Técnico</span>
                    </a>
                </nav>
            </div>

            <div class="p-4 border-t border-gray-700 bg-gray-850">
                <div class="flex items-center gap-3">
                    <div
                        class="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-gray-950">
                        UD
                    </div>
                    <div>
                        <p class="text-sm font-medium text-gray-250">Usuario Demo</p>
                        <p class="text-xs text-gray-500">pro-plan@cloudhost.com</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}       