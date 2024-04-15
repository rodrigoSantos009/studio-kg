const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function SeedDatabase() {
  try {
    const images = [
      "https://utfs.io/f/3589ed26-ed08-43c0-b820-73108263f685-ipoznr.jpg",
    ];

    const servicesName = ["Alisamento", "Corte"];

    const serviceDescriptions = [
      "Entendemos que cada tipo de cabelo é único e, para alguns, a busca pelo cabelo liso e sem frizz é uma prioridade. É por isso que oferecemos serviços de alisamento capilar que proporcionam resultados suaves e duradouros, adaptados às necessidades individuais de cada cliente.",
      "Entendemos que cada tipo de cabelo é único e, para alguns, a busca pelo cabelo liso e sem frizz é uma prioridade. É por isso que oferecemos serviços de alisamento capilar que proporcionam resultados suaves e duradouros, adaptados às necessidades individuais de cada cliente.",
    ];

    const serviceProcess = [
      "1. Avaliação e Consulta: Antes de iniciar o processo de alisamento, um cabeleireiro experiente realizará uma avaliação detalhada do seu tipo de cabelo, condição do couro cabeludo e histórico de tratamentos capilares anteriores. 2. Preparação: O cabelo será lavado c shampoo de limpeza profunda para remover acúmulos de produtos e oleosidade, preparando-o para o tratamento de alisamento. Em seguida, o cabelo será cuidadosamente seco com uma toalha para remover o excesso de umidade, deixando-o úmido, mas não molhado. 3. Aplicação do Produto: Aplicação do produto de alisamento escolhido de acordo com o tipo de técnica selecionada. Isso pode envolver a aplicação de uma solução alisadora ou produto ativador, que ajuda a quebrar as ligações de sulfeto de cabelo para relaxar os cachos e alisar os fios. 4. Processo de Alisamento:</strong> Dependendo do produto utilizado, o cabelo será alisado manualmente com um pente ou escova durante o processo de aplicação para garantir uma distribuição uniforme. Em alguns casos, a aplicação do produto pode ser seguida pelo uso de ferramentas térmicas, como chapinhas, para ativar o processo de alisamento e selar a cutícula do cabelo. 5. Tempo de Ação:O tempo de ação do produto pode variar de acordo com o tipo de alisamento e a textura do cabelo. Durante esse período, é essencial que o cabeleireiro monitore cuidadosamente o cabelo para garantir que o processo esteja progredindo conforme o esperado e que não haja danos ao cabelo.  Enxágue e Finalização: Uma vez que o produto tenha agido pelo tempo necessário, o cabelo será cuidadosamente enxaguado para remover qualquer resíduo do produto. Em seguida, será aplicado um condicionador ou máscara hidratante para restaurar a umidade e nutrição perdidas durante o processo de alisamento. O cabelo será então secado e estilizado de acordo com suas preferências. Cuidados Pós-Alisamento: Após o alisamento, é importante seguir as instruções fornecidas pelo cabeleireiro para cuidar adequadamente do seu cabelo. Isso pode incluir o uso de produtos específicos para cabelos alisados, evitar o uso excessivo de ferramentas térmicas e agendar visitas regulares ao salão para manutenção e retoques. ",
      "1. Avaliação e Consulta: Antes de iniciar o processo de alisamento, um cabeleireiro experiente realizará uma avaliação detalhada do seu tipo de cabelo, condição do couro cabeludo e histórico de tratamentos capilares anteriores. 2. Preparação: O cabelo será lavado c shampoo de limpeza profunda para remover acúmulos de produtos e oleosidade, preparando-o para o tratamento de alisamento. Em seguida, o cabelo será cuidadosamente seco com uma toalha para remover o excesso de umidade, deixando-o úmido, mas não molhado. 3. Aplicação do Produto: Aplicação do produto de alisamento escolhido de acordo com o tipo de técnica selecionada. Isso pode envolver a aplicação de uma solução alisadora ou produto ativador, que ajuda a quebrar as ligações de sulfeto de cabelo para relaxar os cachos e alisar os fios. 4. Processo de Alisamento:</strong> Dependendo do produto utilizado, o cabelo será alisado manualmente com um pente ou escova durante o processo de aplicação para garantir uma distribuição uniforme. Em alguns casos, a aplicação do produto pode ser seguida pelo uso de ferramentas térmicas, como chapinhas, para ativar o processo de alisamento e selar a cutícula do cabelo. 5. Tempo de Ação:O tempo de ação do produto pode variar de acordo com o tipo de alisamento e a textura do cabelo. Durante esse período, é essencial que o cabeleireiro monitore cuidadosamente o cabelo para garantir que o processo esteja progredindo conforme o esperado e que não haja danos ao cabelo.  Enxágue e Finalização: Uma vez que o produto tenha agido pelo tempo necessário, o cabelo será cuidadosamente enxaguado para remover qualquer resíduo do produto. Em seguida, será aplicado um condicionador ou máscara hidratante para restaurar a umidade e nutrição perdidas durante o processo de alisamento. O cabelo será então secado e estilizado de acordo com suas preferências. Cuidados Pós-Alisamento: Após o alisamento, é importante seguir as instruções fornecidas pelo cabeleireiro para cuidar adequadamente do seu cabelo. Isso pode incluir o uso de produtos específicos para cabelos alisados, evitar o uso excessivo de ferramentas térmicas e agendar visitas regulares ao salão para manutenção e retoques. ",
    ];

    const services = [
      {
        name: "Alisamento",
        description:
          "Entendemos que cada tipo de cabelo é único e, para alguns, a busca pelo cabelo liso e sem frizz é uma prioridade. É por isso que oferecemos serviços de alisamento capilar que proporcionam resultados suaves e duradouros, adaptados às necessidades individuais de cada cliente.",
        imageUrl:
          "https://utfs.io/f/3589ed26-ed08-43c0-b820-73108263f685-ipoznr.jpg",
        process:
          "1. Avaliação e Consulta: Antes de iniciar o processo de alisamento, um cabeleireiro experiente realizará uma avaliação detalhada do seu tipo de cabelo, condição do couro cabeludo e histórico de tratamentos capilares anteriores. 2. Preparação: O cabelo será lavado c shampoo de limpeza profunda para remover acúmulos de produtos e oleosidade, preparando-o para o tratamento de alisamento. Em seguida, o cabelo será cuidadosamente seco com uma toalha para remover o excesso de umidade, deixando-o úmido, mas não molhado. 3. Aplicação do Produto: Aplicação do produto de alisamento escolhido de acordo com o tipo de técnica selecionada. Isso pode envolver a aplicação de uma solução alisadora ou produto ativador, que ajuda a quebrar as ligações de sulfeto de cabelo para relaxar os cachos e alisar os fios. 4. Processo de Alisamento:</strong> Dependendo do produto utilizado, o cabelo será alisado manualmente com um pente ou escova durante o processo de aplicação para garantir uma distribuição uniforme. Em alguns casos, a aplicação do produto pode ser seguida pelo uso de ferramentas térmicas, como chapinhas, para ativar o processo de alisamento e selar a cutícula do cabelo. 5. Tempo de Ação:O tempo de ação do produto pode variar de acordo com o tipo de alisamento e a textura do cabelo. Durante esse período, é essencial que o cabeleireiro monitore cuidadosamente o cabelo para garantir que o processo esteja progredindo conforme o esperado e que não haja danos ao cabelo.  Enxágue e Finalização: Uma vez que o produto tenha agido pelo tempo necessário, o cabelo será cuidadosamente enxaguado para remover qualquer resíduo do produto. Em seguida, será aplicado um condicionador ou máscara hidratante para restaurar a umidade e nutrição perdidas durante o processo de alisamento. O cabelo será então secado e estilizado de acordo com suas preferências. Cuidados Pós-Alisamento: Após o alisamento, é importante seguir as instruções fornecidas pelo cabeleireiro para cuidar adequadamente do seu cabelo. Isso pode incluir o uso de produtos específicos para cabelos alisados, evitar o uso excessivo de ferramentas térmicas e agendar visitas regulares ao salão para manutenção e retoques. ",
      },
      {
        name: "Corte  ",
        description:
          "Entendemos que cada tipo de cabelo é único e, para alguns, a busca pelo cabelo liso e sem frizz é uma prioridade. É por isso que oferecemos serviços de alisamento capilar que proporcionam resultados suaves e duradouros, adaptados às necessidades individuais de cada cliente.",
        imageUrl:
          "https://utfs.io/f/3589ed26-ed08-43c0-b820-73108263f685-ipoznr.jpg",
        process:
          "1. Avaliação e Consulta: Antes de iniciar o processo de alisamento, um cabeleireiro experiente realizará uma avaliação detalhada do seu tipo de cabelo, condição do couro cabeludo e histórico de tratamentos capilares anteriores. 2. Preparação: O cabelo será lavado c shampoo de limpeza profunda para remover acúmulos de produtos e oleosidade, preparando-o para o tratamento de alisamento. Em seguida, o cabelo será cuidadosamente seco com uma toalha para remover o excesso de umidade, deixando-o úmido, mas não molhado. 3. Aplicação do Produto: Aplicação do produto de alisamento escolhido de acordo com o tipo de técnica selecionada. Isso pode envolver a aplicação de uma solução alisadora ou produto ativador, que ajuda a quebrar as ligações de sulfeto de cabelo para relaxar os cachos e alisar os fios. 4. Processo de Alisamento:</strong> Dependendo do produto utilizado, o cabelo será alisado manualmente com um pente ou escova durante o processo de aplicação para garantir uma distribuição uniforme. Em alguns casos, a aplicação do produto pode ser seguida pelo uso de ferramentas térmicas, como chapinhas, para ativar o processo de alisamento e selar a cutícula do cabelo. 5. Tempo de Ação:O tempo de ação do produto pode variar de acordo com o tipo de alisamento e a textura do cabelo. Durante esse período, é essencial que o cabeleireiro monitore cuidadosamente o cabelo para garantir que o processo esteja progredindo conforme o esperado e que não haja danos ao cabelo.  Enxágue e Finalização: Uma vez que o produto tenha agido pelo tempo necessário, o cabelo será cuidadosamente enxaguado para remover qualquer resíduo do produto. Em seguida, será aplicado um condicionador ou máscara hidratante para restaurar a umidade e nutrição perdidas durante o processo de alisamento. O cabelo será então secado e estilizado de acordo com suas preferências. Cuidados Pós-Alisamento: Após o alisamento, é importante seguir as instruções fornecidas pelo cabeleireiro para cuidar adequadamente do seu cabelo. Isso pode incluir o uso de produtos específicos para cabelos alisados, evitar o uso excessivo de ferramentas térmicas e agendar visitas regulares ao salão para manutenção e retoques. ",
      },
    ];

    for (const service of services) {
      await prisma.service.create({
        data: {
          name: service.name,
          description: service.description,
          imageUrl: service.imageUrl,
          process: service.process,
        },
      });
    }
  } catch (e) {
    console.error("Erro ao criar serviços:", e);
  }
}

SeedDatabase();
