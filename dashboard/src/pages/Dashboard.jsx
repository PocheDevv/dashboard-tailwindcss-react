import { StatusCard } from "../componentes/StatusCard.jsx";

export const Dashboard = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatusCard
        titulo="Dominios Registrados"
        cantidad="4"
        descripcion="1 por vencer este mes"
        icono="globe"
      ></StatusCard>
      <StatusCard
        titulo="Planes de Hosting"
        cantidad="2 Activos"
        descripcion="Uso de SSD: 42% promedio"
        icono="cpu"
      ></StatusCard>
      <StatusCard
        titulo="Próxima Factura"
        cantidad="$15.99"
        descripcion="Vence en: 12 días"
        icono="credit-card"
      ></StatusCard>
    </div>
  );
};
