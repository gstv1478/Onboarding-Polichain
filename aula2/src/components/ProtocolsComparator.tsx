import React from 'react'

type Protocol = {
  id: number
  name: string
  tvl: number
  apy: number
  risk: number
  audits: number
  activity: number
}

type Props = {
  protocols: Protocol[]
  onRemove: (protocol: Protocol) => void
}

export default function ProtocolsComparator({ protocols, onRemove }: Props) {
  if (protocols.length === 0) return null

  return (
    <div className="mt-8 bg-dark-800 rounded-lg p-4 border border-slate-700 shadow">
      <h4 className="font-bold mb-4 text-primary-teal">Comparação de Protocolos</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              <th className="text-left py-2 px-2"></th>
              {protocols.map((p) => (
                <th key={p.id} className="text-left py-2 px-2">
                  <div className="flex items-center gap-2">
                    <span>{p.name}</span>
                    <button
                      className="text-xs text-red-400 hover:underline"
                      onClick={() => onRemove(p)}
                    >
                      Remover
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-1 px-2 font-medium">TVL</td>
              {protocols.map((p) => (
                <td key={p.id} className="py-1 px-2">
                  ${(p.tvl / 1e9).toFixed(2)}B
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-1 px-2 font-medium">APY Médio</td>
              {protocols.map((p) => (
                <td key={p.id} className="py-1 px-2">
                  {p.apy}%
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-1 px-2 font-medium">Risco</td>
              {protocols.map((p) => (
                <td key={p.id} className="py-1 px-2">
                  {p.risk}/100
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-1 px-2 font-medium">Auditorias</td>
              {protocols.map((p) => (
                <td key={p.id} className="py-1 px-2">
                  {p.audits}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-1 px-2 font-medium">Atividade</td>
              {protocols.map((p) => (
                <td key={p.id} className="py-1 px-2">
                  {p.activity} tx/min
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}