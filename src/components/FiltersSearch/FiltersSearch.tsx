import { Tag } from "../Tag"
import { SearchBar } from "./SearchBar"

export const FiltersSearch = () => {
    return (
        <div className="mt-4 mb-3">
            <Tag category={"Massas e Pizzas"} />
            <Tag category={"Hamburguer"} />
            <Tag category={"Combos"} />
            <SearchBar />
        </div>
    )
}