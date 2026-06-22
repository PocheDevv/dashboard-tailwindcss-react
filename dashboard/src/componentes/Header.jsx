export const Header = () => {
    return (
        <header
            class="bg-gray-800 border-b border-gray-700 h-16 flex items-center justify-between px-8 sticky top-0 z-10">
            <div class="flex items-center gap-4">
                <h1 class="text-lg font-semibold text-gray-200">Panel General</h1>
                <span
                    class="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full font-semibold border border-emerald-500/30">
                    Servidores Operativos
                </span>
            </div>
            <div class="flex items-center gap-4">
                <button class="relative p-2 text-gray-400 hover:text-gray-200 transition-colors">
                    <i data-lucide="bell" class="w-5 h-5"></i>
                    <span class="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full"></span>
                </button>
                <div class="h-6 w-px bg-gray-700"></div>
                <span class="text-sm text-gray-400">Balance: <strong class="text-emerald-400">$24.50
                    USD</strong></span>
            </div>
        </header>
    )
}