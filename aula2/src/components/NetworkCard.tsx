interface Network {
  id: string
  name: string
  status: 'online' | 'offline' | 'degraded'
}

export default function NetworkCard({ network }: { network: Network }) {
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-red-500',
    degraded: 'bg-yellow-500'
  }

  return (
    <div className="bg-dark-800 border border-dark-700 rounded-lg p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-white">{network.name}</h3>
        <span className={`${statusColors[network.status]} w-3 h-3 rounded-full`} />
      </div>
      <div className="mt-3">
        <p className="text-dark-200 text-sm">Status:</p>
        <p className="font-medium text-white capitalize">{network.status}</p>
      </div>
    </div>
  )
}