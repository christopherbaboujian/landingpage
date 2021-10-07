module.exports = {
  common: {
    company: 'Milkland',
    company_url: '',
  },
  home: {
    logoIcon: '/images/rtd/logo.png',
    // width: auto, height: -> reference the tailwindcss sizing  https://tailwindcss.com/docs/height
    logoSize: 'h-16 sm:h-20',
    products: [
      {
        name: 'product',
        url: '/images/rtd/pack.png',
        main: '全新的',
        subTxt: 'Milkland多穀物巧克力飲品',
      }
    ],
    buy: '立即獲取',
    introduceMain: '了解更多益處',
    introduceSub:
      '它富含Omega 369、維生素B12、高鈣和其他維生素及礦物質等營養物質，有助整體發展並提供能量',
    services: [
      {
        icon:
          'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
        main: '釋放能量，支持日常活動',
        subTxt:
          '含豐富牛奶和穀物營養，加上多種維他命和礦物質，有助釋放食物中的能量, 支持你日常活動所需',
      },
      {
        icon:
          'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
        main: '富含各種營養',
        subTxt:
          '含有來自超級穀物（黑莓果米、糙米和燕麥）、牛奶和美味巧克力的各種營養素，是一款美味又有營養的飲品。',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        main: '富含維他命，礦物質及多種營養素',
        subTxt:
          '富含DHA/Omega369、維生素B12，礦物質及多種營養素。與其他飲品相比，鈣含量增加了一倍，維生素B1的含量也更高。',
      },
    ],
    bottomProductArea: {
      main: '準備試試嗎？',
      subText: "看看在您所在地區是否有貨",
    },
    about: {
      title: '關於Milkland',
      company: {
        title: '關於Milkland',
        text: 'Milkland穀物飲料是一款將於2021年推出的新產品，它讓早餐變得既方便又營養，能快速消除飢餓感，適合你自己及家人的需要。該產品已通過精益工具包B.V.的測試，因此我們非常希望了解您對產品的反饋評價，以便我們可以開發和改進該產品的特點，以滿足消費者的需求。我們希望您通過頁面上的按鈕留下您的反饋，並告訴我們對您來說什麼是最重要的產品功能/特點。您的意見非常寶貴，將有助於我們在不久的將來為您打造出完美的產品。謝謝！',
      },
      product: {
        title: 'Milkland多穀物巧克力飲品有哪些益處？',
        text: '早餐是一天中最重要的一餐。Milkland多穀物飲品好處甚多，這款新產品匯集了優質牛奶和穀物的味道和營養。憑藉其獨特的牛奶和穀物組合，這款產品能夠提供許多益處，比如支持身體發育和能量水平。這款新產品適合所有人，包括兒童以及像您一樣的成年人飲用。多食用穀物好處甚多，穀物富營養、維生素、礦物質和纖維。穀物食用者比一般人平均攝取更少脂肪及膽固醇，和更多的纖維。此外，我們的穀物飲品既方便又美味。',
      },
      reasons: {
        title: '為什麼要嘗試Milkland多穀物巧克力飲品？',
        reasonList: [
          '豐富的維生素B12',
          '雙倍Omega 369',
          '雙倍鈣含量',
          '豐富的維生素B1',
          '豐富的纖維'
        ],
      },
    },
    cookie: 'Cookie聲明',
    privacy: '隱私政策',
    copyright: '© 2021 Lean Toolkit BV. All rights reserved.',
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
      title: '太棒了！',
      description: '您更喜歡哪種概念？',
      options: ['以營養又美味的方式開始每一天', '以充足營養和能量開始新的一天', '健康茁壯地成長', '讓牛奶營養和穀物的豐富力量助您開始新一天', '含豐富牛奶和穀物營養，加上多種維他命和礦物質，有助釋放食物中的能量'],
      buttonTitle: 'Next',
    },
    {
      type: 'typeLikert',
      title: '當您考慮購買此產品時，以下原因對您來說有多重要？',
      likert: "我的孩子喜歡巧克力口味",
      buttonTitle: '下一個',
      likert_5: '非常重要',
      likert_4: '重要',
      likert_3: '一般',
      likert_2: '不重要',
      likert_1: '完全不重要',
    },
    {
      type: 'typeLikert',
      title: '當您考慮購買此產品時，以下原因對您來說有多重要？',
      likert: "與其他巧克力牛奶和麥芽飲料一樣，是口感較順滑的飲料",
      buttonTitle: '下一個',
      likert_5: '非常重要',
      likert_4: '重要',
      likert_3: '一般',
      likert_2: '不重要',
      likert_1: '完全不重要',
    },
    {
      type: 'typeLikert',
      title: '當您考慮購買此產品時，以下原因對您來說有多重要？',
      likert: "飲品中應該有耐嚼(有咬口)的成分",
      buttonTitle: '下一個',
      likert_5: '非常重要',
      likert_4: '重要',
      likert_3: '一般',
      likert_2: '不重要',
      likert_1: '完全不重要',
    },
    {
      type: 'typeLikert',
      title: '當您考慮購買此產品時，以下原因對您來說有多重要？',
      likert: "為大腦發育提供更多營養",
      buttonTitle: '下一個',
      likert_5: '非常重要',
      likert_4: '重要',
      likert_3: '一般',
      likert_2: '不重要',
      likert_1: '完全不重要',
    },
    {
      type: 'typeLikert',
      title: '當您考慮購買此產品時，以下原因對您來說有多重要？',
      likert: "為身體發育提供更多營養",
      buttonTitle: '下一個',
      likert_5: '非常重要',
      likert_4: '重要',
      likert_3: '一般',
      likert_2: '不重要',
      likert_1: '完全不重要',
    },
    {
      type: 'typeLikert',
      title: '當您考慮購買此產品時，以下原因對您來說有多重要？',
      likert: "提供更多營養能量",
      buttonTitle: '下一個',
      likert_5: '非常重要',
      likert_4: '重要',
      likert_3: '一般',
      likert_2: '不重要',
      likert_1: '完全不重要',
    },
    {
      type: 'type2',
      title: '讓我們查看一下是否有貨',
      description: '您所在的地區？',
      options: [
        '澳門特別行政區',
        '香港特別行政區'
      ],
      buttonTitle: '下一個',
    },
    {
      type: 'type3',
      title: "抱歉。我們的產品在您所在的地區尚不可用。",
      description:
        '您想在產品可用時立即嘗試嗎？如果是的話，請在下面留下您的電子郵件地址。',
      checkText: '我已經閱讀了 "隱私政策"，並同意在產品可用後被聯繫。',
      buttonTitle: '保持更新',
    },
    {
      type: 'type4',
      title: '完成了，謝謝你！',
      description: '我們向您發送了一封確認電子郵件。當出現新消息時，我們會通知您！',
      buttonTitle: 'OK',
    }
  ],
  // color class name based on tailwindcss color palette
  // https://tailwindcss.com/docs/background-color
  // https://tailwindcss.com/docs/text-color
  // https://tailwindcss.com/docs/border-color
  // https://tailwindcss.com/docs/customizing-colors
  colors: {
    main: 'bg-yellow-800',
    hover: 'bg-blue-400',
    btnText: 'text-white',
    disabled: 'bg-blue-300',
    serviceIconBG: 'bg-blue-500',
    txtMain: 'text-blue-600',
    txtSecond: 'text-blue-200',
    productTxtMain: 'text-gray-900',
    productTxtSecond: 'text-yellow-800',
    btmBG: 'bg-blue-700',
    btmBtn: 'bg-gray-50',
    btmBtnHover: 'bg-gray-100',
    btmBtnTxt: 'text-current',
    btmTxtMain: 'text-white',
    btmTxtSecond: 'text-gray-300'
  }
};
