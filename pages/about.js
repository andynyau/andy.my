import Layout from "../components/Layout";

/*
const About = () => (
    <Layout>
        This is About Page
    </Layout>
);
*/

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        initParallax();
        parallaxScroll();
    }

    render() {
        return(
            <Layout id="about">
                This is About Page
            </Layout>
        );
    }
}

export default About;