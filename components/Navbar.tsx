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
        <Link href="/" className="flex items-center gap-1">
          <p>
            Contact<span className='text-primary'>US</span>
          </p>
        </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar