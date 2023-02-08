import React, { Suspense } from 'react'
// @seo
import { NextSeo } from 'next-seo'
// @three
import { Canvas } from '@react-three/fiber'
import Scene from '@/components/Models/Scene'
//
import MainLayout from '@/layouts/MainLayout'
import PageLoader from '@/components/PageLoader'
//
import type { NextPageWithLayout } from '@/pages/_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title="HOME" />
      <Suspense fallback={<PageLoader />}>
        <Canvas shadows flat linear>
          <Scene />
        </Canvas>
      </Suspense>
    </>
  )
}

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default Home
