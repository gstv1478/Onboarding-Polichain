export interface Network {
  id: string
  name: string
  status: 'online' | 'offline' | 'degraded'
  lastBlock: number
  latency?: number
  currency?: string
}

export const NETWORKS: Network[] = [
  {
    id: 'ethereum',
    name: 'Ethereum',
    status: 'online',
    lastBlock: 18453672,
    latency: 142,
    currency: 'ETH'
  },
  {
    id: 'polygon',
    name: 'Polygon',
    status: 'online',
    lastBlock: 42387165,
    latency: 89,
    currency: 'MATIC'
  },
  {
    id: 'solana',
    name: 'Solana',
    status: 'degraded',
    lastBlock: 156432890,
    latency: 324,
    currency: 'SOL'
  },
  {
    id: 'binance',
    name: 'BNB Chain',
    status: 'online',
    lastBlock: 28563410,
    latency: 76,
    currency: 'BNB'
  }
]

export const NETWORK_STATUS_COLORS = {
  online: 'bg-green-500',
  offline: 'bg-red-500',
  degraded: 'bg-yellow-500'
}