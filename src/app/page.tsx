import Link from 'next/link'

export default function Home() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold mb-6 text-blockchain-teal">
        Monitor de Redes Blockchain
      </h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Acompanhe em tempo real o status das principais redes
      </p>
      <Link
        href="/networks"
        className="bg-purple-700 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition inline-block"
      >
        Explorar Redes
      </Link>
    </section>
  )
}