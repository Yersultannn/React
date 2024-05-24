import { GiBanana } from 'react-icons/gi'
import { RiShoppingBagLine, RiCarLine } from 'react-icons/ri'
import { IoFastFoodOutline } from 'react-icons/io5'

const siteMetadata = {
  title: 'Ers Nuraliyev',
  description:
      'Здесь вы можете узнать обо мне и моей работе. Я full stack разработчик и люблю создавать вещи.',
  author: 'Ерсултан Нуралиев',
  authorHeadline: 'Front-end Developer',
  authorAbout:
      "Всем Привет, я Ерсултан, Front-End разработчик. Я создал этот сайт, для дисциплины Front-End(React). Надеюсь, вам понравится!",
  authorAboutExtended:
      "Ерсултан родился в Казахстане и живет в красивом городе Алматы. \n \n В личной жизни Ерсултан увлекается бизнесом и здоровым образом жизни. Он любит делать проекты по React и изучат бизнес идеи. Когда он не кодирует, Ерсултан проводит время на форумах, посвященных It проектам, изучая следующий новый язык программирования. Также он любит поесть, особенно Донер.",
  socials: {
    twitter: 'https://twitter.com/',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/in/ersultan-nuraliev-2992a2257/',
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
  },
  email: 'nuraliev.ersultan@narxoz.kz',
  phoneNumber: '+7707 777 77 77',
  contactTitle: 'Свяжитесь со мной',
  contactSubtitle:
      "В данный момент я занимаюсь созданием потрясающих веб-сайтов. Если хотите связаться со мной, пожалуйста, используйте форму ниже.",
  analytics: {
    plausibleDataDomain: 'https://ersultan.com/', // например: tailwind-nextjs-starter-blog.vercel.app
    googleAnalyticsId: 'G-XXXXXXX', // например: UA-000000-2 или G-XXXXXXX
  },
  siteNavLinks: [
    {
      name: 'Главная',
      href: '/',
    },
    {
      name: 'Обо мне',
      href: '/about',
    },
    {
      name: 'Опыт',
      href: '/experience',
    },
    {
      name: 'Услуги',
      href: '/offerings',
    },
    {
      name: 'Контакты',
      href: '/contact',
    },
    {
      name: 'Проекты',
      href: '/projects',
    },
  ],
  siteRepo: 'https://github.com/ersultan/',
  offerings: [
    {
      title: 'Front-End Разработчик',
      description:
          'Я специалист по фронтенд-разработке с глубокими знаниями HTML, CSS и JavaScript. Я создаю современные, отзывчивые и интуитивно понятные веб-интерфейсы. Независимо от того, нужен ли вам простой лендинг или сложное веб-приложение, я помогу воплотить ваши идеи в жизнь с использованием самых современных технологий и лучших практик разработки.',
      testimonial:
          '“Ерсултан - отличный разработчик. Он помог мне понять мои сильные и слабые стороны и как улучшить мои навыки. Я бы рекомендовал его всем, кто хочет улучшить свои навыки.”',
      testimonialAuthor: 'Илон Маск',
      testimonialAuthorTitle: 'CEO в Dumpster Fire, Inc.',
      imgUrl:
          'https://images.unsplash.com/photo-1594392175511-30eca83d51c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
      imageAttribution: 'Фото от @dan__burton на Unsplash',
    },
    {
      title: 'Front-End Разработка',
      description:
          'Я создаю современные и отзывчивые веб-интерфейсы с использованием новейших технологий, таких как React, Angular и Vue.js. Мои проекты всегда ориентированы на пользователя, что обеспечивает отличное взаимодействие и удобство использования. Независимо от сложности проекта, я готов помочь вам воплотить ваши идеи в жизнь.',
      testimonial: '',
      testimonialAuthor: '',
      testimonialAuthorTitle: '',
      imgUrl:
          'https://images.unsplash.com/photo-1532460734809-e7f8475ca917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3237&q=80',
      imageAttribution: 'Фото от @juanmanunez на Unsplash',
    },
  ],
  testimonial: {
    comment:
        '“Ерсултан - отличный разработчик. Он помог мне понять мои сильные и слабые стороны и как улучшить мои навыки. Я бы рекомендовал его всем, кто хочет улучшить свои навыки.”',
    author: 'Илон Маск',
    authorTitle: 'CEO в Dumpster Fire, Inc.',
    imgUrl:
        'https://images.unsplash.com/photo-1579047917338-a6a69144fe63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
    imageAttribution: 'Фото от @johanemanuel на Unsplash',
  },
  featureSection: {
    title: 'Почему выбрать меня?',
    description:
        'Я front-end разработчик и люблю создавать современные, отзывчивые и интуитивно понятные веб-интерфейсы. Я использую новейшие технологии и лучшие практики разработки, чтобы воплотить ваши идеи в жизнь.',
    //TODO также нужно обновить массив features в компоненте FeatureSection
  },
    experience: {
    title: 'Что я сделал, пытаясь оставить свой след в этом мире.',
    intro:
        "Я никогда не доставлял пиццу, но я её готовил. Я не думаю, что вы должны нанимать меня за мои навыки приготовления пиццы, но я уверен, что я отличный разработчик. Я занимаюсь программированием уже давно, и моя мама говорит, что я в этом хорош.",
    //TODO также нужно обновить массив experience в компоненте ExperienceSection. Это связано с используемыми иконками.
    education: [
      {
        schoolName: 'Narxoz University',
        degree: 'Бакалавр Информационные Технологии',
        description:
            'Информационные технологии это IT',
        startDate: '2021',
        endDate: '2025',
        typeofDegree: 'Бакалавр',
      },
    ],
  },

}

export default siteMetadata
