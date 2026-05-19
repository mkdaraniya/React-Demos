import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Github() {
    const { followers } = useParams();
    const data = useLoaderData();

    return (
        <div className="text-center text-2xl sm:text-5xl py-10 font-medium">
            Github Followers : {data ? data.followers : 'Loading...'}
            <div className="grid place-items-center mt-10">
                <img className="w-48 rounded-full" src={data ? data.avatar_url : 'https://i.ibb.co/2M7rtLk/Remote1.png'} alt="avatar" />
            </div>
        </div>
    );
}

export const githubLoader = async ({ params }) => {
    const response = await fetch(`https://api.github.com/users/mkdaraniya`);
    return response.json();
}