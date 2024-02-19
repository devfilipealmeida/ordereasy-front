import Image from "next/image";
import Pizza from '@/@/public/assets/images/pizza.png'

export const ProductCard = () => {
    return (
        <div className="
            flex flex-row 
            lg:w-[30rem] border-[2px] 
            border-solid rounded-xl 
            px-4 py-2 hover:border-black hover:border-[1px]">
            <div>
                <p className="font-bold text-base">Pizza Especial de Calabresa</p>
                <p className="text-sm">Filé de peito frango - queijo - ovo - presunto de peru - alface - tomate - cebola</p>
                <p className="mt-1 font-semibold text-base text-green-800">R$ 20,00</p>
            </div>
            <div className="flex flex-col items-center justify-center">
            <Image className="rounded-xl ml-1" src={Pizza} alt="Foto do Produto" priority width={200} />
            </div>
        </div>
    )
}