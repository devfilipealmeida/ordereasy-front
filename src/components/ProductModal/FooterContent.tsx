import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'

export const FooterContent = () => {
    return (
        <div className='bg-gray-1'>
            <div className="mt-6 border-b border-gray-400 border-solid shadow-2xl">
                {/* Linha */}
            </div>
            <div className='py-2 px-4'>
                <p className="font-normal text-base text-slate-500">Observações</p>
                <textarea
                    className="text-black text-sm mb-2 mt-2 border border-gray-300 rounded-md p-2 h-24 w-full resize-none outline-none"
                    readOnly
                />
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row items-center'>
                        <MinusCircleIcon width={30} height={30} color='red' className='mr-2' /><p className='text-base'>1</p><PlusCircleIcon width={30} height={30} color='#15803D' className='ml-2' />
                    </div>
                    <button
                        className="px-4 py-2 bg-green-700 text-base text-white font-semibold rounded-md focus:outline-none hover:bg-green-700"
                    >
                        Adicionar R$ 20,00
                    </button>
                </div>
            </div>
        </div>
    )
}