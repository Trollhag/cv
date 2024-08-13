import Image from 'next/image'
import { LinkTree, LinkTreeItem } from '@/app/components/LinkTree'
import type { languages } from '@/lang'
import GitHubIcon from '@/public/icons/github.svg'
import LinkedInIcon from '@/public/icons/linkedin.svg'
import MailIcon from '@/public/icons/mail.svg'
import PhoneIcon from '@/public/icons/phone.svg'
import PinIcon from '@/public/icons/pin.svg'
import portrait from '@/public/portrait.jpg'

export default async function Page({ params }: { params: { lang: keyof typeof languages } }) {
  const lang: typeof languages.en = await import(`@/lang/${params.lang}`)

  const headerList: LinkTreeItem[] = [
    {
      icon: <MailIcon className="inline-block" />,
      text: 'oscar@trollhag.com',
      href: 'mailto:oscar@trollhag.com',
    },
    {
      icon: <PhoneIcon className="inline-block" />,
      text: '+46 762 72 99 13',
      href: 'tel:+46 762 72 99 13',
    },
    {
      icon: <PinIcon className="inline-block" />,
      text: lang.general.location,
    },
    {
      icon: <LinkedInIcon className="inline-block" />,
      text: 'linkedin.com/in/oscar-trollhag',
      href: 'https://www.linkedin.com/in/oscar-trollhag/',
    },
    {
      icon: <GitHubIcon className="inline-block" />,
      text: 'github.com/trollhag',
      href: 'https://github.com/trollhag',
    },
  ]

  return (
    <main
      role="document"
      className="print:max-w-none print:w-unset w-[870px] max-w-full px-3 md:px-8 mx-auto"
    >
      <div className="flex justify-between items-center mx-3 md:mx-8">
        <Image
          src={portrait}
          alt="portrait"
          width={270}
          height={270}
          unoptimized
          className="rounded-full border-2 border-emerald-600 shadow max-w-full w-28 sm:w-52 md:w-60"
        />
        <div className="grow pl-4">
          <LinkTree
            className="hidden md:block print:block"
            items={headerList}
            iconAlign="right"
            align="right"
          />
          <h1 className="text-4xl md:text-5xl print:text-5xl mt-4">Oscar Trollhag</h1>
          <h2 className="text-xl md:text-2xl print:text-2xl text-emerald-600">
            {lang.general.workTitle}
          </h2>
        </div>
      </div>
      <div className="mx-3 md:mx-8"></div>
      {lang.presentation.role.map((str) => (
        <p key={str} className="my-4 mx-3 md:mx-8">
          {str}
        </p>
      ))}
      <hr className="border-t-2 border-emerald-600" />
      {lang.presentation.personal.map((str) => (
        <p key={str} className="my-4 mx-3 md:mx-8">
          {str}
        </p>
      ))}
      <div className="grid gap-4 md:grid-cols-5 justify-between">
        <div className="md:col-span-3">
          <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mb-2 border-b-2 border-emerald-600">
            {lang.work.title}
          </h3>
          <div className="c-timeline border-emerald-600">
            {lang.work.items.map((item, i) => (
              <div key={i} className="pb-4">
                <h4 className="text-lg">
                  <b>{item.title}</b>
                  <br />
                  {item.company}
                </h4>
                <div className="flex justify-between my-2">
                  <span className="bg-emerald-600 bg-opacity-15 px-2 rounded text-emerald-700 print-bg">
                    {item.date.join(' - ')}
                  </span>
                  <span>{item.location}</span>
                </div>
                <ul className="c-bracket border-emerald-600 pr-3 py-1">
                  {item.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mb-2 border-b-2 border-emerald-600">
            {lang.skills.title}
          </h3>
          <ul className="mx-3 md:mx-8">
            {lang.skills.items.map((skill) => (
              <li
                key={skill}
                className="inline-block m-1 px-2 bg-emerald-600 print-bg text-white rounded"
              >
                {skill}
              </li>
            ))}
            <li className="inline-block m-1 px-2 rounded">{lang.skills.expand}</li>
          </ul>
          <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mt-4 mb-2 border-b-2 border-emerald-600">
            {lang.skills.languages.title}
          </h3>
          <ul className="mx-3 md:mx-8">
            {Object.entries(lang.skills.languages.items).map(([language, value]) => (
              <li key={language} className="flex my-2">
                <span className="block w-24">{language}</span>
                <span className="flex">
                  {Array(5)
                    .fill(undefined)
                    .map((_, i) => (
                      <span
                        key={i}
                        className={`block m-1 w-4 h-4 border-2 rounded border-emerald-600 ${i + 1 <= value ? 'bg-emerald-600 print-bg' : ''}`}
                      />
                    ))}
                </span>
              </li>
            ))}
          </ul>
          <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mt-4 mb-2 border-b-2 border-emerald-600">
            {lang.certificates.title}
          </h3>
          <ul className="mx-3 md:mx-8">
            {lang.certificates.items.map((cert, i) => (
              <li key={i} className="my-2">
                {cert.title} {cert.date && `(${cert.date})`}
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mt-4 mb-2 border-b-2 border-emerald-600">
            {lang.education.title}
          </h3>
          <div className="mx-3 md:mx-8">
            {lang.education.items.map((item, i) => (
              <div key={i}>
                <h4 className="text-lg">
                  <b>{item.title}</b>
                  <br />
                  {item.institution}
                </h4>
                <div className="flex justify-between my-2">
                  <span className="bg-emerald-600 bg-opacity-15 px-2 rounded text-emerald-700 print-bg">
                    {item.date.join(' - ')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mt-4 mb-2 border-b-2 border-emerald-600">
            {lang.general.references.title}
          </h3>
          <p className="mx-3 md:mx-8">{lang.general.references.description}</p>
        </div>
      </div>
      <LinkTree className="pt-8 md:hidden print:hidden" items={headerList} />
    </main>
  )
}
