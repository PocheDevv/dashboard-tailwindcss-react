import { SideBar } from "../componentes/SideBar.jsx";
import { Header } from "../componentes/Header.jsx";
import { StatusCard } from "../componentes/StatusCard.jsx";
import ServiceTable from "../componentes/ServiceTable.jsx";

export const Dashboard = () => {
  return (

    
    <div className="bg-gray-900 text-gray-100 font-sans antialiased">
      <div className="flex h-screen overflow-hidden">
          {/* Menú Lateral */}
          <SideBar />

          <div className="flex-1 flex flex-col overflow-y-auto">
            {/* Barra Superior */}
            <Header />

            {/* Contenedor del Contenido Principal */}
            <main className="p-8 max-w-7xl w-full mx-auto space-y-8">

              {/* Fila de Tarjetas de Estado */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatusCard
                  titulo="Dominios Registrados"
                  cantidad="4"
                  descripcion="1 por vencer este mes"
                  icono="globe"
                />
                <StatusCard
                  titulo="Planes de Hosting"
                  cantidad="2 Activos"
                  descripcion="Uso de SSD: 42% promedio"
                  icono="cpu"
                />
                <StatusCard
                  titulo="Próxima Factura"
                  cantidad="$15.99"
                  descripcion="Vence en: 12 días"
                  icono="credit-card"
                />
              </div>

              {/* Tabla de Servicios */}
              <ServiceTable />

            </main>
          </div>

      </div>
      
    </div>
  );
};