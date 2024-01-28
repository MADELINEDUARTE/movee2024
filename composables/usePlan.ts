export interface Plan {
    id: number;
    nombre: string;
    key:string;
    backgroundColor: string;

}
const planes = {
    data: reactive<Plan[]>([
        {
            id: 1, 
            nombre: 'Basic',
            key: 'basico',
            backgroundColor: '#00B982',
        },
        {
            id: 2, 
            nombre: 'Medium',
            key: 'medio',

            backgroundColor: '#FF3300',
        },
        {
            id: 3, 
            nombre: 'Premium',
            key: 'premium',
            backgroundColor: '#FF9900',
        },
    ])
}

export const usePlan = () => {
    return { planes  }
}