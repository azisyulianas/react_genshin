import { Fragment } from "react/jsx-runtime"
import Navbar from "../Fragments/Navbar"

type Props = {
  children?:React.ReactNode|string
  pages:string
}

const MainLayouts = (props:Props) => {
  const { pages,children } = props
  return (
    <Fragment>
      <Navbar pages={pages} />
      <main className="px-5 pt-3">
        {children}
      </main>
    </Fragment>
  )
}

export default MainLayouts
