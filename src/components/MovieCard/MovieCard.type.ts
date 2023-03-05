import { AppProps } from "../../interfaces/general.interface";

export type MovieCardProps = AppProps & {
    movie: MovieInterface;
}

export interface MovieInterface {
    id: string;
    imageUrl: string;
    title: string;
}