export const Tag = ({category}: {category: string}) => {
    return (
        <div className="
            inline-flex 
            items-center 
            bg-gray-200 
            text-gray-letters-title
            rounded-full 
            px-3 py-1 text-sm 
            font-semibold mr-2"
        >
            <span>{category}</span>
        </div>
    )
}