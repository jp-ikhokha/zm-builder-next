import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { BuilderComponent, Builder, builder } from '@builder.io/react'
import builderConfig from '@config/builder'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import { resolveBuilderContent } from '@lib/resolve-builder-content'
import { Link } from '@components/Link/Link'

import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'

import Navbar from "@components/NavBar/navBar"
import SideMenu from "@components/SideMenu/sideMenu"
import { useState } from 'react';


export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ path: string[] }>) {
  const page = await resolveBuilderContent('page', {
    urlPath: '/' + (params?.path?.join('/') || ''),
  })

  return {
    props: {
      page,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: true,
  }
}

export async function getStaticPaths() {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
    apiKey: builderConfig.apiKey,
  })

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  }
}

export default function Path({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  const isLive = !Builder.isEditing && !Builder.isPreviewing
  if (!page && isLive) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
          <meta name="title"></meta>
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  }

  const { title, description, image } = page?.data! || {}
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: 'website',
          title,
          description,
          images: [
            {
              url: image,
              width: 800,
              height: 600,
              alt: title,
            },
          ],
        }}
      />
      <Header>
            <Navbar toggleMenu={() => setMenuIsOpen(!menuIsOpen)} menuIsOpen={menuIsOpen} />
            <SideMenu menuIsOpen={menuIsOpen}/>
      </Header>       
      <BuilderComponent renderLink={Link} model="page" content={page} />
      <Footer />
    </>
  )
}


//https://barracuda-homely-amaranth.builder.live/