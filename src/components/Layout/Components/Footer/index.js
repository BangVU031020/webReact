import GlobalStyles from '~/components/GlobalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <GlobalStyles>
            <footer>
                <div className="container">
                    <div className="bg">
                        <div className="col-content">
                            <div className="link-content">
                                <h4>
                                    <a>Hỗ Trợ - Dịch Vụ</a>
                                </h4>
                                <ul>
                                    <li>
                                        <a href="mua-hang-tra-gop">Mua h&#224;ng trả g&#243;p</a>
                                    </li>
                                    <li>
                                        <a href="huong-dan-dat-hang">Hướng dẫn đặt h&#224;ng v&#224; thanh to&#225;n</a>
                                    </li>
                                    <li>
                                        <a href="order/check">Tra cứu đơn h&#224;ng</a>
                                    </li>
                                    <li>
                                        <a href="chinh-sach-bao-hanh">Ch&#237;nh s&#225;ch bảo h&#224;nh</a>
                                    </li>
                                    <li>
                                        <a href="dat-hang/bao-hanh-mo-rong">
                                            Phạm vi, điều khoản g&#243;i bảo h&#224;nh mở rộng
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chinh-sach-bao-mat">Ch&#237;nh s&#225;ch bảo mật</a>
                                    </li>
                                    <li>
                                        <a href="chinh-sach-giai-quyet-khieu-nai">
                                            Ch&#237;nh s&#225;ch giải quyết khiếu nại
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dieu-khoan-mua-ban-hang-hoa">
                                            Điều khoản mua b&#225;n h&#224;ng h&#243;a
                                        </a>
                                    </li>
                                    <li>
                                        <a href="cau-hoi-thuong-gap">C&#226;u hỏi thường gặp</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="link-content">
                                <h4>
                                    <a>Th&#244;ng Tin Li&#234;n Hệ</a>
                                </h4>
                                <ul>
                                    <li>
                                        <a href="mua-hang-online">B&#225;n h&#224;ng Online</a>
                                    </li>
                                    <li>
                                        <a href="cham-soc-khach-hang">Chăm s&#243;c Kh&#225;ch H&#224;ng</a>
                                    </li>
                                    <li>
                                        <a href="ho-tro-ki-thuat">Hỗ Trợ Kỹ thuật</a>
                                    </li>
                                    <li>
                                        <a href="dich-vu-sua-chua">Hỗ trợ Bảo h&#224;nh &amp; Sửa chữa</a>
                                    </li>
                                    <li>
                                        <a href="lien-he-khoi-van-phong">Li&#234;n hệ khối văn ph&#242;ng</a>
                                    </li>
                                    <li>
                                        <a href="trung-tam-bao-hanh">Trung t&#226;m bảo h&#224;nh</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="link-content">
                                <h4>
                                    <a href="he-thong-cua-hang">Hệ thống 126 si&#234;u thị tr&#234;n to&#224;n quốc</a>
                                </h4>
                                <ul>
                                    <li>
                                        <a href="he-thong-cua-hang">
                                            Danh s&#225;ch 126 si&#234;u thị tr&#234;n to&#224;n quốc
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4>Tổng đài</h4>
                                <a className="hotline" href="tel:1900.2091">
                                    1900.2091
                                </a>
                            </div>

                            <div>
                                <h4>Thanh toán miễn phí</h4>
                                <ul className="list-logo">
                                    <li>
                                        <img src={require('~/components/img/logo-visa.png')} />
                                        <img src={require('~/components/img/logo-master.png')} />
                                    </li>
                                    <li>
                                        <img src={require('~/components/img/logo-jcb.png')} />
                                        <img src={require('~/components/img/logo-samsungpay.png')} />
                                    </li>
                                    <li>
                                        <img src={require('~/components/img/logo-atm.png')} />
                                        <img src={require('~/components/img/logo-vnpay.png')} />
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4>Hình thức vận chuyển</h4>
                                <ul className="list-logo">
                                    <li>
                                        <img src={require('~/components/img/nhattin.jpg')} />
                                        <img src={require('~/components/img/vnpost.jpg')} />
                                    </li>
                                </ul>
                                <div className="mg-top20">
                                    <a href="http://online.gov.vn/Home/WebDetails/28738" target="_blank">
                                        <img src={require('~/components/img/logo-bct.png')} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="info">
                            <p>
                                © 2020. C&#212;NG TY CỔ PHẦN X&#194;Y DỰNG V&#192; ĐẦU TƯ THƯƠNG MẠI HO&#192;NG H&#192;.
                                MST: 0106713191. (Đăng k&#253; lần đầu: Ng&#224;y 15 th&#225;ng 12 năm 2014, Đăng
                                k&#253; thay đổi ng&#224;y 24/11/2022)
                            </p>
                            <p>
                                <strong>GP số 426/GP-TTĐT do sở TTTT Hà Nội cấp ngày 22/01/2021</strong>
                            </p>
                            <p>
                                Địa chỉ: Số 89 Đường Tam Trinh, Phường Mai Động, Quận Ho&#224;ng Mai, Th&#224;nh Phố
                                H&#224; Nội, Việt Nam. Điện thoại: 1900.2091. Chịu trách nhiệm nội dung:{' '}
                                <strong>Hoàng Ngọc Chiến</strong>.
                            </p>
                        </div>
                    </div>

                    <div id="navSocial">
                        <div className="social">
                            <ul>
                                <li>
                                    <a
                                        href="https://www.facebook.com/hoanghamobilecom"
                                        title="Facebook Ho&#224;ng H&#224; Mobile"
                                        target="_blank"
                                        className="blue"
                                    >
                                        <span>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.youtube.com/channel/UCJm_GdFJzT8h1odq1oMu_7Q?sub_confirmation=1"
                                        title="Youtube Ho&#224;ng H&#224; Mobile Channel"
                                        target="_blank"
                                        className="red"
                                    >
                                        <span>
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/hoanghamobile/?hl=vi"
                                        title="Ho&#224;ng H&#224; Mobile Instagram"
                                        target="_blank"
                                        className="rainbow"
                                    >
                                        <span>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.tiktok.com/@hoanghaangels?"
                                        title="Tiktok"
                                        target="_blank"
                                        className="black"
                                    >
                                        <span>
                                            <i className="fa-brands fa-tiktok"></i>
                                            <FontAwesomeIcon icon={faTiktok} />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="backtoTop">
                        <a id="top" href="javascript:;">
                            <i className="icon-left"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </GlobalStyles>
    );
}

export default Footer;
