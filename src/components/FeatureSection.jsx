import { RiRunLine, RiSignalWifi3Line } from 'react-icons/ri'
import siteMetadata from '@/data/siteMetadata'

// TODO: Добавьте свои собственные функции здесь. Не забудьте добавить иконку из репозитория Remix-Design:
const features = [
  {
    name: 'Создание веб-приложений',
    description:
        'Я научу вас, как создавать современные веб-приложения с использованием React и Redux. Вы узнаете, как эффективно управлять состоянием приложения, обрабатывать пользовательский ввод и взаимодействовать с внешними API.',
    icon: RiRunLine,
  },
  {
    name: 'Адаптивный дизайн',
    description:
        'Этот трехчасовой класс по адаптивному дизайну предоставит нашим участникам возможность научиться создавать интерфейсы, которые отлично смотрятся и работают на любых устройствах, от мобильных телефонов до настольных компьютеров.',
    icon: RiSignalWifi3Line,
  },
];


const FeatureSection = () => {
  return (
      <div className="pb-24">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-accent-600">
              Услуги
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
              {siteMetadata.featureSection.title}
            </p>
            <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-primaryText-600 dark:text-primaryText-400">
              {siteMetadata.featureSection.description}
            </p>
          </div>

          <div className="max-w-lg mt-20 sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {features.map((feature) => (
                  <div
                      key={feature.name}
                      className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                  >
                    <div className="flex items-center justify-center w-12 h-12 text-white rounded-xl bg-accent-500 sm:shrink-0">
                      <feature.icon className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <div className="sm:min-w-0 sm:flex-1">
                      <p className="text-lg font-semibold leading-8 text-primaryText-800 dark:text-primaryText-100">
                        {feature.name}
                      </p>
                      <p className="mt-2 text-base leading-7 text-primaryText-600 dark:text-primaryText-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default FeatureSection
