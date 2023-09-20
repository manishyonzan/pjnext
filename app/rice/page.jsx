import path from 'path';
import { promises as fs } from 'fs';
import Clickeditem from '@/components/Clickeditem';
export default async function MEN() {



    const jsonDirectory = path.join(process.cwd(), 'public');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

    let data = JSON.parse(fileContents);
    return (
        <div>
            <h1 className='text-4xl text-center m-2'>Rice and Noodles</h1>
            <div className='flex justify-around flex-wrap'>
                {data.rice.map((item) => (

                    <Clickeditem key={item.productname} data={item} />
                ))}
            </div>

        </div>
    )

}