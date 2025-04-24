// /app/restaurant_pages/RestaurantTemplate.tsx
'use client';

import {useEffect} from 'react'

type RestaurantTemplateProps = {
    title: string;
    image: string;
    discount: string;
    description: string;
}

const RestaurantTemplate = ({title}: RestaurantTemplateProps) => {

    useEffect (() => {
        document.title = title;
    }, [title]);

    return (
        <div>
            <h1 className = "title">{title}</h1>
        </div>
    );


}

export default RestaurantTemplate;