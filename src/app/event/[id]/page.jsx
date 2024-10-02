"use client"
import { useRouter } from 'next/navigation';

export default function DynamicPage ({ params }) {

    const { id } = params;

    return (
        <div>
            <h1>This is {id} page</h1>
        </div>
    );
};