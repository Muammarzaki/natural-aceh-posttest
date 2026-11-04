const news = {
  en: {
    featured: {
      label: 'Latest headline',
      title: 'Climate Action for Youth: Digital Technology for Educating and Empowering Youth in Climate Adaptation',
      summary: 'A project using digital technology and AI-driven tools to strengthen climate education and youth participation in adaptation.'
    },
    articles: [
      {
        category: 'Environmental justice',
        date: '9 March 2025',
        title: 'Protecting Environmental Defenders, Combating the Criminalization of Activists in Indonesia',
        summary: 'Indonesia is experiencing a rise in the criminalization of environmental defenders, with at least 58 cases of environmental activists facing legal threats between 2014 and…'
      },
      {
        category: 'Indigenous knowledge',
        date: '9 March 2025',
        title: 'Guardians of Aceh: Indigenous Wisdom in the Climate Crisis',
        summary: 'In the communities of Aceh, indigenous leaders—Panglima Laot, Keujrun Blang, and Pawang Uteen—have safeguarded nature for generations. As climate change threatens their traditions and ecosystems,…'
      },
      {
        category: 'Community health',
        date: '7 March 2025',
        title: 'Enhancing Community Engagement in Malaria Prevention and Response in Aceh',
        summary: 'Malaria remains a significant public health threat in Aceh, particularly among poor fishers and farmers who live in remote, mosquito-prone areas with limited access to…'
      },
      {
        category: 'Digital resilience',
        date: '6 March 2025',
        title: 'Strengthening Coastal Digital Resilience: Building Sustainable Internet Communities in Aceh',
        summary: 'This three-day event aims to empower coastal communities, youth, and women in Aceh with the technical knowledge and skills to build a resilient and sustainable internet ecosystem.'
      }
    ]
  },
  id: {
    featured: {
      label: 'Berita utama',
      title: 'Aksi Iklim untuk Pemuda: Teknologi Digital untuk Edukasi dan Pemberdayaan Adaptasi Iklim',
      summary: 'Program yang memanfaatkan teknologi digital dan kecerdasan buatan untuk memperkuat edukasi iklim serta partisipasi pemuda dalam adaptasi.'
    },
    articles: [
      {
        category: 'Keadilan lingkungan',
        date: '9 Maret 2025',
        title: 'Melindungi Pembela Lingkungan dan Melawan Kriminalisasi Aktivis di Indonesia',
        summary: 'Kriminalisasi terhadap pembela lingkungan di Indonesia meningkat. Setidaknya 58 kasus aktivis lingkungan menghadapi ancaman hukum antara 2014 dan…'
      },
      {
        category: 'Pengetahuan adat',
        date: '9 Maret 2025',
        title: 'Penjaga Aceh: Kearifan Adat di Tengah Krisis Iklim',
        summary: 'Para pemimpin adat—Panglima Laot, Keujrun Blang, dan Pawang Uteen—telah menjaga alam Aceh selama beberapa generasi. Kini perubahan iklim mengancam tradisi dan ekosistem mereka…'
      },
      {
        category: 'Kesehatan masyarakat',
        date: '7 Maret 2025',
        title: 'Meningkatkan Keterlibatan Masyarakat dalam Pencegahan dan Penanganan Malaria di Aceh',
        summary: 'Malaria masih menjadi ancaman kesehatan masyarakat di Aceh, terutama bagi nelayan dan petani di wilayah terpencil yang rentan nyamuk serta memiliki akses terbatas…'
      },
      {
        category: 'Ketangguhan digital',
        date: '6 Maret 2025',
        title: 'Memperkuat Ketangguhan Digital Pesisir: Membangun Komunitas Internet Berkelanjutan di Aceh',
        summary: 'Kegiatan tiga hari ini bertujuan membekali masyarakat pesisir, pemuda, dan perempuan di Aceh dengan pengetahuan dan keterampilan teknis untuk membangun ekosistem internet yang tangguh dan berkelanjutan.'
      }
    ]
  }
} as const

export default news
