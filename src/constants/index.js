export default categories = [
    {
        id: 1,
        name: 'Saúde',
        image: require('../assets/images/heartbeat_2791163.png'),
    },
    {
        id: 2,
        name: 'Medicamentos',
        image: require('../assets/images/medicine_647237.png'),
    },
    {
        id: 3,
        name: 'Vitaminas',
        image: require('../assets/images/vitamina-d.png'),
    },
    {
        id: 4,
        name: 'Beleza',
        image: require('../assets/images/beauty-saloon.png'),
    },
    {
        id: 5,
        name: 'Dermocosméticos',
        image: require('../assets/images/rolo-facial.png'),
    },
]


export const featured = {
    id: 1,
    title: "Melhores Farmácias",
    description: "O melhor para você e sua familia",
    pharmacys: [
        {
            id: 1,
            name: 'FarmaSil',
            image: require('../assets/images/drogasil.jpg'),
            description: 'Gente que cuida de gente',
            lng: 38.12,
            lat: -85,
            address: 'Av. Afonso Pena, 2940',
            stars: 4,
            reviews: '2.3k',
            category: "Farmácia",
            medicines: [
                {
                    id: 1,
                    name: 'Medicamentos',
                    description: 'Remedios em geral',
                    price: 12,
                    image: require('../assets/images/kitadol.jpg')
                },
                {
                    id: 2,
                    name: 'Antibioticos',
                    description: 'Antibioticos controlados',
                    price: '20-300',
                    image: require('../assets/images/agemoxi.webp')
                },
                {
                    id: 3,
                    name: 'Vitaminas',
                    description: 'Remedios em geral',
                    price: 20,
                    image: require('../assets/images/vitamina-d.png')
                },
            ]

        },
        {
            id: 2,
            name: 'Drogaria Sao Pedro',
            image: require('../assets/images/sao_pedro_drogaria.jpg'),
            description: 'Preço baixo de verdade, todo dia',
            lng: 38.12,
            lat: -85,
            address: 'Rua Marechal Rondon, 2172',
            stars: 4,
            reviews: '2.3k',
            category: "Farmácia",
            medicines: [
                {
                    id: 1,
                    name: 'Medicamentos',
                    description: 'Remedios em geral',
                    price: 12,
                    image: '../assets/images/medicine_647237.png'
                },
                {
                    id: 2,
                    name: 'Antibioticos',
                    description: 'Antibioticos controlados',
                    price: '20 - 400',
                    image: '../assets/images/antibiotic.png'
                },
                {
                    id: 3,
                    name: 'Vitaminas',
                    description: 'Remedios em geral',
                    price: 20,
                    image: '../assets/images/vitamina-d.png'
                },
            ]

        },
        {
            id: 3,
            name: 'DrogaFarma',
            image: require('../assets/images/freire.jpg'),
            description: 'Fique bem, na Freire tem!',
            lng: 38.12,
            lat: -85,
            address: 'Av. Afonso Pena, 2940',
            stars: 4,
            reviews: '2.3k',
            category: "Farmácia",
            medicines: [
                {
                    id: 1,
                    name: 'Medicamentos',
                    description: 'Remedios em geral',
                    price: 12,
                    image: '../assets/images/medicine_647237.png'
                },
                {
                    id: 2,
                    name: 'Antibioticos',
                    description: 'Antibioticos controlados',
                    price: 20-400,
                    image: '../assets/images/antibiotic.png'
                },
                {
                    id: 3,
                    name: 'Vitaminas',
                    description: 'Remedios em geral',
                    price: 20,
                    image: '../assets/images/vitamina-d.png'
                },
            ]

        },
    ],
       
}