type Props = {
  children:React.ReactNode|string
  classname?:string
}

const List = (props:Props) => {
  const {children, classname=""} = props
  return (
    <li className={classname}>{children}</li>
  )
}

export default List