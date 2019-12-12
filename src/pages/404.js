import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/ui/layout/PageLayout'
import { Container } from 'theme-ui'
import { Header, Footer } from '../components/ui'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Ups.. Salah kamar 404" />
    <Header />
    <Container style={{ marginTop: 100, minHeight: '50vh' }}>
      <h2>Ups.. Salah kamar 404</h2>
    </Container>
    <Footer />s
  </Layout>
)

export default NotFoundPage
