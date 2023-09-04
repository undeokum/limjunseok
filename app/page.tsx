import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import SkillBtn from './components/SkillBtn';
import SocialBtn from './components/SocialBtn';


const SkillIconsArray = [
  'html',
  'css',
  'javascript',
  'typescript',
  'node.js',
  'react',
  'next.js',
  'tailwindcss'
]

const SocialIconsArray = [
  [
    'github',
    'https://github.com/limjunseok0929'
  ],
  [
    'facebook',
    'https://www.facebook.com/profile.php?id=100088201783682'
  ],
  [
    'instagram',
    'https://www.instagram.com/jxnse0k_'
  ],
  [
    'solved.ac',
    'https://solved.ac/profile/junseok_lim09'
  ],
  [
    'npm',
    'https://www.npmjs.com/~limjunseok'
  ],
  [
    'stackoverflow',
    'https://stackoverflow.com/users/18835395/limjunseok'
  ]
]

const date = new Date()

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Junseok Lim</title>
      </Head>

      <div className='snap-start grid h-screen'>
        <div className='flex flex-col pt-20 space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center w-11/12 md:w-5/6 lg:w-4/5'>
            <div className='space-y-2'>
              <h1 className='font-thin text-2xl sm:text-3xl md:text-4xl'>Junseok Lim</h1>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>A <span className='text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r'>Student</span> Developer.</h1>
              <h1 className='font-thin text-base sm:text-lg md:text-xl'>Korean middle school students who mainly develop with JS and TS</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='snap-start grid h-screen'>
        <div className='flex flex-col pt-20 space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center w-11/12 md:w-5/6 lg:w-4/5 space-y-5'>
            <div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>My <span className='text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-bold'>Skills</span></h1>
              <h1 className='font-thin text-base sm:text-lg md:text-xl'>What I can use in programming</h1>
            </div>
            <div className='flex flex-row flex-grow flex-wrap pt-4 space-x-6 sm:space-x-8 md:space-x-10 items-center text-center'>
              {
                SkillIconsArray.map((_,i) => (
                  <div key={i}>
                    <SkillBtn skillName={_} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div className='snap-start grid h-screen'>
        <div className='flex flex-col pt-20 space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center w-11/12 md:w-5/6 lg:w-4/5 space-y-5'>
            <div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>My <span className='text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-bold'>Projects</span></h1>
              <h1 className='font-thin text-base sm:text-lg md:text-xl'>The projects that I made by programming</h1>
            </div>
            <div className='flex flex-row flex-grow flex-wrap pt-4 space-x-10 items-center text-center'>
              <p className='text-sm sm:text-base md:text-lg'>
                Not any projects yet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='snap-start grid h-screen'>
        <div className='flex flex-col pt-20 space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center w-11/12 md:w-5/6 lg:w-4/5 space-y-5'>
            <div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>My <span className='text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-bold'>Socials</span></h1>
              <h1 className='font-thin text-base sm:text-lg md:text-xl'>You can see me on Social Network</h1>
            </div>
            <div className='flex flex-row flex-grow flex-wrap pt-4 space-x-6 sm:space-x-8 md:space-x-10 items-center text-center'>
              {
                SocialIconsArray.map((_,i) => (
                  <div key={i}>
                    <SocialBtn socialName={_[0]} socialLink={_[1]} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <footer className='flex justify-center items-center snap-end text-center'>
        <div>
          <Link target='_blank' href='https://github.com/limjunseok0929/limjunseok' className='hover:underline text-xs sm:text-sm md:text-base'>
            Made With ❤️
          </Link>
          <div className='flex items-center space-x-2'>
            <h1 className='text-xs sm:text-sm md:text-base'>Copyright &copy; {date.getFullYear()}, Junseok Lim. All Rights Reserved.</h1>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home