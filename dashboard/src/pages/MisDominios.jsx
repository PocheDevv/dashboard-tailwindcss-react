import { RefreshCw, Globe, Plus, AlertTriangle, CheckCircle2 } from "lucide-react";

const dominios = [
    { nombre: "misitioweb.com", registrador: "CloudHost DNS", vencimiento: "2026-03-15", estado: "Activo", autoRenovar: true },
    { nombre: "portafoliovip.net", registrador: "CloudHost DNS", vencimiento: "2025-07-28", estado: "Por Vencer", autoRenovar: false },
    { nombre: "app.someproject.io", registrador: "Externo", vencimiento: "2026-11-01", estado: "Activo", autoRenovar: true },
    { nombre: "mitienda.store", registrador: "CloudHost DNS", vencimiento: "2027-01-20", estado: "Activo", autoRenovar: true },
];

export const MisDominios = () => {
    return (
        <div className="p-8 max-w-7xl w-full mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-100">Mis Dominios</h2>
                    <p className="text-sm text-gray-400 mt-1">Gestiona todos tus dominios registrados</p>
                </div>
                <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-semibold text-sm rounded-lg transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Registrar Dominio
                </button>
            </div>

            {/* Resumen */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg"><Globe className="w-6 h-6" /></div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Total Dominios</p>
                        <p className="text-2xl font-bold text-gray-100">4</p>
                    </div>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg"><CheckCircle2 className="w-6 h-6" /></div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Activos</p>
                        <p className="text-2xl font-bold text-gray-100">3</p>
                    </div>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 flex items-center gap-4">
                    <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg"><AlertTriangle className="w-6 h-6" /></div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Por Vencer</p>
                        <p className="text-2xl font-bold text-gray-100">1</p>
                    </div>
                </div>
            </div>

            {/* Tabla */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-200">Listado de Dominios</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-400 uppercase text-xs tracking-wider border-b border-gray-700 bg-gray-900/40">
                                <th className="py-4 px-6 font-semibold">Dominio</th>
                                <th className="py-4 px-6 font-semibold">Registrador</th>
                                <th className="py-4 px-6 font-semibold">Vencimiento</th>
                                <th className="py-4 px-6 font-semibold">Auto-Renovar</th>
                                <th className="py-4 px-6 font-semibold">Estado</th>
                                <th className="py-4 px-6 font-semibold text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700 text-sm">
                            {dominios.map((d) => (
                                <tr key={d.nombre} className="hover:bg-gray-700/30 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-2">
                                            <Globe className="w-4 h-4 text-blue-400" />
                                            <span className="font-medium text-gray-200">{d.nombre}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-gray-400">{d.registrador}</td>
                                    <td className="py-4 px-6 text-gray-400">{d.vencimiento}</td>
                                    <td className="py-4 px-6">
                                        {d.autoRenovar
                                            ? <span className="text-emerald-400 text-xs font-medium">✓ Sí</span>
                                            : <span className="text-gray-500 text-xs font-medium">✗ No</span>}
                                    </td>
                                    <td className="py-4 px-6">
                                        {d.estado === "Activo"
                                            ? <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Activo</span>
                                            : <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span> Por Vencer</span>}
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <button className="text-gray-400 hover:text-emerald-400 transition-colors p-1" title="Renovar">
                                            <RefreshCw className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};