module.exports = {
  common: {
    company: '',
    company_url: '',
  },
  home: {
    inlineMainStyle: 'a',
    logoIcon: '/images/logo.svg',
    // width: auto, height: -> reference the tailwindcss sizing  https://tailwindcss.com/docs/height
    logoSize: 'h-16 sm:h-20',
    products: [
      {
        name: 'productname1',
        url: '/images/bottle.png',
        main: 'The new1',
        subTxt: 'Optimel NutriMatrix®1',
      },
      {
        name: 'productname2',
        url: '/images/bottle.png',
        main: 'The new2',
        subTxt: 'Optimel NutriMatrix®2',
      },
      {
        name: 'productname3',
        url: '/images/bottle.png',
        main: 'The new3',
        subTxt: 'Optimel NutriMatrix®3',
      },
      {
        name: 'productname4',
        url: '/images/bottle.png',
        main: 'The new4',
        subTxt: 'Optimel NutriMatrix®4',
      },
      {
        name: 'productname5',
        url: '/images/bottle.png',
        main: 'The new5',
        subTxt: 'Optimel NutriMatrix®5',
      },
      {
        name: 'productname5',
        url: '/images/bottle.png',
        main: 'The new5',
        subTxt: 'Optimel NutriMatrix®5',
      },
    ],
    buy: 'Buy now',
    introduceMain: 'Introducing the new NutriMatrix® that nourishes you from within.',
    introduceSub:
      'It is packed with an unique blend of high quality protein & calcium from milk, prebiotic fibre & Vitamin D, and is low in calories.',
    services: [
      {
        icon:
          'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
        main: 'Prebiotic fiber',
        subTxt:
          'The prebiotic fiber moderates your intestinal environment, improves your digestion, reduces your bloatedness and constipation helping your body feel lighter.',
      },
      {
        icon:
          'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
        main: 'High quality protein and calcium',
        subTxt:
          'At the same time, high quality protein and calcium from milk together with Vitamin D helps tighten and firm up your muscles, slows down loss of bone mass, helping to improve posture and shape.',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        main: 'Feel lighter',
        subTxt:
          'OPTIMEL helps you feel lighter, and may give you a better body shape and posture.',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        main: 'Feel lighter',
        subTxt:
          'OPTIMEL helps you feel lighter, and may give you a better body shape and posture.',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        main: 'Feel lighter',
        subTxt:
          'OPTIMEL helps you feel lighter, and may give you a better body shape and posture.',
      },
    ],
    bottomProductArea: {
      main: 'Ready to try it?',
      subText: "Find out if we're available in your area",
    },
    about: {
      title: 'About Milkland Cereal Drink',
      company: {
        title: 'About Milkland',
        text: 'Milkland cereal drink is a new product that will be launched in 2020 with the goal to make breakfast convenient, nutritious and easy to quickly still your hunger, alone or together. This product is tested by Lean Toolkit B.V. and therefore we are eager to know your feedback about the product so we can develop and improve this products benefits to fit the consumers needs. To reach our goal we’d love you to leave your feedback via the button on the page and tell us what you think is the most important feature regarding our product. Your feedback is very valuable and will help us to shape the perfect product for you in the near future. Thank you!',
      },
      product: {
        title: 'Why a Milkland cereal drink?',
        text: 'Breakfast is the most important meal of the day. And therefore the Milkland cereal drink offers a lot of advantages. Cereal in general offers a lot of nutrients, vitamins, minerals and fibers. Cereal eaters consume less fat, less cholesterol and more fiber on average leading to great advantages of consuming cereal drinks.Besides that, our cereal is convenient and tasty.',
      },
      reasons: {
        title: 'Why should you try the Milkland cereal drink?',
        reasonList: [
          'High nutritional value',
          'Low in calories compared to fibre, calcium and other vitamin intake',
          'Breakfast helps you to wake up and stay alert',
          'Kid who eat breakfast perform better in school',
          'Breakfast contributes to weight loss',
          'Affordable',
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
      title: 'Survey!',
      description: 'What concept do you prefer?',
      options: ['Nutritious, tasty to start your day', 'Kickstart your day with nutrition for your brain & energy', 'Grow smart & strong', 'Grow strong & healthy', 'Start your day with milk & power of grains'],
      buttonTitle: 'Next',
    },
    {
      type: 'typeLikert',
      title: 'How important are the following for you to consider purchasing this milk?',
      likert: "Chocolate taste is liked by my kids",
      buttonTitle: 'Next',
      likert_5: 'Very important',
      likert_4: 'Important',
      likert_3: 'Neutral',
      likert_2: 'Unimportant',
      likert_1: 'Very unimportant',
    },
    {
      type: 'typeLikert',
      title: 'How important are the following for you to consider purchasing this milk?',
      likert: "Is a Smooth drink like other chocolate milks and Malt drinks",
      buttonTitle: 'Next',
      likert_5: 'Very important',
      likert_4: 'Important',
      likert_3: 'Neutral',
      likert_2: 'Unimportant',
      likert_1: 'Very unimportant',
    },
    {
      type: 'typeLikert',
      title: 'How important are the following for you to consider purchasing this milk?',
      likert: "Has Chewy flakes in the product",
      buttonTitle: 'Next',
      likert_5: 'Very important',
      likert_4: 'Important',
      likert_3: 'Neutral',
      likert_2: 'Unimportant',
      likert_1: 'Very unimportant',
    },
    {
      type: 'typeLikert',
      title: 'How important are the following for you to consider purchasing this milk?',
      likert: "Provides more nutrition for brain development",
      buttonTitle: 'Next',
      likert_5: 'Very important',
      likert_4: 'Important',
      likert_3: 'Neutral',
      likert_2: 'Unimportant',
      likert_1: 'Very unimportant',
    },
    {
      type: 'typeLikert',
      title: 'How important are the following for you to consider purchasing this milk?',
      likert: "Provides more nutrition for physical development",
      buttonTitle: 'Next',
      likert_5: 'Very important',
      likert_4: 'Important',
      likert_3: 'Neutral',
      likert_2: 'Unimportant',
      likert_1: 'Very unimportant',
    },
    {
      type: 'typeLikert',
      title: 'How important are the following for you to consider purchasing this milk?',
      likert: "Provides more nutrition for energy",
      buttonTitle: 'Next',
      likert_5: 'Very important',
      likert_4: 'Important',
      likert_3: 'Neutral',
      likert_2: 'Unimportant',
      likert_1: 'Very unimportant',
    },
    {
      type: 'type2',
      title: "Let's check if it's available",
      description: 'What’s your location?',
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
        'Gelderland and Limburg',
      ],
      buttonTitle: 'Next',
    },
    {
      type: 'type3',
      title: "Bummer, We're not available yet",
      description:
        'Want to be part of our test panel? Leave your email.',
      checkText: "I've read the privacy and agree to be contacted later for this product",
      buttonTitle: 'Keep me updated',
    },
    {
      type: 'type4',
      title: 'Done, thank you!',
      description: 'We sent you a confirmation email.  When we have news we will let you know!',
      buttonTitle: 'OK',
    }
  ],
  // color class name based on tailwindcss color palette
  // https://tailwindcss.com/docs/background-color
  // https://tailwindcss.com/docs/text-color
  // https://tailwindcss.com/docs/border-color
  // https://tailwindcss.com/docs/customizing-colors
  colors: {
    main: 'bg-blue-600',
    hover: 'bg-pink-500',
    btnText: 'text-white',
    disabled: 'bg-pink-300',
    serviceIconBG: 'bg-pink-500',
    txtMain: 'text-pink-600',
    txtSecond: 'text-pink-200',
    productTxtMain: 'text-gray-900',
    productTxtSecond: 'text-pink-600',
    btmBG: 'bg-pink-700',
    btmBtn: 'bg-gray-50',
    btmBtnHover: 'bg-gray-100',
    btmBtnTxt: 'text-current',
    btmTxtMain: 'text-white',
    btmTxtSecond: 'text-gray-300'
  }
};
