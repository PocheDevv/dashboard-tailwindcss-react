import { Globe, Cpu, CreditCard, ArrowUpRight } from "lucide-react";

const iconos = {
  globe: Globe,
  cpu: Cpu,
  "credit-card": CreditCard,
};

export const StatusCard = ({ titulo, cantidad, descripcion, icono }) => {
  const Icono = iconos[icono];
  return (
    <div class="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-400 font-medium uppercase tracking-wider">
          {titulo}
        </p>
        <h3 class="text-3xl font-bold mt-2 text-gray-100">{cantidad}</h3>
        <p class="text-xs text-emerald-400 mt-1 flex items-center gap-1">
          <i data-lucide="arrow-up-right" class="w-3 h-3"></i>
          {descripcion}
        </p>
      </div>
      <div className="p-4 bg-blue-500/10 text-blue-400 rounded-lg">
        {Icono && <Icono className="w-8 h-8" />}
      </div>
    </div>
  );
};
