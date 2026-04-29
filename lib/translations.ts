export type Locale = "en" | "fr" | "pt";

const en = {
    nav: {
      whatWeDo: "What we do",
      services: "Services",
      resources: "Resources",
      podcast: "Podcast",
      guide2026: "2026 Daftime Guide",
      blog: "Blog",
      contactUs: "Contact Us",
      contact: "Contact",
    },
    hero: {
      counter: "12k+ Client Collaboration",
      title: "Your international partner for structuring your business",
      subtitle: "Where law meets accounting, and strategy drives growth.",
      learnMore: "Learn More",
      letsTalk: "Lets Talk",
    },
    services: {
      eyebrow: "What We Do",
      heading: "Everything you need to grow with confidence",
      subtitle:
        "Accounting, legal, and advisory support designed to help entrepreneurs thrive — locally and abroad.",
      cards: {
        legal: {
          title: "Legal",
          description:
            "From setup to scale: legal solutions that secure your assets and simplify your operations across borders managed by lawyers.",
        },
        advisory: {
          title: "Advisory",
          description:
            "Strategy meets execution. We help you make smart decisions, optimize performance, and scale sustainably.",
        },
        accounting: {
          title: "Accounting",
          description:
            "Reliable, compliant, and forward-thinking accounting and taxation managed by real chartered accountants, so you can focus on growth while we handle the numbers.",
        },
      },
    },
    serviceTabs: {
      eyebrow: "Services",
      heading: ["Supporting entrepreneurs", "wherever they operate"],
      intro:
        "Every mission is a collaboration, every achievement, a shared effort. Their positive feedback reminds us why we do what we do: to create trust, clarity, and long-term value.",
      tabs: {
        legal: "Legal Services",
        accounting: "Accounting and tax",
        cfo: "CFO & Advisory services",
      },
      legal: {
        heading:
          "Create and structure your company in the Emirates securely and compliantly",
        body:
          "At Daftime, we support entrepreneurs through every stage of setting up a business in Dubai: analyzing your project, choosing the best structure (Mainland/Freezone), legal and tax optimization, and full compliance.",
        listLabel: "Our Business Setup services include:",
        cards: {
          businessSetup: {
            title: "Business setup",
            subtitle: "(Mainland & Free Zone)",
            description:
              "Company structuring, license acquisition, corporate amendments, with legal guidance provided by lawyers.",
          },
          openBank: {
            title: "Opening a business",
            subtitle: "bank account",
            description:
              "Assistance in choosing a bank, preparing KYC documents, and managing the account opening process.",
          },
          spv: {
            title:
              "Creation and structuring of investment vehicles (SPVs, holdings, trusts)",
            subtitle: "",
            description:
              "Structures designed to secure your investments, optimize governance, and support your long-term strategy.",
          },
          corporate: {
            title: "Corporate secretarial",
            subtitle: "services in the UAE",
            description:
              "Emirates ID, residence visas, Golden Visa, family sponsorship.",
          },
        },
        tailored: "Tailored support",
        tailoredText:
          "All our services are offered on a quote basis, ensuring a secure, compliant, and perfectly tailored establishment in Dubai that meets your objectives.",
      },
      accounting: {
        heading:
          "Compliant, optimized accounting and tax management tailored to UAE standards",
        body:
          "At Daftime, we provide comprehensive accounting and tax management services in accordance with UAE requirements: financial statements in accordance with local standards, VAT (UAE VAT), corporate tax, reporting, and operational monitoring. Our services are tailored to the volume of transactions and the level of support required.",
        listLabel: "Our accounting packages",
        plans: {
          basic: {
            name: "Basic",
            range: "0 to 50 transactions/month",
            price: "Starting at AED 999.99/month",
            features: [
              "Financial statements (UAE standards)",
              "VAT & Corporate Tax Management UAE",
              "Phone support",
              "Management tool",
            ],
          },
          intermediate: {
            name: "Intermediate",
            range: "51 to 100 transactions/month",
            price: "Starting at AED 1,999.99/month",
            features: [
              "UAE financial statements",
              "VAT & Corporate Tax",
              "Phone support",
              "Dedicated Customer Success",
              "Multi-currency management tool",
            ],
          },
          premium: {
            name: "Premium",
            range: "101 to 250 transactions/month",
            price: "Starting at AED 2,999.99/month",
            features: [
              "UAE financial statements",
              "VAT & Corporate Tax",
              "Dedicated Customer Success",
              "Multi-currency tool",
              "Regular strategic review meetings",
            ],
          },
          large: {
            name: "Large entreprises",
            range: "Personalized support",
            features: [
              "Advanced reporting",
              "Tax optimization UAE",
              "Consolidation",
              "Strategic advice",
            ],
          },
        },
      },
      cfo: {
        heading: "Strategic consulting & Flexible financial management",
        body:
          "Our advisory and part-time CFO (fractional CFO) services provide you with the expertise you need to drive growth, optimize performance, and improve financial visibility in the United Arab Emirates.",
        listLabel: "Our advisory packages",
        plans: {
          reporting: {
            name: "Financial reporting\nand management (UAE)",
            features: [
              "KPI dashboards",
              "Cost & Margin Analysis",
              "Break-even point",
              "Steering committee meetings",
            ],
          },
          office: {
            name: "Office Management Dubai",
            features: [
              "Dedicated administrative assistant",
              "Administrative management, purchasing, sales & banking",
              "Recruitment support",
              "Executive schedule management",
            ],
          },
          fractional: {
            name: "CFO Part-Time UAE",
            features: [
              "Financial reporting, cost analysis",
              "Digitization of the finance function",
              "Strategic support",
              "Due diligence",
            ],
          },
        },
      },
    },
    blog: {
      eyebrow: "Blog",
      heading: "Built for business without borders",
      subtitle:
        "Built on collaboration and shared success, our work is guided by a clear purpose: delivering trust, clarity, and long-term value.",
      filters: { all: "All", english: "English", french: "Français" },
      readMore: "Read More",
      loadMore: "Load More",
      date: "Mar 25, 2026",
      articles: [
        "Do you need an accountant in Dubai? 2026 Guide",
        "Accounting Services in Dubai: How to Choose the Right Provider",
        "Financial Mistakes Startups Make in Dubai 2026",
        "Choosing an accountant in Dubai: 2026 guide and reviews",
        "Accounting for Small Businesses in Dubai",
        "Bookkeeping in Dubai: 2026 pro guide for business growth",
      ],
    },
    testimonials: {
      eyebrow: "Testimonial",
      heading: ["Trusted by entrepreneurs", "around the world"],
      subtitle:
        "Every mission is a collaboration, every achievement, a shared effort. Their positive feedback reminds us why we do what we do: to create trust, clarity, and long-term value.",
      meta: {
        founder: "Founder",
        brand: "Brand",
        location: "Location",
        year: "Year",
      },
    },
    guide: {
      eyebrow: "Guide",
      heading: "Introducing the 2026 Daftime Guide",
      description:
        "Designed for entrepreneurs, executives, and investors, the Daftime Guide provides a clear and methodical reading of the regulatory and fiscal frameworks shaping business operations in the Emirates.",
      cta: "Explore the Guide",
      counter: "12k+ Client Collaboration",
      bookEdition: "2026 Edition",
      bookTitle: "The 2026 Daftime Guide",
    },
    download: {
      title: ["Access the 2026", "Daftime Guide"],
      subtitle: "Enter your details to receive the full edition in PDF format.",
      eyebrow: "Download",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      submit: "Get access",
      submitted: "Downloaded",
      privacy: "We never share your email.",
    },
    book: {
      eyebrow: "Ready to take the next step?",
      heading: "Let's talk — book\na free consultation",
      cta: "Schedule a meeting",
    },
    footer: {
      rights: "© 2026 Daftime All Rights Reserved",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      copyright: "© 2026 BigBrowser",
    },
    countryGate: {
      eyebrow: "Welcome",
      heading: "Choose your country & language",
      subtitle:
        "Pick the Daftime office you want to work with and the language you'd like to browse in.",
      countryLabel: "Country",
      languageLabel: "Language",
      confirm: "Continue",
    },
};

