import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

export const SearchBar = () => {
  return (
    <div className="mt-2 relative">
      <input
        placeholder="Buscar produtos por nome ou descrição"
        type="search"
        className="text-xs p-2 pr-10 block w-full border border-gray-300 focus:outline-none focus:border-green-800 focus:shadow-2xl"
      />
      <XMarkIcon className="absolute right-12 top-1.5 text-gray-400 pointer-events-none stroke-[0.25rem]" width={20} height={20} />
      <MagnifyingGlassIcon className="absolute right-2 top-1.5 text-gray-400 pointer-events-none" width={20} height={20} />
    </div>
  )
}