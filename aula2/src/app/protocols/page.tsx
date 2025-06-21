'use client'

import { useState } from 'react'
import ProtocolsSidebar from '@/components/ProtocolsSidebar'
import ProtocolDetailsOverlay from '@/components/ProtocolsDetailsOverlay'
import ProtocolsComparator from '@/components/ProtocolsComparator'

// Exemplo de dados mockados
const MOCK_PROTOCOLS = [
  {
    id: 1,
    name: 'Aave V3',
    category: 'Lending',
    tvl: 5200000000,
    apy: 4.8,
    risk: 23,
    audits: 4,
    integrations: ['Uniswap', 'Chainlink', 'Lido'],
    activity: 120,
  },
  {
    id: 2,
    name: 'Uniswap',
    category: 'DEX',
    tvl: 3800000000,
    apy: 2.1,
    risk: 35,
    audits: 3,
    integrations: ['Aave', 'Chainlink'],
    activity: 200,
  },
  // ...adicione mais protocolos conforme necessário
]

export default function ProtocolsPage() {
  const [selectedProtocol, setSelectedProtocol] = useState<any>(null)
  const [showDetails, setShowDetails] = useState(false)
  const [compareProtocols, setCompareProtocols] = useState<any[]>([])
  const [filteredProtocols, setFilteredProtocols] = useState(MOCK_PROTOCOLS)

  // Handler para clicar em um protocolo
  const handleProtocolClick = (protocol: any) => {
    setSelectedProtocol(protocol)
    setShowDetails(true)
  }

  // Handler para adicionar/remover protocolos para comparação
  const handleCompare = (protocol: any) => {
    setCompareProtocols((prev) => {
      if (prev.find((p) => p.id === protocol.id)) {
        return prev.filter((p) => p.id !== protocol.id)
      }
      if (prev.length < 2) {
        return [...prev, protocol]
      }
      return prev
    })
  }

  // Handler para filtros (exemplo: por categoria)
  const handleFilterChange = (filters: any) => {
    // Implemente a lógica de filtro conforme necessário
    setFilteredProtocols(
      MOCK_PROTOCOLS.filter((p) =>
        !filters.category || p.category === filters.category
      )
    )
  }

  return (
    <div className="flex gap-6">
      {/* Painel lateral de filtros e categorias */}
      <ProtocolsSidebar onFilterChange={handleFilterChange} />

      {/* Lista de protocolos */}
      <div className="flex-1 min-h-[600px] relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProtocols.map((protocol) => (
            <div
              key={protocol.id}
              className="bg-dark-card rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer border border-slate-700"
              onClick={() => handleProtocolClick(protocol)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{protocol.name}</h3>
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    protocol.category === 'Lending'
                      ? 'bg-green-900 text-green-300'
                      : protocol.category === 'DEX'
                      ? 'bg-blue-900 text-blue-300'
                      : 'bg-yellow-900 text-yellow-300'
                  }`}
                >
                  {protocol.category}
                </span>
              </div>
              <div className="mt-2 flex flex-col gap-1 text-sm">
                <span>
                  <b>TVL:</b> ${(protocol.tvl / 1e9).toFixed(2)}B
                </span>
                <span>
                  <b>APY Médio:</b> {protocol.apy}%
                </span>
                <span>
                  <b>Risco:</b>{' '}
                  <span
                    className={`font-bold ${
                      protocol.risk < 30
                        ? 'text-green-400'
                        : protocol.risk < 60
                        ? 'text-yellow-400'
                        : 'text-red-400'
                    }`}
                  >
                    {protocol.risk}/100
                  </span>
                </span>
                <span>
                  <b>Auditorias:</b> {protocol.audits}
                </span>
                <span>
                  <b>Atividade:</b> {protocol.activity} tx/min
                </span>
              </div>
              <button
                className={`mt-3 px-3 py-1 rounded bg-primary-teal text-white text-xs font-semibold hover:bg-teal-700 transition ${
                  compareProtocols.find((p) => p.id === protocol.id)
                    ? 'opacity-70'
                    : ''
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleCompare(protocol)
                }}
                disabled={
                  compareProtocols.length === 2 &&
                  !compareProtocols.find((p) => p.id === protocol.id)
                }
              >
                {compareProtocols.find((p) => p.id === protocol.id)
                  ? 'Remover da comparação'
                  : compareProtocols.length < 2
                  ? 'Comparar'
                  : 'Limite: 2'}
              </button>
            </div>
          ))}
        </div>

        {/* Zona de comparação */}
        <ProtocolsComparator
          protocols={compareProtocols}
          onRemove={handleCompare}
        />
      </div>

      {/* Overlay de detalhes do protocolo */}
      {showDetails && selectedProtocol && (
        <ProtocolDetailsOverlay
          protocol={selectedProtocol}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  )
}