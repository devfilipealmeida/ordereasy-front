export const Header = () => {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-base font-bold">PIZZARIA DO NOAH</h1>
                <p className="text-xs font-normal mt-1">Hambúrguer Artesanal e pizza artesanal com borda recheada.</p>
                <button className="mt-1 font-bold text-green-600 border-gray-500 border-solid border-[1px] rounded-xl py-[0.3125rem] px-[1.25rem]" >Aberto</button>
                <div className="mt-4 w-screen h-16 grid grid-cols-3">
                    <div className="bg-green-700 flex flex-col justify-center items-center">
                        <p className="text-white font-semibold text-xs mb-[2px]">Pedido Mínimo</p>
                        <p className="text-white font-semibold text-xs mt-[2px]">R$ 10,00</p>
                    </div>
                    <div className="bg-green-800 flex flex-col justify-center items-center">
                        <p className="text-white font-semibold text-xs mb-[2px]">Tempo de espera</p>
                        <p className="text-white font-semibold text-xs mt-[2px]">30/40 Minutos</p>
                    </div>
                    <div className="bg-green-700 flex flex-col justify-center items-center">
                        <p className="text-white font-semibold text-xs mb-[2px]">Telefone</p>
                        <p className="text-white font-semibold text-xs mt-[2px]">92 9 8484-1110</p>
                    </div>
                </div>
            </div>
        </div>
    )
}