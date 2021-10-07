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
        main: 'Baru',
        subTxt: 'Milkland Multi-Grain Rasa Cokelat',
      }
    ],
    buy: 'Dapatkan sekarang',
    introduceMain: 'Temukan semua manfaatnya',
    introduceSub:
      'Dikemas dengan nutrisi seperti Omega 369, Vitamin B12, kalsium tinggi dan vitamin & mineral lainnya yang membantu perkembangan mental dan memberikan energi',
    services: [
      {
        icon:
          'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
        main: 'Energi Cerdas',
        subTxt:
          'Milkland Multi-Grain Rasa Cokelat membantu tumbuh cemerlang dan mampu menyelesaikan aktivitas sehari-hari',
      },
      {
        icon:
          'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
        main: 'Untuk variasi',
        subTxt:
          'Mengandung kebaikan biji-bijian super (riceberry, beras merah dan oat) dengan susu dan coklat yang lezat. Minuman nikmat dan bernutrisi.',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        main: 'Penuh vitamin',
        subTxt:
          'Mengandung Omega 369, Vitamin B12, yang baik untuk otak. Kalsium ganda dan vitamin B1 yang tinggi dibandingkan dengan minuman lainnya.',
      },
    ],
    bottomProductArea: {
      main: 'Siap untuk mencobanya?',
      subText: "Cari tahu apakah tersedia di wilayah Anda",
    },
    about: {
      title: 'Tentang Milkland',
      company: {
        title: 'Tentang Milkland',
        text: 'Minuman sereal Milkland adalah produk baru yang akan diluncurkan di 2021 dengan tujuan untuk membuat sarapan yang mudah, bernutrisi dan mengatasi rasa lapar dengan cepat, baik itu sendiri ataupun bersama-sama. Produk ini diuji oleh Lean Toolkit B.V. dan oleh karena itu kami sangat ingin tahu tanggapan Anda mengenai produk ini, sehingga kami dapat mengembangkan dan meningkatkan manfaat produk ini agar sesuai dengan kebutuhan konsumen. Untuk mencapai tujuan kami, kami ingin Anda memberikan tanggapan melalui tombol pada halaman ini dan beritahu kami apa fitur terpenting produk kami menurut Anda. Tanggapan Anda sangat berarti dan akan membantu kami untuk membuat produk yang lebih baik untuk Anda dalam waktu dekat. Terima kasih!',
      },
      product: {
        title: 'Apa manfaat dari Milkland Chocolate Multi-Grain Drink?',
        text: 'Sarapan adalah asupan terpenting. Karenanya Milkland Chocolate Multi-Grain Drink menawarkan banyak manfaat. Produk baru ini menawarkan rasa dan nutrisi dari susu dan biji-bijian yang berkualitas tinggi. Perpaduan unik produk ini akan memberikan banyak manfaat seperti perkembangan mental, fisik dan energi. Cocok untuk segala kalangan, termasuk anak dan orang dewasa seperti Anda.Sereal menawarkan banyak nutrisi, vitamin, mineral dan serat. Konsumsi sereal akan membuat Anda makan lemak dan kolesterol lebih sedikit, dan serat lebih banyak dibandingkan rata-rata. Itulah keunggulan mengonsumsi sereal. Selain itu, sereal kami mudah dibuat dan lezat.',
      },
      reasons: {
        title: 'Mengapa Anda harus mencoba Milkland Chocolate Multi-Grain Drink?',
        reasonList: [
          'Tinggi Vitamin B12',
          '2x Omega 369',
          '2x kalsium',
          'Tinggi Vitamin B1',
        ],
      },
    },
    cookie: 'Pernyataan',
    privacy: 'Kebijakan privasi',
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
      title: 'Bagus!',
      description: 'Konsep apa yang lebih Anda suka?',
      options: ['Awali hari dengan yang bernutrisi dan lezat','Awali hari dengan nutrisi berenergi','Bantu tumbuh cemerlang dan tangguh','Bantu tumbuh tangguh dan bugar','Awali hari dengan susu & manfaat biji-bijian'],
      buttonTitle: 'Lanjut',
    },
    {
      type: 'typeLikert',
      title: 'Seberapa penting hal ini saat Anda mempertimbangkan untuk membeli produk ini?',
      likert: "Rasa coklat disukai oleh anak-anak saya",
      buttonTitle: 'Lanjut',
      likert_5: 'Sangat penting',
      likert_4: 'Penting',
      likert_3: 'Netral',
      likert_2: 'Tidak penting',
      likert_1: 'Sangat tidak penting',
    },
    {
      type: 'typeLikert',
      title: 'Seberapa penting hal ini saat Anda mempertimbangkan untuk membeli produk ini?',
      likert: "Minuman ini tidak kental, sama seperti susu cokelat dan minuman Malt lainnya",
      buttonTitle: 'Lanjut',
      likert_5: 'Sangat penting',
      likert_4: 'Penting',
      likert_3: 'Netral',
      likert_2: 'Tidak penting',
      likert_1: 'Sangat tidak penting',
    },
    {
      type: 'typeLikert',
      title: 'Seberapa penting hal ini saat Anda mempertimbangkan untuk membeli produk ini?',
      likert: "Harus ada sesuatu yang kenyal atau bisa dikunyah dalam minumannya",
      buttonTitle: 'Lanjut',
      likert_5: 'Sangat penting',
      likert_4: 'Penting',
      likert_3: 'Netral',
      likert_2: 'Tidak penting',
      likert_1: 'Sangat tidak penting',
    },
    {
      type: 'typeLikert',
      title: 'Seberapa penting hal ini saat Anda mempertimbangkan untuk membeli produk ini?',
      likert: "Memberi lebih banyak nutrisi untuk perkembangan otak",
      buttonTitle: 'Lanjut',
      likert_5: 'Sangat penting',
      likert_4: 'Penting',
      likert_3: 'Netral',
      likert_2: 'Tidak penting',
      likert_1: 'Sangat tidak penting',
    },
    {
      type: 'typeLikert',
      title: 'Seberapa penting hal ini saat Anda mempertimbangkan untuk membeli produk ini?',
      likert: "Memberikan nutrisi lebih banyak untuk perkembangan fisik",
      buttonTitle: 'Lanjut',
      likert_5: 'Sangat penting',
      likert_4: 'Penting',
      likert_3: 'Netral',
      likert_2: 'Tidak penting',
      likert_1: 'Sangat tidak penting',
    },
    {
      type: 'typeLikert',
      title: 'Seberapa penting hal ini saat Anda mempertimbangkan untuk membeli produk ini?',
      likert: "Memberi lebih banyak nutrisi untuk energi",
      buttonTitle: 'Lanjut',
      likert_5: 'Sangat penting',
      likert_4: 'Penting',
      likert_3: 'Netral',
      likert_2: 'Tidak penting',
      likert_1: 'Sangat tidak penting',
    },
    {
      type: 'type2',
      title: "Mari kita cek apakah ini tersedia",
      description: 'Dimana daerah Anda?',
      options: [
        'Ambon',
        'Banda Aceh',
        'Bandar Lampung',
        'Bandung ',
        'Banjarmasin',
        'Bengkulu',
        'Denpasar',
        'Gorontalo ',
        'Jakarta',
        'Jambi',
        'Jayapura',
        'Kendari',
        'Kupang',
        'Makassar ',
        'Mamuju',
        'Manado ',
        'Manokwari ',
        'Mataram',
        'Medan',
        'Padang',
        'Palangka Raya',
        'Palembang',
        'Palu',
        'Pangkalpinang ',
        'Pekanbaru',
        'Pontianak ',
        'Samarinda ',
        'Semarang',
        'Serang',
        'Sofifi',
        'Surabaya',
        'Tanjung Selor',
        'Tanjungpinang',
        'Yogyakarta'
      ],
      buttonTitle: 'Lanjut',
    },
    {
      type: 'type3',
      title: "Maaf. Produk kami belum tersedia di daerah Anda.",
      description:
        'Apakah Anda ingin mencoba produk ini saat tersedia? Jika ya, masukan email Anda di bawah ini.',
      checkText: "Saya sudah membaca Kebijakan Privasi dan setuju untuk dihubungi untuk produk ini.",
      buttonTitle: 'Selalu berikan informasi baru',
    },
    {
      type: 'type4',
      title: 'Selesai, terima kasih!',
      description: 'Kami telah mengirimi Anda email konfirmasi. Saat kami mempunyai kabar, kami akan memberi tahu Anda!',
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
