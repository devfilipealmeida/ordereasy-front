'use client'

import Image from "next/image";
import Pizza from '@/@/public/assets/images/pizza.png'
import { useState } from "react";
import { ProductModal } from "../ProductModal";

export const ProductCard = () => {
    const [open, setOpen] = useState(false)

    const updateModalState = (newState: boolean) => {
        setOpen(newState);
    };

    return (
        <>
            <div
                onClick={() => setOpen(true)}
                className="
                flex flex-row 
                lg:w-full border-[1px] 
                bg-white
                border-solid rounded-lg 
                px-4 py-2 hover:border-black hover:border-[1px]
                justify-self-center mb-2
        ">
                <div>
                    <p className="font-bold text-base text-gray-letters-title mt-3">Pizza Especial de Calabresa</p>
                    <p className="text-sm text-gray-letters-paragraph mt-2">Filé de peito frango - queijo - ovo - presunto de peru - alface - tomate - cebola</p>
                    <p className="mt-2 font-semibold text-base text-green-800 mb-3">R$ 20,00</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image className="rounded-xl ml-1" src={Pizza} alt="Foto do Produto" priority width={200} />
                </div>
            </div>
            <ProductModal open={open} updateModalState={updateModalState} />
        </>
    )
}