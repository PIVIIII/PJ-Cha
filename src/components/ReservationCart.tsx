"use client"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeReservation } from "@/redux/features/cartSlice"

export default function ReservationCart() {
    const carItems = useAppSelector( (state)=> state.cartSlice.carItems )
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        {
            carItems.map((reservationsItem)=>(
                <div className="bg-slate-300 rounded px-5 mx-5 py-2 my-2"
                key={reservationsItem.carId}>
                    <div className="text-xl">{reservationsItem.carModel}</div>
                    <div className="text-sm">Pick-up {reservationsItem.pickupDate}
                     from {reservationsItem.pickupLocation}
                    </div>
                    <div className="text-sm">Return {reservationsItem.returnDate}
                     from {reservationsItem.returnLocation}
                    </div>
                    <div className="text-md">Duration: {reservationsItem.numOfDays}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                    shadow-sm text-white" onClick={ ()=> dispatch(removeReservation(reservationsItem))}>
                    Remove from Cart
                    </button>
                </div>
            ))
        }
        </>
    )
}