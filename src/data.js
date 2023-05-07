import { FaCrown } from 'react-icons/fa'
import { SiOpenaigym } from 'react-icons/si'

export const links = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Telhas',
    path: '/telhas'
  },
  {
    name: 'Calhas',
    path: '/calhas'
  },
  {
    name: 'Produção',
    path: '/producao'
  },
  {
    name: 'Sobre',
    path: '/sobre'
  },
  {
    name: 'Contato',
    path: '/contato'
  }
]

export const info = [
  {
    id: 1,
    icon: <FaCrown className="icon_info" />,
    title: 'Calhas e Ruffos',
    infos:
      'Cansado dos respisgos na sua garagem? ou da infiltração na sua casa? Temos a solução e os melhores valores do mercado em calhas e ruffos, venham conferir!',
    path: '/calhas'
  },
  {
    id: 2,
    icon: <FaCrown className="icon_info" />,
    title: 'Telhas Isotérmicas',
    infos:
      'Excelente controle de temperatura em dias frios, além de fornecer temperaturas mais baixas em dias mais quentes',
    path: '/telhas'
  },
  {
    id: 3,
    icon: <FaCrown className="icon_info" />,
    title: 'Pingadeiras',
    infos:
      'As pingadeiras são utilizadas no encontro da telha com a parede, protegendo contra qualquer infiltração ou mancha. Também com função estética, dando um bom acabamento e padronização',
    path: '/calhas'
  },
  {
    id: 4,
    icon: <FaCrown className="icon_info" />,
    title: 'Vedação',
    infos:
      'Temos vedação para calhas, ruffos, juntas entre outros. Também temos vedação contra trincas em lajes, telhas entre outros.',
    path: '/telhas'
  }
]

export const valores = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: 'Integridade',
    desc: 'Acreditamos na importancia da qualidade da matéria prima dos produtos, por isso utilizamos a de melhor qualidade do mercado. '
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: 'Transparência',
    desc: 'Nossa empresa busca ser o mais transparente possível com nossos clientes, os produtos são produzidos e enviados pela Goiás Zinco. '
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: 'Qualidade',
    desc: 'Tanto nossas Calhas e os Ruffos são feitas de zinco e dobradas com maior cuidado para te atender da melhor forma possível.'
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: 'Ética',
    desc: 'Nossa base é a ética e moral, seremos fieis aos compromissos feitos com os clientes. '
  }
]

export const faqs = [
  {
    id: 1,
    question: 'Fazem instalação e manutenção dos produtos?',
    answer: 'Sim, em Goiânia e em regiões proximas.'
  },
  {
    id: 2,
    question: 'Onde estão localizados?',
    answer: 'Nossa loja é em Goiânia - Goiás, CEP 74355-037, Rua Espigão esq. c/ São Roque, Qd. 01 , Lt. 11 - St. dos Dourados. Aguardamos sua visita.'
  },
  {
    id: 3,
    question: 'Entregam em todo o Brasil?',
    answer:
      'Temos a opção de mandar por uma transportadora e se for próxima a Goiânia-GO, nos mesmos enviamos. Para mais informações entre em contato conosco.'
  },
  {
    id: 4,
    question: 'Fazem produtos personalizados?',
    answer: 'Sim, fazemos pingadeiras, churrasqueiras e muito mais...'
  },
  {
    id: 5,
    question: 'Posso fazer uma visita presencial a loja?',
    answer:
      'Claro, será muito bem recebido em nossa loja!'
  },
  {
    id: 6,
    question: 'O que são calhas galvanizadas?',
    answer:
      'O processo ocorre com uma calha de aço comum que é enriquecida por zinco, em um processo químico conhecido como galvanização. Deixando a telha mais resistente.'
  }
]

export const fedbacks = [
  {
    id: 1,
    name: 'Pedro Jorge',
    quote:
      'Empresa muito atenciosa com os clientes e otimos produtos...Empresa muito atenciosa com os clientes e otimos produtos...',
    avatar: require('./assets/cliente1.jpeg')
  },
  {
    id: 2,
    name: 'Ana Jorge',
    quote:
      'AMEIIII Empresa muito atenciosa com os clientes e otimos produtos...Empresa muito atenciosa com os clientes e otimos produtos...',
    avatar: require('./assets/cliente2.jpeg')
  },
  {
    id: 3,
    name: 'Joao Paulo',
    quote:
      'GREAT Empresa muito atenciosa com os clientes e otimos produtos...Empresa muito atenciosa com os clientes e otimos produtos...',
    avatar: require('./assets/cliente3.jpeg')
  },
  {
    id: 4,
    name: 'Amanda Rodrigues',
    quote:
      'Empresa muito atenciosa com os clientes e otimos produtos...Empresa muito atenciosa com os clientes e otimos produtos...',
    avatar: require('./assets/cliente4.jpeg')
  },
  {
    id: 5,
    name: 'Jose Amauriliano',
    quote:
      'Empresa muito atenciosa com os clientes e otimos produtos...Empresa muito atenciosa com os clientes e otimos produtos...',
    avatar: require('./assets/cliente5.jpeg')
  }
]
