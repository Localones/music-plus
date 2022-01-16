import React from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";

const IdMusic = () => {

    const router = useRouter();

    return (
        <Layout title={router.query.slug}>
            {router.query.slug}
            <p>
                <Link href={'/'}>
                    <a>Go to back</a>
                </Link>
            </p>
        </Layout>
    )
}

export default IdMusic;