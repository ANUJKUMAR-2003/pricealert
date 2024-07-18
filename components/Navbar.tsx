import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />

          <p className="nav-logo">
            Price<span className='text-primary'>Alert</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
        <button className="bg-red-500 text-white block w-full rounded-sm p-2" onClick={() => window.location.href = 'https://github.com/ANUJKUMAR-2003/-do-chat'}>
            Github Code Here
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar