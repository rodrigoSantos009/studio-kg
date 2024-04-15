import Footer from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";
import ProcessItem from "./_components/process-item";

import { db } from "@/lib/prisma";
import ServiceItem from "./_components/service-item";

interface ServicesDetailsPageProps {
  params: {
    id?: string;
  };
}

const ServicesDetailsPage = async({ params }: ServicesDetailsPageProps) => {
  if (!params.id) {
    return null;
  }

  const service = await db.service.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!service) {
    return null;
  }

  return (
    <div>
      <div>
        <HeaderTop />
        <div className="w-[90%] mx-auto">
          <ServiceItem service={service} />
          <ProcessItem process={service.process} />
          <Footer />
        </div>
      </div>
    </div>
  );
}
 
export default ServicesDetailsPage;