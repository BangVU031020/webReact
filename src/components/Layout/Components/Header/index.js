import GlobalStyles from '~/components/GlobalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTruckFast,
    faSearch,
    faCartShopping,
    faPhone,
    faClock,
    faLaptop,
    faMobile,
    faDesktop,
    faTv,
    faTablet,
    faHeadphones,
    faHouse,
    faSocks,
    faGamepad,
    faRepublican,
    faHamburger,
    faSimCard,
    faBolt,
} from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
function Header() {
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
                <div className="heading">
                    <div className="container">
                        <div className="logo">
                            <a
                                href=""
                                title="C&#212;NG TY CỔ PHẦN X&#194;Y DỰNG V&#192; ĐẦU TƯ THƯƠNG MẠI HO&#192;NG H&#192;"
                            >
                                <img
                                    src={require('~/components/img/logo-text.png')}
                                    alt="C&#212;NG TY CỔ PHẦN X&#194;Y DỰNG V&#192; ĐẦU TƯ THƯƠNG MẠI HO&#192;NG H&#192;"
                                />
                            </a>
                        </div>

                        <div className="search-box">
                            <form
                                method="get"
                                action="tim-kiem"
                                onsubmit="return submitSearch(this);"
                                enctype="application/x-www-form-urlencoded"
                            >
                                <div className="border">
                                    <input type="text" id="kwd" name="kwd" placeholder="Hôm nay bạn cần tìm gì?" />
                                    <button type="submit" className="search">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="order-tools">
                            <div className="item check-order">
                                <a id="btnCheckOrder" href="order/check">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faTruckFast} />
                                    </span>
                                    <span className="text">Kiểm tra đơn hàng</span>
                                </a>
                            </div>
                            <div className="item cart">
                                <a href="gio-hang">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <label>
                                        <i className="icon-left"></i>
                                        <span id="cart-total">0</span>
                                    </label>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className="container">
                        <ul className="root">
                            <li id="dien-thoai-di-dong">
                                <a href="dien-thoai-di-dong" target="_self">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <span>Điện thoại</span>
                                </a>
                                <div className="sub-container">
                                    <div className="sub">
                                        <div className="menu g1">
                                            <h4>
                                                <a href="dien-thoai-di-dong">H&#227;ng sản xuất</a>
                                            </h4>
                                            <ul className="display-column format_3">
                                                <li>
                                                    <a href="dien-thoai-di-dong/iphone">Apple</a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong/samsung">Samsung</a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong/xiaomi">Xiaomi</a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong/oppo">OPPO</a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong/nokia">Nokia</a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong/realme">realme</a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong/vivo">Vivo</a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong/nubia">Nubia</a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong/energizer">Energizer</a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong/xor">XOR</a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong/masstel">Masstel</a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong/tcl">TCL</a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong/philips">Philips</a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong/itel">Itel</a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong/bphone">BPhone</a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong/tecno">TECNO</a>
                                                </li>
                                            </ul>
                                            <h4>
                                                <a href="dien-thoai-cao-cap">Điện thoại cao cấp</a>
                                            </h4>
                                            <ul className="display-row format_1"></ul>
                                        </div>
                                        <div className="menu g2">
                                            <h4>
                                                <a href="dien-thoai-duoi-1-trieu">Mức gi&#225;</a>
                                            </h4>
                                            <ul className="display-row format_2">
                                                <li>
                                                    <a href="dien-thoai-di-dong?filters={%22price%22:%22T100t%22}&amp;search=true">
                                                        Tr&#234;n 100 triệu
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='dien-thoai-di-dong?=&amp;filters={"sort":"10","price":"1t"}'>
                                                        Dưới 1 triệu
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='dien-thoai-di-dong?=&amp;filters={"sort":"10","price":"2t-3t"}'>
                                                        Từ 2 đến 3 triệu
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='dien-thoai-di-dong?=&amp;filters={"sort":"10","price":"3t-4t"}'>
                                                        Từ 3 đến 4 triệu
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='dien-thoai-di-dong?=&amp;filters={"price":"6t-8t"}'>
                                                        Từ 6 đến 8 triệu
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='dien-thoai-di-dong?=&amp;filters={"price":"15t-20t"}'>
                                                        Từ 15 đến 20 triệu
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="dien-thoai-di-dong?search=true&amp;filters={%22price%22:%2220t-100tr%22}&amp;search=true">
                                                        Từ 20 đến 100 triệu
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu g3">
                                            <h4>
                                                <a>Quan t&#226;m nhất</a>
                                            </h4>
                                            <ul className="display-row format_2">
                                                <li>
                                                    <a href='dien-thoai-di-dong?filters={"sort":"6"}'>H&#244;m nay</a>
                                                </li>
                                                <li>
                                                    <a href='dien-thoai-di-dong?filters={"sort":"7"}'>Tuần n&#224;y</a>
                                                </li>
                                                <li>
                                                    <a href='dien-thoai-di-dong?filters={"sort":"8"}'>
                                                        Th&#225;ng n&#224;y
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='dien-thoai-di-dong?filters={"sort":"10"}'>Năm nay</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="menu ads" style={{ width: 400 }}></div>
                                    </div>
                                </div>
                            </li>
                            <li id="dong-ho">
                                <a href="dong-ho" target="_self">
                                    <FontAwesomeIcon icon={faClock} />
                                    <span>Đồng hồ</span>
                                </a>
                                <div className="sub-container">
                                    <div className="sub">
                                        <div className="menu g0">
                                            <h4>
                                                <a>Đồng hồ</a>
                                            </h4>
                                            <ul className="display-column format_4">
                                                <li>
                                                    <a href="dong-ho/apple-watch">Apple</a>
                                                </li>
                                                <li>
                                                    <a href="dong-ho/sam-sung">Samsung</a>
                                                </li>
                                                <li>
                                                    <a href="dong-ho/xiaomi">Xiaomi</a>
                                                </li>
                                                <li>
                                                    <a href="dong-ho/garmin">Garmin</a>
                                                </li>
                                                <li>
                                                    <a href="dong-ho/tic-watch">Tic Watch</a>
                                                </li>
                                                <li>
                                                    <a href="dong-ho/huami">Amazfit</a>
                                                </li>
                                                <li>
                                                    <a href="dong-ho/dong-ho-tre-em">Đồng hồ trẻ em</a>
                                                </li>
                                                <li>
                                                    <a href="dong-ho/huawei">Huawei </a>
                                                </li>
                                                <li>
                                                    <a href="dong-ho/masstel">Masstel</a>
                                                </li>
                                                <li>
                                                    <a href="dong-ho/oppo">OPPO</a>
                                                </li>
                                                <li>
                                                    <a href="dong-ho/realme">realme</a>
                                                </li>
                                                <li>
                                                    <a href="dong-ho/soundpeats">SoundPEATS</a>
                                                </li>
                                                <li>
                                                    <a href="dong-ho/top-dong-ho-thong-minh">
                                                        Top Đồng hồ th&#244;ng minh
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="dong-ho/top-vong-deo-tay">Top v&#242;ng đeo tay</a>
                                                </li>
                                                <li>
                                                    <a href="dong-ho/fitbit">Fitbit</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="menu ads" style={{ width: 400 }}></div>
                                    </div>
                                </div>
                            </li>
                            <li id="laptop">
                                <a href="laptop" target="_self">
                                    <FontAwesomeIcon icon={faLaptop} />
                                    <span>Laptop</span>
                                </a>
                                <div className="sub-container">
                                    <div className="sub">
                                        <div className="menu g1">
                                            <h4>
                                                <a href="laptop">H&#227;ng sản xuất</a>
                                            </h4>
                                            <ul className="display-column format_3">
                                                <li>
                                                    <a href="laptop/macbook">Apple</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/hang-san-xuat/acer">Acer</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/asus">ASUS</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/dell">Dell</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/msi">MSI</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/hp">HP</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/huawei">Huawei</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/lenovo">Lenovo</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/hang-san-xuat/lg">LG</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/microsoft">Surface</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/gigabyte">GIGABYTE</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/hang-san-xuat/xiaomi">Xiaomi</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/masstel">Masstel</a>
                                                </li>
                                            </ul>
                                            <h4>
                                                <a>Ph&#226;n loại Sản phẩm</a>
                                            </h4>
                                            <ul className="display-column format_1">
                                                <li>
                                                    <a href="laptop/cao-cap-sang-trong">Cao cấp - Sang trọng</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/do-hoa-ki-thuat">Đồ họa - Kĩ thuật</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/hoc-tap-van-phong">Học tập - Văn ph&#242;ng</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/laptop-gaming">Laptop Gaming</a>
                                                </li>
                                                <li>
                                                    <a href="laptop/mong-nhe">Mỏng nhẹ</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu g3">
                                            <h4>
                                                <a>Mức gi&#225;</a>
                                            </h4>
                                            <ul className="display-row format_2">
                                                <li>
                                                    <a href="laptop?filters={%22price%22:%2220t-100tr%22}&amp;search=true">
                                                        Tr&#234;n 20 triệu
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="laptop?filters={%22price%22:%2212t-15t%22}&amp;search=true">
                                                        Từ 12 đến 15 Triệu
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="laptop?search=true&amp;filters={%22price%22:%2215t-20t%22}&amp;search=true">
                                                        Từ 15 đến 20 triệu
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="menu ads" style={{ width: 400 }}></div>
                                    </div>
                                </div>
                            </li>
                            <li id="apple">
                                <a href="apple" target="_self">
                                    <FontAwesomeIcon icon={faMobile} />
                                    <span>Apple</span>
                                </a>
                            </li>
                            <li id="man-hinh">
                                <a href="man-hinh" target="_self">
                                    <FontAwesomeIcon icon={faDesktop} />
                                    <span>M&#224;n h&#236;nh</span>
                                </a>
                                <div className="sub-container">
                                    <div className="sub">
                                        <div className="menu g0">
                                            <h4>
                                                <a href="man-hinh">H&#227;ng sản xuất</a>
                                            </h4>
                                            <ul className="display-column format_2">
                                                <li>
                                                    <a href="man-hinh/acer">Acer</a>
                                                </li>
                                                <li>
                                                    <a href="man-hinh/hang-san-xuat/aoc">AOC</a>
                                                </li>
                                                <li>
                                                    <a href="man-hinh/hang-san-xuat/asus">Asus</a>
                                                </li>
                                                <li>
                                                    <a href="man-hinh/hang-san-xuat/dell">Dell</a>
                                                </li>
                                                <li>
                                                    <a href="man-hinh/gigabyte">GIGABYTE</a>
                                                </li>
                                                <li>
                                                    <a href="man-hinh/hang-san-xuat/hp">HP</a>
                                                </li>
                                                <li>
                                                    <a href="man-hinh/hang-san-xuat/huawei">Huawei</a>
                                                </li>
                                                <li>
                                                    <a href="man-hinh/hang-san-xuat/lenovo">Lenovo</a>
                                                </li>
                                                <li>
                                                    <a href="man-hinh/hang-san-xuat/lg">LG</a>
                                                </li>
                                                <li>
                                                    <a href="man-hinh/hang-san-xuat/msi">MSI</a>
                                                </li>
                                                <li>
                                                    <a href="man-hinh/hang-san-xuat/samsung">Samsung</a>
                                                </li>
                                                <li>
                                                    <a href="man-hinh/hang-san-xuat/viewsonic">Viewsonic</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu g2">
                                            <h4>
                                                <a>Ph&#226;n loại sản phẩm</a>
                                            </h4>
                                            <ul className="display-column format_1">
                                                <li>
                                                    <a href="man-hinh/phan-loai-san-pham/man-hinh-do-hoa">
                                                        M&#224;n h&#236;nh đồ họa
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="man-hinh/phan-loai-san-pham/man-hinh-gaming">
                                                        M&#224;n h&#236;nh Gaming
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="man-hinh/phan-loai-san-pham/man-hinh-van-phong">
                                                        M&#224;n h&#236;nh văn ph&#242;ng
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu g3">
                                            <h4>
                                                <a href="phu-kien/phu-kien-man-hinh">Phụ kiện m&#224;n h&#236;nh</a>
                                            </h4>
                                            <ul className="display-row format_1"></ul>
                                        </div>

                                        <div className="menu ads" style={{ width: 400 }}></div>
                                    </div>
                                </div>
                            </li>
                            <li id="smart-tv">
                                <a href="smart-tv" target="_self">
                                    <FontAwesomeIcon icon={faTv} />
                                    <span>Smart TV</span>
                                </a>
                                <div className="sub-container">
                                    <div className="sub">
                                        <div className="menu g1">
                                            <h4>
                                                <a href="smart-tv">H&#227;ng sản xuất</a>
                                            </h4>
                                            <ul className="display-column format_1">
                                                <li>
                                                    <a href="smart-tv/tv-xiaomi">TV Xiaomi</a>
                                                </li>
                                                <li>
                                                    <a href="smart-tv/tv-casper">TV Casper</a>
                                                </li>
                                                <li>
                                                    <a href="smart-tv/itel">TV Itel</a>
                                                </li>
                                                <li>
                                                    <a href="smart-tv/samsung">TV Samsung</a>
                                                </li>
                                                <li>
                                                    <a href="smart-tv/tv-toshiba">TV Toshiba</a>
                                                </li>
                                            </ul>
                                            <h4>
                                                <a href="phu-kien/phu-kien-smart-tv">Phụ kiện TV</a>
                                            </h4>
                                            <ul className="display-column format_1"></ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li id="tablet">
                                <a href="tablet" target="_self">
                                    <FontAwesomeIcon icon={faTablet} />
                                    <span>Tablet</span>
                                </a>
                                <div className="sub-container">
                                    <div className="sub">
                                        <div className="menu g2">
                                            <h4>
                                                <a href="tablet">H&#227;ng sản xuất</a>
                                            </h4>
                                            <ul className="display-column format_3">
                                                <li>
                                                    <a href="tablet/samsung">Samsung</a>
                                                </li>
                                                <li>
                                                    <a href="tablet/ipad">Apple</a>
                                                </li>
                                                <li>
                                                    <a href="tablet/lenovo">Lenovo</a>
                                                </li>
                                                <li>
                                                    <a href="tablet/microsoft">Microsoft Surface</a>
                                                </li>
                                                <li>
                                                    <a href="tablet/oppo">OPPO</a>
                                                </li>
                                                <li>
                                                    <a href="tablet/yuho">Yuho</a>
                                                </li>
                                                <li>
                                                    <a href="tablet/xiaomi">Xiaomi</a>
                                                </li>
                                                <li>
                                                    <a href="tablet/huawei">Huawei</a>
                                                </li>
                                                <li>
                                                    <a href="tablet/nokia">Nokia</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="menu ads" style={{ width: 400 }}></div>
                                    </div>
                                </div>
                            </li>
                            <li id="loa-tai-nghe">
                                <a href="loa-tai-nghe" target="_self">
                                    <FontAwesomeIcon icon={faHeadphones} />
                                    <span>&#194;m thanh</span>
                                </a>
                                <div className="sub-container">
                                    <div className="sub">
                                        <div className="menu g0">
                                            <h4>
                                                <a href="loa">Loa</a>
                                            </h4>
                                            <ul className="display-column format_2">
                                                <li>
                                                    <a href="loa/samsung">Samsung</a>
                                                </li>
                                                <li>
                                                    <a href="loa/harman-kardon">Harman Kardon</a>
                                                </li>
                                                <li>
                                                    <a href="loa/jbl">JBL</a>
                                                </li>
                                                <li>
                                                    <a href="loa/monster">MONSTER</a>
                                                </li>
                                                <li>
                                                    <a href="loa/sony">Sony</a>
                                                </li>
                                                <li>
                                                    <a href="loa/energizer">Energizer</a>
                                                </li>
                                                <li>
                                                    <a href="loa/huawei">Huawei</a>
                                                </li>
                                                <li>
                                                    <a href="loa/lg">LG</a>
                                                </li>
                                                <li>
                                                    <a href="loa/loa-mic-cam-tay">Loa mic cầm tay</a>
                                                </li>
                                                <li>
                                                    <a href="loa/marshall">Marshall</a>
                                                </li>
                                                <li>
                                                    <a href="loa/soundpeats">SoundPEATS</a>
                                                </li>
                                                <li>
                                                    <a href="loa/tekin">Tekin</a>
                                                </li>
                                                <li>
                                                    <a href="loa/apple">Apple</a>
                                                </li>
                                                <li>
                                                    <a href="loa/divoom">Divoom</a>
                                                </li>
                                                <li>
                                                    <a href="loa/anker">Anker</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu g1">
                                            <h4>
                                                <a href="tai-nghe">Tai nghe</a>
                                            </h4>
                                            <ul className="display-column format_3">
                                                <li>
                                                    <a href="tai-nghe/sony">Sony</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/jbl">JBL</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/soundpeats">Soundpeats</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/akg">AKG</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/apple-airpods">Apple</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/asus">Asus</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/beats">Beats</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/energizer">Energizer</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/havit">Havit</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/haylou">Haylou</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/huawei">Huawei</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/iwalk">iWalk</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/lg">LG</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/monster">MONSTER</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/motorola">Motorola</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/nokia">Nokia</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/oppo">OPPO</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/philips">PHILIPS</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/pioneer">Pioneer</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/pisen">Pisen</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/plantronics">Plantronics</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/rapoo">Rapoo</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/razer">Razer</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/realme">realme</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/samsung">Samsung</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/sennheiser">Sennheiser</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/shokz">Shokz</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/xiaomi">Xiaomi</a>
                                                </li>
                                                <li>
                                                    <a href="tai-nghe/yamaha">YAMAHA</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="menu ads" style={{ width: 600 }}></div>
                                    </div>
                                </div>
                            </li>
                            <li id="smart-home">
                                <a href="smart-home" target="_self">
                                    <FontAwesomeIcon icon={faHouse} />
                                    <span>Smart Home</span>
                                </a>
                                <div className="sub-container">
                                    <div className="sub">
                                        <div className="menu g4">
                                            <h4>
                                                <a href="smart-home">Gia dụng th&#244;ng minh</a>
                                            </h4>
                                            <ul className="display-row format_2">
                                                <li>
                                                    <a href="do-gia-dung/may-loc-khong-khi">
                                                        M&#225;y lọc kh&#244;ng kh&#237;
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="do-gia-dung/robot-hut-bui">Robot, M&#225;y h&#250;t bụi</a>
                                                </li>
                                                <li>
                                                    <a href="smart-home/phu-kien-gia-dung">Phụ kiện gia dụng</a>
                                                </li>
                                                <li>
                                                    <a href="phu-kien/smart-home/fpt-play-box">FPT Play box</a>
                                                </li>
                                                <li>
                                                    <a href="smart-home/can-thong-minh">C&#226;n th&#244;ng minh</a>
                                                </li>
                                                <li>
                                                    <a href="smart-home/dth-tivi-box-k">DTH/Tivi Box K+</a>
                                                </li>
                                                <li>
                                                    <a href="smart-home/khuyen-mai-do-gia-dung-xiaomi">
                                                        Khuyến mại đồ gia dụng Xiaomi
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="smart-home/may-chieu">M&#225;y Chiếu</a>
                                                </li>
                                                <li>
                                                    <a href="phu-kien/do-gia-dung/o-cam-dien">Ổ Cắm điện</a>
                                                </li>
                                                <li>
                                                    <a href="smart-home/thiet-bi-dinh-vi-thong-minh">
                                                        Thiết bị định vị th&#244;ng minh
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu g0">
                                            <h4>
                                                <a href="do-gia-dung/may-loc-khong-khi">
                                                    M&#225;y Lọc Kh&#244;ng kh&#237;
                                                </a>
                                            </h4>
                                            <ul className="display-row format_1">
                                                <li>
                                                    <a href="do-gia-dung/may-loc-khong-khi/clair">
                                                        M&#225;y lọc kh&#244;ng kh&#237; h&#227;ng Clair
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="do-gia-dung/may-loc-khong-khi/daikin">
                                                        M&#225;y lọc kh&#244;ng kh&#237; h&#227;ng Daikin
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="do-gia-dung/may-loc-khong-khi/may-loc-khong-khi-hang-philips">
                                                        M&#225;y lọc kh&#244;ng kh&#237; h&#227;ng Philips
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="do-gia-dung/may-loc-khong-khi/may-loc-khong-khi-hang-xiaomi">
                                                        M&#225;y lọc kh&#244;ng kh&#237; h&#227;ng Xiaomi
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="do-gia-dung/may-loc-khong-khi/may-loc-khong-khi-levoit">
                                                        M&#225;y lọc kh&#244;ng kh&#237; Levoit
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li id="phu-kien">
                                <a href="phu-kien" target="_self">
                                    <FontAwesomeIcon icon={faSocks} />
                                    <span>Phụ kiện</span>
                                </a>
                                <div className="sub-container">
                                    <div className="sub">
                                        <div className="menu g0">
                                            <h4>
                                                <a href="phu-kien/phu-kien-dien-thoai">Phụ kiện điện thoại</a>
                                            </h4>
                                            <ul className="display-column format_1">
                                                <li>
                                                    <a href="sac-du-phong">Sạc dự ph&#242;ng</a>
                                                </li>
                                                <li>
                                                    <a href="cu-sac-day-cap">Củ sạc, d&#226;y c&#225;p</a>
                                                </li>
                                                <li>
                                                    <a href="the-nho-usb">Thẻ nhớ - USB</a>
                                                </li>
                                                <li>
                                                    <a href="op-lung-dien-thoai">Bao da - Ốp lưng</a>
                                                </li>
                                                <li>
                                                    <a href="phu-kien/mieng-dan-man-hinh">
                                                        Miếng d&#225;n m&#224;n h&#236;nh
                                                    </a>
                                                </li>
                                            </ul>
                                            <h4>
                                                <a href="phu-kien/xa-ton-phu-kien-gia-soc">
                                                    Xả tồn phụ kiện - GI&#193; SỐC
                                                </a>
                                            </h4>
                                            <ul className="display-column format_1"></ul>
                                        </div>
                                        <div className="menu g1">
                                            <h4>
                                                <a href="phu-kien/phu-kien-may-tinh">
                                                    Phụ kiện &amp; Phần mềm m&#225;y t&#237;nh
                                                </a>
                                            </h4>
                                            <ul className="display-column format_2">
                                                <li>
                                                    <a href="phu-kien/ban-phim">B&#224;n Ph&#237;m</a>
                                                </li>
                                                <li>
                                                    <a href="phu-kien/chuot">Chuột</a>
                                                </li>
                                                <li>
                                                    <a href="phu-kien/phan-mem">Phần mềm </a>
                                                </li>
                                            </ul>
                                            <h4>
                                                <a href="camera-an-ninh">Camera an ninh - H&#224;nh tr&#236;nh</a>
                                            </h4>
                                            <ul className="display-row format_1">
                                                <li>
                                                    <a href="camera-an-ninh/camera-an-ninh">Camera an ninh</a>
                                                </li>
                                                <li>
                                                    <a href="camera-an-ninh/camera-hanh-trinh">
                                                        Camera h&#224;nh tr&#236;nh
                                                    </a>
                                                </li>
                                            </ul>
                                            <h4>
                                                <a href="phu-kien/phu-kien-smart-tv">Phụ kiện Smart TV</a>
                                            </h4>
                                            <ul className="display-row format_1"></ul>
                                        </div>
                                        <div className="menu g2">
                                            <h4>
                                                <a href="phu-kien/linh-kien-may-tinh">Linh kiện m&#225;y t&#237;nh </a>
                                            </h4>
                                            <ul className="display-column format_2">
                                                <li>
                                                    <a href="phu-kien/phu-kien-may-tinh/o-cung">Ổ cứng</a>
                                                </li>
                                                <li>
                                                    <a href="phu-kien/phu-kien-may-tinh/ram">RAM</a>
                                                </li>
                                            </ul>
                                            <h4>
                                                <a href="phu-kien/pin-man-hinh">
                                                    Thay Pin, M&#224;n h&#236;nh ch&#237;nh h&#227;ng
                                                </a>
                                            </h4>
                                            <ul className="display-column format_1">
                                                <li>
                                                    <a href="phu-kien/pin-man-hinh/man-hinh-iphone">
                                                        M&#224;n h&#236;nh iPhone
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="phu-kien/pin-man-hinh/pin">Pin iPhone</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu g3">
                                            <h4>
                                                <a href="phu-kien/phu-kien-apple">Phụ kiện Apple</a>
                                            </h4>
                                            <ul className="display-row format_1">
                                                <li>
                                                    <a href="phu-kien/phu-kien-apple/phu-kien-chinh-hang-apple">
                                                        Phụ kiện ch&#237;nh h&#227;ng Apple
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="phu-kien/phu-kien-apple/san-pham-uu-dai">
                                                        Sản phẩm Ưu đ&#227;i
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="phu-kien/phu-kien-apple/thiet-bi-dinh-vi-thong-minh">
                                                        Thiết bị định vị th&#244;ng minh
                                                    </a>
                                                </li>
                                            </ul>
                                            <h4>
                                                <a href="phu-kien/phu-kien-khac">Phụ kiện kh&#225;c</a>
                                            </h4>
                                            <ul className="display-column format_1">
                                                <li>
                                                    <a href="phu-kien/tui-xach-balo-chong-soc">
                                                        Balo - t&#250;i x&#225;ch - t&#250;i chống sốc
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu g4">
                                            <h4>
                                                <a href="phu-kien/thiet-bi-mang">Thiết bị mạng</a>
                                            </h4>
                                            <ul className="display-row format_1">
                                                <li>
                                                    <a href="phu-kien/thiet-bi-mang/bo-kich-song">
                                                        Bộ k&#237;ch s&#243;ng
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="phu-kien/thiet-bi-mang/bo-phat-wifi-di-dong-3g-4g">
                                                        Bộ ph&#225;t Wifi di động (3G/4G)
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="phu-kien/thiet-bi-mang/router-modem">Router/Modem</a>
                                                </li>
                                                <li>
                                                    <a href="phu-kien/thiet-bi-mang/thuong-hieu">Thương hiệu</a>
                                                </li>
                                                <li>
                                                    <a href="phu-kien/bo-phat-wifi/truyen-hinh-k">
                                                        Truyền h&#236;nh K+
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="menu ads" style={{ width: 300 }}></div>
                                    </div>
                                </div>
                            </li>
                            <li id="do-choi-cong-nghe">
                                <a href="do-choi-cong-nghe" target="_self">
                                    <FontAwesomeIcon icon={faGamepad} />
                                    <span>Đồ chơi CN</span>
                                </a>
                                <div className="sub-container">
                                    <div className="sub">
                                        <div className="menu g0">
                                            <h4>
                                                <a>Đồ chơi c&#244;ng nghệ</a>
                                            </h4>
                                            <ul className="display-row format_1">
                                                <li>
                                                    <a href="do-choi-cong-nghe/quat-cam-tay-mini">Quạt cầm tay mini</a>
                                                </li>
                                                <li>
                                                    <a href="do-choi-cong-nghe/day-do-nhip-tim">D&#226;y đo nhịp tim</a>
                                                </li>
                                                <li>
                                                    <a href="do-choi-cong-nghe/tay-cam-chong-rung">
                                                        Tay cầm chống rung
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="do-choi-cong-nghe/gopro">Camera h&#224;nh tr&#236;nh</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li id="kho-san-pham-cu">
                                <a href="kho-san-pham-cu" target="_self">
                                    <FontAwesomeIcon icon={faRepublican} />
                                    <span>M&#225;y tr&#244;i</span>
                                </a>
                                <div className="sub-container">
                                    <div className="sub">
                                        <div className="menu g0">
                                            <h4>
                                                <a>H&#224;ng cũ gi&#225; rẻ</a>
                                            </h4>
                                            <ul className="display-column format_3">
                                                <li>
                                                    <a href='kho-san-pham-cu?=&amp;filters={"type":"1"}'>
                                                        Điện thoại di động
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='kho-san-pham-cu?filters={"type":"5"}'>
                                                        Đồng hồ th&#244;ng minh
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='kho-san-pham-cu?&amp;filters={"type":"2"}'>
                                                        M&#225;y t&#237;nh bảng
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='kho-san-pham-cu?=&amp;filters={"type":"3"}'>Laptop</a>
                                                </li>
                                                <li>
                                                    <a href='kho-san-pham-cu?=&amp;filters={"type":"7"}'>Loa</a>
                                                </li>
                                                <li>
                                                    <a href='kho-san-pham-cu?=&amp;filters={"type":"13"}'>Tai nghe</a>
                                                </li>
                                                <li>
                                                    <a href='kho-san-pham-cu?=&amp;filters={"type":"26"}'>Camera</a>
                                                </li>
                                                <li>
                                                    <a href='kho-san-pham-cu?=&amp;filters={"type":"10"}'>Củ sạc</a>
                                                </li>
                                                <li>
                                                    <a href='kho-san-pham-cu?=&amp;filters={"type":"11"}'>
                                                        D&#226;y c&#225;p
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='kho-san-pham-cu?=&amp;filters={"type":"28"}'>
                                                        M&#225;y lọc kh&#244;ng kh&#237;
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='kho-san-pham-cu?=&amp;filters={"type":"18"}'>Phụ kiện</a>
                                                </li>
                                                <li>
                                                    <a href='kho-san-pham-cu?=&amp;filters={"type":"25"}'>
                                                        Sạc dự ph&#242;ng
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='kho-san-pham-cu?=&amp;filters={"type":"30"}'>
                                                        Tay cầm chống rung
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li id="dich-vu-sua-chua">
                                <a href="dich-vu-sua-chua" target="_self">
                                    <FontAwesomeIcon icon={faHamburger} />
                                    <span>Sửa chữa</span>
                                </a>
                                <div className="sub-container">
                                    <div className="sub">
                                        <div className="menu g0">
                                            <h4>
                                                <a href="dich-vu-sua-chua/android">Android</a>
                                            </h4>
                                            <ul className="display-column format_2">
                                                <li>
                                                    <a href="dich-vu-sua-chua/android/pin">Pin</a>
                                                </li>
                                                <li>
                                                    <a href="dich-vu-sua-chua/android/camera">Camera</a>
                                                </li>
                                                <li>
                                                    <a href="dich-vu-sua-chua/android/man-hinh">M&#224;n h&#236;nh</a>
                                                </li>
                                                <li>
                                                    <a href="dich-vu-sua-chua/android/vo-va-mat-lung">
                                                        Vỏ v&#224; mặt lưng
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu g1">
                                            <h4>
                                                <a href="dich-vu-sua-chua/apple/iphone">Apple iPhone</a>
                                            </h4>
                                            <ul className="display-column format_2">
                                                <li>
                                                    <a href="dich-vu-sua-chua/apple/iphone/camera-truoc">
                                                        Camera Trước
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="dich-vu-sua-chua/apple/iphone/loa-trong-loa-ngoai">
                                                        Loa Trong - Loa Ngo&#224;i
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="dich-vu-sua-chua/apple/iphone/vo-kinh">
                                                        Vỏ - K&#237;nh Lưng
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="dich-vu-sua-chua/apple/iphone/camera">Camera Sau</a>
                                                </li>
                                                <li>
                                                    <a href="dich-vu-sua-chua/apple/iphone/man-hinh">
                                                        M&#224;n h&#236;nh
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="dich-vu-sua-chua/apple/iphone/cac-loai-cap">
                                                        C&#225;c loại c&#225;p
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu g2">
                                            <h4>
                                                <a href="dich-vu-sua-chua/apple/ipad">Apple iPad</a>
                                            </h4>
                                            <ul className="display-row format_3">
                                                <li>
                                                    <a href="dich-vu-sua-chua/apple/ipad/pin">Pin</a>
                                                </li>
                                                <li>
                                                    <a href="dich-vu-sua-chua/apple/ipad/cam-ung">Cảm ứng</a>
                                                </li>
                                                <li>
                                                    <a href="dich-vu-sua-chua/apple/ipad/man-hinh">
                                                        M&#224;n h&#236;nh
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li id="sim-the">
                                <a href="sim-the" target="_self">
                                    <FontAwesomeIcon icon={faSimCard} />
                                    <span>Sim thẻ</span>
                                </a>
                                <div className="sub-container">
                                    <div className="sub">
                                        <div className="menu g1">
                                            <h4>
                                                <a>Sản phẩm HOT</a>
                                            </h4>
                                            <ul className="display-row format_5"></ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li id="tin-tuc">
                                <a href="tin-tuc" target="_self">
                                    <FontAwesomeIcon icon={faNewspaper} />
                                    <span>Tin hot</span>
                                </a>
                            </li>
                            <li id="tin-khuyen-maiuu-dai-hot">
                                <a href="tin-khuyen-mai/uu-dai-hot" target="_blank">
                                    <FontAwesomeIcon icon={faBolt} />
                                    <span>Ưu đ&#227;i</span>
                                </a>
                                <div className="sub-container">
                                    <div className="sub">
                                        <div className="menu g0">
                                            <h4>
                                                <a href="tin-khuyen-mai/uu-dai-hot">Ưu đ&#227;i Hot</a>
                                            </h4>
                                            <ul className="display-row format_1">
                                                <li>
                                                    <a href="tin-khuyen-mai/uu-dai-hot/combo-uu-dai-samsung">
                                                        Combo ưu đ&#227;i samsung
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="tin-khuyen-mai/uu-dai-hot/khuyen-mai-Apple">
                                                        Khuyến mại Apple
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="tin-khuyen-mai/uu-dai-hot/khuyen-mai-huawei">
                                                        Khuyến mại Huawei
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="tin-khuyen-mai/flashsale/khuyen-mai-lg">Khuyến mại LG</a>
                                                </li>
                                                <li>
                                                    <a href="tin-khuyen-mai/flashsale/khuyen-mai-sony">
                                                        Khuyến mại Sony
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="tin-khuyen-mai/uu-dai-hot/nokia-khuyen-mai">
                                                        Nokia Khuyến mại
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="tin-khuyen-mai/san-pham-doc-quyen">Sản phẩm độc quyền</a>
                                                </li>
                                                <li>
                                                    <a href="tin-khuyen-mai/uu-dai-hot/san-pham-moi-apple">
                                                        Sản phẩm mới Apple
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="tin-khuyen-mai/uu-dai-hot/uu-cai-cac-san-pham-oaxis">
                                                        Ưu c&#225;i c&#225;c Sản phẩm Oaxis
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="tin-khuyen-mai/uu-dai-hot/uu-dai-thiet-bi-mang-camera-an-ninh">
                                                        Ưu đ&#227;i thiết bị mạng, camera an ninh
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="menu ads" style={{ width: 300 }}></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </GlobalStyles>
    );
}

export default Header;
