import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'modern-normalize/modern-normalize.css';

import { builder } from '@builder.io/react'
import builderConfig from '@config/builder'
builder.init(builderConfig.apiKey)

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}