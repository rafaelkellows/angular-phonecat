// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Realme Note 60 Dual Sim 128 Gb 4Gb Ram Smartphone Preto Smartphone',
          snippet: 'O Realme Note 60 foi projetado para quem busca durabilidade e desempenho em um único aparelho. Com construção robusta, o dispositivo conta com uma estrutura Armorshell que combina alumínio e silicone, proporcionando resistência a quedas e impactos. O corpo de alumínio fundido com reforço de vidro garante proteção contra riscos, enquanto o filme resiste adicionalmente ao desgaste causado pelo uso diário. Essa resistência extra protege o aparelho contra produtos que podem danificar o exterior, como óleo e detergente. Equipado com um poderoso chipset octa-core, o Realme Note 60 oferece desempenho ágil, ideal para atividades intensas como jogos e multitarefas. Com memória RAM dinâmica de até 12GB e armazenamento interno de 128GB, ele oferece espaço e fluidez, permitindo que os usuários usem o aparelho sem trabalhos por anos. A tela de 90Hz garante uma experiência visual confortável, com um design fino que torna o dispositivo fácil de segurar e manusear. Para aumentar a proteção dos componentes internos, o Realme Note 60 possui um sistema de amortecimento que inclui anéis de silicone e adesivos de alta resistência em partes essenciais como o processador e a memória. O design exclusivo InSeal bloqueia a entrada de líquidos, protegendo as conexões, como o slot de cartão e o conector USB. Essas inovações garantem uma durabilidade superior e proteção contra danos causados por quedas ou exposição a líquidos. O aparelho possui a certificação de alta confiabilidade TÜV Rheinland, o que reforça sua resistência. Ele passou por mais de 320 testes rigorosos de qualidade, incluindo testes de pressão dos botões e de conexão do USB, além de simulação de ambientes extremos, como alta temperatura e umidade. Com esses testes, o Realme Note 60 comprova sua capacidade de manter o desempenho e a funcionalidade em situações adversárias, oferecendo uma durabilidade notável. Outro ponto forte do Realme Note 60 é sua câmera de 32MP, que fornece imagens nítidas e com excelente definição. Essa combinação de resistência, alto desempenho e qualidade de imagem faz do Realme Note 60 uma escolha completa para quem precisa de um aparelho confiável e capaz de atender às demandas do dia a dia com qualidade.',
          imagePath: 'https://a-static.mlcdn.com.br/800x560/celular-realme-note-60-dual-sim-128-gb-4gb-ram-smartphone-preto-smartphone/pacificmixeletro/rmx3933note60128preto/36c09cc8878ba6682dfc6cc14b806cd8.jpeg',
          price: 1289.10,
          age: 6
        }, 
        {
          name: 'Motorola Moto G05 128GB 12GB RamBoost Câmera 50MP AI Bateria de 5200 mAh Tela 6.7 - Violeta',
          snippet: "Com o Smartphone Motorola Moto G05 128GB 12GB RamBoost Câmera 50MP AI Bateria de 5200 mAh Tela 6.7 - Violeta, aproveite a tela de 6,7, com o maior brilho da categoria no mundo até 1000 nits, oferecendo clareza até sob a luz direta do sol. O desempenho é potente com até 12GB de RAM Boost inteligente, garantindo uma experiência multitarefa rápida sem travar. A câmera de 50MP com inteligência artificial e night vision automático captura fotos nítidas e retratos vibrantes, mesmo à noite. Com a superbateria de 5200 mah, você tem até 40 horas de uso4. O design sofisticado em vegan leather, a proteção contra respingos d'água e o vidro corning gorilla glass 3 garantem resistência e estilo. Moto G05. Maior. Mais potente. Mais brilhante.",
          imagePath: "https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Farquivos%2Fids%2F30033417%2F7513301988_1SZ.jpg%3Fv%3D638792232049970000&w=768&q=90",
          price: 989.55,
          age: 2
        }, 
        {
          name: 'Samsung Galaxy A06 128GB 4GB RAM Azul Escuro 6,7" Câm. Dupla + Selfie 8MP',
          snippet: 'O Samsung Galaxy A06 azul escuro é o smartphone que vai te acompanhar em tarefas básicas do dia a dia. Com design moderno e tela com display infinito PLS LCD de 6,7" (171,3mm), você pode assistir vídeos e jogar seus games favoritos com muito mais conforto. Ele é equipado com 128GB de armazenamento interno e 4GB de memória RAM, para você guardar suas fotos, vídeos e aplicativos sem se preocupar com espaço. Além disso, a câmera traseira dupla de 50MP + 2MP e a câmera frontal de 8MP te ajudam a registrar os melhores momentos da vida com qualidade profissional. A bateria é de 5000mAh e com o carregamento rápido compatível com 25W, você recupera a carga rapidamente quando precisa. Ele também possui o Cadeado Galaxy, que protege seus dados com segurança. Desbloqueie a tela facilmente com o leitor de impressão digital. O Samsung Galaxy A06 é o smartphone ideal para quem busca um aparelho fino e moderno. Produto não acompanha fone de ouvido.',
          imagePath: 'https://a-static.mlcdn.com.br/800x560/smartphone-samsung-galaxy-a06-128gb-4gb-ram-azul-escuro-67-cam-dupla-selfie-8mp/magazineluiza/238657700/fca7f701abc03293954ba82835473323.jpg',
          price: 2154.99,
          age: 1
        }
      ];
      this.orderProp = '';
    }
  });