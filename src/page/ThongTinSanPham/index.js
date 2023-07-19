import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import GlobalStyles from '~/components/GlobalStyles';
import { Carousel } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleLeft,
    faAngleRight,
    faBolt,
    faCartShopping,
    faCheck,
    faHeadphonesSimple,
    faHeart,
    faHome,
    faLocationDot,
    faPlus,
    faShield,
    faTruck,
} from '@fortawesome/free-solid-svg-icons';
function ThongTinSanPham() {
    const images = [
        {
            original: require('~/page/img/productlist/dsp/Uploads/2022/12/10/image-removebg-preview-2022-12-10t104205-472.png'),
            thumbnail: require('~/page/img/productlist/dst/Uploads/2022/12/10/image-removebg-preview-2022-12-10t104205-472.png'),
        },
        {
            original: require('~/page/img/productlist/dsp/Uploads/2022/12/10/image-removebg-preview-2022-12-10t104204-819.png'),
            thumbnail: require('~/page/img/productlist/dst/Uploads/2022/12/10/image-removebg-preview-2022-12-10t104204-819.png'),
        },
    ];
    return (
        <GlobalStyles>
            <section>
                <div className="container">
                    <ol className="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList">
                        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                            <a itemprop="item" href="">
                                <span itemprop="name" content="Trang chủ">
                                    <FontAwesomeIcon icon={faHome} /> Trang chủ
                                </span>
                            </a>
                            <meta itemprop="position" content="1" />
                        </li>
                        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                            <a itemprop="item" href="dien-thoai-di-dong">
                                <span itemprop="name" content="Điện thoại">
                                    Điện thoại
                                </span>
                            </a>
                            <meta itemprop="position" content="2" />
                        </li>
                        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                            <a
                                itemprop="item"
                                href="dien-thoai-di-dong/tecno-pova-4-pro-8gb-128gb-chinh-hang"
                                title="Điện thoại di động TECNO POVA 4 PRO 8GB/128GB - Ch&#237;nh h&#227;ng  gi&#225; rẻ - Ho&#224;ng H&#224; Mobile"
                                className="actived"
                            >
                                <span itemprop="name" content="TECNO POVA 4 PRO 8GB/128GB - Ch&#237;nh h&#227;ng">
                                    TECNO POVA 4 PRO 8GB/128GB - Ch&#237;nh h&#227;ng
                                </span>
                            </a>
                            <meta itemprop="position" content="3" />
                        </li>
                    </ol>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="product-details">
                        <div className="top-product">
                            <h1>
                                <FontAwesomeIcon icon={faBolt} />
                                Điện thoại di động TECNO POVA 4 PRO 8GB/128GB - Ch&#237;nh h&#227;ng
                                <label>
                                    <span
                                        className="timer"
                                        id="timer"
                                        data-start="April 18, 2023 21:44:46"
                                        data-end="April 24, 2023 00:00:00"
                                    ></span>
                                </label>
                            </h1>
                        </div>

                        <div className="product-details-container">
                            <div className="wrapper">
                                <div>
                                    <ImageGallery items={images} />
                                </div>
                                <div className="love-this-button">
                                    <a title="Thêm vào sản phẩm yêu thích" href="javascript:wishProduct(2896, false)">
                                        <FontAwesomeIcon icon={faHeart} />
                                        <FontAwesomeIcon icon={faHeart} />
                                    </a>
                                </div>
                            </div>

                            <div className="product-center" style={{ position: 'relative' }}>
                                <p className="price current-product-price">
                                    <strong>4,490,000 ₫</strong>
                                    <i>
                                        <strike>4,990,000 ₫</strike>
                                    </i>

                                    <i> | Giá đã bao gồm 10% VAT</i>
                                    <br />
                                    <label className="text-green">
                                        Hotsale giá sốc từ 30-23/04 giá chỉ còn 4,490,000 ₫
                                    </label>
                                    <br />
                                    <label className="text-dark">Sản phẩm bán giá Hotsale với số lượng có hạn</label>
                                </p>
                                <p className="freeship">
                                    <FontAwesomeIcon icon={faTruck} />
                                    <span>Miễn phí vận chuyển toàn quốc</span>
                                </p>

                                <div style={{ position: 'absolute', right: '0', display: 'none' }}>
                                    <label>SKU:</label> <strong id="dfSKU">TPOVA4PX</strong>
                                </div>

                                <div className="product-option version">
                                    <strong className="label">Lựa chọn phiên bản</strong>
                                    <div className="options" id="versionOption" data-id="34">
                                        <div data-sku="TPOVA4PX" className="item selected">
                                            <a href="dien-thoai-di-dong/tecno-pova-4-pro-8gb-128gb-chinh-hang">
                                                <span>
                                                    <label>
                                                        <strong>8GB/128GB</strong>
                                                    </label>
                                                </span>
                                                <strong>4,490,000 ₫</strong>
                                            </a>
                                        </div>
                                        <div data-sku="POVA4P256X" className="item ">
                                            <a href="dien-thoai-di-dong/tecno-pova-4-pro-8gb-256gb-chinh-hang">
                                                <span>
                                                    <label>
                                                        <strong>8GB/256GB</strong>
                                                    </label>
                                                </span>
                                                <strong>5,190,000 ₫</strong>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-option color">
                                    <strong className="label">Lựa chọn màu và xem địa chỉ còn hàng</strong>
                                    <div className="options" id="colorOptions">
                                        <div
                                            data-name="Xanh Niken"
                                            data-hotsale='&lt;br/&gt;&lt;label className="text-green"&gt;Hotsale gi&#225; sốc từ 30-23/04 gi&#225; chỉ c&#242;n 4,490,000 ₫&lt;/label&gt;'
                                            data-pricenote=""
                                            data-buyonline="true"
                                            data-bestPrice="4,490,000 ₫"
                                            data-lastPrice="4,990,000 ₫"
                                            data-idx="0"
                                            data-hex="#283396"
                                            data-title=""
                                            data-id="344"
                                            data-sku="TPOVA4PX"
                                            className="item selected"
                                        >
                                            <span>
                                                <label>
                                                    <strong>Xanh Niken</strong>
                                                </label>
                                            </span>
                                            <strong>4,490,000 ₫</strong>
                                            <div className="colorGuide" style={{ background: '#283396' }}>
                                                <label>
                                                    <strong>Xanh Niken</strong>
                                                </label>
                                            </div>
                                        </div>
                                        <div
                                            data-name="Cam Titan"
                                            data-hotsale='&lt;br/&gt;&lt;label className="text-green"&gt;Hotsale gi&#225; sốc từ 30-23/04 gi&#225; chỉ c&#242;n 4,490,000 ₫&lt;/label&gt;'
                                            data-pricenote="M&#224;u sắp về"
                                            data-buyonline="true"
                                            data-bestPrice="4,490,000 ₫"
                                            data-lastPrice="4,990,000 ₫"
                                            data-idx="1"
                                            data-hex="#c92d5c"
                                            data-title=""
                                            data-id="345"
                                            data-sku="TPOVA4PC"
                                            className="item "
                                        >
                                            <span>
                                                <label>
                                                    <strong>Cam Titan</strong>
                                                </label>
                                            </span>
                                            <strong>4,490,000 ₫</strong>
                                            <div className="colorGuide" style={{ background: '#c92d5c' }}>
                                                <label>
                                                    <strong>Cam Titan</strong>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-promotion">
                                    <strong className="label text-green">KHUYẾN M&#195;I</strong>
                                    <ul>
                                        <li>
                                            <span className="bag">KM 1</span>
                                        </li>
                                        <li>Sản phẩm đang thuộc chương tr&#236;nh Flash sale (Số lượng c&#243; hạn)</li>
                                    </ul>
                                </div>

                                <div className="product-action">
                                    <a
                                        title="Mua ngay"
                                        data-sku="TPOVA4PX"
                                        href="javascript:;"
                                        className="btn-red btnQuickOrder btnbuy"
                                    >
                                        <strong>MUA NGAY</strong>
                                        <span>
                                            Giao tận nhà (COD)
                                            <br />
                                            Hoặc Nhận tại cửa hàng
                                        </span>
                                    </a>

                                    <a
                                        title="Mua trả góp"
                                        href="tra-gop/dien-thoai-di-dong/tecno-pova-4-pro-8gb-128gb-chinh-hang"
                                        className="btnInstallment btn-green btnbuy"
                                    >
                                        <strong>TRẢ GÓP</strong>
                                        <span>
                                            Công ty Tài chính
                                            <br /> Hoặc 0% qua thẻ tín dụng
                                        </span>
                                    </a>
                                    <a
                                        style={{
                                            width: '43px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            maxWidth: '80px',
                                            padding: '5px',
                                        }}
                                        title="Thêm vào giỏ hàng"
                                        data-sku="TPOVA4PX"
                                        href="javascript:;"
                                        className="add-cart btn-orange btnbuy btn-icon"
                                    >
                                        <FontAwesomeIcon icon={faCartShopping} />
                                        <span className="cart-plus" style={{ right: '21px' }}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                        <label style={{ fontSize: '11px' }}>Thêm giỏ hàng</label>
                                    </a>
                                </div>

                                <div
                                    className="product-promotion"
                                    style={{
                                        padding: '8px',
                                        borderRadius: '6px',
                                        background: '#fff',
                                        marginTop: '15px',
                                    }}
                                >
                                    <div>
                                        <strong className="label">ƯU Đ&#195;I THANH TO&#193;N</strong>
                                        <ul>
                                            <li>
                                                <FontAwesomeIcon icon={faCheck} />
                                                Giảm tới 300.000đ khi thanh to&#225;n qua VNPAY (&#193;p dụng từ 01/04-
                                                30/04) - (
                                                <a href="tin-tuc/chuong-trinh-uu-dai-giam-gia-qua-vnpay">
                                                    Xem chi tiết
                                                </a>
                                                )
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faCheck} />
                                                Trả g&#243;p qua Homepaylater giảm th&#234;m tới 500.000đ, duyệt nhanh
                                                chỉ 30s - (
                                                <a href="tin-tuc/uu-dai-tra-gop-voi-homepaylater-tai-hoang-ha-mobile">
                                                    Xem chi tiết
                                                </a>
                                                )
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faCheck} />
                                                Mở thẻ t&#237;n dụng VPBank nhận ưu đ&#227;i tới 1.500.000đ - (
                                                <a href="tin-tuc/mo-the-vpbank-nhan-uu-dai-toi-15-trieu-dong-tai-hoang-ha-mobile">
                                                    Xem chi tiết
                                                </a>
                                                )
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faCheck} />
                                                Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho
                                                h&#243;a đơn c&#243; tổng gi&#225; trị từ 15 Triệu) - &#193;p dụng từ
                                                01/04 - (
                                                <a href="tin-tuc/uu-dai-thanh-toan-qua-vi-dien-tu-moca-tang-cu-sac">
                                                    Xem chi tiết
                                                </a>
                                                )
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faCheck} />
                                                Giảm th&#234;m tới 800.000đ khi mở thẻ t&#237;n dụng TPBank EVO - Duyệt
                                                nhanh chỉ 15 ph&#250;t, LH Cửa h&#224;ng hoặc 19002091 để được hỗ trợ -
                                                (
                                                <a href="https://www.goevo.vn/hhm/hhm800k?gidzl=vqvRQefr41lXL59aZsCN5U5OLssMOHSI...D9ZtaG5m">
                                                    Xem chi tiết
                                                </a>
                                                )
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faCheck} />
                                                Hỗ trợ trả g&#243;p 0% qua 26 ng&#226;n h&#224;ng v&#224; c&#244;ng ty
                                                t&#224;i ch&#237;nh. - (<a href="mua-hang-tra-gop">Xem chi tiết</a>)
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <strong className="label">ƯU Đ&#195;I ĐI K&#200;M</strong>
                                        <ul>
                                            <li>
                                                <FontAwesomeIcon icon={faCheck} />
                                                Tặng sim WINTEL(Reddi cũ) 055 chưa bao gồm g&#243;i cước (Trừ shop SiS)
                                                Hoặc sim data Mobifone Hera 5G (2GB/ng&#224;y) (Chưa bao gồm th&#225;ng
                                                đầu ti&#234;n) - Lưu &#253;: &#225;p dụng mua trực tiếp tại cửa
                                                h&#224;ng. - (<a href="sim-the/sim-mobifone-hera-5g">Xem chi tiết</a>)
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faCheck} />
                                                Giảm th&#234;m tới 1.000.000đ khi tham gia Thu cũ - L&#234;n đời điện
                                                thoại Android v&#224; tất cả m&#225;y t&#237;nh bảng - (
                                                <a href="tin-tuc/thu-cu-doi-moi-android">Xem chi tiết</a>)
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faCheck} />
                                                Giảm th&#234;m 200.000đ cho tất c&#225;c sản phẩm M&#224;n h&#236;nh khi
                                                mua k&#232;m Laptop,MacBook, M&#225;y t&#237;nh bảng v&#224; điện thoại.
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faCheck} />
                                                Tiết kiệm l&#234;n tới 600.000đ khi mua Microsoft 365 (Office) k&#232;m
                                                Laptop, MacBook, M&#225;y t&#237;nh bảng, Điện thoại (&#193;p dụng từ
                                                10/4/2023 - 31/5/2023). - (
                                                <a href="tin-tuc/uu-dai-len-toi-600-000d-khi-mua-microsoft-office-tai-hoang-ha-mobile ">
                                                    Xem chi tiết
                                                </a>
                                                )
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-promotion">
                                    <div className="mg-top15">
                                        <ul></ul>
                                    </div>
                                </div>
                            </div>
                            <div className="product-shop">
                                <div className="warranty">
                                    <h4>THÔNG TIN BẢO HÀNH</h4>
                                    <p>
                                        <FontAwesomeIcon icon={faShield} />
                                        <span>
                                            <strong>Bảo h&#224;nh 13 th&#225;ng</strong>
                                        </span>
                                    </p>

                                    <p>
                                        <a href="chinh-sach-bao-hanh">
                                            <FontAwesomeIcon icon={faShield} />
                                            <strong>
                                                <span>Bao x&#224;i đổi trả trong 30 ng&#224;y </span>
                                            </strong>
                                        </a>
                                    </p>
                                </div>

                                <div className="check-stock" id="marketFilter">
                                    <div className="city">
                                        <p>Chọn màu và xem địa chỉ còn hàng</p>
                                        <span href="javascript:;" className="button">
                                            <FontAwesomeIcon icon={faLocationDot} />
                                            <label>Toàn bộ chi nhánh</label>
                                        </span>
                                        <div className="list">
                                            <ul>
                                                <li data-id="0" id="city_0">
                                                    <a href="javascript:marketFilters(0);">Xem tất cả</a>
                                                </li>
                                                <li
                                                    data-id="1"
                                                    id="city_1"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(1);">H&#224; Nội</a>
                                                </li>
                                                <li
                                                    data-id="50"
                                                    id="city_50"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(50);">TP HCM</a>
                                                </li>
                                                <li
                                                    data-id="57"
                                                    id="city_57"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(57);">An Giang</a>
                                                </li>
                                                <li
                                                    data-id="49"
                                                    id="city_49"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(49);">
                                                        B&#224; Rịa - Vũng T&#224;u
                                                    </a>
                                                </li>
                                                <li
                                                    data-id="15"
                                                    id="city_15"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(15);">Bắc Giang</a>
                                                </li>
                                                <li
                                                    data-id="62"
                                                    id="city_62"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(62);">Bạc Li&#234;u</a>
                                                </li>
                                                <li
                                                    data-id="18"
                                                    id="city_18"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(18);">Bắc Ninh</a>
                                                </li>
                                                <li
                                                    data-id="35"
                                                    id="city_35"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(35);">B&#236;nh Định</a>
                                                </li>
                                                <li
                                                    data-id="47"
                                                    id="city_47"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(47);">B&#236;nh Dương</a>
                                                </li>
                                                <li
                                                    data-id="45"
                                                    id="city_45"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(45);">B&#236;nh Phước</a>
                                                </li>
                                                <li
                                                    data-id="39"
                                                    id="city_39"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(39);">B&#236;nh Thuận</a>
                                                </li>
                                                <li
                                                    data-id="63"
                                                    id="city_63"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(63);">C&#224; Mau</a>
                                                </li>
                                                <li
                                                    data-id="59"
                                                    id="city_59"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX","TPOVA4PC"]'
                                                >
                                                    <a href="javascript:marketFilters(59);">Cần Thơ</a>
                                                </li>
                                                <li
                                                    data-id="32"
                                                    id="city_32"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX","TPOVA4PC"]'
                                                >
                                                    <a href="javascript:marketFilters(32);">Đ&#224; Nẵng</a>
                                                </li>
                                                <li
                                                    data-id="42"
                                                    id="city_42"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(42);">Đắk Lắk</a>
                                                </li>
                                                <li
                                                    data-id="43"
                                                    id="city_43"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(43);">Đắk N&#244;ng</a>
                                                </li>
                                                <li
                                                    data-id="7"
                                                    id="city_7"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(7);">Điện Bi&#234;n</a>
                                                </li>
                                                <li
                                                    data-id="48"
                                                    id="city_48"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(48);">Đồng Nai</a>
                                                </li>
                                                <li
                                                    data-id="56"
                                                    id="city_56"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(56);">Đồng Th&#225;p</a>
                                                </li>
                                                <li
                                                    data-id="41"
                                                    id="city_41"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(41);">Gia Lai</a>
                                                </li>
                                                <li
                                                    data-id="23"
                                                    id="city_23"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(23);">H&#224; Nam</a>
                                                </li>
                                                <li
                                                    data-id="28"
                                                    id="city_28"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(28);">H&#224; Tĩnh</a>
                                                </li>
                                                <li
                                                    data-id="19"
                                                    id="city_19"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(19);">Hải Dương</a>
                                                </li>
                                                <li
                                                    data-id="20"
                                                    id="city_20"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(20);">Hải Ph&#242;ng</a>
                                                </li>
                                                <li
                                                    data-id="11"
                                                    id="city_11"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(11);">Ho&#224; B&#236;nh</a>
                                                </li>
                                                <li
                                                    data-id="21"
                                                    id="city_21"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(21);">Hưng Y&#234;n</a>
                                                </li>
                                                <li
                                                    data-id="37"
                                                    id="city_37"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(37);">Kh&#225;nh H&#242;a</a>
                                                </li>
                                                <li
                                                    data-id="58"
                                                    id="city_58"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(58);">Ki&#234;n Giang</a>
                                                </li>
                                                <li
                                                    data-id="44"
                                                    id="city_44"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(44);">L&#226;m Đồng</a>
                                                </li>
                                                <li
                                                    data-id="6"
                                                    id="city_6"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(6);">L&#224;o Cai</a>
                                                </li>
                                                <li
                                                    data-id="51"
                                                    id="city_51"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(51);">Long An</a>
                                                </li>
                                                <li
                                                    data-id="24"
                                                    id="city_24"
                                                    className="outstock"
                                                    data-sku='["TPOVA4PC"]'
                                                >
                                                    <a href="javascript:marketFilters(24);">Nam Định</a>
                                                </li>
                                                <li
                                                    data-id="27"
                                                    id="city_27"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(27);">Nghệ An</a>
                                                </li>
                                                <li
                                                    data-id="25"
                                                    id="city_25"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(25);">Ninh B&#236;nh</a>
                                                </li>
                                                <li
                                                    data-id="38"
                                                    id="city_38"
                                                    className="outstock"
                                                    data-sku='["TPOVA4PC"]'
                                                >
                                                    <a href="javascript:marketFilters(38);">Ninh Thuận</a>
                                                </li>
                                                <li
                                                    data-id="16"
                                                    id="city_16"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(16);">Ph&#250; Thọ</a>
                                                </li>
                                                <li
                                                    data-id="36"
                                                    id="city_36"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(36);">Ph&#250; Y&#234;n</a>
                                                </li>
                                                <li
                                                    data-id="29"
                                                    id="city_29"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(29);">Quảng B&#236;nh</a>
                                                </li>
                                                <li
                                                    data-id="33"
                                                    id="city_33"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(33);">Quảng Nam</a>
                                                </li>
                                                <li
                                                    data-id="34"
                                                    id="city_34"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(34);">Quảng Ng&#227;i</a>
                                                </li>
                                                <li
                                                    data-id="14"
                                                    id="city_14"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(14);">Quảng Ninh</a>
                                                </li>
                                                <li
                                                    data-id="30"
                                                    id="city_30"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(30);">Quảng Trị</a>
                                                </li>
                                                <li
                                                    data-id="61"
                                                    id="city_61"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(61);">S&#243;c Trăng</a>
                                                </li>
                                                <li
                                                    data-id="9"
                                                    id="city_9"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(9);">Sơn La</a>
                                                </li>
                                                <li
                                                    data-id="46"
                                                    id="city_46"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(46);">T&#226;y Ninh</a>
                                                </li>
                                                <li
                                                    data-id="22"
                                                    id="city_22"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(22);">Th&#225;i B&#236;nh</a>
                                                </li>
                                                <li
                                                    data-id="12"
                                                    id="city_12"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(12);">Th&#225;i Nguy&#234;n</a>
                                                </li>
                                                <li
                                                    data-id="26"
                                                    id="city_26"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(26);">Thanh H&#243;a</a>
                                                </li>
                                                <li
                                                    data-id="31"
                                                    id="city_31"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(31);">Thừa Thi&#234;n Huế</a>
                                                </li>
                                                <li
                                                    data-id="52"
                                                    id="city_52"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(52);">Tiền Giang</a>
                                                </li>
                                                <li
                                                    data-id="5"
                                                    id="city_5"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(5);">Tuy&#234;n Quang</a>
                                                </li>
                                                <li
                                                    data-id="55"
                                                    id="city_55"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(55);">Vĩnh Long</a>
                                                </li>
                                                <li
                                                    data-id="17"
                                                    id="city_17"
                                                    className="instock"
                                                    data-sku='["TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(17);">Vĩnh Ph&#250;c</a>
                                                </li>
                                                <li
                                                    data-id="10"
                                                    id="city_10"
                                                    className="instock"
                                                    data-sku='["TPOVA4PC","TPOVA4PX"]'
                                                >
                                                    <a href="javascript:marketFilters(10);">Y&#234;n B&#225;i</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="stock-sum" id="stock-sum"></div>

                                    <div className="store">
                                        <ul>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        348 Hồ T&#249;ng Mậu, Cầu Diễn, Từ Li&#234;m, H&#224; Nội
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />

                                                            <a href="tel:0968.218.919">0968.218.919</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="348 Hồ T&#249;ng Mậu, Cầu Diễn, Từ Li&#234;m, H&#224; Nội"
                                                            href="348-ho-tung-mau-cau-dien-tu-liem"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        102 Phố Xốm, Ph&#250; L&#227;m, H&#224; Đ&#244;ng, H&#224; Nội
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0818.576.586">0818.576.586</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="	102 Phố Xốm, Ph&#250; L&#227;m, H&#224; Đ&#244;ng, H&#224; Nội"
                                                            href="102-pho-xom-phu-lam-ha-dong-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>392 Trương Định, Ho&#224;ng Mai, H&#224; Nội</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:083.263.9292">083.263.9292</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="392 Trương Định, Ho&#224;ng Mai, H&#224; Nội"
                                                            href="392-truong-dinh-hoang-mai"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>368 Nguyễn Tr&#227;i, Thanh Xu&#226;n, H&#224; Nội</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:093.628.1628">093.628.1628</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="368 Nguyễn Tr&#227;i, Thanh Xu&#226;n, H&#224; Nội"
                                                            href="368-nguyen-trai-thanh-xuan-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 15 Trần Ph&#250;, Ba Đ&#236;nh, H&#224; Nội (Shop cũ 12 Điện
                                                        Bi&#234;n Phủ)
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:089.66.777.12">089.66.777.12</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 15 Trần Ph&#250;, Ba Đ&#236;nh, H&#224; Nội (Shop cũ 12 Điện Bi&#234;n Phủ)"
                                                            href="12-dien-bien-phu-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>194 L&#234; Duẩn, H&#224; Nội</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0962.066.208">0962.066.208</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="194 L&#234; Duẩn, H&#224; Nội"
                                                            href="194-le-duan-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>382 Nguyễn Văn Cừ, H&#224; Nội</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0915.963.222">0915.963.222</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="382 Nguyễn Văn Cừ, H&#224; Nội"
                                                            href="382-nguyen-van-cu-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>122 Th&#225;i H&#224;, H&#224; Nội </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0973.790.122">0973.790.122</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="122 Th&#225;i H&#224;, H&#224; Nội"
                                                            href="122-thai-ha-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>126 Phố Huế, H&#224; Nội</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0968.668.995">0968.668.995</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a title="126 Phố Huế, H&#224; Nội" href="95b-pho-hue-ha-noi">
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>392 Cầu Giấy, H&#224; Nội</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0968.32.33.99">0968.32.33.99</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a title="	392 Cầu Giấy, H&#224; Nội" href="392-cau-giay-ha-noi">
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>28 Trần Ph&#250;, H&#224; Đ&#244;ng, H&#224; Nội </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0911.266.669">0911.266.669</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="28 Trần Ph&#250;, H&#224; Đ&#244;ng, H&#224; Nội"
                                                            href="28-tran-phu-ha-dong"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 20 Khu 7, Thị trấn Trạm Tr&#244;i, Huyện Ho&#224;i Đức,
                                                        H&#224; Nội
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0899.559.669">0899.559.669</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 20 Khu 7, Thị trấn Trạm Tr&#244;i, Huyện Ho&#224;i Đức, H&#224; Nội"
                                                            href="so-20-khu-7-thi-tran-tram-troi-huyen-hoai-duc-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        176 Ch&#249;a Th&#244;ng, P. Sơn Lộc, TX Sơn T&#226;y, H&#224;
                                                        Nội
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:088.686.39.38">088.686.39.38</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="176 Ch&#249;a Th&#244;ng, P. Sơn Lộc, TX Sơn T&#226;y, H&#224; Nội"
                                                            href="176-chua-thong-p-son-loc-tx-son-tay-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>213 X&#227; Đ&#224;n, P.Nam Đồng, H&#224; Nội </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0936.231.213">0936.231.213</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="213 X&#227; Đ&#224;n, P.Nam Đồng, H&#224; Nội"
                                                            href="797-799-xa-dan-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        797 - 799 Giải Ph&#243;ng, P.Gi&#225;p B&#225;t, Q.Ho&#224;ng
                                                        Mai, H&#224; Nội
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0936.396.799">0936.396.799</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="797 - 799 Giải Ph&#243;ng, P.Gi&#225;p B&#225;t, Q.Ho&#224;ng Mai, H&#224; Nội"
                                                            href="213-giai-phong-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        101 Kim M&#227; - Phường Kim M&#227; - Quận Ba Đ&#204;nh -
                                                        H&#224; Nội
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:088.6868.101">088.6868.101</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="101 Kim M&#227; - Phường Kim M&#227; - Quận Ba Đ&#204;nh - H&#224; Nội"
                                                            href="101-kim-ma-phuong-kim-ma-quan-ba-dinh-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>336 Phạm Văn Đồng, Quận Bắc Từ Li&#234;m, H&#224; Nội</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0886.868.010">0886.868.010</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="336 Phạm Văn Đồng, Quận Bắc Từ Li&#234;m, H&#224; Nội"
                                                            href="1a-co-nhue-quan-bac-tu-liem-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        259 Lạc long qu&#226;n, Phường Nghĩa Đ&#244;, Quận Cầu Giấy,
                                                        H&#224; Nội
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0968.590.259">0968.590.259</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="259 Lạc long qu&#226;n, Phường Nghĩa Đ&#244;, Quận Cầu Giấy, H&#224; Nội"
                                                            href="259-lac-long-quan-phuong-nghia-do-quan-cau-giay-ha-noi-khai-truong-ngay-02-10"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>182 Cao Lỗ, H. Đ&#244;ng Anh, H&#224; Nội</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:090.228.93.39">090.228.93.39</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="182 Cao Lỗ, H. Đ&#244;ng Anh, H&#224; Nội"
                                                            href="182-cao-lo-h-dong-anh-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>208 Trần Lư. Thường T&#237;n, H&#224; Nội</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:088.6868.223">088.6868.223</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="208 Trần Lư. Thường T&#237;n, H&#224; Nội"
                                                            href="208-tran-lu-thuong-tin-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>196 Quang Trung, H&#224; Đ&#244;ng, H&#224; Nội</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:098.2468.196">098.2468.196</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="196 Quang Trung, H&#224; Đ&#244;ng, H&#224; Nội"
                                                            href="196-quang-trung-ha-dong-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>89 Tam Trinh, Ho&#224;ng Mai, H&#224; Nội</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0815.86.79.89">0815.86.79.89</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="89 Tam Trinh, Ho&#224;ng Mai, H&#224; Nội"
                                                            href="89-tam-trinh-hoang-mai-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>109 Trần Duy Hưng, Cầu Giấy, H&#224; Nội</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0985568109">0985568109</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="109 Trần Duy Hưng, Cầu Giấy, H&#224; Nội"
                                                            href="109-tran-duy-hung-cau-giay-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>258 Ng&#244; Gia Tự, Long Bi&#234;n, H&#224; Nội</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0836886258">0836886258</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="258 Ng&#244; Gia Tự, Long Bi&#234;n, H&#224; Nội"
                                                            href="258-ngo-gia-tu-long-bien-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>651 Nguyễn Văn Linh, Long Bi&#234;n, H&#224; Nội</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0968.789.651">0968.789.651</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="651 Nguyễn Văn Linh, Long Bi&#234;n, H&#224; Nội"
                                                            href="651-nguyen-van-linh-long-bien-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 59 Quang Trung, TT V&#226;n Đ&#236;nh, Ứng H&#242;a, H&#224;
                                                        Nội
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0936045959">0936045959</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 59 Quang Trung, TT V&#226;n Đ&#236;nh, Ứng H&#242;a, H&#224; Nội"
                                                            href="so-59-quang-trung-tt-van-dinh-ung-hoa-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 110 Cầu Bươu, T&#226;n Triều, Thanh Tr&#236;, H&#224; Nội
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0978866110">0978866110</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 110 Cầu Bươu, T&#226;n Triều, Thanh Tr&#236;, H&#224; Nội"
                                                            href="so-110-cau-buou-tan-trieu-thanh-tri-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 372 H&#224; Huy Tập, TT Y&#234;n Vi&#234;n, Gia L&#226;m,
                                                        H&#224; Nội
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:086.8866.372">086.8866.372</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 372 H&#224; Huy Tập, TT Y&#234;n Vi&#234;n, Gia L&#226;m, H&#224; Nội"
                                                            href="so-372-ha-huy-tap-tt-yen-vien-gia-lam-ha-noi"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_1" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 52 H&#224;ng Đậu - Đồng Xu&#226;n - Ho&#224;n Kiếm - H&#224;
                                                        Nội
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:090.215.5252">090.215.5252</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 52 H&#224;ng Đậu - Đồng Xu&#226;n - Ho&#224;n Kiếm - H&#224; Nội"
                                                            href="so-52-hang-dau-dong-xuan-hoan-kiem-ha-noi-sap-khai-truong"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        156 Trần N&#227;o, P. An Kh&#225;nh, Tp Thủ Đức, Hồ Ch&#237;
                                                        Minh
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0909222156">0909222156</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="156 Trần N&#227;o, P. An Kh&#225;nh, Tp Thủ Đức, Hồ Ch&#237; Minh"
                                                            href="156-tran-nao-p-an-khanh-quan-2-tp-hcm"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        1680 Huỳnh Tấn Ph&#225;t, TT. Nh&#224; B&#232;, Nh&#224;
                                                        B&#232;, Tp. HCM
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0909051680">0909051680</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="1680 Huỳnh Tấn Ph&#225;t, TT. Nh&#224; B&#232;, Nh&#224; B&#232;, Tp. HCM"
                                                            href="1680-huynh-tan-phat-tt-nha-be-nha-be-tp-hcm"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        572-574 Tỉnh Lộ 10, Phường B&#236;nh Trị Đ&#244;ng, Quận
                                                        B&#236;nh T&#226;n, Tp Hồ Ch&#237; Minh
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0705.572.574">0705.572.574</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="572-574 Tỉnh Lộ 10, Phường B&#236;nh Trị Đ&#244;ng, Quận B&#236;nh T&#226;n, Tp Hồ Ch&#237; Minh"
                                                            href="572-574-tinh-lo-10-binh-tan-ho-chi-minh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>188Ter Trần Quang Khải, Quận 1, TP HCM</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0942.89.2255">0942.89.2255</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="188Ter Trần Quang Khải, Quận 1, TP HCM"
                                                            href="188ter-tran-quang-khai-quan-1-tp-hcm"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>503 &#194;u Cơ, Q.T&#226;n Ph&#250;. HCM</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0826.30.2255">0826.30.2255</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="503 &#194;u Cơ, Q.T&#226;n Ph&#250;. HCM"
                                                            href="503-au-co-q-tan-phu-hcm"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        663-665 Hậu Giang, Phường 11, Quận 6, TP.Hồ Ch&#237; Minh
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0768.663.665">0768.663.665</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="663-665 Hậu Giang, Phường 11, Quận 6, TP.Hồ Ch&#237; Minh"
                                                            href="663-665-hau-giang-phuong-11-quan-6-tp-ho-chi-minh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        397 Nguyễn Thị T&#250;, Phường B&#236;nh Hưng H&#242;a B, Quận
                                                        B&#236;nh T&#226;n, TP.Hồ Ch&#237; Minh
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0787.395.397">0787.395.397</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="397 Nguyễn Thị T&#250;, Phường B&#236;nh Hưng H&#242;a B, Quận B&#236;nh T&#226;n, TP.Hồ Ch&#237; Minh"
                                                            href="397-nguyen-thj-tu-phuong-binh-hung-hoa-b-quan-binh-tan-tp-ho-chi-minh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>170C Quang Trung, P10, Q.G&#242; Vấp, TP.HCM</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0898899170">0898899170</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="170C Quang Trung, P10, Q.G&#242; Vấp, TP.HCM"
                                                            href="170c-quang-trung-p10-q-go-vap-tp-hcm"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 384 V&#245; Văn Ng&#226;n, P.B&#236;nh Thọ, Q.Thủ Đức, TP.HCM
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0909898384 ">0909898384 </a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 384 V&#245; Văn Ng&#226;n, P.B&#236;nh Thọ, Q.Thủ Đức, TP.HCM"
                                                            href="so-384-vo-van-ngan-p-binh-tho-q-thu-duc-tp-hcm"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        419 Nguyễn Ảnh Thủ (đối diện chợ Trung Ch&#225;nh), Quận 12,
                                                        TP.HCM
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0902.840.419">0902.840.419</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="419 Nguyễn Ảnh Thủ (đối diện chợ Trung Ch&#225;nh) , HCM"
                                                            href="419-nguyen-anh-thu-doi-dien-cho-trung-chanh-quan-12-tp-hcm"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>505 L&#234; Hồng Phong, Phường 2, Quận 10, Tp.HCM</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0702825505">0702825505</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="505 L&#234; Hồng Phong, Phường 2, Quận 10, Tp.HCM "
                                                            href="505-le-hong-phong-phuong-2-quan-10-tp-hcm"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        347 Ho&#224;ng Văn Thụ, Quận T&#226;n B&#236;nh, TP. Hồ Ch&#237;
                                                        Minh (V&#242;ng xoay Lăng Cha Cả)
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:083.830.22.55">083.830.22.55</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="347 Ho&#224;ng Văn Thụ, Quận T&#226;n B&#236;nh, TP. HCM (V&#242;ng xoay Lăng Cha Cả)"
                                                            href="347-hoang-van-thu-quan-tan-binh-tp-ho-chi-minh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        243 Bạch Đằng, Phường 15, Quận B&#236;nh Thạnh, Tp HCM
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0826.80.2255">0826.80.2255</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="243 Bạch Đằng, Phường 15, Quận B&#236;nh Thạnh, Tp HCM"
                                                            href="243-bach-dang-phuong-15-quan-binh-thanh-tp-hcm"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        621D C&#225;ch Mạng Th&#225;ng 8, Phường 15, Quận 10, TP HCM
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0972.89.22.55">0972.89.22.55</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="621D C&#225;ch Mạng Th&#225;ng 8, Phường 15, Quận 10, TP HCM"
                                                            href="621d-cach-mang-thang-8-phuong-15-quan-10-tp-ho-chi-minh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>1060 Đường 3/2, Phường 12, Quận 11, TP HCM</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0932892255">0932892255</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="1060 Đường 3/2, Phường 12, Quận 11, TP HCM"
                                                            href="1142-1144-duong-3-2-phuong-12-quan-11-tp-ho-chi-minh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>436 Quang Trung, Phường 10, Quận G&#242; Vấp, TP.HCM</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:088.996.8436">088.996.8436</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="436 Quang Trung, G&#242; Vấp, TP.HCM"
                                                            href="436-quang-trung-phuong-10-quan-go-vap-tp-hcm"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="outstock city_50" data-sku='["TPOVA4PC"]'>
                                                <span>
                                                    <label>
                                                        215 L&#234; Văn Việt, phường Hiệp Ph&#250;, Quận 9, TP HCM
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0966.356.215">0966.356.215</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="215 L&#234; Văn Việt, phường Hiệp Ph&#250;, Quận 9, TP HCM"
                                                            href="215-le-van-viet-phuong-hiep-phu-quan-9"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_50" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        867 Lũy B&#225;n B&#237;ch, P. T&#226;n Th&#224;nh, Q. T&#226;n
                                                        Ph&#250;, TP HCM
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0828.25.2255">0828.25.2255</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="867 Lũy B&#225;n B&#237;ch, Q. T&#226;n Ph&#250;, TP. HCM"
                                                            href="867-luy-ban-bich-p-tan-thanh-q-tan-phu-tp-hcm"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_57" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        1415 Trần Hưng Đạo, Phường Mỹ Long, TP. Long Xuy&#234;n, Tỉnh An
                                                        Giang
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:090.229.1415">090.229.1415</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="1415 Trần Hưng Đạo, P.Mỹ Long, TP. Long Xuy&#234;n, Tỉnh An Giang "
                                                            href="1415-tran-hung-dao-phuong-my-long-tp-long-xuyen-tinh-an-giang"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_49" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 158 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP. B&#224; Rịa,
                                                        Tỉnh B&#224; Rịa - Vũng T&#224;u
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:079216.22.55">079216.22.55</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 158 Nguyễn Thanh Đằng, TP. B&#224; Rịa"
                                                            href="so-158-nguyen-thanh-dang-phuong-phuoc-hiep-tp-ba-ria-tinh-ba-ria-vung-tau"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_49" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        605 Trương C&#244;ng Định, Phường 7, TP. Vũng T&#224;u
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:090.889.22.55">090.889.22.55</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="	605 Trương C&#244;ng Định, Phường 7, TP. Vũng T&#224;u"
                                                            href="605-truong-cong-dinh-phuong-7-tp-vung-tau"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_49" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 631 đường 30 Th&#225;ng 4, P. Rạch Dừa, Tp. Vũng T&#224;u,
                                                        Tỉnh B&#224; Rịa – Vũng T&#224;u
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0933032255">0933032255</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 631 đường 30 Th&#225;ng 4, P. Rạch Dừa, Tp. Vũng T&#224;u, Tỉnh B&#224; Rịa – Vũng T&#224;u "
                                                            href="so-631-duong-30-thang-4-p-rach-dua-tp-vung-tau-tinh-ba-ria-–-vung-tau"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_15" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>Số 2 Nguyễn Văn Cừ, TP Bắc Giang</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:093.668.2091">093.668.2091</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 2 Nguyễn Văn Cừ, TP Bắc Giang"
                                                            href="so-2-nguyen-van-cu-tp-bac-giang"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_62" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        12-13 L&#244; B, Đường B&#224; Triệu, P.3, TP. Bạc Li&#234;u
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:079.492.88.99">079.492.88.99</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="12-13 L&#244; B, Đường B&#224; Triệu, P.3, TP. Bạc Li&#234;u"
                                                            href="12-13-lo-b-duong-ba-trieu-p-3-tp-bac-lieu"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_18" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 155, Khu 1, Thị Trấn Phố Mới, Huyện Quế V&#245;, Tỉnh Bắc
                                                        Ninh
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:079.636.3366">079.636.3366</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 155, Khu 1, Thị Trấn Phố Mới, Huyện Quế V&#245;, Tỉnh Bắc Ninh"
                                                            href="so-155-khu-1-thi-tran-pho-moi-huyen-que-vo-tinh-bac-ninh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_18" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        40 Trần Ph&#250; - Đ&#244;ng Ng&#224;n - Từ Sơn - Bắc Ninh
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0886869338">0886869338</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="40 Trần Ph&#250; - Đ&#244;ng Ng&#224;n - Từ Sơn - Bắc Ninh"
                                                            href="40-tran-phu-dong-ngan-tu-son-bac-ninh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_18" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>207 Nguyễn Văn Cừ, P. V&#245; Cường, TP. Bắc Ninh</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0936.83.12.12">0936.83.12.12</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="207 Nguyễn Văn Cừ, P. V&#245; Cường, TP. Bắc Ninh"
                                                            href="207-duong-nguyen-van-cu-p-vo-cuong-tp-bac-ninh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_35" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        190-192 Tăng Bạt Hổ - P. L&#234; Hồng Phong - TP. Quy Nhơn
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0896.23.83.83">0896.23.83.83</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="190-192 Tăng Bạt Hổ - P. L&#234; Hồng Phong - TP. Quy Nhơn"
                                                            href="190-192-tang-bat-ho-p-le-hong-phong-tp-quy-nhon"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_35" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 232 Nguyễn Th&#225;i Học, P.Ng&#244; M&#226;y, TP.Quy Nhơn,
                                                        B&#236;nh Định
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0898.19.83.83">0898.19.83.83</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 232 Nguyễn Th&#225;i Học, P.Ng&#244; M&#226;y, TP.Quy Nhơn, B&#236;nh Định"
                                                            href="so-232-nguyen-thai-hoc-p-ngo-may-tp-quy-nhon-binh-dinh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_47" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>160 Nguyễn An Ninh, Dĩ An, B&#236;nh Dương</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:093351.22.55">093351.22.55</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="160 Nguyễn An Ninh, Dĩ An, B&#236;nh Dương"
                                                            href="160-nguyen-an-ninh-di-an-binh-duong"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_47" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        491 Đại lộ B&#236;nh Dương, Ph&#250; Cường, TP. Thủ Dầu Một,
                                                        B&#236;nh Dương
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:090857.22.55">090857.22.55</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="491 Đại lộ B&#236;nh Dương, Ph&#250; Cường, TP. Thủ Dầu Một, B&#236;nh Dương"
                                                            href="491-dai-lo-binh-duong-phu-cuong-thu-dau-mot-binh-duong"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_47" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        57C-57D Nguyễn Văn Tiết, KP. B&#236;nh H&#242;a, P.L&#225;i
                                                        Thi&#234;u, TP Thuận An, B&#236;nh Dương
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:078.67.222.55">078.67.222.55</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="57C-57D Nguyễn Văn Tiết, KP. B&#236;nh H&#242;a, P.L&#225;i Thi&#234;u, TP Thuận An, B&#236;nh Dương"
                                                            href="57c-57d-nguyen-van-tiet-kp-binh-hoa-p-lai-thieu-tp-thuan-an-binh-duong"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_47" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 499 Đường Ph&#250; Lợi, P. Ph&#250; Lợi, Tp. Thủ Dầu Một,
                                                        B&#236;nh Dương
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel: 0786.07.2255">0786.07.2255</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 499 Đường Ph&#250; Lợi, P. Ph&#250; Lợi, Tp. Thủ Dầu Một, B&#236;nh Dương"
                                                            href="so-499-duong-phu-loi-p-phu-loi-tp-thu-dau-mot-binh-duong"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_45" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        1057 Ph&#250; Riềng Đỏ, P.T&#226;n B&#236;nh, TP Đồng Xo&#224;i,
                                                        B&#236;nh Phước
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:079.757.22.55">079.757.22.55</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="1057 Ph&#250; Riềng Đỏ, TP Đồng Xo&#224;i, B&#236;nh Phước"
                                                            href="1057-phu-rieng-do-p-tan-binh-tp-dong-xoai-binh-phuoc"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_39" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        168 Trần Hưng Đạo, Ph&#250; Thủy, Phan Thiết, B&#236;nh Thuận
                                                        (Shop cũ 198 T&#244;n Đức Thắng)
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:093794.22.55">093794.22.55</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="168 Trần Hưng Đạo, TP Phan Thiết, B&#236;nh Thuận"
                                                            href="198-ton-duc-thang-phu-thuy-phan-thiet-binh-thuan"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_63" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>132c Nguyễn Tất Th&#224;nh, Phường 8, TP. C&#224; Mau</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0763.928899">0763.928899</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="132c Nguyễn Tất Th&#224;nh, Phường 8, TP. C&#224; Mau"
                                                            href="132c-nguyen-tat-thanh-phuong-8-tp-ca-mau"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_59" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        To&#224; nh&#224; STS, 11B Đại Lộ Ho&#224; B&#236;nh, T&#226;n
                                                        An, Ninh Kiều, Cần Thơ (Shop SIS MobiFone)
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0794.30.88.99">0794.30.88.99</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="To&#224; nh&#224; STS, 11B Đại Lộ Ho&#224; B&#236;nh, T&#226;n An, Ninh Kiều, Cần Thơ"
                                                            href="11-dai-lo-hoa-binh-tan-an-ninh-kieu-can-tho-shop-sis-mobifone"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_59" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>221 Đường 3 Th&#225;ng 2 - Ninh Kiều - Cần Thơ</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:08.285.222.55">08.285.222.55</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="221 Đường 3 Th&#225;ng 2 - Ninh Kiều - Cần Thơ"
                                                            href="221-duong-3-thang-2-ninh-kieu-can-tho"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_32" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>153-155 Nguyễn Văn Linh, TP Đ&#224; Nẵng</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0788.655.155">0788.655.155</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="153-155 Nguyễn Văn Linh, Đ&#224; Nẵng"
                                                            href="153-155-nguyen-van-linh-tp-da-nang"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_32" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 580-582 Điện Bi&#234;n Phủ, Thanh Kh&#234; Đ&#244;ng, Thanh
                                                        Kh&#234;, Đ&#224; Nẵng (Đối diện Tượng đ&#224;i Mẹ Nhu)
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0905.582.580">0905.582.580</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 580 - 582 Điện Bi&#234;n Phủ, Thanh Kh&#234; Đ&#244;ng, Thanh Kh&#234;, Đ&#224; Nẵng (Đối diện Tượng đ&#224;i Mẹ Nhu)"
                                                            href="580-582-dien-bien-phu-thanh-khe-dong-thanh-khe-da-nang"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_32" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        460 462 Đ.T&#244;n Đức Thắng, P.Ho&#224; Kh&#225;nh Nam,
                                                        Q.Li&#234;n Chiểu, TP Đ&#224; Nẵng
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0777.499.899 ">0777.499.899 </a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 460 - 462 Đ.T&#244;n Đức Thắng, P.Ho&#224; Kh&#225;nh Nam, Q.Li&#234;n Chiểu, TP Đ&#224; Nẵng"
                                                            href="460-462-duong-ton-duc-thang-phuong-hoa-khanh-nam-quan-lien-chieu-tp-da-nang"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_42" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>16 Trường Chinh, TP Bu&#244;n Ma Thuột, Đắk Lắk </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:089 639 8383">089 639 8383</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="16 Trường Chinh, TP Bu&#244;n Ma Thuột, Đăk Lăk"
                                                            href="16-truong-chinh-tp-buon-ma-thuot"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_43" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        25 Huỳnh Th&#250;c Kh&#225;ng, P.Nghĩa Th&#224;nh, Gia Nghĩa,
                                                        Đăk N&#244;ng
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0896.48.8383">0896.48.8383</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="25 Huỳnh Th&#250;c Kh&#225;ng, P. Nghĩa Th&#224;nh, Gia Nghĩa, Đăk N&#244;ng"
                                                            href="25-huynh-thuc-khang-p-nghia-thanh-gia-nghia-dak-nong"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_7" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 896 Đ. V&#245; Nguy&#234;n Gi&#225;p, P. Mường Thanh, Tp.
                                                        Điện Bi&#234;n Phủ, Tỉnh Điện Bi&#234;n (Đối diện quảng trưởng
                                                        07-05)
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:089.982.9966">089.982.9966</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title=" Số 896 Đ. V&#245; Nguy&#234;n Gi&#225;p, P. Mường Thanh, Tp. Điện Bi&#234;n Phủ, Tỉnh Điện Bi&#234;n (Đối diện quảng trưởng 07-05)"
                                                            href="so-896-duong-vo-nguyen-giap-phuong-muong-thanh-thanh-pho-dien-bien-phu-tinh-dien-bien"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_48" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 188 đường B&#249;i Văn Ho&#224;, Khu phố 3A, Long B&#236;nh
                                                        T&#226;n, Tp. Bi&#234;n Ho&#224;
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0933812255">0933812255</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 188 đường B&#249;i Văn Ho&#224;, Khu phố 3A, Long B&#236;nh T&#226;n, Tp. Bi&#234;n Ho&#224;"
                                                            href="so-188-duong-bui-van-hoa-khu-pho-3a-long-binh-tan-tp-bien-hoa"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_48" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        92 Nguyễn &#193;i Quốc, KP 8A, Phường T&#226;n Bi&#234;n, Tp.
                                                        Bi&#234;n H&#242;a, Đồng Nai (Gần c&#244;ng vi&#234;n 30/4)
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0933362255">0933362255</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title=" 92 Nguyễn &#193;i Quốc, KP 8A, Phường T&#226;n Bi&#234;n, Tp. Bi&#234;n H&#242;a, Đồng Nai (Gần c&#244;ng vi&#234;n 30/4)"
                                                            href="so-92-duong-nguyen-ai-quoc-pho-8a-p-tan-bien-tp-bien-hoa-tinh-dong-nai"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_48" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        149 H&#249;ng Vương, Th&#224;nh Phố Long Kh&#225;nh, Tỉnh Đồng
                                                        Nai
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0908592255">0908592255</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="149 H&#249;ng Vương, Th&#224;nh Phố Long Kh&#225;nh, Tỉnh Đồng Nai"
                                                            href="149-hung-vuong-thanh-pho-long-khanh-tinh-dong-nai"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_48" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        692 Phạm Văn Thuận, Tam Hiệp, TP Bi&#234;n Ho&#224;, Đồng Nai
                                                        (Gần chợ T&#226;n Mai)
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:082.520.2255">082.520.2255</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="692 Phạm Văn Thuận, Tam Hiệp, TP Bi&#234;n Ho&#224;, Đồng Nai (Gần chợ T&#226;n Mai)"
                                                            href="692-pham-van-thuan-tam-hiep-bien-hoa-dong-nai-gan-cho-tan-mai"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_48" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>260D Phạm Văn Thuận, TP. Bi&#234;n Ho&#224;, Đồng Nai</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:079269.22.55">079269.22.55</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="	260D Phạm Văn Thuận, TP. Bi&#234;n Ho&#224;, Đồng Nai"
                                                            href="260d-pham-van-thuan-so-moi-1331-gan-nga-tu-vincom-tp-bien-hoa-dong-nai"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_48" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>246-256 L&#234; Duẩn, TT. Long Th&#224;nh, Đồng Nai</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:093.732.2255">093.732.2255</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="246-256 L&#234; Duẩn, TT. Long Th&#224;nh, Đồng Nai"
                                                            href="246-256-le-duan-tt-long-thanh-dong-nai"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_56" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>85 Nguyễn Huệ, P.1, TP. Cao L&#227;nh, Đồng Th&#225;p</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0786.91.88.99">0786.91.88.99</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="85 Nguyễn Huệ, P.1, TP. Cao L&#227;nh, Đồng Th&#225;p"
                                                            href="85-nguyen-hue-p-1-tp-cao-lanh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_41" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        82 Trần Ph&#250;, phường Di&#234;n Hồng, TP.Pleiku, Tỉnh Gia
                                                        Lai, Việt Nam
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0899.32.8383">0899.32.8383</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="82 Trần Ph&#250;, phường Di&#234;n Hồng, Th&#224;nh phố Pleiku, Tỉnh Gia Lai"
                                                            href="82-tran-phu-phuong-dien-hong-tp-pleiku-tinh-gia-lai-viet-nam"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_23" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>222 L&#234; Ho&#224;n, Tp. Phủ L&#253;, H&#224; Nam </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0789.15.98.98">0789.15.98.98</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="222 L&#234; Ho&#224;n, Tp. Phủ L&#253;, H&#224; Nam"
                                                            href="222-le-hoan-tp-phu-ly-ha-nam"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_28" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>161 Trần Ph&#250;, TP. H&#224; Tĩnh</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:089963.91.91">089963.91.91</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="161 Trần Ph&#250;, TP. H&#224; Tĩnh"
                                                            href="161-tran-phu-tp-ha-tinh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_19" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>382 Trường Chinh (Số 5 cũ), TP Hải Dương</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0906.026.382">0906.026.382</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="382 Trường Chinh (Số 5 cũ), TP Hải Dương"
                                                            href="382-truong-chinh-so-5-cu-tp-hai-duong"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_20" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>72 Lạch Tray, Ng&#244; Quyền, TP Hải Ph&#242;ng</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:079.323.72.72">079.323.72.72</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="72 Lạch Tray, Ng&#244; Quyền, TP Hải Ph&#242;ng"
                                                            href="72-lach-tray-ngo-quyen-tp-hai-phong"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_20" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>258 T&#244; Hiệu - L&#234; Ch&#226;n - Hải Ph&#242;ng</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0961.79.15.16">0961.79.15.16</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="258 T&#244; Hiệu - L&#234; Ch&#226;n - Hải Ph&#242;ng"
                                                            href="258-to-hieu-le-chan-hai-phong"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_20" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        67 Bạch Đằng, TT N&#250;i Đ&#232;o, Thủy Nguy&#234;n, Hải
                                                        Ph&#242;ng
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0904202067">0904202067</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="67 Bạch Đằng, TT N&#250;i Đ&#232;o, Thủy Nguy&#234;n, Hải Ph&#242;ng"
                                                            href="67-bach-dang-tt-nui-deo-thuy-nguyen-hai-phong"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_11" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        479 - 481 C&#249; Ch&#237;nh Lan - Tp.H&#242;a B&#236;nh - Tỉnh
                                                        H&#242;a B&#236;nh
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel: 0976651585">0976651585</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="479 - 481 C&#249; Ch&#237;nh Lan - Tp.H&#242;a B&#236;nh - Tỉnh H&#242;a B&#236;nh"
                                                            href="479-481-cu-chinh-lan-tp-hoa-binh-tinh-hoa-binh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_21" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 2, Phố Nối, Phường Bần Y&#234;n Nh&#226;n, Thị X&#227; Mỹ
                                                        H&#224;o, Tỉnh Hưng Y&#234;n
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0766.38.6633">0766.38.6633</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 2, Phố Nối, Phường Bần Y&#234;n Nh&#226;n, Thị X&#227; Mỹ H&#224;o, Tỉnh Hưng Y&#234;n"
                                                            href="so-2-pho-noi-phuong-ban-yen-nhan-thi-xa-my-hao-tinh-hung-yen"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="outstock city_37" data-sku='["TPOVA4PC"]'>
                                                <span>
                                                    <label>
                                                        69 Quang Trung, Lộc Thọ, TP. Nha Trang, T. Kh&#225;nh Ho&#224;
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:089 638 8383">089 638 8383</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="69 Quang Trung, Lộc Thọ, TP. Nha Trang, T. Kh&#225;nh Ho&#224;"
                                                            href="69-quang-trung-loc-tho-tp-nha-trang-t-khanh-hoa"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_37" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 580 Đường 2 th&#225;ng 4, Vĩnh Phước, Tp.Nha Trang, Tỉnh
                                                        Kh&#225;nh H&#242;a
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0793.68.8383">0793.68.8383</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 580 Đường 2 th&#225;ng 4, Vĩnh Phước, Tp.Nha Trang, Tỉnh Kh&#225;nh H&#242;a"
                                                            href="so-28a-duong-2-thang-4-vinh-phuoc-tp-nha-trang-tinh-khanh-hoa"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_58" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>148 Nguyễn Trung Trực, Rạch Gi&#225;, Ki&#234;n Giang</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0902.050.148">0902.050.148</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="148 Nguyễn Trung Trực, Rạch Gi&#225;, Ki&#234;n Giang"
                                                            href="148-nguyen-trung-truc-rach-gia-kien-giang"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_58" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 180 Nguyễn Trung Trực, P.Dương Đ&#244;ng, Tp. Ph&#250; Quốc,
                                                        Ki&#234;n Giang
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0778178899">0778178899</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 180 Nguyễn Trung Trực, P.Dương Đ&#244;ng, Tp. Ph&#250; Quốc, Ki&#234;n Giang"
                                                            href="so-180-nguyen-trung-truc-p-duong-dong-tp-phu-quoc-kien-giang"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_44" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        6A L&#234; Hồng Phong, Phường 4, Đ&#224; Lạt, L&#226;m Đồng
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:079.869.22.55">079.869.22.55</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="6A L&#234; Hồng Phong, Phường 4, Đ&#224; Lạt, L&#226;m Đồng"
                                                            href="6a-le-hong-phong-phuong-4-da-lat"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_6" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        L&#244; 10, Ng&#227; 6 Phố L&#253; C&#244;ng Uẩn, TP. L&#224;o
                                                        Cai
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:078912.83.83">078912.83.83</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="L&#244; 10, Ng&#227; 6 Phố L&#253; C&#244;ng Uẩn, TP. L&#224;o Cai"
                                                            href="lo-10-nga-6-pho-ly-cong-uan-tp-lao-cai"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_51" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>189 H&#249;ng Vương, P3, TP. T&#226;n An, Long An</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:090.897.22.55">090.897.22.55</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="189 H&#249;ng Vương, P3, TP. T&#226;n An, Long An"
                                                            href="189-hung-vuong-p3-tp-tan-an"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="outstock city_24" data-sku='["TPOVA4PC"]'>
                                                <span>
                                                    <label>Số 4 Th&#224;nh Chung, TP. Nam Định, Tỉnh Nam Định</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:089.662.82.26">089.662.82.26</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 4 Th&#224;nh Chung, TP. Nam Định, Tỉnh Nam Định"
                                                            href="so-4-thanh-chung-tp-nam-dinh-tinh-nam-dinh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_27" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        10 Nguyễn Thị Minh Khai, Hưng B&#236;nh, TP. Vinh, Nghệ An
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0778.523.523">0778.523.523</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="10 Nguyễn Thị Minh Khai, Hưng B&#236;nh, TP. Vinh, Nghệ An"
                                                            href="10-nguyen-thi-minh-khai-hung-binh-tp-vinh-nghe-an"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_27" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 34 Nguyễn Sỹ S&#225;ch, Phường Hưng B&#236;nh, Th&#224;nh Phố
                                                        Vinh, Nghệ An
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0763.162.162">0763.162.162</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title=" Số 34 Nguyễn Sỹ S&#225;ch, Phường Hưng B&#236;nh, Th&#224;nh Phố Vinh, Nghệ An"
                                                            href="so-34-nguyen-sy-sach-phuong-hung-binh-thanh-pho-vinh-nghe-an"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_25" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>960 Trần Hưng Đạo, TP. Ninh B&#236;nh</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0902.826.960">0902.826.960</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="960 Trần Hưng Đạo, TP. Ninh B&#236;nh"
                                                            href="960-tran-hung-dao-tp-ninh-binh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="outstock city_38" data-sku='["TPOVA4PC"]'>
                                                <span>
                                                    <label>
                                                        Số 44 Đường 16 th&#225;ng 4, P.Tấn T&#224;i, TP.Phan
                                                        Rang-Th&#225;p Ch&#224;m, Ninh Thuận
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:079.218.22.55">079.218.22.55</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 44 Đường 16 th&#225;ng 4, P.Tấn T&#224;i, TP.Phan Rang-Th&#225;p Ch&#224;m, Ninh Thuận"
                                                            href="so-44-duong-16-thang-4-p-tan-tai-tp-phan-rang-thap-cham-ninh-thuan"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_16" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        1502 Đại lộ H&#249;ng Vương, K6, phường Gia Cẩm, TP. Việt
                                                        Tr&#236;, Ph&#250; Thọ
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:090481.98.68">090481.98.68</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="	1502 Đại lộ H&#249;ng Vương, K6, phường Gia Cẩm, TP. Việt Tr&#236;, Ph&#250; Thọ"
                                                            href="1502-dl-hung-vuong-k6-phuong-gia-cam-tp-viet-tri-phu-tho"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_36" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        151-153 H&#249;ng Vương, TP Tuy H&#242;a, Ph&#250; Y&#234;n
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:077.545.85.85">077.545.85.85</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="151-153 H&#249;ng Vương, TP Tuy H&#242;a, Ph&#250; Y&#234;n"
                                                            href="151-153-hung-vuong-tp-tuy-hoa-phu-yen"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_29" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>23 L&#253; Thường Kiệt, TP. Đồng Hới, Quảng B&#236;nh</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:089.961.7373">089.961.7373</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="23 L&#253; Thường Kiệt, TP. Đồng Hới, Quảng B&#236;nh"
                                                            href="23-ly-thuong-kiet-tp-dong-hoi-quang-binh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_33" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        225 Phan Ch&#226;u Trinh, P. Phước H&#242;a, TP Tam Kỳ, Quảng
                                                        Nam (Shop cũ Số 47 Phan Chu Trinh)
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0935.04.9292">0935.04.9292</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title=" 225 Phan Ch&#226;u Trinh, P. Phước H&#242;a, TP Tam Kỳ, Quảng Nam (Shop cũ Số 47 Phan Chu Trinh)"
                                                            href="so-47-phan-chu-trinh-p-phuoc-hoa-tp-tam-ky-quang-nam"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_34" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        222 Quang Trung, P.L&#234; Hồng Phong, TP Quảng Ng&#227;i, Quảng
                                                        Ng&#227;i
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0788.56.7676">0788.56.7676</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="222 Quang Trung, P.L&#234; Hồng Phong, TP Quảng Ng&#227;i, Quảng Ng&#227;i"
                                                            href="222-quang-trung-p-le-hong-phong-tp-quang-ngai-quang-ngai"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_14" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>297 Quang Trung, TP. U&#244;ng B&#237;, Quảng Ninh</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0936.866.297">0936.866.297</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="297 Quang Trung, TP. U&#244;ng B&#237;, Quảng Ninh"
                                                            href="297-quang-trung-tp-uong-bi-quang-ninh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_14" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        758 Trần Ph&#250; , phường Cẩm Thạch, TP. Cẩm Phả, Quảng Ninh
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0906.062.758">0906.062.758</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="758 Trần Ph&#250;, TP. Cẩm Phả, Quảng Ninh"
                                                            href="758-tran-phu-phuong-cam-thach-tp-cam-pha-quang-ninh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_14" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        T&#242;a nh&#224; MobiFone, đường 25/4, Hồng Gai, TP. Hạ Long,
                                                        Quảng Ninh
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0789.268.616">0789.268.616</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="T&#242;a nh&#224; MobiFone, đường 25/4, Hồng Gai, TP. Hạ Long, Quảng Ninh"
                                                            href="toa-nha-mobifone-duong-25-4-hong-gai-tp-ha-long-quang-ninh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_14" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>Số 68 K&#234;nh Li&#234;m, TP.Hạ Long, Quảng Ninh</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0705587868">0705587868</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 68 K&#234;nh Li&#234;m, TP.Hạ Long, Quảng Ninh"
                                                            href="so-68-kenh-liem-tp-ha-long"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_30" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        139 Quốc Lộ 9, Phường 5, TP Đ&#244;ng H&#224;, Quảng Trị (Shop
                                                        cũ: 94 Quốc Lộ 9, P1) - Sắp khai trương
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0777.450.550">0777.450.550</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="139 Quốc Lộ 9, Phường 5, TP Đ&#244;ng H&#224;, Quảng Trị (Shop cũ: 94 Quốc Lộ 9, P1) - Sắp khai trương"
                                                            href="50-hung-vuong-tp-dong-ha-tinh-quang-tri-shop-sis-mobifone"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_61" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        174 Mạc Đĩnh Chi, Tp.S&#243;c Trăng (Shop SIS MobiFone)
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:070.491.88.99">070.491.88.99</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="174 Mạc Đĩnh Chi, Tp.S&#243;c Trăng (Shop SIS MobiFone)"
                                                            href="174-mac-dinh-chi-tp-soc-trang-shop-sis-mobifone"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_9" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        130 Chu Văn Thịnh, P. T&#244; Hiệu, TP. Sơn La ( Gần cầu
                                                        D&#226;y văng cũ)
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0762.39.9393">0762.39.9393</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="130 Chu Văn Thịnh, P. T&#244; Hiệu, TP. Sơn La ( Gần cầu D&#226;y văng cũ)"
                                                            href="130-chu-van-thinh-p-to-hieu-tp-son-la-gan-cau-day-vang-cu"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_46" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>935 C&#225;ch Mạng Th&#225;ng 8, TP. T&#226;y Ninh </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:079.773.22.55">079.773.22.55</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="935 C&#225;ch Mạng Th&#225;ng 8, TP. T&#226;y Ninh"
                                                            href="935-cach-mang-thang-8-tp-tay-ninh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_22" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>390 L&#253; B&#244;n, TP. Th&#225;i B&#236;nh</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0896.639.638">0896.639.638</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="390 L&#253; B&#244;n, TP. Th&#225;i B&#236;nh"
                                                            href="390-ly-bon-tp-thai-binh"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_12" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        135A C&#225;ch Mạng Th&#225;ng 8, TP. Th&#225;i Nguy&#234;n
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0936.53.31.35">0936.53.31.35</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="135A C&#225;ch Mạng Th&#225;ng 8, TP. Th&#225;i Nguy&#234;n"
                                                            href="135a-duong-cach-mang-t8-tp-thai-nguyen"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_26" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        306 Nguyễn Tr&#227;i, Phường T&#226;n Sơn, TP Thanh H&#243;a
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:07054.024.02">07054.024.02</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="306 Nguyễn Tr&#227;i, Phường T&#226;n Sơn, TP Thanh H&#243;a"
                                                            href="306-nguyen-trai-phuong-tan-son-tp-thanh-hoa"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_26" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>222 Trần Ph&#250;, phường Lam Sơn, TP Thanh H&#243;a</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0888.20.3536">0888.20.3536</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="222 Trần Ph&#250;, phường Lam Sơn, TP Thanh H&#243;a"
                                                            href="222-tran-phu-phuong-lam-son"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_31" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>48 Đống Đa - TP Huế</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0905.66.88.48">0905.66.88.48</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a title="48 Đống Đa - TP Huế" href="48-dong-da-tp-hue">
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_52" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>80 Nam Kỳ Khởi Nghĩa, P1, TP. Mỹ Tho, Tiền Giang</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0794.37.88.99">0794.37.88.99</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="80 Nam Kỳ Khởi Nghĩa, P1, TP. Mỹ Tho, Tiền Giang"
                                                            href="80-nam-ky-khoi-nghia-p-tp-my-tho"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_5" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        447-449 Quang Trung, P.Phan Thiết, Tp.Tuy&#234;n Quang
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0936619161">0936619161</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="447-449 Quang Trung, P.Phan Thiết, Tp.Tuy&#234;n Quang"
                                                            href="447-449-quang-trung-p-phan-thiet-tp-tuyen-quang"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_55" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>150 Nguyễn Huệ, P.2, TP, Vĩnh Long</label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0766.90.88.99">0766.90.88.99</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="150 Nguyễn Huệ, P.2, TP, Vĩnh Long"
                                                            href="150-nguyen-hue-p-2-tp-vinh-long"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_17" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 20 M&#234; Linh, Phường Li&#234;n Bảo, TP Vĩnh Y&#234;n, Tỉnh
                                                        Vĩnh Ph&#250;c
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0779.355.366">0779.355.366</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 20 M&#234; Linh, Phường Li&#234;n Bảo, TP Vĩnh Y&#234;n, Tỉnh Vĩnh Ph&#250;c"
                                                            href="so-20-me-linh-phuong-lien-bao-tp-vinh-yen-tinh-vinh-phuc"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_17" data-sku='["TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        Số 1 Lạc Long Qu&#226;n, Ph&#250;c Y&#234;n, Vĩnh Ph&#250;c
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0899.820.821">0899.820.821</a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="Số 1 Lạc Long Qu&#226;n, Ph&#250;c Y&#234;n, Vĩnh Ph&#250;c"
                                                            href="so-1-lac-long-quan-phuc-yen-vinh-phuc"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                            <li className="instock city_10" data-sku='["TPOVA4PC","TPOVA4PX"]'>
                                                <span>
                                                    <label>
                                                        24 Nguyễn Th&#225;i Học, Th&#224;nh Phố Y&#234;n B&#225;i
                                                    </label>

                                                    <label className="data">
                                                        <strong>
                                                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                                                            <a href="tel:0899159688 ">0899159688 </a>
                                                        </strong>
                                                        - <FontAwesomeIcon icon={faLocationDot} />
                                                        <a
                                                            title="24 Nguyễn Th&#225;i Học, Th&#224;nh Phố Y&#234;n B&#225;i"
                                                            href="24-nguyen-thai-hoc-thanh-pho-yen-bai"
                                                        >
                                                            Chỉ đường
                                                        </a>
                                                    </label>
                                                </span>
                                            </li>
                                        </ul>
                                        <p className="out-stock hide">
                                            <strong>
                                                TECNO POVA 4 PRO 8GB/128GB - Ch&#237;nh h&#227;ng
                                                <span className="colorName"></span>
                                            </strong>
                                            chưa có sẵn tại khu vực này. Quý khách vui lòng chọn khu vực khác hoặc gọi
                                            đến số Hotline để biết thêm chi tiết.
                                        </p>
                                        <p className="out-noonline hide">
                                            <strong>
                                                TECNO POVA 4 PRO 8GB/128GB - Ch&#237;nh h&#227;ng
                                                <span className="colorName"></span>
                                            </strong>
                                            tạm thời dừng nhận đơn online. Quý khách vui lòng liên hệ , đến các cửa hàng
                                            đang có sẵn hàng để mua trực tiếp.
                                        </p>
                                    </div>
                                </div>
                                <div className="out-date">
                                    <p className="title">
                                        <strong>
                                            <a href="kho-san-pham-cu/tecno-pova-4-pro-8gb-128gb-chinh-hang-p33176">
                                                Điện thoại TECNO POVA 4 Pro, 8GB/128GB, Cam Titan- TBH- 605 TRƯƠNG
                                                C&#212;NG ĐỊNH - TBH
                                            </a>
                                        </strong>
                                    </p>
                                    <div className="note">
                                        <p>
                                            <i>Giá chỉ từ:</i> <strong className="text-red">3,950,000 ₫</strong>
                                        </p>
                                        <p>
                                            <i>Tiết kiệm:</i> <strong className="text-red">540,000 ₫</strong>
                                        </p>
                                        18/04/2024
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GlobalStyles>
    );
}

export default ThongTinSanPham;
