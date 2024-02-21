import {
    Cover,
    Header,
    FiltersSearch,
    ProductCard
} from "@/components";

export default function Cardapio() {
    return (
        // aqui mudei de h-full pra screen
        <body className='w-full h-full'>
            <section className='w-screen'>
                <Cover />
            </section>
            <div>
                <Header />
                <section>
                    <div className="px-4 lg:px-32">
                        <FiltersSearch />
                    </div>
                    <div className="border-b border-gray-200 border-solid border-2">
                        {/* Linha */}
                    </div>
                    <div className="mt-6 px-4 lg:px-32 lg:grid lg:grid-cols-2 gap-2">
                        <ProductCard />
                        <ProductCard />
                    </div>
                </section>
            </div>
        </body>
    )
}