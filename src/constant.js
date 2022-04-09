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
                urlIMG: "https://imgur.com/uPAULhB",
                contents: "...Характеристики..."
            },
            {
                id: 4,
                mark: "M101",
                class: "B7,5",
                name: "B15 П4 F150 W4 (бетон)",
                price: '4 250',
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
            slug: 'subCategory'
        },
        {
            name: 'имя подкатегории 2',
            slug: 'subCategory2'
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