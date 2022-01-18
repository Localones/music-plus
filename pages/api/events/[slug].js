import {events} from './data.json';
import {useRouter} from "next/router";
import React from "react";


export default (req, res) => {

    const evt = events.filter(ev => ev.slug === req.query.slug)

    if (req.method === 'GET') {
        res.status(200).json(evt)
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({message: `Method ${req.method} is not allowed`})
    }

    const router = useRouter();

    return (
        <div>
            {router.query.slug}
        </div>
    )


}