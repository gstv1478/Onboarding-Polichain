'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function TransactionsPage() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<any[]>([])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Simula uma busca (mock)
    if (search.length === 4 && search.startsWith('0x')) {
      setResults([
        {
          hash: search,
          blockNumber: 18453672,
          from: '0x1234...abcd',
          to: '0xabcd...4321',
          value: '2.5 ETH',
        },
      ])
    } else {
      alert('Hash inválido. Um hash de transação Ethereum começa com 0x e tem 66 caracteres.')
      setResults([])
    }
  }

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        🔍 Buscar Transações
      </h1>
      <form onSubmit={handleSearch} className="flex justify-center mb-12">
        <input
          type="text"
          placeholder="Digite o hash da transação"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-2xl px-6 py-3 rounded-l-lg border border-slate-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button
          type="submit"
          className="bg-purple-700 text-white px-6 py-3 rounded-r-lg hover:bg-purple-800 transition"
        >
          Buscar
        </button>
      </form>

      {results.length > 0 && (
        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-white space-y-4">
          <h2 className="text-lg font-semibold">Resultados:</h2>
          {results.map((tx) => (
            <div
              key={tx.hash}
              className="border border-gray-700 p-4 rounded hover:bg-gray-700 transition"
            >
              <p><strong>Hash:</strong> <span className="font-mono">{tx.hash.slice(0, 16)}...</span></p>
              <p><strong>Bloco:</strong> {tx.blockNumber}</p>
              <p><strong>De:</strong> {tx.from}</p>
              <p><strong>Para:</strong> {tx.to}</p>
              <p><strong>Valor:</strong> {tx.value}</p>

              <div className="text-right mt-2">
                <Link
                  href={`/transactions/${tx.hash}`}
                  className="text-purple-400 hover:underline text-sm"
                >
                  Ver detalhes →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
