import { 
    Cover, 
    Header, 
    FiltersSearch, 
    ProductCard } from "@/components";

export default function Cardapio() {
    return (
        // aqui mudei de h-full pra screen
        <body className='w-full h-full'>
            <section className='w-screen'>
                <Cover />
            </section>
            <div>
                <Header />
                <section className="px-4 lg:px-36">
                    <FiltersSearch />
                    <div className="lg:grid lg:grid-cols-2">
                        <ProductCard />
                        <ProductCard />
                    </div>
                </section>
            </div>
        </body>
    )
}