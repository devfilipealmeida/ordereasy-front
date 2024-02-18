import Image from "next/image";
import CoverImage from '@/@/public/assets/images/cover.png'
import { Avatar } from "..";



export const Cover = () => {
    return (
        <div className="flex md:h-52 h-[9.3rem] w-screen">
            <div className="flex md:h-36 h-24 w-screen">
                <Image src={CoverImage} alt="Foto de Capa" priority />
            </div>
            <Avatar />
        </div>
    )
}