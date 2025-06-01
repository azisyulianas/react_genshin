import { useState } from 'react';
import './App.css'
import SvgList from './assets/SvgList'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className='flex lg:items-center items-start justify-between flex-wrap bg-teal-500 p-3'>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <SvgList>
            <SvgList.TailwindLogo />
          </SvgList>
          <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
        </div>
        <div className="rounded-md lg:hidden">
          <button className={`justify-end px-4 py-2 text-sm font-medium leading-5 ${!isOpen?'hidden':''} `} onClick={toggleDropdown}
          type="button">
            <SvgList>
              <SvgList.HambugerOpen />
            </SvgList>
          </button>
          <button className={`justify-end px-4 py-2 text-sm font-medium leading-5 ${!isOpen?'':'hidden'}`} onClick={toggleDropdown}
          type="button">
            <SvgList>
              <SvgList.HambugerClose />
            </SvgList>
          </button>
        </div>
        <div className={`lg:flex-grow lg:items-center lg:w-auto lg:flex w-full lg:justify-start ${!isOpen?'hidden':''} `}>
          <ul className="text-sm lg:flex-grow lg:flex justify-center lg:justify-start text-center">
            <li className='class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4'>Characters</li>
            <li className='class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4'>Weapons</li>
            <li className='class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4'>Materials</li>
            <li className='class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4'>Enemies</li>
            <li className='class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4'>Artifact</li>
            <li className='class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4'>Info</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default App
