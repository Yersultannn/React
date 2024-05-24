import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'Какие технологии лучше всего использовать для фронтенд-разработки?',
    answer:
        'Для фронтенд-разработки можно использовать различные технологии, такие как React, Vue, или Angular. React является отличным выбором благодаря своей гибкости и широкому сообществу, что позволяет быстро находить решения и ресурсы для обучения.',
  },
  {
    question: 'Могу ли я использовать Bootstrap для стилей, или это считается обманом?',
    answer:
        'Профессиональные фронтенд-разработчики часто создают стили с нуля, но использование Bootstrap или других CSS-фреймворков на начальном этапе обучения не является чем-то зазорным. Это помогает быстро создавать адаптивные и красивые интерфейсы, что особенно полезно для начинающих.',
  },
  {
    question: 'Как разработать веб-приложение без JavaScript?',
    answer:
        'Что ж, это сложный вопрос. JavaScript является основой для большинства интерактивных функций на веб-сайтах. Однако, для простых страниц можно использовать чистый HTML и CSS. Если вы ищете альтернативу, можете рассмотреть WebAssembly или другие языки, которые компилируются в JavaScript.',
  },
  {
    question: 'Стоит ли использовать готовые шаблоны или создавать собственные?',
    answer:
        'По мнению экспертов, использование готовых шаблонов может значительно ускорить процесс разработки, особенно если у вас ограничены сроки. Однако, создание собственных шаблонов помогает лучше понять структуру и логику верстки, что полезно для развития ваших навыков.',
  },

]

const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100">
            Часто задаваемые вопросы
          </h2>
          <p className="mt-4 text-lg text-primaryText-600 dark:text-primaryText-400">
            Не можете найти ответ, который ищете? Тогда напишите {' '}
            <a
              href={`mailto:${siteMetadata.email}`}
              className="font-medium text-accent-600 hover:text-accent-500"
            >

            </a>
            .
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-12">
            {faqs.map((faq) => (
              <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transitions={{ duration: 3, type: 'tween' }}
                key={faq.question}
              >
                <div>
                  <dt className="text-lg font-medium leading-6 text-primaryText-800 dark:text-primaryText-100">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-primaryText-600 dark:text-primaryText-400 ">
                    {faq.answer}
                  </dd>
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Faq
