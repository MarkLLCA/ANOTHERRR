import Head from "next/head";

{/*FONT IMPORTS */}
import { Geologica } from "next/font/google";

const geologica = Geologica({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geologica",
});


export default function Home() {
  return (
    <>
      <Head>
        <title>IIIIIIIIIIIIIIIIIII</title>
      </Head>
      <main className="flex flex-col min-h-screen bg-white justify-center items-center py-10">
        <div className="bg-red-900 w-80 h-120 rounded-2xl shadow-2xl items-center">
          <div className={`${geologica.variable} m-10` }>
            <div className="bg-orange-600 mt-25 mb-5 flex justify-center items-center">
              <span className="text-white font-geologica">L</span>
              <span className="text-green-600 font-geologica">O</span>
              <span className="text-red-600 font-geologica">G</span>
              <span className="text-purple-800 font-geologica">O</span>
            </div>
            <form action="">
              <span className="text-white">Username:</span>
              <div className="mb-7">
                <input type="text" placeholder="Username" className="border border-black/15 bg-white rounded-2xl w-60" />
              </div>
              <span className="text-white">Password:</span>
              <div className="text-white mb-7">
                <input type="text" placeholder="Password" className="bg-white black border-black rounded-2xl w-60" />
              </div>
              <div className="bg-amber-400">
                <button className="">awdawd</button>
              </div>
            </form>
            <h4 className="pt-1">Don't have account? <a href="" className="">Register?</a></h4>
          </div>
        </div>































        {/*<div className={`${geologica.variable}`} style={{ backgroundColor: 'rgb(227, 212, 185)' }}>
          <div className="py-7 items-center min-h-screen bg-white">

            <div className="flex justify-between bg-transparent pt-55 pl-13 lg:pl-25s">
              <div className="grid col-start bg-transparent pb-0">
                <h1 className="font-bold font-geologica text-gray-800 text-4xl">SorSU</h1>
                <h2 className=" font-bold font-geologica text-gray-800 text-4xl">Online Library System</h2>
              </div>
            </div>
            <div className="bg-transparent mt-8 ml-13 mr-100">
              <Link href={"/items"} className="bg-red-900 text-white py-2 px-10 rounded-full hover:px-12 transition-all hover:duration-100 active:opacity-50 font-geologica">Browse</Link></div>
          </div>  
        </div>
        <div>
        </div>*/}
      </main>
    </>
  );
}
