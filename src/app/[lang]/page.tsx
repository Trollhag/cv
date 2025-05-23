import Image from 'next/image'
import { LinkTree, LinkTreeItem } from '@/app/components/LinkTree'
import GitHubIcon from '@/icons/github.svg'
import LinkedInIcon from '@/icons/linkedin.svg'
import MailIcon from '@/icons/mail.svg'
import PhoneIcon from '@/icons/phone.svg'
import PinIcon from '@/icons/pin.svg'
import type { languages } from '@/lang'
import portrait from '@/portrait.jpg'

export default async function Page(
  props: Readonly<{ params: Promise<{ lang: keyof typeof languages }> }>,
) {
  const params = await props.params
  const lang: (typeof languages)[keyof typeof languages] = await import(`@/lang/${params.lang}`)

  const headerList: LinkTreeItem[] = [
    {
      icon: <MailIcon className="inline-block" />,
      text: 'oscar@trollhag.com',
      href: 'mailto:oscar@trollhag.com',
      target: '_blank',
    },
    // {
    //   icon: <PhoneIcon className="inline-block" />,
    //   text: '+46 762 72 99 13',
    //   href: 'tel:+46 762 72 99 13',
    //   target: '_blank',
    // },
    {
      icon: <PinIcon className="inline-block" />,
      text: lang.general.location,
    },
    {
      icon: <LinkedInIcon className="inline-block" />,
      text: 'linkedin.com/in/oscar-trollhag',
      href: 'https://www.linkedin.com/in/oscar-trollhag/',
      target: '_blank',
    },
    {
      icon: <GitHubIcon className="inline-block" />,
      text: 'github.com/trollhag',
      href: 'https://github.com/trollhag',
      target: '_blank',
    },
  ]

  return (
    <main role="document" className="w-[970px] max-w-full print:w-auto px-3 md:px-8 mx-auto">
      {/* <div className="flex justify-between items-center mx-3 md:mx-8 mb-3">
        <Image
          src={portrait}
          alt="portrait"
          width={270}
          height={270}
          unoptimized
          className="rounded-full border-4 border-emerald-600 shadow-lg max-w-full w-28 sm:w-52 md:w-60"
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
      </div> */}
      {/* {lang.presentation.role.map((str) => (
        <p key={str} className="my-4 mx-3 md:mx-8">
          {str}
        </p>
      ))}
      <hr className="border-t-2 border-emerald-600" />
      {lang.presentation.personal.map((str) => (
        <p key={str} className="my-4 mx-3 md:mx-8">
          {str}
        </p>
      ))} */}
      <div className="grid gap-4 sm:grid-cols-12 justify-between">
        <div className="md:col-span-5 print:col-span-4 gap-4">
          <div className="mb-4">
            <Image
              src={portrait}
              alt="portrait"
              width={270}
              height={270}
              unoptimized
              className="rounded-full border-4 border-emerald-600 shadow-lg max-w-full w-28 sm:w-52 md:w-60 mx-auto"
            />
            <h1 className="text-center text-4xl md:text-5xl print:text-4xl mt-4">Oscar Trollhag</h1>
            <h2 className="text-center text-xl md:text-2xl print:text-2xl text-emerald-600 mb-4">
              {lang.general.workTitle}
            </h2>
            <LinkTree className="hidden md:block print:block" items={headerList} />
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mb-2 border-b-2 border-emerald-600">
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
          </div>
          <div className="mb-4">
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
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mb-2 border-b-2 border-emerald-600">
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
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mb-2 border-b-2 border-emerald-600">
              {lang.certificates.title}
            </h3>
            <ul className="mx-3 md:mx-8">
              {lang.certificates.items.map((cert, i) => (
                <li key={i} className="my-2">
                  {cert.title} {cert.date && `(${cert.date})`}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mb-2 border-b-2 border-emerald-600">
              {lang.other.title}
            </h3>
            <ul className="mx-3 md:mx-8">
              {lang.other.items.map((merit, i) => (
                <li key={i} className="my-2">
                  {merit.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mb-2 border-b-2 border-emerald-600">
              {lang.general.references.title}
            </h3>
            <p className="mx-3 md:mx-8">{lang.general.references.description}</p>
          </div>
        </div>
        <div className="md:col-span-7 print:col-span-8">
          <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mb-2 border-b-2 border-emerald-600">
            {lang.work.title}
          </h3>
          <div className="c-timeline border-emerald-600">
            {lang.work.items.map((item, i) => (
              <div key={i} className="pb-4">
                <div className="">
                  <h4 className="text-lg">
                    <b>{item.title}</b> &ndash; {item.company}
                  </h4>
                  <p className="">
                    <span className="bg-emerald-600 bg-opacity-15 px-2 mr-2 rounded text-emerald-700 print-bg">
                      {item.date.join(' - ')}
                    </span>
                  </p>
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
      </div>
      <LinkTree className="pt-8 md:hidden print:hidden" items={headerList} />
    </main>
  )
}
