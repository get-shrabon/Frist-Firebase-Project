import { Helmet } from "react-helmet-async";
import Banner from "./Banner";


const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Simple Firebase | Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default HomePage;