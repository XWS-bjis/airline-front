import { Flight } from "../../flight/model/flight";

export interface Reservations {
    id?: string;
    flightId: string;
    userId: string | null;
    ticketAmount: number;
    totalTicketPrice?: number;
    flight?: Flight;
}