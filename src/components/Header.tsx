import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-dark-card py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold text-blockchain-purple">
          ChainMonitor
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            href="/networks" 
            className="hover:text-blockchain-teal transition-colors"
          >
            Redes
          </Link>
        </nav>
      </div>
    </header>
  )
}