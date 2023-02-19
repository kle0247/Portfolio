import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar  from '../components/Sidebar';
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48">
      <div className="col-span-12 p-4 text-center bg-white rounded-xl lg:col-span-3">
        <Sidebar/>
      </div>
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-9 rounded-xl">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
