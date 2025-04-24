// /app/restaurant_pages/RestaurantTemplate.tsx
'use client';

import {useEffect} from 'react'

type RestaurantTemplateProps = {
    title: string;
    image: string;
    discount: string;
    description: string;
}

const RestaurantTemplate = ({title, image}: RestaurantTemplateProps) => {

    useEffect (() => {
        document.title = title;
    }, [title]);

    return (
        <div>
            <h1 className = "title">{title}</h1>
            <img src={image} alt="my image"/>
        </div>
    );


}

export default RestaurantTemplate;