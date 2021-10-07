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
        main: 'Minuman susu bijirin 2dalam1',
        subTxt: 'yang baharu',
      }
    ],
    buy: 'Dapatkan sekarang',
    introduceMain: 'Hanya tambah air dan anda dapat menikmati minuman bijiran yang lazat dengan susu',
    introduceSub:
      '',
    services: [
      {
        icon:
          'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
        main: 'Sarapan bernutrisi yang lengkap',
        subTxt:
          'Padat dengan Serat, Protein & Nutrien Penting',
      },
      {
        icon:
          'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
        main: 'Mudah, sedap & mengisi untuk memulakan hari anda',
        subTxt:
          'Tambahkan air dan nikmatinya di mana jua dan bila-bila masa. ',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        main: 'Tenaga untuk memulakan hari',
        subTxt:
          'Nutrisi dan tenaga untuk memulakan hari',
      },
    ],
    bottomProductArea: {
      main: 'Sedia untuk cubakannya sekarang?',
      subText: "Ketahui sama ada produk kami terdapat di kawasan anda.",
    },
    about: {
      title: 'Mengenai Milkland Minuman susu bijirin 2dalam1',
      company: {
        title: 'Mengenai Milkland',
        text: 'Minuman bijirin susu adalah produk baru yang akan dilancarkan pada tahun 2020 dengan tujuan untuk menjadikan sarapan pagi selesa, berkhasiat dan mudah untuk menahan rasa lapar anda sendirian atau bersama. Produk ini diuji oleh Lean Toolkit B.V. dan oleh itu kami ingin mengetahui maklum balas anda mengenai produk tersebut sehingga kami dapat mengembangkan dan meningkatkan manfaat produk ini agar sesuai dengan keperluan pengguna. Untuk mencapai tujuan kami, kami ingin anda memberikan maklum balas anda melalui butang di halaman dan memberitahu kami apa yang anda fikir adalah ciri terpenting mengenai produk kami. Maklum balas anda sangat berharga dan akan membantu kami untuk membentuk produk yang sesuai untuk anda dalam masa terdekat. Terima kasih!',
      },
      product: {
        title: 'Mengapa minuman bijirin Milkland?',
        text: 'Sarapan pagi adalah makanan terpenting sepanjang hari. Oleh itu, minuman bijirin Milkland menawarkan banyak kelebihan. Bijirin secara umum menawarkan banyak nutrien, vitamin, mineral dan serat. Rata-rata pemakan bijirin kurang lemak, kurang kolesterol dan lebih banyak serat yang membawa kepada kelebihan memakan minuman bijirin. Selain itu, bijirin kami lebih mudah dan enak.',
      },
      reasons: {
        title: 'Mengapa anda mesti mencuba minuman bijirin Milkland?',
        reasonList: [
          'Nilai pemakanan yang tinggi',
          'Rendah kalori berbanding pengambilan serat, kalsium dan vitamin lain',
          'Sarapan menolong anda bangun dan berjaga-jaga',
          'Anak yang makan sarapan berprestasi lebih baik di sekolah',
          'Sarapan menyumbang kepada penurunan berat badan',
          'Mampu',
        ],
      },
    },
    cookie: 'Penyataan kuki (English)',
    privacy: 'dasar privasi (English)',
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
      title: 'Hebat!',
      description: 'Apa yang anda rasa paling penting dalam produk ini?',
      options: [
        'Pilihan sarapan yang lebih baik untuk anda dan keluarga',
        'Senang disediakan untuk dimakan bila-bila masa dan di mana jua',
        'Minuman yang lazat dan bernutrisi untuk anda dan keluarga',
        'Membantu anda dan keluarga untuk menahan kelaparan',
        'Minuman bernutrisi dengan harga berpatutan untuk anda dan keluarga'],
      buttonTitle: 'Seterusnya',
    },
    {
      type: 'type2',
      title: "Semakan sama ada produk ini sedia ada",
      description: 'Di manakah bandar anda?',
      options: [
        'Bahagian Utara Semenanjung',
        'Bahagian Tengah Semenanjung',
        'Bahagian Selatan Semenanjung',
        'Pantai Timur Semenanjung',
        'Sabah',
        'Sarawak'
      ],
      buttonTitle: 'Seterusnya',
    },
    {
      type: 'type3',
      title: "Harap maaf. Produk kami tidak terdapat di kawasan anda. ",
      description:
        'Adakah anda ingin mencuba produk kami apabila ia sedia ada? Sila membekalkan emel anda. ',
      checkText: "Saya telah membaca dasar privasi dan bersetuju untuk dihubungi kemudian untuk produk ini.",
      buttonTitle: 'Sila memaklumkan saya',
    },
    {
      type: 'type4',
      title: 'Selesai. Terima Kasih!',
      description: 'Kami telah menghantar e-mel pengesahan untuk anda. Kami akan memaklumkan anda sekiranya ada sebarang berita baharu!',
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
