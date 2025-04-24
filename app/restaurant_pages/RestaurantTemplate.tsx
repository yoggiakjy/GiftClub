// /app/restaurant_pages/RestaurantTemplate.tsx
'use client';

import {useEffect} from 'react'

type RestaurantTemplateProps = {
    title: string;
}

const RestaurantTemplate = ({title}: RestaurantTemplateProps) => {

    useEffect (() => {
        document.title = title;
    }, [title]);

    return (
        <div className = "title">
            <h1>{title}</h1>
        </div>
    );


}

export default RestaurantTemplate;