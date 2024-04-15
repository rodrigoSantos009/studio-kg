import About from "@/components/About";
import ButtonNormal from "@/components/ButtonNormal";
import ButtonOutline from "@/components/ButtonOutline";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceItem from "@/components/Services";
import { db } from "@/lib/prisma";

export default async function Home() {
  const services = await db.service.findMany({
    take: 2
  });

  return (
    <div>
      <Header />
      <div style={{ width: "90%", margin: "auto" }}>
        <About />
        <div className="mb-52">
          <div>
            <div>
              <p className="text-[34px] text-[#1e1e24] mb-[24px]">
                Nossos serviços oferecido
              </p>
            </div>
            <div>
              <ButtonOutline title="Fazer uma reserva" url=""/>
              <ButtonNormal title="Ver serviços" url="/services" />
            </div>
          </div>
          {services.map((service) => (
            <ServiceItem key={service.name} service={service} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
