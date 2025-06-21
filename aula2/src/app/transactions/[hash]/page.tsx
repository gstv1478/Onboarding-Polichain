'use client'

import { useParams } from 'next/navigation'

export default function TransactionDetailPage() {
  const { hash } = useParams()

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-6">🔎 Detalhes da Transação</h1>
      <div className="bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
        <p><strong>Hash:</strong> {hash}</p>
        <p><strong>De:</strong> 0x1234...abcd</p>
        <p><strong>Para:</strong> 0xabcd...4321</p>
        <p><strong>Valor:</strong> 2.5 ETH</p>
        <p><strong>Gas usado:</strong> 21000</p>
        <p><strong>Status:</strong> ✅ Confirmada</p>
        <p><strong>Bloco:</strong> 18453672</p>
        <p><strong>Timestamp:</strong> 10/05 14:32 UTC</p>
      </div>
    </section>
  )
}
