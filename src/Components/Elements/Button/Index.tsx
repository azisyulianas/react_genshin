type Props = {
  children?:React.ReactNode|string
  classname?:string
  type: "button"|"reset"|"submit"
  onclick?:React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props:Props)=> {
  const { children, classname, type, onclick } = props
  return (
    <button type={type} className={classname} onClick={onclick}>
      {children}
    </button>
  )
}

export default Button