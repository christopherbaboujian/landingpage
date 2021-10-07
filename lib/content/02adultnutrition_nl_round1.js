module.exports = {
  common: {
    company: 'OptiFit',
    company_url: '',
  },
  home: {
    logoIcon: '/images/optifit.png',
    // width: auto, height: -> reference the tailwindcss sizing  https://tailwindcss.com/docs/height
    logoSize: 'h-16 sm:h-20',
    products: [
      {
        name: 'lighter_bodyshape',
        url: '/images/adultnutrition_dutch.png',
        main: 'Met prebiotische vezels, vitaminen en proteine. Laag in calorieën.',
        subTxt: 'OptiFit NutriMatrix®',
      },
      {
        name: 'lighter_muscle',
        url: '/images/adultnutrition_dutch.png',
        main: 'Hoog in proteine en calcium, laag in vet. Bevat prebiotische GOS vezels.',
        subTxt: 'OptiFit NutriMatrix®',
      },
      {
        name: 'musclebones_body',
        url: '/images/adultnutrition_dutch.png',
        main: '70% hogere kwaliteitsproteine en een dubbele dosis calcium.',
        subTxt: 'OptiFit NutriMatrix®',
      },
      {
        name: 'tonebody_firmmuscle',
        url: '/images/adultnutrition_dutch.png',
        main: 'Een dubbele dosis calcium en een unieke combinatie van vitamine en mineralen.',
        subTxt: 'OptiFit NutriMatrix®',
      },
    ],
    buy: 'Koop het nu',
    introduceMain: 'Probeer onze nieuwe en bewezen wetenschappelijk formule die speciaal voor jou is ontwikkeld.',
    introduceSub:
      'Ontdek zelf de voordelen',
    services: [
      {
        icon:
          'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
        main: 'Voed je lichaam',
        subTxt:
          'Het drankje voedt het lichaam met meer dan 25 verschillende vitamines en mineralen en zorgt ervoor dat deze makkelijk in het lichaam kunnen worden opgenomen.',
      },
      {
        icon:
          'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
        main: 'Verbetert de spijsvertering',
        subTxt:
          'Dankzij de prebiotische vezels zal de spijsvertering verbeteren en zul jij je minder opgeblazen voelen.',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        main: 'Versterkt spieren en botten',
        subTxt:
          'De dubbele dosis calcium en de 70% hogere kwaliteit proteine zullen de spiermassa en botdichtheid verbeteren en mede daardoor je lichaamsvorm!',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        main: 'Verbeterde huid',
        subTxt:
          'De unieke mix van mineralen en vitaminen zijn speicifiek ontworpen voor het geven van een stevige en flexibele huid.',
      },
    ],
    bottomProductArea: {
      main: 'Ben jij klaar om te stralen?',
      subText: "Check hier of we beschikbaar zijn in jouw omgeving.",
    },
    about: {
      title: 'Over het OptiFit drankje',
      company: {
        title: 'Over Optifit',
        text: 'Optifit-drank is een nieuw product dat in 2020 wordt gelanceerd met als doel vrouwen in de overgang te helpen met veelvoorkomende aandoeningen die vrouwen tijdens deze periode ervaren. Dit product is getest door Lean Toolkit B.V. en daarom zijn we benieuwd naar uw feedback over het product, zodat we de voordelen van dit product kunnen ontwikkelen en verbeteren om aan de behoeften van de consument te voldoen. Om ons doel te bereiken, zouden we graag zien dat u uw feedback achterlaat via de knop op de pagina en ons vertelt wat volgens u het belangrijkste kenmerk van ons product is. Uw feedback is zeer waardevol en zal ons helpen om in de nabije toekomst het perfecte product voor u vorm te geven. Dank!',
      },
      product: {
        title: 'Waarom zou je Optifit drinken?',
        text: 'Optifit biedt veel voordelen. Ten eerste is het een prebiotische drank. Dit betekent dat het een goede bron is voor gezonde bacteriën. Deze bacteriën in uw lichaam zorgen voor uw spijsvertering en daarom zal Optifit helpen bij het verbeteren van gezonde bacteriën en daarmee het spijsverteringssysteem. Evenzo wordt de GOS-vezel in Optifit gezien als een vezel die veel voordelen biedt, waaronder goede bacteriën om te groeien om ervoor te zorgen dat het spijsverteringssysteem zo goed mogelijk functioneert. De drank bevat ook een hoge dosis proteïne en calcium waarvan is bewezen dat het goed is voor spieren en botten. Ten slotte zijn er extra vitamines en mineralen in de Optifit-drank opgenomen om uw lichaam en huid te laten stralen en soepel te houden.',
      },
      reasons: {
        title: 'Voordelen van OptiFit op een rij?',
        reasonList: [
          'Prebiotische drank',
          'Verbetering van spijsvertering',
          'Betere functionering van het lichaam',
          'Hoge dosis proteïne en calcium',
        ],
      },
    },
    cookie: 'Cookie statement',
    privacy: 'Privacy Statement',
    copyright: '© 2020 Lean Toolkit BV. All rights reserved.',
  },
  cookie: {
    your_own_data: 'Your own data',
  },
  privacy: {
    your_own_data: 'Your own data',
  },
  popups: [
    {
      type: 'type1',
      title: 'Geweldig!',
      description: 'Welk kenmerk van dit product is het belangrijkst voor jou?',
      options: [
        'Het verstevigt mijn spieren',
        'Het zorgt ervoor dat ik geen botmassa verlies',
        'Het verbetert mijn spijsvertering',
        'Het onderhoudt mijn lichaamsvorm',
        'Het voedt mijn lichaam met vitamine en mineralen',
        'Het verbetert mijn huid'
      ],
      buttonTitle: 'Volgende',
    },
    {
      type: 'type2',
      title: "Controleer hier of het beschikbaar is.",
      description: 'In welke provincie woon je?',
      options: [
        'Noord-Holland',
        'Zuid-Holland',
        'Zeeland',
        'Noord-Brabant',
        'Utrecht',
        'Flevoland',
        'Friesland',
        'Groningen',
        'Drenthe',
        'Overijssel',
        'Gelderland',
        'Limburg',
      ],
      buttonTitle: 'Volgende',
    },
    // {
    //   type: 'type3',
    //   title: "Sorry, dit product is nog niet beschikbaar in deze provincie.",
    //   description:
    //     'Wil jij dit product uitproberen zodra het beschikbaar is? Zo ja, gelieve je email adres hier achter te laten.',
    //   checkText: "Ik heb de privacy policy gelezen en ga ermee akkoord dat ik later gecontacteerd wordt voor dit product.",
    //   buttonTitle: 'Hou mij op de hoogte',
    // },
    {
      type: 'type4',
      title: 'Sorry, dit product is nog niet beschikbaar in deze provincie.',
      description: 'Je kunt dit venster nu sluiten.',
      buttonTitle: 'OK',
    },
  ],
  // color class name based on tailwindcss color palette
  // https://tailwindcss.com/docs/background-color
  // https://tailwindcss.com/docs/text-color
  // https://tailwindcss.com/docs/border-color
  // https://tailwindcss.com/docs/customizing-colors
  colors: {
    main: 'bg-purple-600',
    hover: 'bg-purple-500',
    btnText: 'text-white',
    disabled: 'bg-purple-300',
    serviceIconBG: 'bg-purple-500',
    txtMain: 'text-purple-600',
    txtSecond: 'text-purple-200',
    productTxtMain:'text-gray-900',
    productTxtSecond:'text-purple-600',
    btmBG: 'bg-purple-700',
    btmBtn: 'bg-gray-50',
    btmBtnHover: 'bg-gray-100',
    btmBtnTxt: 'text-current',
    btmTxtMain:'text-white',
    btmTxtSecond: 'text-gray-300'
  }
};
