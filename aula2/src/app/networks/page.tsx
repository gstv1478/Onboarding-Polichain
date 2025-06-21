import NetworkCard from '@/components/NetworkCard'
import { NETWORKS } from '@/lib/constants'

export default function NetworksPage() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-8 text-blockchain-teal border-b border-dark-card pb-2">
        Status das Redes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {NETWORKS.map(network => (
          <NetworkCard 
            key={network.id} 
            network={network} 
          />
        ))}
      </div>
    </div>
  )
}