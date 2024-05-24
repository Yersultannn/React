import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'

import ecomLogo from '@/images/projects/ecom.svg'
import bananaLogo from '@/images/projects/bananaApp.svg'
import supaSnacksLogo from '@/images/projects/supaSnacks.svg'
import payByFonieLogo from '@/images/projects/payByFonie.svg'

// TODO: Add your own projects here. Logo images from https://heroicons.com/
const projectsData = [
  {
    title: 'Веб-сайт для электронной коммерции с использованием TypeScript, React, Redux и Firebase',
    description: `Этот проект был создан для изучения React и Redux. Это полностью функциональный веб-сайт для электронной коммерции, который позволяет пользователям входить в систему с помощью аккаунта Google, добавлять товары в корзину и совершать платежи с помощью Stripe. Проект построен с использованием TypeScript, React, Redux, Firebase, Stripe и Tailwind.`,
    logo: ecomLogo,
    href: 'https://github.com/Yersultannn/task-8',
  },
  {
    title: 'Изучение React Hooks',
    description: `Этот проект посвящен изучению React Hooks. В нем реализованы различные примеры использования хуков, таких как useState, useEffect, useContext и других. Проект демонстрирует, как хуки упрощают управление состоянием и побочными эффектами в функциональных компонентах React.`,
    logo: bananaLogo,
    href: 'https://github.com/Yersultannn/task-7',
  },
  {
    title: 'Redux Middleware в действии',
    description: `Этот проект показывает, как использовать Middleware в Redux для управления побочными эффектами, такими как асинхронные запросы. В проекте реализованы примеры использования Redux Thunk и Redux Saga, что позволяет лучше понять, как обрабатывать сложные сценарии асинхронного взаимодействия в приложениях на React.`,
    href: 'https://github.com/Yersultannn/opt-image-gallery',
  },
  {
    title: 'Настройка Webpack для React',
    description: `Этот проект посвящен настройке Webpack для приложения на React. Он включает примеры конфигурации Webpack для поддержки ES6+, CSS/SCSS, и оптимизации для продакшена. Проект демонстрирует, как настроить сборку кода, разделение кода и загрузку статических файлов, чтобы сделать приложение более производительным и масштабируемым.`,
    href: 'https://github.com/Yersultannn/react-optimize-gallery',
  },
]


function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - {siteMetadata.author}</title>
        <meta name="description" content="Personal projects by Curtis Warcup" />
      </Head>
      <SimpleLayout
          title="Проекты, над которыми я работал"
          intro="Это некоторые из проектов, которыми я горжусь больше всего. Я создал их, чтобы изучить новые технологии или решить проблему, с которой столкнулся."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project) => {
            console.log(project)
            return (
              <Card as="li" key={project.title}>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt=""
                    className="w-8 h-8"
                    unoptimized
                    width={32}
                    height={32}
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.href}>{project.title}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="flex-none w-6 h-6" />
                  <span className="ml-2">{project.title}</span>
                </p>
              </Card>
            )
          })}
        </ul>
      </SimpleLayout>
    </>
  )
}
