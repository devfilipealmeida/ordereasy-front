import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import Pizza from '@/@/public/assets/images/pizza.png'

export const ProductContent = () => {
    return (
        <section className='px-3'>
            <div className="bg-gray-300 mt-3 p-1">
                <p className="font-bold text-base text-slate-800">Escolha os sabores</p>
                <p className="font-bold text-sm text-slate-600 mb-2">Escolha até 2 opções</p>
            </div>
            <div className="mt-4">
                <div className="flex flex-row justify-between">
                    <p className="text-sm font-normal text-slate-700">Portuguesa</p>
                    <PlusCircleIcon width={25} height={25} color='#15803D' />
                </div>
                <div className="border-b border-gray-300 border-solid mt-3">
                    {/* Linha */}
                </div>
            </div>
            <div className="mt-4">
                <div className="flex flex-row justify-between">
                    <p className="text-sm font-normal text-slate-700">4 Queijos</p>
                    <PlusCircleIcon width={25} height={25} color='#15803D' />
                </div>
                <div className="border-b border-gray-300 border-solid mt-3">
                    {/* Linha */}
                </div>
            </div>
            <div className="mt-4">
                <div className="flex flex-row justify-between">
                    <p className="text-sm font-normal text-slate-700">Mussarela</p>
                    <PlusCircleIcon width={25} height={25} color='#15803D' />
                </div>
            </div>
            <div className="bg-gray-300 mt-3 p-1">
                <p className="font-bold text-base text-slate-800 mb-2">Escolha o tamanho *</p>
            </div>
            <div className="mt-4">
                <div className="flex flex-row justify-between">
                    <p className="text-sm font-normal text-slate-700">Pequena</p>
                    <PlusCircleIcon width={25} height={25} color='#15803D' />
                </div>
                <div className="border-b border-gray-300 border-solid mt-3">
                    {/* Linha */}
                </div>
            </div>
            <div className="mt-4">
                <div className="flex flex-row justify-between">
                    <p className="text-sm font-normal text-slate-700">Média</p>
                    <PlusCircleIcon width={25} height={25} color='#15803D' />
                </div>
                <div className="border-b border-gray-300 border-solid mt-3">
                    {/* Linha */}
                </div>
            </div>
            <div className="mt-4">
                <div className="flex flex-row justify-between">
                    <p className="text-sm font-normal text-slate-700">Grande</p>
                    <PlusCircleIcon width={25} height={25} color='#15803D' />
                </div>
            </div>
            <div className="mt-4">
                <div className="flex justify-center items-center">
                    <Image src={Pizza} alt='pizza' width={200} height={200} className='rounded-lg' />
                </div>
                <p className="font-bold text-base text-slate-600">Pizza Especial de Calabresa</p>
                <p className="text-sm text-slate-600">Filé de peito frango - queijo - ovo - presunto de peru - alface - tomate - cebola</p>
            </div>
        </section>
    )
}