export default function Programs() {
    return(
        <div className="pt-10 pb-10">
                <div className="text-center">
                     <h1 className="font-serif font-bold text-7xl">Programs</h1>
                </div>

                <div className="flex items-center justify-center min-h-screen container mx-auto">
                 {/* grid */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                     {/* card */}
                    <div className="card text-center">
                        <div className="p-5 flex flex-col">
                          <div className="rounded-xl overflow-hidden">
                            <img className="rounded-lg 2-96"src="https://th.bing.com/th/id/OIP.N4f-FxC7cZC7isyY8DFYbAHaE7?rs=1&pid=ImgDetMain" alt=""/>
                          </div>
                            <h3 className="text-2xl md:text-3xl mt-3 font-serif font-bold ">Software Development</h3>
                            <p className="text-black text-lg mt-3 font-serif ">Fast-track program to learn and start a career in coding with a lifetime work connection facility</p>
                            <div className="bg-green-600 text-white hover:text-black rounded-lg hover:bg-green-400 pt-5 pb-5 pl-5 pr-5">
                            <button className=" font-serif font-1xl font-bold ">Contact Us</button>
                            </div>
                        </div>
                    </div>

                    {/* card */}
                    <div className="card text-center">
                        <div className="p-5 flex flex-col">
                          <div className="rounded-xl overflow-hidden">
                            <img className="rounded-lg w-96"src="https://th.bing.com/th/id/R.5298291dcf99cd72c9444a2d4699e30b?rik=Rr5OUXVDuUEdmw&riu=http%3a%2f%2flite16.com%2fblog%2fwp-content%2fuploads%2f2021%2f07%2fdigital-marketing-4111002_1920-min.jpg&ehk=5LWIMswahzq2Y1E2HktnQEmylq%2fyx7qMdFWdRdjC3jY%3d&risl=&pid=ImgRaw&r=0" alt=""/>
                          </div>
                            <h3 className="text-2xl md:text-3xl mt-3 font-serif font-bold ">Digital Marketing</h3>
                            <p className="text-black text-lg mt-3 font-serif ">Fast-track program to learn and career as a digital marketer with a lifetime of work connection facility</p>
                            <div className="bg-green-600 text-white hover:text-black rounded-lg hover:bg-green-400 pt-5 pb-5 pl-5 pr-5">
                            <button className=" font-serif font-1xl font-bold ">Contact Us</button>
                            </div>
                        </div>
                    </div>

                    {/* card */}
                    <div className="card text-center">
                        <div className="p-5 flex flex-col">
                          <div className="rounded-xl overflow-hidden">
                            <img className="rounded-lg w-96"src="https://www.udacity.com/blog/wp-content/uploads/2020/07/Data-Engineer_Blog-scaled.jpeg" alt=""/>
                          </div>
                            <h3 className="text-2xl md:text-3xl mt-3 font-serif font-bold ">Data Engineering</h3>
                            <p className="text-black text-lg mt-3 font-serif ">Fast-track program to learn and start a career in coding with a lifetime work connection facility</p>
                            <div className="bg-green-600 text-white hover:text-black rounded-lg hover:bg-green-400 pt-5 pb-5 pl-5 pr-5">
                            <button className=" font-serif font-1xl font-bold ">Contact Us</button>
                            </div>
                        </div>
                    </div>

                 </div>
                </div>


         </div>
    )
}