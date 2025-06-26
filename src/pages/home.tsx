import MainLayouts from "../Components/Layouts/MainLayouts"

const Home = () => {
  return (
    <MainLayouts pages="home">
      <div className="w-3/4 flex flex-wrap">
        <div className="w-full my-2 max-w-sm bg-teal-500 border border-teal-600 rounded-lg shadow mx-2 flex flex-col justify-between">
          <a href="#" className="flex justify-center">
            <img 
              src="https://static.wikia.nocookie.net/gensin-impact/images/e/e6/Furina_Icon.png"
              alt="Furina"
              className="p-8 rounded-t-lg"
            />
          </a>
          <div className="px-5 pb-5 h-full">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-white">
                Furina 
              </h5>
              <p className="text-m text-white">
                Regina of All Waters, Kindreds, Peoples and Laws
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/4">
      
      </div>
    </MainLayouts>
  )
}

export default Home