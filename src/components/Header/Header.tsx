export const Header = () => {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-base font-bold">PIZZARIA DO NOAH</h1>
                <p className="text-xs font-normal mt-1">Hambúrguer Artesanal e pizza artesanal com borda recheada.</p>
                <button className="mt-1 font-bold text-green-600 border-gray-500 border-solid border-[1px] rounded-xl py-[0.3125rem] px-[1.25rem]" >Aberto</button>
                <div className="mt-4 w-screen h-16 grid grid-cols-3">
                    <div className="bg-green-700 flex flex-col justify-center items-center">
                        <p className="text-white font-semibold text-sm mb-[2px]">Taxa de entrega</p>
                        <button className="border-white border-solid border-[1px] rounded-xl text-white px-2 py-1 mt-[2px] text-xs">Calcular</button>
                    </div>
                    <div className="bg-green-800 flex flex-col justify-center items-center">
                        <p className="text-white font-semibold text-sm mb-[2px]">Tempo de espera</p>
                        <button className="border-white border-solid border-[1px] rounded-xl text-white px-2 py-1 mt-[2px] text-xs">Calcular</button>
                    </div>
                    <div className="bg-green-700 flex flex-col justify-center items-center">
                        <p className="text-white font-semibold text-sm mb-[2px]">Telefone</p>
                        <button className="border-white border-solid border-[1px] rounded-xl text-white px-2 py-1 mt-[2px] text-xs">WhatsApp</button>
                    </div>
                </div>
            </div>
        </div>
    )
}