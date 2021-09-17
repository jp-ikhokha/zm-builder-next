import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { BuilderComponent, Builder, builder } from '@builder.io/react'
import builderConfig from '@config/builder'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import { resolveBuilderContent } from '@lib/resolve-builder-content'
import { Link } from '@components/Link/Link'

/* custom builder blocks */
require('../components/CircleLeftMediaRight/CircleLeftMediaRight')
require('../components/SectionCurves/SectionCurve')
require('../components/CircleImageTextBlockCTA/CircleImageTextBlockCTA')
require('../components/RowBreaker/RowBreaker')


import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'

import Navbar from "@components/NavBar/navBar"
import Hamburger from '@components/Hamburger/hamburger'
import SideMenu from "@components/SideMenu/sideMenu"
import { useState } from 'react';

import client from "../apollo-client";
import { GET_MAIN_MENU_LINKS } from 'queries/getMainMenuLinks'


export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ path: string[] }>) {
  
  
  const page = resolveBuilderContent('page', {
    urlPath: '/' + (params?.path?.join('/') || ''),
  })

  const mainMenu: any = client.query({
    query: GET_MAIN_MENU_LINKS,
  });


  const responses = await Promise.all([page, mainMenu])

  return {
    props: {
      page: responses[0],
      mainMenuLinks: responses[1],
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
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
  page, mainMenuLinks
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
        <Navbar />            
      </Header>
      <Hamburger toggleMenu={() => setMenuIsOpen(!menuIsOpen)} menuIsOpen={menuIsOpen} />
      <SideMenu menuIsOpen={menuIsOpen} menuLinks={mainMenuLinks.data.mainMenuLinks} />    
      <BuilderComponent renderLink={Link} model="page" content={page} />      
      <Footer />
    </>
  )
}


//https://barracuda-homely-amaranth.builder.live/