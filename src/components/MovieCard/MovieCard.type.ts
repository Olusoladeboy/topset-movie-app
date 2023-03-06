import { AppProps } from "../../interfaces/general.interface";

export type MovieCardProps = AppProps & {
    movie: MovieInterface;
}

export interface MovieInterface {
    id?: string;
    _id?: string;
    imageUrl: string;
    description: string;
    title: string;
    price: string;
}