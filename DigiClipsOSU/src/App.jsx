import { useState } from 'react'
import { Helmet } from 'react-helmet'

// other components
import ContentCard from './ContentCard'

// icons
import { AiOutlineGithub as GitHubIcon } from "react-icons/ai";

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Helmet>
        <title>DigiClips - Oregon State</title>
      </Helmet>
      <div className="text bg-black min-h-screen w-full">
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  )
}


function Header() {
  return (
    <header className='mx-20'>
      <h1 className='text-lheader font-bold py-2'>DigiClips - Oregon State</h1>
    </header>
  )
}

function Main() {
  return (
    <main className='bg px-20 py-8 flex flex-col gap-y-3'>
      <ContentCard title='Our Project Partner' className='col-span-1'>
        <p>DigiClips is our project partner who provides textual recording for public media such as broadcast TV and radio. They allow searching for specific text in their media sources as well as getting a transcript from scheduled media. For example a lawyer might want to see what opposing council says in the news, DigiClips can provide that service by providing a transcript for local news channels or other relevant media sources.</p>
      </ContentCard>
      <div className='grid grid-cols-3 gap-x-5'>
        <ContentCard title='Project Personnel' className='col-span-1'>
          <ul>
            <li>
              <p>Grant Conklin</p>
            </li>
            <li>
              <p>Zane Cole Gant</p>
            </li>
            <li>
              <p>James Walter</p>
            </li>
          </ul>
        </ContentCard>
        <ContentCard title='What Is Our Project?' className='col-span-1'>
          <p>We were tasked with helping upgrade DigiClips' administration website. Which is an internal tool that allows them to manage users, data, and company resources from a single web application.</p>
        </ContentCard>
        <ContentCard title='Project Purpose' className="col-span-1">
          <p>The purpose of our project was to keep DigiClips data secure, and to help them detect and solve problems faster.</p>
        </ContentCard>
      </div>
      <div className='grid grid-cols-3'>

        <ContentCard title='Problems Solved' className="col-span-3">
          <p>DigiClips manages numerous servers and extensive user data, necessitating robust monitoring and security measures. We addressed these challenges by upgrading backend packages to mitigate security vulnerabilities and enhancing the functionality of their administration web app. Specifically, we improved the error display by formatting it to hide redundant errors and integrated errors from additional database tables, ensuring more concise and comprehensive data monitoring. These enhancements streamlined data presentation, reduced redundancy, and enabled DigiClips to detect and resolve issues more efficiently, thereby maintaining the integrity and security of their operations</p>
        </ContentCard>
      </div>
      <ContentCard title='Our Competitors' className="col-span-2">
        <p>As this is an internal tool for DigiClips' staff we have no direct competitors to our product. The only goal with this project was to upgrade their website to something that is easier to use, more secure, and provides more functionality.</p>
      </ContentCard>
      <ContentCard title='Documentation and Extra Info' className="col-span-1">
        <p>This website isn't public but for more information about DigiClips you can check out&nbsp;
          <a href='http://www.digiclipsinc.com' target='_blank' rel='noreferrer' className='hover:text-white hover:cursor-pointer underline'>digiclipsinc.com</a>
          .
        </p>
      </ContentCard>
      <ContentCard title='Project Use'>
        <p>As this website is DigiClips' main administration tool to manage company resources this website is not available for public use. DigiClips does have a public website for potential customers and those wishing to learn more at&nbsp;
          <a href='http://www.digiclipsinc.com' target='_blank' rel='noreferrer' className='hover:text-white hover:cursor-pointer underline'>digiclipsinc.com</a>
          .
        </p>
      </ContentCard>
      <ContentCard title='Source Code'>
        <p>
          Our project partner keeps their source code private. You can learn more about our project partner and what they do on their website at&nbsp;
          <a href='http://www.digiclipsinc.com' target='_blank' rel='noreferrer' className='hover:text-white hover:cursor-pointer underline'>digiclipsinc.com</a>
          .
        </p>
      </ContentCard>
    </main>
  )
}

function Footer() {
  return (
    <footer className='mx-20 py-8'>
      <div className='mx-auto w-fit'>
        <a href='https://github.com/DigiClipsOSU/digiclipsOSU.github.io' target='_blank' rel='noreferrer' className='hover:text-white hover:cursor-pointer'>
          <div className='flex gap-3'>
            <GitHubIcon className='h-12 w-auto' />
          </div>
        </a>
      </div>
    </footer>
  )
}
