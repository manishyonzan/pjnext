import Image from "next/image"
import Clickeditem from "./Clickeditem"

const Topsales = () => {
    const data = [
        {
          "productname": "Soft drinks",
          "price": 5.99,
          "imagename": "coke.jpg",
          "description": "This is a description of top Product 1.",
          "category": "Kids"
        },
        {
          "productname": "Lassi",
          "price": 8.99,
          "imagename": "lassi.jpg",
          "description": "ja sjsjs sjsjsjs sjsjsjsjjs sjsjj jsj",
          "category": "Kids"
        },
        {
            "productname": "Vegetables Salads",
            "price": 5.99,
            "imagename": "vegetables.jpg",
            "description": "This is a description of top Product 3.",
            "category": "Kids"
          },
          {
            "productname": "Dry Nuts",
            "price": 8.99,
            "imagename": "drynuts.jpg",
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