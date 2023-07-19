import GlobalStyles from '~/components/GlobalStyles';
import Header from '~/components/Layout/Components/Header';
import Footer from '../Components/Footer';
function DefaultLayout({ children }) {
    return (
        <GlobalStyles>
            <Header />
            <div class="container">
                <div className="contemt">{children}</div>
            </div>
            <Footer />
        </GlobalStyles>
    );
}

export default DefaultLayout;
