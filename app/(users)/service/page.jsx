import style from "./service.module.css"
const Service = () => {
  return (
    <>
      <h1 className={style.common_heading}>Hello Service!!</h1>
      <section>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Team</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">Sumit</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">Sumit Technical</h3>
              <p className="text-sm text-gray-600 text-center mt-2">Frontend Developer</p>
              <p className="text-xs text-gray-500 text-center mt-1">React & Typescript</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">Samhita</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">Samhita Technical</h3>
              <p className="text-sm text-gray-600 text-center mt-2">Frontend Developer</p>
              <p className="text-xs text-gray-500 text-center mt-1">React & Typescript</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">Rai</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">Rai Technical</h3>
              <p className="text-sm text-gray-600 text-center mt-2">Frontend Developer</p>
              <p className="text-xs text-gray-500 text-center mt-1">React & Typescript</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">Amit</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">Amit Technical</h3>
              <p className="text-sm text-gray-600 text-center mt-2">Frontend Developer</p>
              <p className="text-xs text-gray-500 text-center mt-1">React & Typescript</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};
export default Service;