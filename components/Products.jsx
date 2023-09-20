import Link from "next/link"
import Image from "next/image"
export default function Products() {
    return (
        <div>
            <div className="flex  justify-center border border-gray-400">
                <div className="p-3">
                    <Link href="/params/momo">
                        <h2>Momos Item</h2>
                        <Image
                            src="/chickenmomo.jpg"
                            alt="My Image"
                            width="400"
                            height="400"
                        />
                        <h5>See more</h5>
                    </Link>
                </div>
                <div className="p-3 ">
                    <Link href="/burger">
                        <h2>Burger item</h2>
                        <Image
                            src="/burgerchicken.jpg"
                            alt="My Image"
                            width="300"
                            height="600"
                        />
                        <h5>See more</h5>
                    </Link>
                </div>
                <div className="p-3">
                    <Link href="/chowmein">
                        <h2>Chowmein</h2>
                        <Image
                            src="/buffchowmein.jpg"
                            alt="My Image"
                            width="250"
                            height="250"
                        />
                        <h5>See more</h5>
                    </Link>
                </div>
                <div className="p-3">
                    <Link href="/rice">
                        <h2>Rice and Noodles</h2>
                        <Image
                            src="/biryani.jpg"
                            alt="My Image"
                            width="230"
                            height="220"
                        />
                        <h5>See more</h5>
                    </Link>
                </div>
            </div>
            <div className="flex  justify-around p-5 border border-gray-400">
                <div className="p-3">
                    <Link href="/params/beer">
                        <h2>Beer</h2>
                        <Image
                            src="/tuborg.jpg"
                            alt="My Image"
                            width="200"
                            height="420"
                        />
                        <h5>See more</h5>
                    </Link>
                </div>
                <div className="p-3">
                    <Link href="/params/domesticsprits">
                        <h2>Domestic sprits</h2>
                        <Image
                            src="/mtvodka.jpg"
                            alt="My Image"
                            width="240"
                            height="400"
                        />
                        <h5>See more</h5>
                    </Link>
                </div>
                <div className="p-3">
                    <Link href="/params/soup">
                        <h2>Soup Items</h2>
                        <Image
                            src="/mushroom.jpg"
                            alt="My Image"
                            width="200"
                            height="300"
                        />
                        <h5>See more</h5>
                    </Link>
                </div>
                <div className="p-3">
                    <Link href="/params/soup">
                        <h2>Hookah Item</h2>
                        <Image
                            src="/hukka.jpg"
                            alt="My Image"
                            width="200"
                            height="300"
                        />
                        <h5>See more</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}