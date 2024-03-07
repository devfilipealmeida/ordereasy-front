import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { CartModal } from './CartModal'

export const CartBar = () => {
    return (
        <div className="
            w-full flex flex-row 
            px-28 bg-green-800 
            fixed bottom-0 h-12 
            justify-between items-center"
        >
            <div className='flex'>
                <ShoppingCartIcon 
                    width={28} 
                    height={28} 
                    color='white' 
                />
                <div className='
                    flex items-center justify-center 
                    fixed left-[8.2rem] bottom-[1.60rem] 
                    bg-white rounded-full text-xs w-4'
                >
                    <p className='text-black font-bold'>1</p>
                </div>
            </div>
            <div className='flex'>
                <p className='font-bold text-white'>Fechar Pedido</p>
            </div>
            <div className='flex'>
                <p className='font-bold text-white'>R$ 25,00</p>
            </div>
            <CartModal />
        </div>
    )
}