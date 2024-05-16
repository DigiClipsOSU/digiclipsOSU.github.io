import { useState } from 'react'

// other components
import ContentCard from './ContentCard'

// icons
import { AiOutlineGithub as GitHubIcon } from "react-icons/ai";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text bg-black min-h-screen w-full">
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App


function Header() {
  return (
    <header className='mx-20'>
      <h1 className='text-lheader font-bold'>DigiClips OSU</h1>
    </header>
  )
}

function Main() {
  return (
    <main className='bg px-20 py-5'>
      <div className='grid grid-cols-3'>
        <ContentCard title='What Is Our Project?' className='col-span-1'>
          <p>DigiClips is our project partner who</p>
        </ContentCard>
        <ContentCard title='Project Personnel' className='col-span-2'>
          <p>A JavaScript library for building user interfaces</p>
        </ContentCard>
      </div>
      <div className='grid grid-cols-3'>
        <ContentCard title='Project Purpose' className="col-span-1">
          <p>A JavaScript library for building user interfaces</p>
        </ContentCard>
        <ContentCard title='Problems Solved' className="col-span-2">
          <p>A JavaScript library for building user interfaces</p>
        </ContentCard>
      </div>
      <div className='grid grid-cols-3'>
        <ContentCard title='Learn More' className="col-span-2">
          <p>A JavaScript library for building user interfaces</p>
        </ContentCard>
        <ContentCard title='Documentation' className="col-span-1">
          <p>A JavaScript library for building user interfaces</p>
        </ContentCard>
      </div>
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
          <GitHubIcon className='h-14 w-auto' />
        </a>
      </div>
    </footer>
  )
}