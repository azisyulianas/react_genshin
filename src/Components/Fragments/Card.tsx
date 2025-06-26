

const Card = () => {
  return (
    <div className="w-full my-2 max-w-sm bg-teal-500 border border-teal-600 rounded-lg shadow mx-2 flex flex-col justify-between">
      <a href="#" className="flex justify-center">
        <img 
          src="https://static.wikia.nocookie.net/gensin-impact/images/5/51/Kamisato_Ayaka_Icon.png"
          alt="Ayaka"
          className="p-8 rounded-t-lg"
        />
      </a>
      <div className="px-5 pb-5 h-full">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            Kamisato Ayaka 
          </h5>
          <p className="text-m text-white">
            Daughter of the Yashiro Commission's Kamisato Clan
          </p>
        </a>
      </div>
    </div>
  )
}

type Props = {
  children:React.ReactNode|string
}

const Header = (props:Props) => {
  const { children } = props
  return (
    <div className="flex justify-center">
      {children}
    </div>
  )
}

const Body = (props:Props) => {
  const { children } = props
  return (
    <div>
      {children}
    </div>
  )
}

const Footer = (props:Props) => {
  const { children } = props
  return (
    <div>
      {children}
    </div>
  )
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card