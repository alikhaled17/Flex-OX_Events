import React from 'react'
import Image from 'next/image'
import CardStyled from '../StyledComponents/CardStyled'

type BoxProps = {
    children: React.ReactNode;
    event: any;
    id: string;
    size: string;

};

export default function EventCard({event, size, id}:BoxProps) {
    return (
        <CardStyled size={size}>

            {
                event.img &&
                <div className="card-image" >
                    <Image src={`/assets/images/${event.img}`} width={size ? 267 : 169} height={size ? 160 : 104} alt={event.title} />
                </div>
            }
            <div className="card-info">
            
                <span className='ev-date'>{event.date}</span>
                <h3 className='ev-title'>{event.title}</h3>
                <span className='ev-office'>Office: {event.office}</span>
                <span className='ev-type'>{event.type}</span>
            </div>
        </CardStyled>
    )
}
