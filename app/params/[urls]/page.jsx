import path from 'path';
import { promises as fs } from 'fs';
import Clickeditem from '@/components/Clickeditem';
export default async function URLS({ params }) {
    const { urls } = params;


    const jsonDirectory = path.join(process.cwd(), 'public');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

    let data = JSON.parse(fileContents);
    let datae = data[urls]


    return (
        <div className='block w-full'> <h1 className='text-4xl text-center'>{urls}</h1>
            <div className='flex justify-around w-full flex-wrap'>
                {datae.map((item) => (
                    <Clickeditem key={item.productname} data={item} />

                ))}
            </div>

        </div >
    )

}