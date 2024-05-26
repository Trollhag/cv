// @refresh reset
import Link from "next/link";

import MailIcon from "../../public/mail.svg";
import PhoneIcon from "../../public/phone.svg";
import PinIcon from "../../public/pin.svg";
import LinkedInIcon from "../../public/linkedin.svg";
import GitHubIcon from "../../public/github.svg";

import WorkExperience from "@/data/work-experience.json";
import Education from "@/data/education.json";
import Skills from "@/data/skills.json";
import Certificates from "@/data/certificates.json";

export default function Home() {
  const headerList = [
    { icon: <MailIcon className="ml-auto" />, text: "oscar@trollhag.com", href: "mailto:oscar@trollhag.com" },
    { icon: <PhoneIcon className="ml-auto" />, text: "+46 762 72 99 13", href: "tel:+46 762 72 99 13" },
    { icon: <PinIcon className="ml-auto" />, text: "Gothenburg, Sweden" },
    { icon: <LinkedInIcon className="ml-auto" />, text: "linkedin.com/in/oscar-trollhag", href: "https://www.linkedin.com/in/oscar-trollhag/" },
    { icon: <GitHubIcon className="ml-auto" />, text: "github.com/trollhag", href: "https://github.com/trollhag" },
  ]

  return (
    <main role="document" className="print:max-w-none print:w-unset w-[850px] max-w-full px-8 mx-auto">
      <div className="grid gap-4 grid-cols-2 justify-between mx-8">
        <div>
          <h1 className="text-2xl md:text-5xl print:text-5xl">Oscar Trollhag</h1>
          <h2 className="text-lg md:text-2xl print:text-2xl text-emerald-600">Full Stack Developer</h2>
        </div>
        <div>
          <ul className="">
            {headerList.map(({ icon, text, href }, i) => {
              const render = [text, <span key={icon.key} className="display-block w-8 text-emerald-600">{icon}</span>]
              return (
                <li key={i} className="flex items-center justify-end text-right mb-1">
                  {href ? <Link href={href} className="underline flex items-center justify-end">{render}</Link> : render}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <p className="my-4 mx-8">Full Stack Developer with expertise in the JavaScript and PHP ecosystems, with experience developing and maintaining SaaS platforms, React Native apps, Databases, komplex and simple websites. Never stop learning is my philosophy.</p>
      <div className="grid gap-4 md:grid-cols-2 print:grid-cols-2 justify-between">
        <div>
          <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mb-2 border-b-2 border-emerald-600">Work experience</h3>
          <div className="c-timeline border-emerald-600">
            {WorkExperience.map((item, i) => (
              <div key={i} className="pb-4">
                <h4 className="text-lg">
                  <b>{item.title}</b><br/>
                  {item.company}
                </h4>
                <div className="flex justify-between my-2">
                  <span className="bg-emerald-600 bg-opacity-15 px-2 rounded text-emerald-700 print-bg">{item.date.join(" - ")}</span>
                  <span>{item.location}</span>
                </div>
                <ul className="c-bracket border-emerald-600 px-3 py-1">
                  {item.description.map((desc) => <li key={desc}>{desc}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mb-2 border-b-2 border-emerald-600">Skills</h3>
          <ul className="pl-8">
            {Skills.skills.map(skill => (
              <li key={skill} className="inline-block m-1 px-2 bg-emerald-600 print-bg text-white rounded">{skill}</li>
            ))}
            <li className="inline-block m-1 px-2 rounded">... and many more</li>
          </ul>
          <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mt-4 mb-2 border-b-2 border-emerald-600">Languages</h3>
          <ul className="pl-8">
            {Object.entries(Skills.languages).map(([language, value]) => (
              <li key={language} className="flex my-2">
                <span className="block w-1/3">{language}</span>
                <span className="flex">
                  {Array(5).fill(undefined).map((_, i) => (
                    <span key={i} className={`block m-1 w-4 h-4 border-2 rounded border-emerald-600 ${i+1 <= value ? "bg-emerald-600 print-bg" : ""}`} />
                  ))}
                </span>
              </li>
            ))}
          </ul>
          <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mt-4 mb-2 border-b-2 border-emerald-600">Certificates</h3>
          <ul className="pl-8">
            {Certificates.map((cert, i) => (
              <li key={i} className="my-2">{cert.title} {cert.date && `(${cert.date})`}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-bold uppercase pl-8 pb-1 mt-4 mb-2 border-b-2 border-emerald-600">Education</h3>
          <div className="c-timeline border-emerald-600">
            {Education.map((item, i) => (
              <div key={i} className="pb-4">
                <h4 className="text-lg">
                  <b>{item.title}</b><br/>
                  {item.institution}
                </h4>
                <div className="flex justify-between my-2">
                  <span className="bg-emerald-600 bg-opacity-15 px-2 rounded text-emerald-700 print-bg">{item.date.join(" - ")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
