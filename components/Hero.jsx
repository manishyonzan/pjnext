import { Button } from "@mui/material"
import Image from "next/image"
const Hero = () => {
    return (
        <div className="flex border border-gray-400 justify-between">
            <div className="w-1/2 text-sm sm:text-md  flex items-center p-1 sm:p-20 " >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero
                doloremque impedit dolores esse obcaecati corrupti neque consequatur
                voluptates molestiae alias, iste sint quam beatae quis temporibus
                corporis adipisci?


            </div>
            <div className="w-1/2 flex justify-center">
                <div>
                    <Image
                        src="/burger1.png"
                        alt="My Image"
                        width={500}
                        height={500} />
                </div>


            </div>
        </div>
    )
}

export default Hero