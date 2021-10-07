module.exports = {
  common: {
    company: 'Milkland',
    company_url: '',
  },
  home: {
    logoIcon: '/images/milkland_logo.png',
    // width: auto, height: -> reference the tailwindcss sizing  https://tailwindcss.com/docs/height
    logoSize: 'h-16 sm:h-20',
    products: [
      {
        name: 'product',
        url: '/images/milkland_cerealdrink.png',
        main: 'The new 2 in 1 cereal milk drink.',
        subTxt: 'In chocolate and vanilla flavour',
      }
    ],
    buy: 'Buy now',
    introduceMain: 'Just add water and you\'ve got delicious cereals with real milk.',
    introduceSub:
      '',
    services: [
      {
        icon:
          'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
        main: 'Complete nutritious breakfast',
        subTxt:
          'Packed with Fibre, Protein & Essential Nutrients',
      },
      {
        icon:
          'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
        main: 'Easy, tasty & filling to start your day',
        subTxt:
          'Add water and enjoy it anytime, anywhere.',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        main: 'Energy to start the day',
        subTxt:
          'Nutrition and energy to start the day',
      },
    ],
    bottomProductArea: {
      main: 'Ready to try it?',
      subText: "Find out if we're available in your area.",
    },
    about: {
      title: 'About the 2 in 1 cereal drink from Milkland',
      company: {
        title: 'About Milkland',
        text: 'Milk cereal is a new product that will be launched in 2020 with the aim of making breakfast comfortable, nutritious and easy to quench your hunger alone or together. This product was tested by Lean Toolkit B.V. and therefore we would like to know your feedback on the product so that we can develop and enhance the benefits of this product to suit the needs of consumers. To achieve our goal, we want you to provide your feedback via a button on the page and tell us what you think is the most important feature of our product. Your feedback is invaluable and will help us to design the right product for you in the near future. Thank you!',
      },
      product: {
        title: 'Why Milkland cereal drinks?',
        text: 'Breakfast is a very important meal - it can either make or break your day. Thus, Milkland cereal drinks offer many advantages. Cereals in general offer many nutrients, vitamins, minerals and fiber. On average, cereals eat less fat, less cholesterol and more fiber which leads to the advantage of eating cereal drinks. Also, our cereals are easier and tastier.',
      },
      reasons: {
        title: 'Why should you try Milkland cereal drinks?',
        reasonList: [
          'High nutritional value',
          'Low in calories compared to intake of fiber, calcium and other vitamins',
          'Breakfast that helps you wake up and stay awake',
          'Children who eat breakfast perform better at school',
          'Breakfast contributes to weight loss'
        ],
      },
    },
    cookie: 'Cookie statement',
    privacy: 'Privacy policy',
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
      title: 'Awesome!',
      description: 'What do you find most important in this product?',
      random: true,
      options: [
        'The better breakfast companion for you and your family',
        'Convenient and easy to prepare for consumption anytime and anywhere',
        'Tasty and nutritious drink for you and your family',
        'Hunger pangs solution for you and your family',
        'Nutritious yet affordable drink for you and your family'],
      buttonTitle: 'Next',
    },
    {
      type: 'type2',
      title: "Which flavour do you prefer?",
      description: '',
      options: [
        '',
        'Chocolate flavour',
        'Vanilla flavour'
      ],
      buttonTitle: 'Next',
    },
    {
      type: 'type2',
      title: "Let's check if it's available.",
      description: 'What\'s your region?',
      options: [
        '',
        'Northern Region',
        'Central Region',
        'Southern Region',
        'East Coast',
        'Sabah',
        'Sarawak'
      ],
      buttonTitle: 'Next',
    },
    {
      type: 'type3',
      title: "Sorry, we're not available yet.",
      description:
        'Do you want to try out the product once it becomes available? If so, leave your email below.',
      checkText: "I've read the privacy policy and agree to be contacted later for this product.",
      buttonTitle: 'Keep me updated',
    },
    {
      type: 'type4',
      title: 'Done, thank you!',
      description: 'We sent you a confirmation email. When we have news we will let you know!',
      buttonTitle: 'OK',
    },
  ],
  // color class name based on tailwindcss color palette
  // https://tailwindcss.com/docs/background-color
  // https://tailwindcss.com/docs/text-color
  // https://tailwindcss.com/docs/border-color
  // https://tailwindcss.com/docs/customizing-colors
  colors: {
    main: 'bg-blue-600',
    hover: 'bg-blue-500',
    btnText: 'text-white',
    disabled: 'bg-blue-300',
    serviceIconBG: 'bg-blue-500',
    txtMain: 'text-blue-600',
    txtSecond: 'text-blue-200',
    productTxtMain:'text-gray-900',
    productTxtSecond:'text-blue-600',
    btmBG: 'bg-blue-700',
    btmBtn: 'bg-gray-50',
    btmBtnHover: 'bg-gray-100',
    btmBtnTxt: 'text-current',
    btmTxtMain:'text-white',
    btmTxtSecond: 'text-gray-300'
  }
};
