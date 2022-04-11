export const FAKE_PRODUCT_DATA_MAIN = [
    {
        img: 'https://imgur.com/uPAULhB',
        name: 'Бетон',
        slug: 'beton',
        subCategories: [
            {
                name: 'имя подкатегории',
                slug: 'subCategory'
            }
        ],
        products: [
            {
                id: 3,
                mark: "M100",
                class: "B7,5",
                name: "B15 П4 F150 W4 (бетон)",
                price: '4 250',
                slug: 'product',
                urlIMG: "https://imgur.com/uPAULhB",
                contents: "...Характеристики..."
            },
            {
                id: 4,
                mark: "M101",
                class: "B7,5",
                name: "B15 П4 F150 W4 (бетон)",
                price: '4 250',
                slug: 'product',
                urlIMG: "https://imgur.com/uPAULhB",
                contents: "...Характеристики..."
            }
        ]
    },
    {
        img: 'https://imgur.com/uPAULhB',
        name: 'Сыпучие материалы',
        slug: 'sipuchi-materiali',
        products: [
            {
                id: 5,
                mark: "M100",
                class: "B7,5",
                name: "Сыпучий материал",
                price: '4 250',
                slug: 'product',
                urlIMG: "https://imgur.com/uPAULhB",
                contents: "...Характеристики..."
            }
        ]
    },
    {
        img: 'https://imgur.com/uPAULhB',
        name: 'Арматуры',
        slug: 'armaturi',
        products: [
            {
                id: 5,
                mark: "M100",
                class: "B7,5",
                name: "Армататра",
                price: '4 250',
                slug: 'product',
                urlIMG: "https://imgur.com/uPAULhB",
                contents: "...Характеристики..."
            }
        ]
    }
];
export const FAKE_PRODUCT_DATA = {
    img: 'https://imgur.com/uPAULhB',
    name: 'Бетон',
    slug: 'beton',
    allCategories: [
        {name: 'Бетон', slug: 'beton'},
        {name: 'Сыпучие материалы', slug: 'sipuchi-materiali'},
        {name: 'Арматуры', slug: 'armaturi'},
    ],
    subCategories: [
        {
            name: 'имя подкатегории 1',
            slug: 'subCategory',
            products: []
        },
        {
            name: 'имя подкатегории 2',
            slug: 'subCategory2',
            products: [
                {
                    id: 3,
                    mark: "M100",
                    class: "B7,5",
                    name: "B15 П4 F150 W4 (бетон)",
                    price: '4 250',
                    link: 'product1',
                    urlIMG: "https://imgur.com/uPAULhB",
                    contents: "...Характеристики..."
                }
            ]
        }
    ],
    products: [
        {
            id: 3,
            mark: "M100",
            class: "B7,5",
            name: "B15 П4 F150 W4 (бетон)",
            price: '4 250',
            link: 'product1',
            urlIMG: "https://imgur.com/uPAULhB",
            contents: "...Характеристики..."
        },
        {
            id: 4,
            mark: "M101",
            class: "B7,5",
            name: "B15 П4 F150 W4 (бетон)",
            price: '4 250',
            link: 'product1',
            urlIMG: "https://imgur.com/uPAULhB",
            contents: "...Характеристики..."
        }
    ]
}

