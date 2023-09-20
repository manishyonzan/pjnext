import path from 'path';
import { promises as fs } from 'fs';
import Clickeditem from '@/components/Clickeditem';
export default async function WOMEN() {
    


    const jsonDirectory = path.join(process.cwd(), 'public');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

    let data = JSON.parse(fileContents);
    return (
        <div> 
             <div className='flex justify-around'>
                {data.chowmein.map((item) => (

                    <Clickeditem key={item.productname} data={item} />
                ))}
            </div>
            </div>
    )

}