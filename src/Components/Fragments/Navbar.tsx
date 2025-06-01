import { useState } from "react";
import SvgList from "../../assets/SvgList"
import Button from "../Elements/Button/Index"
import List from "../Elements/List/Index";

const DropdownList = () =>{
  return (
    <ul className="text-sm lg:flex-grow lg:flex justify-center lg:justify-start text-center">
      <List classname="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4">Home</List>
      <List classname="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4">Characters</List>
      <List classname="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4">Weapons</List>
      <List classname="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4">Materials</List>
      <List classname="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4">Enemies</List>
      <List classname="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4">Artifact</List>
      <List classname="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4">About</List>
    </ul>
  )
}

const Navbar = () => {
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
          <Button type="button" onclick={toggleDropdown}
            classname={`justify-end px-4 py-2 text-sm font-medium leading-5 ${!isOpen?'hidden':''}`}>
              <SvgList>
                <SvgList.HambugerOpen />
              </SvgList>
          </Button>
          <Button type="button" onclick={toggleDropdown}
            classname={`justify-end px-4 py-2 text-sm font-medium leading-5 ${!isOpen?'':'hidden'}`}>
              <SvgList>
                <SvgList.HambugerClose />
              </SvgList>
          </Button>
        </div>
        <div className={`lg:flex-grow lg:items-center lg:w-auto lg:flex w-full lg:justify-start ${!isOpen?'hidden':''} `}>
          <DropdownList />
        </div>
      </nav>
    </>
  )
}

export default Navbar