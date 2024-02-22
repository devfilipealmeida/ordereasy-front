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
                lg:w-full border-[2px] 
                border-solid rounded-lg 
                px-4 py-2 hover:border-black hover:border-[1px]
                justify-self-center mb-2
        ">
                <div>
                    <p className="font-bold text-base">Pizza Especial de Calabresa</p>
                    <p className="text-sm">Filé de peito frango - queijo - ovo - presunto de peru - alface - tomate - cebola</p>
                    <p className="mt-1 font-semibold text-base text-green-800">R$ 20,00</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image className="rounded-xl ml-1" src={Pizza} alt="Foto do Produto" priority width={200} />
                </div>
            </div>
            <ProductModal open={open} updateModalState={updateModalState} />
        </>
    )
}