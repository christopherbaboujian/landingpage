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
        url: '/images/adultnutrition_id.png',
        main: 'Dengan serat probiotik, vitamin dan protein. Rendah kalori',
        subTxt: 'OptiFit NutriMatrix®',
      },
      {
        name: 'lighter_muscle',
        url: '/images/adultnutrition_id.png',
        main: 'Tinggi protein dan kalsium, rendah lemak. Mengandung probiotik serat GOS',
        subTxt: 'OptiFit NutriMatrix®',
      },
      {
        name: 'musclebones_body',
        url: '/images/adultnutrition_id.png',
        main: '70% lebih banyak protein susu dan dua kali dosis kalsium',
        subTxt: 'OptiFit NutriMatrix®',
      },
      {
        name: 'tonebody_firmmuscle',
        url: '/images/adultnutrition_id.png',
        main: 'Dua kali dosis kalsium dan kombinasi unik dari vitamin dan mineral',
        subTxt: 'OptiFit NutriMatrix®',
      },
    ],
    buy: 'Dapatkan sekarang',
    introduceMain: 'Coba ramuan kami yang berlandaskan sains dan telah terbukti dirancang khusus untuk anda.',
    introduceSub:
      'Jelajahi manfaatnya sekarang',
    services: [
      {
        icon:
          'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
        main: 'Nutrisi badanmu',
        subTxt:
          'Minuman ini memperkaya badanmu dengan lebih dari 25 jenis vitamin dan mineral yang berbeda dan memastikan badanmu dapat menyerap nutrisi dengan mudah.',
      },
      {
        icon:
          'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
        main: 'Tingkatkan pencernaanmu',
        subTxt:
          'Berkat serat probiotik pencernaanmu akan meningkat dan membuatmu tidak kembung.',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        main: 'Meningkatkan kekuatan otot',
        subTxt:
          'Dosis ganda kalsium dan 70% kualitas protein yang lebih tinggi akan meningkatkan kepadatan otot dan tulang dan karenanya akan meningkatkan bentuk badan anda.',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        main: 'Warna kulit dan bentuk badan',
        subTxt:
          'Ramuan unik mineral dan vitamin yang dirancang berlandaskan sains untuk meningkatkan warna kulit dan bentuk badanmu.',
      },
    ],
    bottomProductArea: {
      main: 'Apakah anda siap untuk meningkatkan kondisi badanmu?',
      subText: "Temukan apakah kami tersedia di area anda.",
    },
    about: {
      title: 'Tentang minuman OptiFit',
      company: {
        title: 'Lebih dari Optifit',
        text: 'Optifit drink merupakan produk baru yang diluncurkan pada tahun 2020 dengan tujuan membantu wanita menopause dengan kondisi umum yang dialami wanita selama ini. Produk ini telah diuji oleh Lean Toolkit B.V. dan jadi kami ingin tahu tentang tanggapan Anda tentang produk, sehingga kami dapat mengembangkan dan meningkatkan manfaat produk ini untuk memenuhi kebutuhan konsumen. Untuk mencapai tujuan kami, kami ingin Anda meninggalkan umpan balik Anda melalui tombol di halaman dan memberi tahu kami pendapat Anda tentang fitur utama produk kami. Umpan balik Anda sangat berharga dan akan membantu kami membentuk produk yang sempurna untuk Anda dalam waktu dekat. Terima kasih!',
      },
      product: {
        title: 'Mengapa Anda harus minum Optifit?',
        text: 'Optifit menawarkan banyak keuntungan. Pertama, ini adalah minuman prebiotik. Artinya, ini adalah sumber bakteri sehat yang baik. Bakteri ini dalam tubuh Anda menjaga pencernaan Anda dan oleh karena itu Optifit akan membantu meningkatkan bakteri sehat dan sistem pencernaan. Begitu juga dengan serat GOS pada Optifit yang dipandang sebagai serat yang menawarkan banyak manfaat, termasuk bakteri baik untuk berkembang biak untuk memastikan sistem pencernaan berfungsi dengan sebaik mungkin. Minuman tersebut juga mengandung protein dan kalsium dosis tinggi yang telah terbukti baik untuk otot dan tulang. Terakhir, vitamin dan mineral tambahan disertakan dalam minuman Optifit untuk membantu menjaga tubuh dan kulit Anda tetap bersinar dan kenyal.',
      },
      reasons: {
        title: 'Sekilas tentang manfaat OptiFit?',
        reasonList: [
          'Minuman prebiotik',
          'Perbaikan pencernaan',
          'Fungsi tubuh yang lebih baik',
          'Protein dan kalsium dosis tinggi',
        ],
      },
    },
    cookie: 'Pernyataan cookie (English)',
    privacy: 'Kebijakan privasi (English)',
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
      title: 'Sangat baik!',
      description: 'Apa fitur yang paling penting dalam produk ini bagimu?',
      random: true,
      options: [
        'Ini mengencangkan ototku',
        'Ini mencegahku kehilangan kepadatan otot',
        'Ini meningkatkan pencernaanku',
        'Ini menjaga bentuk badanku',
        'Ini menyediakan nutrisi untuk badanku',
        'Ini meningkatkan warna kulit dan bentuk badanku'
      ],
      buttonTitle: 'Selanjutnya',
    },
    {
      type: 'type2',
      title: "Apa metode pilihanmu?",
      description: '',
      options: [
        '',
        'Berikan saya serbuk, saya akan tambahkan air dan mencampurnya sendiri.',
        'Berikan saya produk siap minum dalam botol.',
      ],
      buttonTitle: 'Selanjutnya',
    },
    {
      type: 'type2',
      title: "Mari cek apakah ini tersedia.",
      description: 'Apakah nama daerah anda?',
      options: [
        'DKI Jakarta',
        'Jawa Barat',
        'Jawa Tengah',
        'Jawa Timur',
        'DIY Jogjakarta',
        'Bali',
        'Aceh',
        'Sumatera Utara',
        'Sumatera Selatan',
        'Sulawesi Utara',
        'Sulawesi Tengah',
        'Papua',
      ],
      buttonTitle: 'Selanjutnya',
    },
    {
      type: 'type3',
      title: "Maaf. Produk kami belum tersedia di daerah anda.",
      description:
        'Apakah anda ingin mencoba produknya apabila telah tersedia? Jika iya, tulis alamat email anda.',
      checkText: "Saya telah membaca kebijakan privasi dan bersedia dihubungi lebih lanjut mengenai produk ini.",
      buttonTitle: 'Kabari saya',
    },
    {
      type: 'type4',
      title: 'Selesai, Terima kasih!',
      description: 'Kami telah mengirimkan email konfirmasi, Kami akan memberitahu anda apabila ada berita lebih lanjut.',
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
