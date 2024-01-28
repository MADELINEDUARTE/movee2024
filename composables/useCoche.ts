export interface Coche {
    id: number;
    marca: string;
    modelo: string;
    imagen: string;
    config: {
        pasajeros: string;
        puertas: string;
        basico: number,
        medio: number,
        premium: number
    };
    status: boolean;
    disponible: number;
}

const coches = {
    data: reactive<Coche[]>([])
}

export const useCoche = () => {
    return { coches  }
}