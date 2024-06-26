import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { RiLinksLine } from 'react-icons/ri'
import siteMetadata from '@/data/siteMetadata'
import logoApple from '@/images/logos/apple.svg'

// TODO: Если вы хотите включить логотип компании, я предлагаю импортировать SVG из репозитория Remix-Design: https://github.com/Remix-Design/RemixIcon/tree/master/icons/Logos

// TODO: Добавьте свой собственный опыт работы здесь
const experiences = [
  {
    title: 'Руководитель',
    company: 'Apple',
    date: '2018 - настоящее время',
    description: [
      'Руководство командой из более чем 100 сотрудников во всех областях бизнеса, с примерно 60 членами команды ежедневно',
      'Разработка и проведение ежедневных общих собраний, семинаров и тренингов для команды и новых сотрудников',
      'Создание и внедрение бизнес-тренингов, что привело к увеличению на 50% бизнес-связей, позже примененных на всех розничных магазинах в регионе',
    ],
    location: 'Ванкувер, Британская Колумбия',
    link: { url: 'https://www.apple.com/ca/', label: 'Apple' },
    logo: logoApple,
  },
  {
    title: 'Гений',
    company: 'Apple',
    date: '2016 - 2018',
    description: [
      'Предоставление технической поддержки клиентам, включая устранение неисправностей, диагностику и ремонт аппаратных и программных проблем',
      'Отличные навыки работы с людьми и умение решать проблемы',
      'Сохранение спокойствия, проявление эмпатии и ориентация на клиента при устранении и решении технических проблем',
    ],
    location: 'Ванкувер, Британская Колумбия',
    link: { url: 'https://www.apple.com/ca/', label: 'Apple' },
    logo: logoApple,
  },
]

export default function Resume() {
  return (
      <>
        <Head>
          <title>Опыт работы - {siteMetadata.author}</title>
          <meta
              name={`Опыт работы ${siteMetadata.author}`}
              content={siteMetadata.experience.title}
          />
        </Head>
        <SimpleLayout
            title={siteMetadata.experience.title}
            intro={siteMetadata.experience.intro}
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
            Опыт работы
          </h2>
          <ul
              role="list"
              className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {experiences.map((experience, index) => (
                <Card key={index}>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-primaryText-800/5 ring-1 ring-primaryText-900/5 dark:border dark:border-primaryText-700/50 dark:bg-primaryText-800 dark:ring-0">
                    <Image
                        src={experience.logo}
                        alt={experience.company}
                        className="w-8 h-8"
                        unoptimized
                        width={32}
                        height={32}
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                    <Card.Link href={experience.link.url}>
                      {experience.title} в {experience.company}
                    </Card.Link>
                  </h2>
                  <Card.Description>
                    {experience.description.map((item, index) => (
                        <li className="ml-4 list-disc" key={`description-${index}`}>
                          {item}
                        </li>
                    ))}
                  </Card.Description>
                  <p className="relative z-10 flex mt-6 text-sm font-medium transition text-primaryText-400 group-hover:text-accent-500 dark:text-primaryText-200">
                    <RiLinksLine className="flex-none w-6 h-6" />
                    <span className="ml-2">{experience.link.label}</span>
                  </p>
                </Card>
            ))}
          </ul>

          <div className="relative max-w-lg mx-auto mt-24 lg:max-w-7xl">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
                Образование
              </h2>
            </div>
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
              {siteMetadata.experience.education.map((item, index) => (
                  <Card key={`education-${index}`}>
                    <p className="text-sm text-primaryText-600 dark:text-primaryText-400">
                      {item.startDate} - {item.endDate}
                    </p>
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-primaryText-800 dark:text-primaryText-100">
                        {item.degree}
                      </p>
                      <p className="text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                        {item.schoolName}
                      </p>
                      <p className="mt-3 text-base text-primaryText-600 dark:text-primaryText-400">
                        {item.description}
                      </p>
                    </div>
                  </Card>
              ))}
            </div>
          </div>
        </SimpleLayout>
      </>
  )
}
