import { useState } from "react";
import SvgList from "../../assets/SvgList"
import Button from "../Elements/Button/Index"
import List from "../Elements/List/Index";
import { Link } from "react-router-dom";

type Props = {
  pages:string
}

const ListPage = [
  { name:"Home", link:"home" }, { name:"Characters", link:"characters" }, { name:"Weapons", link:"weapons" },
  { name:"Materials", link:"materials" }, { name:"Enemies", link:"enemies" }, { name:"Artifact", link:"artifact" },
]

const DropdownList = (props:Props) =>{
  const { pages } = props
  return (
    <ul className="text-sm lg:flex-grow lg:flex justify-center lg:justify-start text-center">
      { ListPage.map((page)=>(
        <List key={page.link}
          classname={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4 ${pages===page.link?"font-bold":""}`}>
            <Link to={`${page.link === "home"?"/":"/"+page.link}`}>{page.name}</Link>
        </List>
      ))}
    </ul>
  )
}

const Navbar = (props:Props) => {
  const { pages } = props
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className='flex lg:items-center items-start justify-between flex-wrap bg-teal-500 p-3'>
        <Link to={"/"} className="flex items-center flex-shrink-0 text-white mr-6">
          <SvgList>
            <SvgList.TailwindLogo />
          </SvgList>
          <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
        </Link>
        <div className="rounded-md lg:hidden">
          <Button type="button" onclick={toggleDropdown}
            classname={`justify-end px-4 py-2 text-sm font-medium leading-5 ${!isOpen?'':'hidden'}`}>
              <SvgList>
                <SvgList.HambugerOpen />
              </SvgList>
          </Button>
          <Button type="button" onclick={toggleDropdown}
            classname={`justify-end px-4 py-2 text-sm font-medium leading-5 ${!isOpen?'hidden':''}`}>
              <SvgList>
                <SvgList.HambugerClose />
              </SvgList>
          </Button>
        </div>
        <div className={`lg:flex-grow lg:items-center lg:w-auto lg:flex w-full lg:justify-start ${!isOpen?'hidden':''} `}>
          <DropdownList pages={pages}/>
        </div>
      </nav>
    </>
  )
}

export default Navbar