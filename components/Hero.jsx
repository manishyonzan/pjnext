import { Button } from "@mui/material"
import Image from "next/image"
const Hero = () => {
    return (
        <div className="flex border border-gray-400 justify-between">
            <div className="w-1/3 flex items-center p-20 border border-green-200" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero
                doloremque impedit dolores esse obcaecati corrupti neque consequatur
                voluptates molestiae alias, iste sint quam beatae quis temporibus
                corporis adipisci?


            </div>
            <div className="w-1/2 md:w-1/3 flex">
                <div>
                    <Image
                        src="/men-women.png"
                        alt="My Image"
                        width={500}
                        height={500} />
                </div>


            </div>
        </div>
    )
}

export default Hero