const fr: typeof en = {
    nav: {
      whatWeDo: "Ce que nous faisons",
      services: "Services",
      resources: "Ressources",
      podcast: "Podcast",
      guide2026: "Guide Daftime 2026",
      blog: "Blog",
      contactUs: "Nous contacter",
      contact: "Contact",
    },
    hero: {
      counter: "+12k collaborations clients",
      title: "Votre partenaire international pour structurer votre activité",
      subtitle:
        "Là où le droit rencontre la comptabilité, et où la stratégie nourrit la croissance.",
      learnMore: "En savoir plus",
      letsTalk: "Discutons",
    },
    services: {
      eyebrow: "Ce que nous faisons",
      heading:
        "Tout ce qu'il vous faut pour grandir en toute confiance",
      subtitle:
        "Comptabilité, juridique et conseil pensés pour aider les entrepreneurs à se développer — localement comme à l'international.",
      cards: {
        legal: {
          title: "Juridique",
          description:
            "De la création à la croissance : des solutions juridiques qui sécurisent vos actifs et simplifient vos opérations à l'international, pilotées par des avocats.",
        },
        advisory: {
          title: "Conseil",
          description:
            "La stratégie rencontre l'exécution. Nous vous aidons à prendre les bonnes décisions, à optimiser vos performances et à grandir durablement.",
        },
        accounting: {
          title: "Comptabilité",
          description:
            "Une comptabilité et une fiscalité fiables, conformes et tournées vers l'avenir, pilotées par de véritables experts-comptables — pour vous concentrer sur la croissance pendant que nous gérons les chiffres.",
        },
      },
    },
    serviceTabs: {
      eyebrow: "Services",
      heading: ["Accompagner les entrepreneurs", "où qu'ils opèrent"],
      intro:
        "Chaque mission est une collaboration, chaque réussite, un effort partagé. Leurs retours positifs nous rappellent pourquoi nous faisons ce que nous faisons : créer de la confiance, de la clarté et de la valeur sur le long terme.",
      tabs: {
        legal: "Services juridiques",
        accounting: "Comptabilité et fiscalité",
        cfo: "CFO & Conseil",
      },
      legal: {
        heading:
          "Créez et structurez votre société aux Émirats en toute sécurité et conformité",
        body:
          "Chez Daftime, nous accompagnons les entrepreneurs à chaque étape de la création d'une société à Dubaï : analyse du projet, choix de la meilleure structure (Mainland/Free Zone), optimisation juridique et fiscale, et conformité totale.",
        listLabel: "Nos services Business Setup incluent :",
        cards: {
          businessSetup: {
            title: "Création de société",
            subtitle: "(Mainland & Free Zone)",
            description:
              "Structuration de l'entreprise, obtention des licences, modifications statutaires — accompagnement juridique assuré par des avocats.",
          },
          openBank: {
            title: "Ouverture d'un compte",
            subtitle: "bancaire professionnel",
            description:
              "Choix de la banque, préparation du dossier KYC et gestion complète du processus d'ouverture de compte.",
          },
          spv: {
            title:
              "Création et structuration de véhicules d'investissement (SPV, holdings, trusts)",
            subtitle: "",
            description:
              "Des structures conçues pour sécuriser vos investissements, optimiser la gouvernance et soutenir votre stratégie de long terme.",
          },
          corporate: {
            title: "Secrétariat corporate",
            subtitle: "aux Émirats",
            description:
              "Emirates ID, visa de résidence, Golden Visa, sponsoring familial.",
          },
        },
        tailored: "Accompagnement sur mesure",
        tailoredText:
          "Toutes nos prestations sont sur devis : un cadre sécurisé, conforme et parfaitement adapté pour réussir votre implantation à Dubaï selon vos objectifs.",
      },
      accounting: {
        heading:
          "Une gestion comptable et fiscale conforme et optimisée, alignée avec les standards des Émirats",
        body:
          "Chez Daftime, nous proposons une gestion comptable et fiscale complète conforme aux exigences des Émirats : états financiers selon les normes locales, TVA (UAE VAT), Corporate Tax, reporting et suivi opérationnel. Nos prestations s'adaptent au volume de transactions et au niveau d'accompagnement souhaité.",
        listLabel: "Nos formules comptables",
        plans: {
          basic: {
            name: "Basic",
            range: "0 à 50 transactions / mois",
            price: "À partir de 999,99 AED / mois",
            features: [
              "États financiers (normes UAE)",
              "Gestion TVA & Corporate Tax UAE",
              "Support téléphonique",
              "Outil de gestion",
            ],
          },
          intermediate: {
            name: "Intermediate",
            range: "51 à 100 transactions / mois",
            price: "À partir de 1 999,99 AED / mois",
            features: [
              "États financiers UAE",
              "TVA & Corporate Tax",
              "Support téléphonique",
              "Customer Success dédié",
              "Outil de gestion multi-devises",
            ],
          },
          premium: {
            name: "Premium",
            range: "101 à 250 transactions / mois",
            price: "À partir de 2 999,99 AED / mois",
            features: [
              "États financiers UAE",
              "TVA & Corporate Tax",
              "Customer Success dédié",
              "Outil multi-devises",
              "Réunions de pilotage stratégique régulières",
            ],
          },
          large: {
            name: "Grandes entreprises",
            range: "Accompagnement personnalisé",
            features: [
              "Reporting avancé",
              "Optimisation fiscale UAE",
              "Consolidation",
              "Conseil stratégique",
            ],
          },
        },
      },
      cfo: {
        heading: "Conseil stratégique & gestion financière flexible",
        body:
          "Nos prestations de conseil et de CFO à temps partagé (CFO fractionné) vous apportent l'expertise nécessaire pour soutenir la croissance, optimiser la performance et améliorer la visibilité financière aux Émirats arabes unis.",
        listLabel: "Nos formules de conseil",
        plans: {
          reporting: {
            name: "Reporting financier\net pilotage (UAE)",
            features: [
              "Tableaux de bord (KPI)",
              "Analyse des coûts & marges",
              "Point mort / seuil de rentabilité",
              "Comités de pilotage",
            ],
          },
          office: {
            name: "Office Management Dubaï",
            features: [
              "Assistant administratif dédié",
              "Gestion administrative, achats, ventes & banque",
              "Aide au recrutement",
              "Gestion d'agenda dirigeant",
            ],
          },
          fractional: {
            name: "CFO à temps partagé UAE",
            features: [
              "Reporting financier, analyse des coûts",
              "Digitalisation de la fonction finance",
              "Accompagnement stratégique",
              "Due diligence",
            ],
          },
        },
      },
    },
    blog: {
      eyebrow: "Blog",
      heading: "Conçu pour entreprendre sans frontières",
      subtitle:
        "Notre approche repose sur la collaboration et la réussite partagée, guidée par un cap clair : créer de la confiance, de la clarté et de la valeur durable.",
      filters: { all: "Tous", english: "English", french: "Français" },
      readMore: "Lire plus",
      loadMore: "Charger plus",
      date: "25 mars 2026",
      articles: [
        "A-t-on besoin d'un comptable à Dubaï ? Guide 2026",
        "Services comptables à Dubaï : comment choisir le bon prestataire",
        "Les erreurs financières des startups à Dubaï en 2026",
        "Choisir un comptable à Dubaï : guide 2026 et avis",
        "Comptabilité pour les TPE à Dubaï",
        "Tenue de livres à Dubaï : guide pro 2026 pour la croissance",
      ],
    },
    testimonials: {
      eyebrow: "Témoignage",
      heading: [
        "La confiance d'entrepreneurs",
        "à travers le monde",
      ],
      subtitle:
        "Chaque mission est une collaboration, chaque réussite, un effort partagé. Leurs retours positifs nous rappellent pourquoi nous faisons ce que nous faisons : créer de la confiance, de la clarté et de la valeur durable.",
      meta: {
        founder: "Fondateur",
        brand: "Marque",
        location: "Localisation",
        year: "Année",
      },
    },
    guide: {
      eyebrow: "Guide",
      heading: "Découvrez le Guide Daftime 2026",
      description:
        "Conçu pour les entrepreneurs, dirigeants et investisseurs, le Guide Daftime offre une lecture claire et méthodique des cadres réglementaires et fiscaux qui structurent l'activité aux Émirats.",
      cta: "Découvrir le Guide",
      counter: "+12k collaborations clients",
      bookEdition: "Édition 2026",
      bookTitle: "Le Guide Daftime 2026",
    },
    download: {
      title: ["Accédez au Guide", "Daftime 2026"],
      subtitle:
        "Renseignez vos coordonnées pour recevoir l'édition complète en PDF.",
      eyebrow: "Téléchargement",
      firstName: "Prénom",
      lastName: "Nom",
      email: "E-mail",
      submit: "Obtenir l'accès",
      submitted: "Téléchargé",
      privacy: "Nous ne partageons jamais votre adresse e-mail.",
    },
    book: {
      eyebrow: "Prêt à passer à l'étape suivante ?",
      heading: "Échangeons —\nréservez un appel gratuit",
      cta: "Planifier un rendez-vous",
    },
    footer: {
      rights: "© 2026 Daftime — Tous droits réservés",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
      copyright: "© 2026 BigBrowser",
    },
    countryGate: {
      eyebrow: "Bienvenue",
      heading: "Choisissez votre pays et votre langue",
      subtitle:
        "Sélectionnez le bureau Daftime avec lequel vous souhaitez travailler et la langue d'affichage du site.",
      countryLabel: "Pays",
      languageLabel: "Langue",
      confirm: "Continuer",
    },
};

