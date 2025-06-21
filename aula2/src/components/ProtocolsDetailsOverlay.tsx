import React from 'react'

type Props = {
  protocol: any
  onClose: () => void
}

export default function ProtocolDetailsOverlay({ protocol, onClose }: Props) {
  if (!protocol) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-dark-900 rounded-lg p-8 max-w-md w-full border border-slate-700 relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-2">{protocol.name}</h2>
        <div className="mb-2">
          <b>Categoria:</b> {protocol.category}
        </div>
        <div className="mb-2">
          <b>Auditorias:</b> {protocol.audits}
        </div>
        <div className="mb-2">
          <b>APY Médio:</b> {protocol.apy}%
        </div>
        <div className="mb-2">
          <b>Risco:</b> {protocol.risk}/100
        </div>
        <div className="mb-2">
          <b>Atividade:</b> {protocol.activity} tx/min
        </div>
        <div className="mb-2">
          <b>Integrações:</b> {protocol.integrations?.join(', ')}
        </div>
        {/* Aqui você pode adicionar um gráfico ou mais detalhes */}
      </div>
    </div>
  )
}