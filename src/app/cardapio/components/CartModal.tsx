'use client'

import { Modal } from "@/components"

export const CartModal = () => {
    return (<Modal 
        title="Meu Pedido"
        open={true}
        updateModalState={() => {}}
        content={
            <section className="px-3">Produtos</section>
        }
        footerContent={
            <div className="px-3">Footer</div>
        }
    />)
}