import React from 'react';

import ListingCard from './ListingCard';
import './ListingPage.css'

function ListingPage(){
    const data = [
        {
            title:'Project Plan',
            description:'There are many variations of the passages of lorem Ipsum from available, majority.'
        },
        {
            title:'Interior Work',
            description:'There are many variations of the passages of lorem Ipsum from available, majority.'
        },
        {
            title:'Realization',
            description:'There are many variations of the passages of lorem Ipsum from available, majority.'
        }
    ]
    return <div className='project_plans'>
        {
            data.map(columns => {
                return <ListingCard title={columns.title} description={columns.description}/>
            })
        }
        </div>
}
export default ListingPage