import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from 'next/head'
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css'

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <post_container className={utilStyles.postContainer}>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <h3 className={utilStyles.techBill} style={{background: `var(--${postData.tech.toLowerCase()})`}}>{postData.tech}</h3>
                <br />
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
            </post_container>
        </Layout>
    )
}