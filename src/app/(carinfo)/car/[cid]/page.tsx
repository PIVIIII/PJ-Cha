import Image from "next/image"
import getCar from "@/libs/getCar"
import Link from "next/link"

export default async function CarDetailPage( {params} : { params : {cid:string} } ) {
    const carDetail = await getCar(params.cid)

    return (
        <main className="text-center p-2">
            <h1 className="text-lg mt-10 text-3xl font-serif  ">{carDetail.data.model}</h1>
            <div className="mx-auto my-5 w-[30%] p-2 rounded-lg bg-white flex flex-col">
                <div className="relative w-full h-60">
                    <Image
                    src={carDetail.data.picture}
                    alt='Car Image'
                    layout='fill'
                    objectFit='cover'
                    />
                </div>
                <div className="bg-yellow-300 text-lg text-center font-serif py-2"> Description </div>   
                <div className="text-md bg-yellow-100 font-mono py-3 ">{ carDetail.data.description }
                        <div className="text-md ">Doors: { carDetail.data.doors }</div>
                        <div className="text-md ">Seats: { carDetail.data.seats }</div>
                        <div className="text-md ">Large Bags: { carDetail.data.largebags }</div>
                        <div className="text-md ">Small Bags{ carDetail.data.smallbags }</div>
                        <div className="text-md ">Daily Rental Rate: { carDetail.data.dayRate }</div>
                </div>          
            </div>
                
            <div className='flex items-center justify-center h-full'>
                <Link href={`/reservations?id=${params.cid}&model=${carDetail.data.model}`}>
                    <button className="block rounded-md bg-rose-300 hover:bg-indigo-200 px-3 py-2
                    shadow-sm text-white">
                        Make Reservation
                    </button>
                </Link>
            </div>

        </main>
    )
}


export async function generateStaticParams() {
    return [{cid:'001'},{cid:'002'},{cid:'003'},{cid:'004'}]
}