// src/data.js

// Importação UNIFICADA de todos os ícones necessários
import { 
  ShieldCheck, 
  Code, 
  Database, 
  Server, 
  Terminal, 
  BrainCircuit, 
  Linkedin, 
  Shield,   
  BarChart2, 
  Cloud,
  // Certifique-se de que TODOS os ícones das habilidades também estão aqui:
  Box, // Para frameworks/bibliotecas como React, Node.js, Tailwind CSS
  Lightbulb, // Para Resolução de Problemas
  GitBranch // Para Git & GitHub
} from 'lucide-react';

export const certifications = [
  {
    icon: Code, // 
    title: 'Programação (86h)', // 
    platform: 'Alura', // 
    description: 'Foco em Python, Java, JavaScript com Node.js e boas práticas de refatoração de código.' // 
  },
  {
    icon: Database, // 
    title: 'Data Science (80h)', // 
    platform: 'Alura', // 
    description: 'Conhecimentos em manipulação de dados com SQL (Oracle, MySQL, SQL Server) e criação de Dashboards com Excel.' // 
  },
  {
    icon: Server, // 
    title: 'DevOps (58h)', // 
    platform: 'Alura', // 
    description: 'Experiência em automação com PowerShell, linha de comando no Windows (CMD) e exploração da nuvem com AWS.' // 
  },
  {
    icon: ShieldCheck, // 
    title: 'Cibersegurança (55h)', // 
    platform: 'Alura', // 
    description: 'Habilidades em Pentest, segurança de redes (Firewall, WAF), modelagem de ameaças e segurança em aplicações web.' // 
  },
  {
    icon: Terminal, // 
    title: 'Linux (30h)', // 
    platform: 'Alura', // 
    description: 'Gerenciamento de diretórios, arquivos e permissões, além da criação de scripts para automação de tarefas.' // 
  },
  {
    icon: BrainCircuit, // 
    title: 'Inteligência Artificial (14h)', // 
    platform: 'Alura', // 
    description: 'Criação de ferramentas com a API do Gemini e personalização de rotinas de estudo com ChatGPT.' // 
  }
];

export const skills = [
  // Linguagens de Programação
  {
    name: 'JavaScript',
    icon: Code,
    color: 'text-yellow-400',
    description: 'Proficiência no desenvolvimento front-end interativo e back-end com Node.js.',
    category: 'Linguagens de Programação',
    level: 'Básico',
  },
  {
    name: 'Python',
    icon: Code,
    color: 'text-blue-500',
    description: 'Experiência com scripts, automação, e desenvolvimento web básico.',
    category: 'Linguagens de Programação',
    level: 'Intermediário',
  },
  {
    name: 'Java',
    icon: Code,
    color: 'text-red-500',
    description: 'Conhecimento em desenvolvimento backend e sistemas empresariais.',
    category: 'Linguagens de Programação',
    level: 'Básico',
  },
  // Frameworks & Bibliotecas
  {
    name: 'React',
    icon: Box,
    color: 'text-cyan-400',
    description: 'Construção de interfaces de usuário modernas e reativas.',
    category: 'Frameworks & Bibliotecas',
    level: 'Básico',
  },
  {
    name: 'Node.js',
    icon: Box,
    color: 'text-green-500',
    description: 'Desenvolvimento de APIs RESTful e aplicações de back-end escaláveis.',
    category: 'Frameworks & Bibliotecas',
    level: 'Básico',
  },
  {
    name: 'Tailwind CSS',
    icon: Box,
    color: 'text-teal-400',
    description: 'Estilização rápida e responsiva de interfaces de usuário.',
    category: 'Frameworks & Bibliotecas',
    level: 'Intermediário',
  },
  // Banco de Dados
  {
    name: 'SQL (MySQL, PostgreSQL)',
    icon: Database,
    color: 'text-orange-400',
    description: 'Criação e manipulação de bancos de dados relacionais.',
    category: 'Banco de Dados',
    level: 'Intermediário',
  },
  // Ferramentas & DevOps
  {
    name: 'Git & GitHub',
    icon: GitBranch,
    color: 'text-gray-400',
    description: 'Controle de versão e colaboração em projetos de software.',
    category: 'Ferramentas & DevOps',
    level: 'Básico',
  },
  {
    name: 'Linux',
    icon: Terminal,
    color: 'text-purple-400',
    description: 'Operação e scripts básicos em ambiente Linux.',
    category: 'Ferramentas & DevOps',
    level: 'Básico',
  },
  {
    name: 'AWS (Básico)',
    icon: Cloud,
    color: 'text-orange-500',
    description: 'Conhecimento fundamental em serviços de nuvem AWS.',
    category: 'Ferramentas & DevOps',
    level: 'Básico',
  },
  // Conceitos & Metodologias
  {
    name: 'Cibersegurança (Básico)',
    icon: Shield,
    color: 'text-red-600',
    description: 'Entendimento de conceitos básicos de segurança de aplicações e redes.',
    category: 'Conceitos & Metodologias',
    level: 'Básico',
  },
  {
    name: 'Resolução de Problemas',
    icon: Lightbulb,
    color: 'text-blue-300',
    description: 'Abordagem lógica para identificar e solucionar desafios técnicos.',
    category: 'Soft Skills', 
    level: 'Intermediário',
  },
];

