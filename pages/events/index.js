import Layout from "../../components/Layout";
import React from 'react';
import {useRouter} from "next/router";


function IndexPage() {

    const router = useRouter();

    if (router.isFallback){
        return <div>Loading...</div>
    }

    return (
        <Layout title='Index'>
            IndexPage
        </Layout>
    )
}

export default IndexPage;


