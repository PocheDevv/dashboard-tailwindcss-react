import { useState } from "react";
import { LifeBuoy, Send, CheckCircle2, Clock, MessageSquare } from "lucide-react";

const tickets = [
    { id: "#1042", asunto: "Error al conectar FTP", estado: "Resuelto", fecha: "2025-06-10", prioridad: "Media" },
    { id: "#1031", asunto: "SSL no renueva automáticamente", estado: "En proceso", fecha: "2025-06-18", prioridad: "Alta" },
];

export const SoporteTecnico = () => {
    const [enviado, setEnviado] = useState(false);
    const [form, setForm] = useState({ asunto: "", categoria: "", mensaje: "", prioridad: "Media" });

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);
    };

    return (
        <div className="p-8 max-w-7xl w-full mx-auto space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-100">Soporte Técnico</h2>
                <p className="text-sm text-gray-400 mt-1">Abre un ticket o revisa tus solicitudes anteriores</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Formulario */}
                <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <MessageSquare className="w-5 h-5 text-emerald-400" />
                        <h3 className="text-lg font-semibold text-gray-200">Nuevo Ticket</h3>
                    </div>

                    {enviado ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
                            <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                            <p className="text-gray-200 font-semibold">¡Ticket enviado con éxito!</p>
                            <p className="text-gray-400 text-sm">Nuestro equipo responderá en menos de 24 horas.</p>
                            <button
                                onClick={() => { setEnviado(false); setForm({ asunto: "", categoria: "", mensaje: "", prioridad: "Media" }); }}
                                className="mt-3 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm rounded-lg transition-colors"
                            >
                                Crear otro ticket
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">Asunto</label>
                                <input
                                    type="text" required value={form.asunto}
                                    onChange={(e) => setForm({ ...form, asunto: e.target.value })}
                                    placeholder="Describe brevemente el problema"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-emerald-500 transition-colors"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">Categoría</label>
                                    <select
                                        required value={form.categoria}
                                        onChange={(e) => setForm({ ...form, categoria: e.target.value })}
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-emerald-500 transition-colors"
                                    >
                                        <option value="">Seleccionar...</option>
                                        <option>Hosting / VPS</option>
                                        <option>Dominios / DNS</option>
                                        <option>SSL / Seguridad</option>
                                        <option>Facturación</option>
                                        <option>Otro</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">Prioridad</label>
                                    <select
                                        value={form.prioridad}
                                        onChange={(e) => setForm({ ...form, prioridad: e.target.value })}
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-emerald-500 transition-colors"
                                    >
                                        <option>Baja</option>
                                        <option>Media</option>
                                        <option>Alta</option>
                                        <option>Crítica</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">Mensaje</label>
                                <textarea
                                    required rows={5} value={form.mensaje}
                                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                                    placeholder="Describe el problema con el mayor detalle posible..."
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" /> Enviar Ticket
                            </button>
                        </form>
                    )}
                </div>

                {/* Panel derecho */}
                <div className="space-y-6">
                    <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <LifeBuoy className="w-5 h-5 text-blue-400" />
                            <h3 className="text-base font-semibold text-gray-200">Canales de Atención</h3>
                        </div>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Chat en vivo</span>
                                <span className="text-emerald-400 font-medium">Disponible 24/7</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Email</span>
                                <span className="text-gray-300">soporte@cloudhost.com</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Tiempo de respuesta</span>
                                <span className="text-gray-300">{"< 24 horas"}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                        <h3 className="text-base font-semibold text-gray-200 mb-4">Tickets Recientes</h3>
                        <div className="space-y-3">
                            {tickets.map((t) => (
                                <div key={t.id} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                                    <div className="flex items-center gap-3">
                                        {t.estado === "Resuelto"
                                            ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                            : <Clock className="w-4 h-4 text-amber-400 shrink-0" />}
                                        <div>
                                            <p className="text-sm font-medium text-gray-200">{t.asunto}</p>
                                            <p className="text-xs text-gray-500">{t.id} · {t.fecha}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={`text-xs font-medium ${t.estado === "Resuelto" ? "text-emerald-400" : "text-amber-400"}`}>{t.estado}</p>
                                        <p className="text-xs text-gray-600">{t.prioridad}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};