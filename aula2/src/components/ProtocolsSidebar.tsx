import React from 'react'

type Props = {
  onFilterChange: (filters: any) => void
}

export default function ProtocolsSidebar({ onFilterChange }: Props) {
  // Exemplo de filtro por categoria
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ category: e.target.value })
  }

  return (
    <aside className="w-64 bg-dark-800 rounded-lg p-4 border border-slate-700 h-fit">
      <h4 className="font-bold mb-4 text-primary-teal">Filtros</h4>
      <div className="mb-4">
        <label className="block mb-1 text-sm">Categoria</label>
        <select
          className="w-full rounded bg-dark-900 border border-slate-600 p-2 text-sm"
          onChange={handleCategoryChange}
        >
          <option value="">Todas</option>
          <option value="Lending">Lending</option>
          <option value="DEX">DEX</option>
          <option value="Derivatives">Derivatives</option>
        </select>
      </div>
      {/* Adicione mais filtros conforme necessário */}
    </aside>
  )
}