export const experiences = [
  {
    title: 'Técnico de Informática',
    company: 'Colégio Santo Antônio',
    period: 'Abril 2025 - Atual',
    description: 'No Colégio Santo Antônio, sou responsável por garantir que a infraestrutura tecnológica atenda eficientemente a comunidade escolar, assegurando a continuidade e a segurança dos serviços educacionais.',
    achievements: [
      'Manutenção da alta disponibilidade dos serviços de TI, minimizando interrupções nas atividades.',
      'Contribuí para uma notável redução nos chamados de suporte através da otimização de processos.',
      'Gerenciamento do parque tecnológico da instituição, incluindo computadores e laboratórios.',
      'Promovi uma melhora expressiva no desempenho das estações de trabalho após atualizações.'
    ]
  },
  {
    title: 'Estagiário de TI',
    company: 'Prefeitura de Belo Horizonte',
    period: 'Outubro 2024 - Março 2025',
    description: 'Na Prefeitura de Belo Horizonte, colaborei para a modernização da infraestrutura de TI e a eficiência dos serviços públicos, oferecendo suporte técnico e desenvolvendo automação de processos.',
    achievements: [
      'Implementação de automação de relatórios, economizando horas de trabalho manual para a equipe.',
      'Atendimento de inúmeros tickets de suporte com um índice de alta satisfação dos usuários.',
      'Apoio na modernização e suporte de diversas estações de trabalho.',
      'Criação de documentações que agilizaram significativamente o tempo de integração de novos usuários.'
    ]
  },
  {
    title: 'Editor de Mídias | Supervisor',
    company: 'Sierra Poker Sports',
    period: 'Julho 2022 - Julho 2023',
    description: 'No Sierra Poker Sports, liderei a estratégia de conteúdo e a presença digital, supervisionando a equipe e a produção de mídia para diversos canais.',
    achievements: [
      'Aumento substancial do engajamento nas redes sociais.',
      'Crescimento considerável na base de seguidores.',
      'Gerenciamento de transmissões ao vivo para um vasto público.',
      'Supervisão da equipe e otimização do fluxo de produção de conteúdo.'
    ]
  }
];


export const githubProjects = [
  {
    title: 'Portfólio Pessoal em React',
    description: 'O site que você está vendo. Construído com React, Vite e Tailwind CSS para uma experiência de usuário moderna e responsiva.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    repoLink: 'https://github.com/hugowenner/site-hugo-react'
  },
  {
    title: 'Sinal InvestAI (Análise de Investimentos)',
    description: 'Plataforma de análise de investimentos para fornecer insights e sinais de negociação robustos e confiáveis. (Repositório Privado)',
    tech: ['Python', 'Análise de Dados', 'API'],
    repoLink: 'https://github.com/hugowenner'
  },
  {
    title: 'Auditor de Acesso a Sistemas',
    description: 'Script em Python para auditar e gerar relatórios de acesso a sistemas, ajudando a identificar padrões e anomalias de segurança.',
    tech: ['Python', 'Segurança', 'Automação'],
    repoLink: 'https://github.com/hugowenner/auditoria-acesso-sistema'
  }
];

export const navLinks = {
  home: 'Início',
  about: 'Sobre',
  'education-certifications': 'Formação & Certificações', 
  experience: 'Experiência',
  skills: 'Skills', 
  github: 'GitHub',
  contact: 'Contato'
};