import Header from '~/components/Layout/Components/Header';
import Footer from '~/components/Layout/Components/Footer';
import Slidebar from './Slidebar';
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div class="container">
                <Slidebar />
                <div className="contemt">{children}</div>
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
