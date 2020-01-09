import Layout from "../components/Layout";

/*
const Index = () => (
    <Layout>
        Hello World!
    </Layout>
);
*/

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        initParallax();
        parallaxScroll();
        resizeSidebar();
    }

    render() {
        return(
            <Layout>
                Hello World!
            </Layout>
        );
    }
}

export default Index;