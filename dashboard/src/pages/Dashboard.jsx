import { useState } from "react";
import { SideBar } from "../componentes/SideBar.jsx";
import { Header } from "../componentes/Header.jsx";
import { StatusCard } from "../componentes/StatusCard.jsx";
import ServiceTable from "../componentes/ServiceTable.jsx";
import { MisDominios } from "./MisDominios.jsx";
import { HostingVPS } from "./HostingVPS.jsx";
import { SoporteTecnico } from "./SoporteTecnico.jsx";

const titulos = {
  dashboard: "Panel General",
  dominios: "Mis Dominios",
  hosting: "Hosting / VPS",
  soporte: "Soporte Técnico",
};

export const Dashboard = () => {
  const [pagina, setPagina] = useState("dashboard");

  return (
    <div className="bg-gray-900 text-gray-100 font-sans antialiased">
      <div className="flex h-screen overflow-hidden">
        <SideBar paginaActual={pagina} setPagina={setPagina} />

        <div className="flex-1 flex flex-col overflow-y-auto">
          <Header titulo={titulos[pagina]} />

          <main>
            {pagina === "dashboard" && (
              <div className="p-8 max-w-7xl w-full mx-auto space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatusCard titulo="Dominios Registrados" cantidad="4" descripcion="1 por vencer este mes" icono="globe" />
                  <StatusCard titulo="Planes de Hosting" cantidad="2 Activos" descripcion="Uso de SSD: 42% promedio" icono="cpu" />
                  <StatusCard titulo="Próxima Factura" cantidad="$15.99" descripcion="Vence en: 12 días" icono="credit-card" />
                </div>
                <ServiceTable />
              </div>
            )}
            {pagina === "dominios" && <MisDominios />}
            {pagina === "hosting" && <HostingVPS />}
            {pagina === "soporte" && <SoporteTecnico />}
          </main>
        </div>
      </div>
    </div>
  );
};