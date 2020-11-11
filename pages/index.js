import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey I'm Alex. Full stack developer, lifelong learner and vegan. Follow me on{' '}<a href="https://twitter.com/alexcurtisslep">Twitter</a>.</p>
      </section>
    </Layout>
  )
}