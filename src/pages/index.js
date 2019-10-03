import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const cheerio = require('cheerio')
const axios = require('axios')


const IndexPage = () => {



    axios.get('http://www.icoi.net/prayer-times-2/').then((response) => {
            console.log(response.data)
    })
    return (
        <Layout>
            <SEO title="Home" />
            <h1>Sara Lashnuk Fan  Club</h1>
            <p>Welcome to the club!</p>
            <p>Please excuse our mess!</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
)
}

export default IndexPage
