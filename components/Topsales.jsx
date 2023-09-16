import Image from "next/image"
import Clickeditem from "./Clickeditem"

const Topsales = () => {
    const data = [
        {
          "productname": "top Product 1",
          "price": 5.99,
          "imagename": "product.png",
          "description": "This is a description of top Product 1.",
          "category": "Kids"
        },
        {
          "productname": "Kid's Product 2",
          "price": 8.99,
          "imagename": "product.png",
          "description": "jajsj",
          "category": "Kids"
        },
        {
            "productname": "top Product 3",
            "price": 5.99,
            "imagename": "product.png",
            "description": "This is a description of top Product 3.",
            "category": "Kids"
          },
          {
            "productname": "Kid's Product 2",
            "price": 8.99,
            "imagename": "product.png",
            "description": "jajsj top product 4",
            "category": "Kids"
          }
      ]
    return (
        <div>
            <div className="m-4">
                <h1>Topsales</h1>
            </div>
            <div className="flex  justify-center border border-gray-400">
                
                    {data.map((item) => (

                        <Clickeditem key={item.productname} data={item} />
                        
                    ))}
                
            </div>
        </div>
    )
}

export default Topsales