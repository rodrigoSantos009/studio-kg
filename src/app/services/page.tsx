import { Text } from "@radix-ui/themes";
import HeaderTop from "@/components/HeaderTop";
import Footer from "@/components/Footer";
import { db } from "@/lib/prisma";
import ServiceItem from "@/components/Services";

const ServicesPage = async() => {
  const services = await db.service.findMany({});
  
  return (
    <div>
      <HeaderTop />
      <div className="w-[90%] mx-auto">
        <h1 className="text-center text-[40px] mb-1">Serviços</h1>
        <Text as="p" color="gray" className="text-center mx-auto">
          Explore um novo padrão de cuidados capilares, onde oferecemos uma gama
          completa de serviços. De cortes precisos a tratamentos de hidratação
          luxuosos e pinturas vibrantes.
        </Text>
        {services.map((service) => (
          <ServiceItem key={service.name} service={service} />
        ))}
        <Footer />
      </div>
    </div>
  );
}
 
export default ServicesPage;