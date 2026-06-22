import { Plus, Settings, RefreshCw } from 'lucide-react';

export default function ServiceTable() {
    return (
        <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-700 flex justify-between items-center bg-gray-850">
                <div>
                    <h2 className="text-lg font-semibold text-gray-200">Resumen de Servicios Contratados</h2>
                    <p className="text-xs text-gray-400 mt-0.5">Listado en tiempo real de tus infraestructuras web.</p>
                </div>
                <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-semibold text-sm rounded-lg transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Nuevo Servicio
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-750 text-gray-400 uppercase text-xs tracking-wider border-b border-gray-700">
                            <th className="py-4 px-6 font-semibold">Servicio / Dominio</th>
                            <th className="py-4 px-6 font-semibold">Tipo</th>
                            <th className="py-4 px-6 font-semibold">Dirección IP</th>
                            <th className="py-4 px-6 font-semibold">Estado</th>
                            <th className="py-4 px-6 font-semibold text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700 text-sm">
                        {/* Fila 1 */}
                        <tr className="hover:bg-gray-750/50 transition-colors">
                            <td className="py-4 px-6">
                                <div className="font-medium text-gray-250">misitioweb.com</div>
                                <div className="text-xs text-gray-500">Plan Cloud Startup</div>
                            </td>
                            <td className="py-4 px-6 text-gray-400">Hosting Compartido</td>
                            <td className="py-4 px-6 font-mono text-xs text-gray-400">192.168.10.45</td>
                            <td className="py-4 px-6">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Activo
                                </span>
                            </td>
                            <td className="py-4 px-6 text-right">
                                <button className="text-gray-400 hover:text-emerald-400 transition-colors p-1" title="Administrar">
                                    <Settings className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>

                        {/* Fila 2 */}
                        <tr className="hover:bg-gray-750/50 transition-colors">
                            <td className="py-4 px-6">
                                <div className="font-medium text-gray-250">app.someproject.io</div>
                                <div className="text-xs text-gray-500">VPS Dedicado Linux</div>
                            </td>
                            <td className="py-4 px-6 text-gray-400">Servidor VPS Intel Core v4</td>
                            <td className="py-4 px-6 font-mono text-xs text-gray-400">45.230.12.110</td>
                            <td className="py-4 px-6">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Activo
                                </span>
                            </td>
                            <td className="py-4 px-6 text-right">
                                <button className="text-gray-400 hover:text-emerald-400 transition-colors p-1" title="Administrar">
                                    <Settings className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>

                        {/* Fila 3 */}
                        <tr className="hover:bg-gray-750/50 transition-colors">
                            <td className="py-4 px-6">
                                <div className="font-medium text-gray-250">portafoliovip.net</div>
                                <div className="text-xs text-gray-500">Registro de Dominio</div>
                            </td>
                            <td className="py-4 px-6 text-gray-400">Dominio TLD</td>
                            <td className="py-4 px-6 font-mono text-xs text-gray-500">N/A (Redirección)</td>
                            <td className="py-4 px-6">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span> Por Vencer
                                </span>
                            </td>
                            <td className="py-4 px-6 text-right">
                                <button className="text-gray-400 hover:text-amber-400 transition-colors p-1" title="Renovar Ahora">
                                    <RefreshCw className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}