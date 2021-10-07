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
        main: 'Baharu',
        subTxt: 'Minuman Coklat Milkand Multi-Bijirin',
      }
    ],
    buy: 'Dapatkan sekarang!',
    introduceMain: 'Cari semua faedahnya sendiri',
    introduceSub:
      'Kombinasi pelbagai bijirin dan susu yang lazat dan berkhasiat ini mengandungi vitamins yang penting untuk hadapi cabaran harian. Sarapan sihat anda hanya dalam satu botol. Senang. Berkhasiat. Sedap.',
    services: [
      {
        icon:
          'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
        main: 'Sarapan bernutrisi yang lengkap',
        subTxt:
          'Padat dengan Serat, Protein & Zat Besi ',
      },
      {
        icon:
          'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
        main: 'Mudah, sedap & mengisi untuk memulakan hari anda',
        subTxt:
          'Nikmatinya di mana jua dan bila-bila masa.',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        main: 'Tenaga untuk memulakan hari',
        subTxt:
          'Nutrisi dan tenaga untuk memulakan hari',
      },
    ],
    bottomProductArea: {
      main: 'Sedia mencubanya?',
      subText: "Ketahui sama ada kami ada di kawasan anda",
    },
    about: {
      title: 'Tentang Milkland',
      company: {
        title: 'Tentang Milkland',
        text: 'Minuman bijirin Milkland adalah produk baharu yang akan dilancarkan pada tahun 2021 dengan tujuan untuk menjadikan sarapan pagi senang, berkhasiat dan mudah untuk menahan rasa lapar anda sendirian atau bersama. Produk ini diuji oleh Lean Toolkit B.V. dan oleh itu kami ingin mengetahui maklum balas anda mengenai produk tersebut sehingga kami dapat mengembangkan dan meningkatkan manfaat produk ini agar sesuai dengan keperluan pengguna. Untuk mencapai matlamat kami, kami mahu agar anda memberikan maklum balas anda melalui butang di halaman ini dan memberitahu kami apa yang anda fikirkan sebagai ciri terpenting mengenai produk kami. Maklum balas anda sangat berharga dan akan membantu kami untuk membentuk produk yang sesuai untuk anda dalam masa akan datang. Terima kasih!',
      },
      product: {
        title: 'Apakah faedah-faedah Minuman Coklat Milkand Multi-Bijirin ',
        text: 'Sarapan pagi adalah waktu makan yang paling penting. Oleh itu, minuman Milkland Multi-Bijirin menawarkan banyak kelebihan dan kebaikan. Produk baharu ini lazat and padat dengan kebaikan kombinasi susu and multi-bijirin. Dengan kombinasi bijirin & susu, produk ini memberi pelbagai menfaat seperti tahap tenaga, lebih kenyang, dan with nutrisi lengkap. satu penyelesaian segera yang berkhasiat ketika mereka menyusuri kesibukan seharian. Sesuai untuk semua orang termasuk kanak-kanak dan orang dewasa seperti anda. Bijirin secara umumnya memberi banyak nutrien, vitamin, mineral dan serat. Pemakan bijirin mengambil sedikit lemak, kurang kolesterol dan lebih banyak serat secara purata menyebabkan kelebihan memakan minuman bijirin. Selain itu, bijirin kami senang disediakan dan enak.',
      },
      reasons: {
        title: 'Mengapa anda mesti mencuba Minuman Coklat Milkland Multi-Bijirin?',
        reasonList: [
          'Padat dengan Serat',
          'Sumber Protein ',
          '2x Kalsium',
          'Tinggi dengan Zat Besi',
        ],
      },
    },
    cookie: 'Peryataan kuki',
    privacy: 'Dasar Privacy',
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
      title: 'Hebat!',
      description: 'Apa yang anda rasa paling penting dalam produk ini?',
      options: ['with susu bijirin/multi-bijirin berkhasiat','Kaya dengan Serat ','Sumber Protein ','Zat Besi yang Tinggi ','Minuman Sarapan Pagi. Susu dengan Bijirin/Multi-bijirin '],
      buttonTitle: 'Seterusnya',
    },
    {
      type: 'typeLikert',
      title: 'Berapa penting perkara berikut untuk anda apabila anda mempertimbangkan untuk membeli produk ini?',
      likert: "Rasa coklat disukai oleh anak-anak saya",
      buttonTitle: 'Seterusnya',
      likert_5: 'Amat penting',
      likert_4: 'Penting',
      likert_3: 'Neutral',
      likert_2: 'Tidak penting',
      likert_1: 'Sangat tidak penting',
    },
    {
      type: 'typeLikert',
      title: 'Berapa penting perkara berikut untuk anda apabila anda mempertimbangkan untuk membeli produk ini?',
      likert: "Ia merupakan minuman Halus seperti susu coklat dan minuman Malt yang lain",
      buttonTitle: 'Seterusnya',
      likert_5: 'Amat penting',
      likert_4: 'Penting',
      likert_3: 'Neutral',
      likert_2: 'Tidak penting',
      likert_1: 'Sangat tidak penting',
    },
    {
      type: 'typeLikert',
      title: 'Berapa penting perkara berikut untuk anda apabila anda mempertimbangkan untuk membeli produk ini?',
      likert: "sekiranya terdapat cebisan bijirin dalan minuman ",
      buttonTitle: 'Seterusnya',
      likert_5: 'Amat penting',
      likert_4: 'Penting',
      likert_3: 'Neutral',
      likert_2: 'Tidak penting',
      likert_1: 'Sangat tidak penting',
    },
    {
      type: 'typeLikert',
      title: 'Berapa penting perkara berikut untuk anda apabila anda mempertimbangkan untuk membeli produk ini?',
      likert: "Membantu anda dan keluarga untuk menahan kelaparan",
      buttonTitle: 'Seterusnya',
      likert_5: 'Amat penting',
      likert_4: 'Penting',
      likert_3: 'Neutral',
      likert_2: 'Tidak penting',
      likert_1: 'Sangat tidak penting',
    },
    {
      type: 'typeLikert',
      title: 'Berapa penting perkara berikut untuk anda apabila anda mempertimbangkan untuk membeli produk ini?',
      likert: "satu penyelesaian segera yang berkhasiat ketika mereka menyusuri kesibukan seharian",
      buttonTitle: 'Seterusnya',
      likert_5: 'Amat penting',
      likert_4: 'Penting',
      likert_3: 'Neutral',
      likert_2: 'Tidak penting',
      likert_1: 'Sangat tidak penting',
    },
    {
      type: 'typeLikert',
      title: 'Berapa penting perkara berikut untuk anda apabila anda mempertimbangkan untuk membeli produk ini?',
      likert: "Membekalkan lebih banyak khasiat untuk tenaga",
      buttonTitle: 'Seterusnya',
      likert_5: 'Amat penting',
      likert_4: 'Penting',
      likert_3: 'Neutral',
      likert_2: 'Tidak penting',
      likert_1: 'Sangat tidak penting',
    },
    {
      type: 'type2',
      title: "Semakan sama ada produk ini sedia ada",
      description: 'Di manakah negeri anda? ',
      options: [
        'Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Pulau Pinang', 'Perak', 'Perlis', 'Sabah', 'Sarawak', 'Selangor', 'Wilayah Persekutuan Kuala Lumpur', 'Wilayah Persekutuan Labuan', 'Wilayah Persekutuan Putrajaya'],
      buttonTitle: 'Seterusnya',
    },
    {
      type: 'type3',
      title: "Maaf. Produk kami belum ada di kawasan anda.",
      description:
        'Adakah anda ingin mencuba produk setelah ia ada? Jika ya, tinggalkan e-mel anda di bawah.',
      checkText: "Saya telah membaca dasar privasi dan bersetuju untuk dihubungi kemudian untuk produk ini.",
      buttonTitle: 'Maklumkan saya',
    },
    {
      type: 'type4',
      title: 'Sudah, Terima kasih!',
      description: 'Kami telah menghantar e-mel pengesahan untuk anda. Kami akan memaklumkan anda sekiranya ada sebarang berita baharu!',
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
