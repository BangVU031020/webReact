import GlobalStyles from '~/components/GlobalStyles';
import Footer from '../Components/Footer';
function DefaultLayout({ children }) {
    return (
        <GlobalStyles>
            <header>
                <div className="top-navigation">
                    <div className="container">
                        <ul>
                            <li>
                                <a href="mobileswitch?mobile=true">Bản mobile</a>
                            </li>
                            <li>
                                <a href="gioi-thieu-cong-ty">Giới thiệu</a>
                            </li>
                            <li>
                                <a href="san-pham-da-xem">Sản phẩm đ&#227; xem</a>
                            </li>
                            <li>
                                <a href="trung-tam-bao-hanh">Trung t&#226;m bảo h&#224;nh</a>
                            </li>
                            <li>
                                <a href="he-thong-cua-hang">Hệ thống 126 si&#234;u thị</a>
                            </li>
                            <li>
                                <a href="https://tuyendung.hoanghamobile.com/">Tuyển dụng</a>
                            </li>
                            <li>
                                <a href="order/check">Tra cứu đơn h&#224;ng</a>
                            </li>
                            <li>
                                <a id="login-modal" href="Account/Login?ReturnUrl=/">
                                    Đăng nhập
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="container">
                <div className="contemt">{children}</div>
            </div>
            <Footer />
        </GlobalStyles>
    );
}

export default DefaultLayout;