export const REAL_FAKE_DATA = [
    {
        "type": "Товарный бетон",
        "typeSlug": "бетон",
        "countProducts": 3,
        "categories": [
            {
                "category": "БЕТОН НА ГРАВИЙНОМ ЩЕБНЕ",
                "categorySlug": "гравийный",
                "countProducts": 3,
                "products": [
                    {
                        "name": "Бетон М100 B7,5 F100 W4 (Гравий)",
                        "price": 3300,
                        "contents": {
                            "Наполнитель": "Гравий",
                            "Подвижность": "П4",
                            "Класс бетона": "В7,5",
                            "Плотность (кг/м^3)": "2265",
                            "Морозостойкость, F": "F100",
                            "Средняя прочность": "125",
                            "Водонепроницаемость": "W4"
                        },
                        "urlIMG": "https://imgur.com/6vlKMyZ",
                        "description": ""
                    },
                    {
                        "name": "Бетон М150 B12,5 F100 W4 (Гравий)",
                        "price": 3300,
                        "contents": {
                            "Наполнитель": "Гравий",
                            "Подвижность": "П1, П2, П3, П4, П5",
                            "Класс бетона": "B10/12,5",
                            "Плотность (кг/м^3)": "2265",
                            "Морозостойкость, F": "F100",
                            "Средняя прочность": "125",
                            "Водонепроницаемость": "W4"
                        },
                        "urlIMG": "https://imgur.com/6bg43cj",
                        "description": ""
                    },
                    {
                        "name": "Бетон М200 B15 F150 W4 (Гравий)",
                        "price": 3500,
                        "contents": {
                            "Наполнитель": "Гравий",
                            "Подвижность": "П1, П2, П3, П4, П5",
                            "Класс бетона": "B15",
                            "Плотность (кг/м^3)": "2330",
                            "Морозостойкость, F": "F100",
                            "Средняя прочность": "196",
                            "Водонепроницаемость": "W4"
                        },
                        "urlIMG": "https://imgur.com/uPAULhB",
                        "description": ""
                    }
                ]
            },
            {
                "category": "БЕТОН НА ГРАВИЙНОМ ЩЕБНЕ",
                "categorySlug": "гравийный",
                "countProducts": 3,
                "products": [
                    {
                        "name": "Бетон М100 B7,5 F100 W4 (Гравий)",
                        "price": 3300,
                        "contents": {
                            "Наполнитель": "Гравий",
                            "Подвижность": "П4",
                            "Класс бетона": "В7,5",
                            "Плотность (кг/м^3)": "2265",
                            "Морозостойкость, F": "F100",
                            "Средняя прочность": "125",
                            "Водонепроницаемость": "W4"
                        },
                        "urlIMG": "https://imgur.com/6vlKMyZ",
                        "description": ""
                    },
                    {
                        "name": "Бетон М150 B12,5 F100 W4 (Гравий)",
                        "price": 3300,
                        "contents": {
                            "Наполнитель": "Гравий",
                            "Подвижность": "П1, П2, П3, П4, П5",
                            "Класс бетона": "B10/12,5",
                            "Плотность (кг/м^3)": "2265",
                            "Морозостойкость, F": "F100",
                            "Средняя прочность": "125",
                            "Водонепроницаемость": "W4"
                        },
                        "urlIMG": "https://imgur.com/6bg43cj",
                        "description": ""
                    },
                    {
                        "name": "Бетон М200 B15 F150 W4 (Гравий)",
                        "price": 3500,
                        "contents": {
                            "Наполнитель": "Гравий",
                            "Подвижность": "П1, П2, П3, П4, П5",
                            "Класс бетона": "B15",
                            "Плотность (кг/м^3)": "2330",
                            "Морозостойкость, F": "F100",
                            "Средняя прочность": "196",
                            "Водонепроницаемость": "W4"
                        },
                        "urlIMG": "https://imgur.com/uPAULhB",
                        "description": ""
                    }
                ]
            }
        ],
        "products": [
            {
                "name": "Бетон М100 B7,5 F100 W4 (Гравий)",
                "price": 3300,
                "contents": {
                    "Наполнитель": "Гравий",
                    "Подвижность": "П4",
                    "Класс бетона": "В7,5",
                    "Плотность (кг/м^3)": "2265",
                    "Морозостойкость, F": "F100",
                    "Средняя прочность": "125",
                    "Водонепроницаемость": "W4"
                },
                "urlIMG": "https://imgur.com/6vlKMyZ",
                "description": ""
            },
            {
                "name": "Бетон М150 B12,5 F100 W4 (Гравий)",
                "price": 3300,
                "contents": {
                    "Наполнитель": "Гравий",
                    "Подвижность": "П1, П2, П3, П4, П5",
                    "Класс бетона": "B10/12,5",
                    "Плотность (кг/м^3)": "2265",
                    "Морозостойкость, F": "F100",
                    "Средняя прочность": "125",
                    "Водонепроницаемость": "W4"
                },
                "urlIMG": "https://imgur.com/6bg43cj",
                "description": ""
            },
            {
                "name": "Бетон М200 B15 F150 W4 (Гравий)",
                "price": 3500,
                "contents": {
                    "Наполнитель": "Гравий",
                    "Подвижность": "П1, П2, П3, П4, П5",
                    "Класс бетона": "B15",
                    "Плотность (кг/м^3)": "2330",
                    "Морозостойкость, F": "F100",
                    "Средняя прочность": "196",
                    "Водонепроницаемость": "W4"
                },
                "urlIMG": "https://imgur.com/uPAULhB",
                "description": ""
            }
        ]
    }
]