interface IItem {
    quantity: number;
    item: string;
}

interface IOther {
    slug: string;
    name: string;
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    }
}

export default interface IProduct {
    id: number;
    slug: string;
    name: string;
    image:{
        mobile: string;
        tablet: string;
        desktop: string;
    }
    category: string;
    categoryImage: {
        mobile: string;
        tablet: string;
        desktop: string;
    }
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: IItem[];
    gallery: {
        first: {
            mobile: string;
            tablet: string;
            desktop: string;
        },
        second: {
            mobile: string;
            tablet: string;
            desktop: string;
        },
        third: {
            mobile: string;
            tablet: string;
            desktop: string;
        }
    }
    others: IOther[];
}