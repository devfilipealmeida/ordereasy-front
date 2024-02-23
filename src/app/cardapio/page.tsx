import {
    Cover,
    Header,
    FiltersSearch,
    ProductCard
} from "@/components";
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Cardapio() {

    return (
        // aqui mudei de h-full pra screen
        <body className='w-full h-full bg-bg-gray-main'>
            <section className='w-screen'>
                <Cover />
            </section>
            <div>
                <Header />
                <section>
                    <div className="px-4 lg:px-32">
                        <FiltersSearch />
                    </div>
                    <div>
                    <div className="border-b border-gray-main border-solid mt-3">
                        {/* Linha */}
                    </div>
                    <div className="mt-10 px-4 lg:px-32">
                        <div className="w-full flex flex-row items-center mb-4 justify-start">
                        <ChevronRightIcon width={30} height={30} className="text-green-800  stroke-[0.25rem]"/>
                        <p className="font-bold text-base">Pizza</p>
                        </div>
                        <div className="lg:grid lg:grid-cols-2 gap-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        </body>
    )
}