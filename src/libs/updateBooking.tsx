import { UpdateItem } from "../../interfaces"

export default async function updateBooking(id:string, token:string, formData:UpdateItem) {
    const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`, {
        next: {tags:['bookings']},
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization:`Bearer ${token}`
        },
        body: JSON.stringify(formData)
    })
    if(!response.ok) {
        throw new Error("Failed to update booking")
    }
    return await response.json()
}