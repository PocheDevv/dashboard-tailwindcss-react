import { HardDrive, Plus, Cpu, Wifi, Settings } from "lucide-react";

const planes = [
    {
        nombre: "misitioweb.com", plan: "Cloud Startup", tipo: "Hosting Compartido",
        ip: "192.168.10.45", ssd: 42, ram: 30, cpu: 18, estado: "Activo", renovacion: "2026-03-15",
    },
    {
        nombre: "app.someproject.io", plan: "VPS Dedicado Linux", tipo: "Servidor VPS Intel Core v4",
        ip: "45.230.12.110", ssd: 71, ram: 55, cpu: 40, estado: "Activo", renovacion: "2026-08-22",
    },
];

const BarraUso = ({ porcentaje, color }) => {
    const colores = { blue: "bg-blue-400", violet: "bg-violet-400", emerald: "bg-emerald-400" };
    const barra = porcentaje > 80 ? "bg-red-400" : (colores[color] ?? "bg-blue-400");
    return (
        <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
            <div className={`${barra} h-1.5 rounded-full`} style={{ width: `${porcentaje}%` }} />
        </div>
    );
};

export const HostingVPS = () => {
    return (
        <div className="p-8 max-w-7xl w-full mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-100">Hosting / VPS</h2>
                    <p className="text-sm text-gray-400 mt-1">Monitorea el uso de tus planes de infraestructura</p>
                </div>
                <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-semibold text-sm rounded-lg transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Contratar Plan
                </button>
            </div>

            {/* Resumen */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg"><HardDrive className="w-6 h-6" /></div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Planes Activos</p>
                        <p className="text-2xl font-bold text-gray-100">2</p>
                    </div>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 flex items-center gap-4">
                    <div className="p-3 bg-violet-500/10 text-violet-400 rounded-lg"><Cpu className="w-6 h-6" /></div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Uso SSD Promedio</p>
                        <p className="text-2xl font-bold text-gray-100">42%</p>
                    </div>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg"><Wifi className="w-6 h-6" /></div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Uptime</p>
                        <p className="text-2xl font-bold text-gray-100">99.9%</p>
                    </div>
                </div>
            </div>

            {/* Tarjetas de planes */}
            <div className="space-y-4">
                {planes.map((p) => (
                    <div key={p.nombre} className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                        <div className="flex items-start justify-between mb-5">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                                    <HardDrive className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-200">{p.nombre}</p>
                                    <p className="text-xs text-gray-500">{p.plan} · {p.tipo}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> {p.estado}
                                </span>
                                <button className="text-gray-400 hover:text-emerald-400 transition-colors p-1">
                                    <Settings className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-gray-400">Uso SSD</span>
                                    <span className="text-gray-300 font-medium">{p.ssd}%</span>
                                </div>
                                <BarraUso porcentaje={p.ssd} color="blue" />
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-gray-400">Uso RAM</span>
                                    <span className="text-gray-300 font-medium">{p.ram}%</span>
                                </div>
                                <BarraUso porcentaje={p.ram} color="violet" />
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-gray-400">Uso CPU</span>
                                    <span className="text-gray-300 font-medium">{p.cpu}%</span>
                                </div>
                                <BarraUso porcentaje={p.cpu} color="emerald" />
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between text-xs text-gray-500">
                            <span>IP: <span className="font-mono text-gray-400">{p.ip}</span></span>
                            <span>Renovación: <span className="text-gray-400">{p.renovacion}</span></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};