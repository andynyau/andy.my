import Head from 'next/head'
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../stylesheets/style.css"

const Layout = props => (
    <div className="Layout">
        <Head>
            <title>Andy.MY - Discover, Learn, Experience and Share</title>
            
            <meta name="viewport" content="width=device-width, height=device-height initial-scale=1.0, user-scalable=no" />
            <meta name="description" content="Andy.MY - Life is about Discovery and Learning - Blog by Andy Nyau" />
            <meta name="author" content="Andy Nyau" />

            <meta property="og:site_name" content="Andy.MY" />
            <meta property="og:url" content="https://andy.my/" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="andy.my" />
            <meta property="og:description" content="Andy.MY - Life of Discover, Learn and Share - Blog by Andy Nyau" />
            <meta property="og:image" content="" />
            <meta property="og:image:width" content="266" />
            <meta property="og:image:height" content="266" />

            <meta name="theme-color" content="#000000" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />

            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
            <link rel="manifest" href="/images/site.webmanifest" />
            <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />

            <link href='https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css' />

            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossOrigin="anonymous"></script>
            <script src="/scripts/core.js"></script>
        </Head>

        <div className="cloud-container"></div>
        <Header />
        <div className="mainContainer">
            <div className="outerContainer">
                <div className="innerContainer">
                    <div className="content">
                        {props.children}
                    </div>
                    <Sidebar />
                </div>
            </div>
        </div>
        <Footer />

    </div>
);

export default Layout;