// Portuguese (European Portuguese, the Lisbon office's language).
const pt: typeof en = {
  nav: {
    whatWeDo: "O que fazemos",
    services: "Serviços",
    resources: "Recursos",
    podcast: "Podcast",
    guide2026: "Guia Daftime 2026",
    blog: "Blog",
    contactUs: "Contacte-nos",
    contact: "Contacto",
  },
  hero: {
    counter: "+12 mil colaborações com clientes",
    title: "O seu parceiro internacional para estruturar a sua atividade",
    subtitle:
      "Onde o direito encontra a contabilidade, e a estratégia impulsiona o crescimento.",
    learnMore: "Saber mais",
    letsTalk: "Vamos falar",
  },
  services: {
    eyebrow: "O que fazemos",
    heading: "Tudo o que precisa para crescer com confiança",
    subtitle:
      "Apoio contabilístico, jurídico e de consultoria pensado para ajudar empreendedores a crescer — localmente e além-fronteiras.",
    cards: {
      legal: {
        title: "Jurídico",
        description:
          "Da constituição ao crescimento: soluções jurídicas que protegem os seus ativos e simplificam as suas operações internacionais, com acompanhamento de advogados.",
      },
      advisory: {
        title: "Consultoria",
        description:
          "A estratégia encontra a execução. Ajudamo-lo a tomar decisões acertadas, otimizar o desempenho e crescer de forma sustentável.",
      },
      accounting: {
        title: "Contabilidade",
        description:
          "Uma contabilidade e fiscalidade fiáveis, conformes e orientadas para o futuro, conduzidas por verdadeiros contabilistas certificados — para que se concentre no crescimento enquanto tratamos dos números.",
      },
    },
  },
  serviceTabs: {
    eyebrow: "Serviços",
    heading: ["Apoiar empreendedores", "onde quer que operem"],
    intro:
      "Cada missão é uma colaboração, cada conquista, um esforço partilhado. Os seus comentários positivos lembram-nos por que fazemos o que fazemos: criar confiança, clareza e valor a longo prazo.",
    tabs: {
      legal: "Serviços jurídicos",
      accounting: "Contabilidade e fiscalidade",
      cfo: "CFO & Consultoria",
    },
    legal: {
      heading:
        "Crie e estruture a sua empresa nos Emirados de forma segura e em conformidade",
      body:
        "Na Daftime, acompanhamos os empreendedores em todas as fases da constituição de uma empresa no Dubai: análise do projeto, escolha da melhor estrutura (Mainland/Free Zone), otimização jurídica e fiscal, e total conformidade.",
      listLabel: "Os nossos serviços de constituição incluem:",
      cards: {
        businessSetup: {
          title: "Constituição de empresa",
          subtitle: "(Mainland & Free Zone)",
          description:
            "Estruturação da empresa, obtenção de licenças, alterações estatutárias — apoio jurídico assegurado por advogados.",
        },
        openBank: {
          title: "Abertura de conta",
          subtitle: "bancária empresarial",
          description:
            "Escolha do banco, preparação do dossier KYC e gestão completa do processo de abertura de conta.",
        },
        spv: {
          title:
            "Criação e estruturação de veículos de investimento (SPV, holdings, trusts)",
          subtitle: "",
          description:
            "Estruturas concebidas para proteger os seus investimentos, otimizar a governance e apoiar a sua estratégia de longo prazo.",
        },
        corporate: {
          title: "Secretariado corporativo",
          subtitle: "nos Emirados",
          description:
            "Emirates ID, vistos de residência, Golden Visa, patrocínio familiar.",
        },
      },
      tailored: "Acompanhamento à medida",
      tailoredText:
        "Todos os nossos serviços são apresentados sob orçamento, garantindo uma implantação segura, conforme e perfeitamente adaptada para alcançar os seus objetivos no Dubai.",
    },
    accounting: {
      heading:
        "Gestão contabilística e fiscal conforme e otimizada, alinhada com os padrões dos Emirados",
      body:
        "Na Daftime, oferecemos uma gestão contabilística e fiscal completa, em conformidade com as exigências dos Emirados: demonstrações financeiras conforme as normas locais, IVA (UAE VAT), Corporate Tax, reporte e acompanhamento operacional. Os nossos serviços adaptam-se ao volume de transações e ao nível de apoio pretendido.",
      listLabel: "Os nossos pacotes de contabilidade",
      plans: {
        basic: {
          name: "Basic",
          range: "0 a 50 transações / mês",
          price: "A partir de 999,99 AED / mês",
          features: [
            "Demonstrações financeiras (normas UAE)",
            "Gestão de IVA & Corporate Tax UAE",
            "Suporte telefónico",
            "Ferramenta de gestão",
          ],
        },
        intermediate: {
          name: "Intermediate",
          range: "51 a 100 transações / mês",
          price: "A partir de 1 999,99 AED / mês",
          features: [
            "Demonstrações financeiras UAE",
            "IVA & Corporate Tax",
            "Suporte telefónico",
            "Customer Success dedicado",
            "Ferramenta de gestão multi-divisas",
          ],
        },
        premium: {
          name: "Premium",
          range: "101 a 250 transações / mês",
          price: "A partir de 2 999,99 AED / mês",
          features: [
            "Demonstrações financeiras UAE",
            "IVA & Corporate Tax",
            "Customer Success dedicado",
            "Ferramenta multi-divisas",
            "Reuniões regulares de pilotagem estratégica",
          ],
        },
        large: {
          name: "Grandes empresas",
          range: "Acompanhamento personalizado",
          features: [
            "Reporting avançado",
            "Otimização fiscal UAE",
            "Consolidação",
            "Aconselhamento estratégico",
          ],
        },
      },
    },
    cfo: {
      heading: "Consultoria estratégica & gestão financeira flexível",
      body:
        "Os nossos serviços de consultoria e CFO a tempo parcial (CFO fracionado) trazem-lhe a experiência necessária para sustentar o crescimento, otimizar o desempenho e melhorar a visibilidade financeira nos Emirados Árabes Unidos.",
      listLabel: "Os nossos pacotes de consultoria",
      plans: {
        reporting: {
          name: "Reporting financeiro\ne pilotagem (UAE)",
          features: [
            "Painéis de bordo (KPI)",
            "Análise de custos & margens",
            "Ponto morto / break-even",
            "Comités de pilotagem",
          ],
        },
        office: {
          name: "Office Management Dubai",
          features: [
            "Assistente administrativo dedicado",
            "Gestão administrativa, compras, vendas & banca",
            "Apoio ao recrutamento",
            "Gestão de agenda da direção",
          ],
        },
        fractional: {
          name: "CFO a tempo parcial UAE",
          features: [
            "Reporting financeiro, análise de custos",
            "Digitalização da função financeira",
            "Acompanhamento estratégico",
            "Due diligence",
          ],
        },
      },
    },
  },
  blog: {
    eyebrow: "Blog",
    heading: "Concebido para empreender sem fronteiras",
    subtitle:
      "A nossa abordagem assenta na colaboração e no sucesso partilhado, guiada por um propósito claro: criar confiança, clareza e valor duradouro.",
    filters: { all: "Todos", english: "English", french: "Français" },
    readMore: "Ler mais",
    loadMore: "Ver mais",
    date: "25 de março de 2026",
    articles: [
      "Precisa de um contabilista no Dubai? Guia 2026",
      "Serviços de contabilidade no Dubai: como escolher o prestador certo",
      "Erros financeiros das startups no Dubai em 2026",
      "Escolher um contabilista no Dubai: guia 2026 e avaliações",
      "Contabilidade para PME no Dubai",
      "Bookkeeping no Dubai: guia profissional 2026 para o crescimento",
    ],
  },
  testimonials: {
    eyebrow: "Testemunho",
    heading: ["A confiança de empreendedores", "em todo o mundo"],
    subtitle:
      "Cada missão é uma colaboração, cada conquista, um esforço partilhado. Os seus comentários positivos lembram-nos por que fazemos o que fazemos: criar confiança, clareza e valor duradouro.",
    meta: {
      founder: "Fundador",
      brand: "Marca",
      location: "Localização",
      year: "Ano",
    },
  },
  guide: {
    eyebrow: "Guia",
    heading: "Conheça o Guia Daftime 2026",
    description:
      "Concebido para empreendedores, dirigentes e investidores, o Guia Daftime oferece uma leitura clara e metódica dos quadros regulamentares e fiscais que estruturam a atividade nos Emirados.",
    cta: "Descobrir o Guia",
    counter: "+12 mil colaborações com clientes",
    bookEdition: "Edição 2026",
    bookTitle: "O Guia Daftime 2026",
  },
  download: {
    title: ["Aceda ao Guia", "Daftime 2026"],
    subtitle:
      "Indique os seus dados para receber a edição completa em formato PDF.",
    eyebrow: "Download",
    firstName: "Nome próprio",
    lastName: "Apelido",
    email: "E-mail",
    submit: "Obter acesso",
    submitted: "Transferido",
    privacy: "Nunca partilhamos o seu endereço de e-mail.",
  },
  book: {
    eyebrow: "Pronto para o próximo passo?",
    heading: "Vamos falar —\nmarque uma consulta gratuita",
    cta: "Marcar uma reunião",
  },
  footer: {
    rights: "© 2026 Daftime — Todos os direitos reservados",
    privacy: "Política de privacidade",
    terms: "Termos e condições",
    copyright: "© 2026 BigBrowser",
  },
  countryGate: {
    eyebrow: "Bem-vindo",
    heading: "Escolha o seu país e idioma",
    subtitle:
      "Selecione o escritório Daftime com o qual deseja trabalhar e o idioma para navegar no site.",
    countryLabel: "País",
    languageLabel: "Idioma",
    confirm: "Continuar",
  },
};

export type Translation = typeof en;

export const translations: Record<Locale, Translation> = { en, fr, pt };

export function t(locale: Locale): Translation {
  return translations[locale] ?? translations.en;
}
