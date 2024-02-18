import Image from "next/image";
import ProfileImage from '@/@/public/assets/images/profile.png'

export const Avatar = () => {
    return (
        <><div className="w-screen h-28 hidden sm:flex flex-row content-center justify-center absolute md:top-[5.5rem]">
            <Image className="rounded-xl" src={ProfileImage} alt="Foto de Perfil" priority width={120} />
        </div>
        <div className="sm:hidden w-screen flex flex-row content-center justify-center absolute h-24 top-[3rem]">
                <Image className="rounded-xl" src={ProfileImage} alt="Foto de Perfil" priority width={100} />
        </div></>
    )
}