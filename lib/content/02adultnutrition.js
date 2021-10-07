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
        name: 'productname1',
        url: '/images/bottle.png',
        main: 'The new',
        subTxt: 'Optimel NutriMatrix®',
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
    ],
    buy: 'Get it now',
    introduceMain: 'Try our new scientific and proven formula specifically designed for you.',
    introduceSub:
      'Discover all the benefits yourself',
    services: [
      {
        icon:
          'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
        main: 'Nourish your body',
        subTxt:
          'The drink enriches your body with over 25 different vitamines and minerals and makes sure your body can easily absorb the nutritients',
      },
      {
        icon:
          'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
        main: 'Improves your digestion',
        subTxt:
          'Thanks to the prebiotic fibre your body\'s digestion will improve and makes you less bloated ',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        main: 'Enhance the muscular system',
        subTxt:
          'The double dose of calcium and the 70% higher quality protein will increase your muscle mass and bone density and therefore improve your body shape! ',
      },
    ],
    bottomProductArea: {
      main: 'Are you ready to improve your physical condition?',
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
      title: 'Great!',
      description: 'What feature is most important in this product for you?',
      options: [
        'It firms up my muscles',
        'It prevents me from loosing bone mass',
        'It improves my digestion',
        'It improves my body shape',
        'It provides my body with nutrients'
      ],
      buttonTitle: 'Next',
    },
    {
      type: 'type2',
      title: "Let's check if it's available.",
      description: 'What\'s your region?',
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
      title: "Sorry. Our product is not available yet in your region.",
      description:
        'Do you want to try out the product once it becomes available? If so, leave your email below.',
      checkText: "I've read the privacy and agree to be contacted later for this product",
      buttonTitle: 'Keep me updated',
    },
    {
      type: 'type4',
      title: 'Done, thank you!',
      description: 'We sent you a confirmation email.  When we have news we will let you know!',
      buttonTitle: 'OK',
    },
  ],
  // color class name based on tailwindcss color palette
  // https://tailwindcss.com/docs/background-color
  // https://tailwindcss.com/docs/text-color
  // https://tailwindcss.com/docs/border-color
  // https://tailwindcss.com/docs/customizing-colors
  colors: {
    main: 'bg-pink-600',
    hover: 'bg-pink-500',
    btnText: 'text-white',
    disabled: 'bg-pink-300',
    serviceIconBG: 'bg-pink-500',
    txtMain: 'text-pink-600',
    txtSecond: 'text-pink-200',
    productTxtMain:'text-gray-900',
    productTxtSecond:'text-pink-600',
    btmBG: 'bg-pink-700',
    btmBtn: 'bg-gray-50',
    btmBtnHover: 'bg-gray-100',
    btmBtnTxt: 'text-current',
    btmTxtMain:'text-white',
    btmTxtSecond: 'text-gray-300'
  }
};
