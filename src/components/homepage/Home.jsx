import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-20">
            <Services></Services>
            </div>
        </div>
    );
};

export default Home;