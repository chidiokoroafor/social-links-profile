
import avatar from './assets/images/avatar-jessica.jpeg'

const socialLinks = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
]

function App() {

  return (
    <main className='bg-dgray-900 w-full min-h-screen flex justify-center items-center font-sans'>

      <section className="w-[90%] max-w-[330px] bg-dgray-800 py-5 px-8 rounded-xl ">
        <div className='flex justify-center items-center'>
           <div className='w-16 h-16 rounded-full overflow-hidden '>
            <img className='w-full block' src={avatar} alt="" />
          </div>
        </div>
       
        <div className='text-center mt-5'>
          <h2 className='text-white text-lg'>Jessica Randall</h2>
          <p className='text-dgreen text-xs mb-4 mt-2'>London, United Kingdom</p>
          <p className='text-gray-400 text-xs'>"Front-end developer and avid reader."</p>
        </div>
        <div className='mt-5'>
          {socialLinks.map((soc,i) => {
            return (
              <a className='text-white bg-dgray-700 mb-3 text-xs text-center py-3 rounded-lg cursor-pointer block hover:bg-dgreen hover:text-dgray-900' key={i}>{soc} </a>
            )
          })}
        </div>
      </section>
      
    </main>
  )
}

export default App
