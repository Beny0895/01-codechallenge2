
export default function AboutUs() {
    return (
        <div className="pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="font-serif font-bold text-7xl text-center pb-10">
                    <h1>About Us</h1>
                </div>
                    <div className="flex items-center text-center pt-10 pb-20">
                        <img src="https://swamediainc.storage.googleapis.com/swa.co.id/wp-content/uploads/2022/04/07225506/IMG-20220407-WA0020.jpg" />
                        <p className="font-serif text-2xl text-center pl-8">GoldenState was founded in 2001, and has become an innovation solution in the digital world. From the start, we were driven to create boundaries and create transformative digital experiences. Over the years, we have developed into a trusted partner for businesses looking to thrive in an increasingly digital world. Our journey is characterized by a commitment to excellence, integrity and forward-thinking solutions.</p>
                     </div>
            </div>
                <div className="pt-20 pb-20">
                    <h1 className="font-serif font-light text-5xl text-center">Testimonials</h1>
                </div>

            <div className="flex items-center justify-center min-h-screen container mx-auto">
             {/* grid */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* card */}
                    <div className="card bg-slate-200">
                        <div className="p-5 flex flex-col">
                          <div className="rounded-xl overflow-hidden">
                            <img className="w-44 rounded-full" src="https://i.pinimg.com/originals/ed/ec/53/edec53168e397e0c05681533fc6aebbd.jpg" alt=""/>
                          </div>
                         <h3 className="text-2xl md:text-3xl font-medium mt-3">Bunpen Ferry Chen</h3>
                         <p className="text-slate-500 text-lg mt-3">“Adanya mentor dalam final project sangat membantu! Setelah lulus, tim Purwadhika aktif menawarkan kita posisi yang dibutuhkan hiring partners.”</p>
                        </div>
                    </div>

                      {/* card */}
                      <div className="card bg-slate-200">
                        <div className="p-5 flex flex-col">
                          <div className="rounded-xl overflow-hidden">
                            <img className="w-48 rounded-full" src="https://th.bing.com/th/id/OIP.a_C9v1H7RBbVyFjU4udThgHaKX?rs=1&pid=ImgDetMain" alt=""/>
                          </div>
                         <h3 className="text-2xl md:text-3xl font-medium mt-3">James Anthony jr</h3>
                         <p className="text-slate-500 text-lg mt-3">“Value yang diberikan Purwadhika melebihi ekspektasi saya, terutama dalam hal sistem pembelajaran dan pendampingan, serta koneksi pekerjaan.”</p>
                        </div>
                    </div>

                      {/* card */}
                      <div className="card bg-slate-200">
                        <div className="p-5 flex flex-col">
                          <div className="rounded-xl overflow-hidden">
                            <img className="w-44 rounded-full" src="https://th.bing.com/th/id/OIP.iQW96WXTiz_S821hEUc3AAHaLH?w=500&h=750&rs=1&pid=ImgDetMain" alt=""/>
                          </div>
                         <h3 className="text-2xl md:text-3xl font-medium mt-3">Budi Taniagus</h3>
                         <p className="text-slate-500 text-lg mt-3">“Apa yang dipelajari di kelas tidak jauh berbeda dengan dunia kerja, walau tentunya lebih kompleks, tapi ilmunya sangat berguna.”</p>
                        </div>
                    </div>

                      {/* card */}
                      <div className="card bg-slate-200">
                        <div className="p-5 flex flex-col">
                          <div className="rounded-xl overflow-hidden">
                            <img  className="w-48 rounded-full"src="https://www.dbl.id/uploads/teams/237870Bwkg/14344369g05/143443FP668e023c93c2c.jpeg" alt=""/>
                          </div>
                         <h3 className="text-2xl md:text-3xl font-medium mt-3">Giselle Audrey </h3>
                         <p className="text-slate-500 text-lg mt-3">PCN menurutku sangat membantu, dari PCN aku bisa dapet interview 2x sehari, dan ternyata career network-nya luas banget.”</p>
                        </div>
                    </div>

                      {/* card */}
                      <div className="card bg-slate-200">
                        <div className="p-5 flex flex-col">
                          <div className="rounded-xl overflow-hidden">
                            <img className="w-44 rounded-full" src="https://image.tensorartassets.com/cdn-cgi/image/w=300,q=85/posts/images/629224928318828794/9caa4fe4-305a-4e25-bd53-03208ec98685.jpg" alt=""/>
                          </div>
                         <h3 className="text-2xl md:text-3xl font-medium mt-3">Chelsea Anggelica</h3>
                         <p className="text-slate-500 text-lg mt-3">“Materi yang dipelajarin selama 4 tahun, di rangkum dalam 1 modul. Nggak cuma itu, gue dibantu banget sampe akhirnya dapet kerjaan di Hong Kong. Salut!”</p>
                        </div>
                    </div>

                      {/* card */}
                      <div className="card bg-slate-200">
                        <div className="p-5 flex flex-col">
                          <div className="rounded-xl overflow-hidden">
                            <img className="w-44 rounded-full" src="https://i.pinimg.com/originals/26/ba/53/26ba535e958fc0a036c907f945cebd30.jpg" alt=""/>
                          </div>
                         <h3 className="text-2xl md:text-3xl font-medium mt-3">Donny Wang</h3>
                         <p className="text-slate-500 text-lg mt-3">“Apa yang dipelajari di Purwadhika sangat relevan dengan dunia kerja dan bener-bener kepake yang membawa gue jadi lebih percaya diri dengan bekal yang gue punya dari Purwadhika.”</p>
                        </div>
                    </div>

                </div>
             {/* endgrid */}
             </div>

         </div>    
    )
       
}