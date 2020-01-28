import Layout from "../components/Layout";

/*
const Index = () => (
    <Layout>
        Hello World!
    </Layout>
);
*/

const bg1 = {
    backgroundImage: 'url("https://via.placeholder.com/1920x1080.png")',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '900px',
    position: 'relative',
};

const bg2 = {
    backgroundImage: 'url("https://via.placeholder.com/1920x1080/0000FF/808080.png")',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '900px',
    position: 'relative',
};

const bg3 = {
    backgroundImage: 'url("https://via.placeholder.com/1920x1080/FFFF00/000000.png")',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '900px',
    position: 'relative',
};

const textCon = {
    position: 'absolute',
    left: '0',
    top: '50%',
    width: '100%',
    textAlign: 'center',
}

const spanStyle = {
    backgroundColor: '#111111',
    color: '#ffffff',
    padding: '18px',
    fontSize: '25px',
    letterSpacing: '5px',
    display: 'block',
    margin: '18px',
}

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        initParallax();
        parallaxScroll();
    }

    render() {
        return(
            <Layout id="index">
                <div id="index-1" style={bg1}>
                    <div style={textCon}>
                        <span style={spanStyle}>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.</span>
                    </div>
                </div>
                <div id="index-2" style={bg2}>
                    <div style={textCon}>
                        <span style={spanStyle}>And the only way to do great work is to love what you do.</span>
                    </div>
                </div>
                <div id="index-3" style={bg3}>
                    <div style={textCon}>
                        <span style={spanStyle}>If you haven't found it yet, keep looking. Don't settle.</span>
                    </div>                    
                </div>
                <div id="index-4" style={bg1}>
                    <div style={textCon}>
                        <span style={spanStyle}>As with all matters of the heart, you'll know when you find it.<br />- Steve Jobs</span>
                    </div>         
                </div>
            </Layout>
        );
    }    
}

export default Index;