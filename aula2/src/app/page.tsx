'use client'

import { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
export default function Home() {
  const [search, setSearch] = useState('')
  const [showResult, setShowResult] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você poderia validar ou filtrar o termo
    if (search.toLowerCase() === 'ethereum') {
      setShowResult(true)
    } else {
      alert('Blockchain não encontrada. Tente "Ethereum".')
      setShowResult(false)
    }
  }

  const tpsData = [
    { hour: '00h', tps: 13 },
    { hour: '03h', tps: 14 },
    { hour: '06h', tps: 12 },
    { hour: '09h', tps: 15 },
    { hour: '12h', tps: 16 },
    { hour: '15h', tps: 14.8 },
    { hour: '18h', tps: 15.2 },
    { hour: '21h', tps: 15 },
    { hour: '24h', tps: 14.7 },
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blockchain-teal text-center">
        Monitor de Redes Blockchain
      </h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-center">
        Acompanhe em tempo real o status das principais redes
      </p>

      {/* Formulário de busca */}
      <form onSubmit={handleSearch} className="flex justify-center mb-12">
        <input
          type="text"
          placeholder="Buscar blockchain (ex: Ethereum)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-6 py-3 rounded-l-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button
          type="submit"
          className="bg-purple-700 text-white px-6 py-3 rounded-r-lg hover:bg-purple-800 transition"
        >
          Buscar
        </button>
      </form>

      {/* Exibir resultado apenas se showResult for true */}
      {showResult && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-200 mb-12">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h2 className="font-semibold text-lg mb-2">
                ⬤ Ethereum - <span className="text-green-400">Online</span>
              </h2>
              <p><strong>Bloco:</strong> 18,453,672</p>
              <p><strong>Latência:</strong> 142ms</p>
              <p><strong>TPS:</strong> 15.2</p>
              <h2 className="font-semibold text-lg my-2">ℹ️ Informações</h2>
              <div className="space-y-1">
                <p className="flex items-center">
                  <span className="w-24 inline-block">Nós Ativos:</span> 
                  <span className="font-mono bg-green-100 text-green-800 px-2 py-1 rounded">
                    🟢 1,428
                  </span>
                </p>
                <p className="flex items-center">
                  <span className="w-24 inline-block">Versão SW:</span>
                  <span className="font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    v1.12.3-stable
                  </span>
                </p>
                <p className="flex items-center">
                  <span className="w-24 inline-block">Uptime:</span>
                  <span className="font-mono bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    99.98% (30d)
                  </span>
                </p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md text-white">
              <h2 className="font-semibold text-lg mb-4">📈 Histórico de TPS</h2>
              <p className="mb-4 text-sm text-gray-400">Últimas 24 horas</p>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={tpsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="hour" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                    labelStyle={{ color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Line type="monotone" dataKey="tps" stroke="#4ade80" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-center">🧱 Tabela de Últimos Blocos</h2>
            <div className="overflow-auto">
              <table className="min-w-full text-sm text-left border border-gray-600">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="p-2 border border-gray-600">Bloco</th>
                    <th className="p-2 border border-gray-600">Timestamp</th>
                    <th className="p-2 border border-gray-600">Transações</th>
                    <th className="p-2 border border-gray-600">Minerador</th>
                    <th className="p-2 border border-gray-600">Tamanho</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-gray-700">18453..</td>
                    <td className="p-2 border border-gray-700">10/05 14:32:12 UTC</td>
                    <td className="p-2 border border-gray-700">217</td>
                    <td className="p-2 border border-gray-700">0x3f5a...7d1e</td>
                    <td className="p-2 border border-gray-700">1.2MB</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-gray-700">18452..</td>
                    <td className="p-2 border border-gray-700">10/05 14:31:58 UTC</td>
                    <td className="p-2 border border-gray-700">198</td>
                    <td className="p-2 border border-gray-700">0xae12...4b2f</td>
                    <td className="p-2 border border-gray-700">1.1MB</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
                Carregar mais
              </button>
            </div>
          </div>

        </>
      )}
    </section>
  )
}