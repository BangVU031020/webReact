import GlobalStyles from '~/components/GlobalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBolt, faHouse } from '@fortawesome/free-solid-svg-icons';
function SanPhamDaXem() {
    return (
        <GlobalStyles>
            <section>
                <div className="container">
                    <ol className="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList">
                        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                            <a itemprop="item" href="">
                                <span itemprop="name" content="Trang chủ">
                                    <FontAwesomeIcon icon={faHouse} /> Trang chủ
                                </span>
                            </a>
                            <meta itemprop="position" content="1" />
                        </li>
                        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                            <FontAwesomeIcon icon={faAngleRight} />
                            <a itemprop="item" href="san-pham-da-xem" title="Sản phẩm đ&#227; xem" className="actived">
                                <span itemprop="name" content="Sản phẩm đ&#227; xem">
                                    Sản phẩm đ&#227; xem
                                </span>
                            </a>
                            <meta itemprop="position" content="2" />
                        </li>
                    </ol>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="list-product">
                        <h1>Sản phẩm đã xem</h1>
                        <div className="col-content lts-product">
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="https://hoanghamobile.com/dien-thoai-di-dong/apple-iphone-14-pro-max-128gb-chinh-hang-vn-a"
                                        title="iPhone 14 Pro Max (128GB) - Chính hãng VN/A"
                                    >
                                        <img
                                            src={require('~/components/img/1111.png')}
                                            alt="iPhone 14 Pro Max (128GB) - Chính hãng VN/A"
                                            title="iPhone 14 Pro Max (128GB) - Chính hãng VN/A"
                                        />
                                    </a>
                                </div>

                                <div className="sticker sticker-left">
                                    <span>
                                        <img src={require('~/components/img/apple.png')} title="Chính hãng Apple" />
                                    </span>
                                </div>

                                <div className="info">
                                    <a
                                        href="https://hoanghamobile.com/dien-thoai-di-dong/apple-iphone-14-pro-max-128gb-chinh-hang-vn-a"
                                        className="title"
                                        title="iPhone 14 Pro Max (128GB) - Chính hãng VN/A"
                                    >
                                        iPhone 14 Pro Max (128GB) - Chính hãng VN/A
                                    </a>
                                    <span className="price">
                                        <strong>26,290,000 ₫</strong>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh toán qua Moca tặng ngay đế sạc trị giá 320.000đ (Cho hóa đơn có tổng giá trị từ 6 Triệu) - Áp dụng từ 01/04">
                                        Thanh toán qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 15 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="https://hoanghamobile.com/dien-thoai-di-dong/apple-iphone-14-pro-max-128gb-chinh-hang-vn-a">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh toán qua Moca tặng ngay đế sạc trị
                                                giá 320.000đ (Cho hóa đơn có tổng giá trị từ 6 Triệu) - Áp dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm 150.000đ cho khách hàng thanh toán
                                                bằng hình thức CHUYỂN KHOẢN 100% GIÁ TRỊ ĐƠN HÀNG (Không áp dụng kèm các
                                                ưu đãi thanh toán khác).
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Thu cũ đổi mới giảm tới 1.000.000đ
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="https://hoanghamobile.com/dien-thoai-di-dong/xiaomi-12-lite-chinh-hang"
                                        title="Xiaomi 12 Lite 5G - Chính hãng"
                                    >
                                        <img
                                            src={require('~/components/img/thumb-xiaomi-12.jpg')}
                                            alt="Xiaomi 12 Lite 5G - Chính hãng"
                                            title="Xiaomi 12 Lite 5G - Chính hãng"
                                        />
                                    </a>
                                </div>

                                <span className="sales">
                                    <FontAwesomeIcon icon={faBolt} /> Giảm 1,400,000 ₫
                                </span>

                                <div className="info">
                                    <a
                                        href="https://hoanghamobile.com/dien-thoai-di-dong/xiaomi-12-lite-chinh-hang"
                                        className="title"
                                        title="Xiaomi 12 Lite 5G - Chính hãng"
                                    >
                                        Xiaomi 12 Lite 5G - Chính hãng
                                    </a>
                                    <span className="price">
                                        <strong>8,590,000 ₫</strong>
                                        <strike>9,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua VNPAY">
                                        Ưu đãi đến 300.000đ khi mở Ví hoặc ...
                                    </label>
                                    <strong className="text-orange">VÀ 8 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="https://hoanghamobile.com/dien-thoai-di-dong/xiaomi-12-lite-chinh-hang">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Ưu đãi đến 300.000đ khi mở Ví hoặc thanh
                                                toán qua VNPAY
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm thêm tới 800.000đ khi mở thẻ tín
                                                dụng TPBank EVO - Duyệt nhanh chỉ 15 phút, LH Cửa hàng hoặc 19002091 để
                                                được hỗ trợ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Tặng SIM Wintel hoặc SIM MobiFone Hera
                                                dung lượng lên tới 6GB/ngày
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="https://hoanghamobile.com/lap-top/macbook-air-13-inch-2020-256gb-chinh-hang-apple-viet-nam-phien-ban-moi"
                                        title="MacBook Air 13-inch M1 (8GB/256GB) - Chính hãng Apple Việt Nam"
                                    >
                                        <img
                                            src={require('~/components/img/macmoi256.png')}
                                            alt="MacBook Air 13-inch M1 (8GB/256GB) - Chính hãng Apple Việt Nam"
                                            title="MacBook Air 13-inch M1 (8GB/256GB) - Chính hãng Apple Việt Nam"
                                        />
                                    </a>
                                </div>

                                <div className="sticker sticker-left">
                                    <span>
                                        <img src={require('~/components/img/apple.png')} title="Chính hãng Apple" />
                                    </span>
                                </div>

                                <div className="info">
                                    <a
                                        href="https://hoanghamobile.com/lap-top/macbook-air-13-inch-2020-256gb-chinh-hang-apple-viet-nam-phien-ban-moi"
                                        className="title"
                                        title="MacBook Air 13-inch M1 (8GB/256GB) - Chính hãng Apple Việt Nam"
                                    >
                                        MacBook Air 13-inch M1 (8GB/256GB) - Chính hãng Apple Việt Nam
                                    </a>
                                    <span className="price">
                                        <strong>18,490,000 ₫</strong>
                                        <strike>27,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh toán qua Moca tặng ngay đế sạc trị giá 320.000đ (Cho hóa đơn có tổng giá trị từ 6 Triệu) - Áp dụng từ 01/04">
                                        Thanh toán qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 10 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh toán qua Moca tặng ngay đế sạc trị
                                                giá 320.000đ (Cho hóa đơn có tổng giá trị từ 6 Triệu) - Áp dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở ví VNPAY và thanh toán giảm thêm tới
                                                100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh toán qua
                                                VNPAY (Áp dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a href="" title="TECNO POVA 4 PRO 8GB/128GB - Chính hãng">
                                        <img
                                            src={require('~/components/img/image-removebg-preview-2022-12-10t104204-819.png')}
                                            alt="TECNO POVA 4 PRO 8GB/128GB - Chính hãng"
                                            title="TECNO POVA 4 PRO 8GB/128GB - Chính hãng"
                                        />
                                    </a>
                                </div>

                                <div className="sticker sticker-left">
                                    <span>
                                        <img src={require('~/components/img/hot.png')} title="Sản phẩm HOT" />
                                    </span>
                                </div>

                                <span className="sales">
                                    <FontAwesomeIcon icon={faBolt} />
                                    Giảm 500,000 ₫
                                </span>

                                <div className="info">
                                    <a href="" className="title" title="TECNO POVA 4 PRO 8GB/128GB - Chính hãng">
                                        TECNO POVA 4 PRO 8GB/128GB - Chính hãng
                                    </a>
                                    <span className="price">
                                        <strong>4,490,000 ₫</strong>
                                        <strike>4,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua VNPAY">
                                        Ưu đãi đến 300.000đ khi mở Ví hoặc ...
                                    </label>
                                    <strong className="text-orange">VÀ 8 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Ưu đãi đến 300.000đ khi mở Ví hoặc thanh
                                                toán qua VNPAY
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm thêm tới 800.000đ khi mở thẻ tín
                                                dụng TPBank EVO - Duyệt nhanh chỉ 15 phút, LH Cửa hàng hoặc 19002091 để
                                                được hỗ trợ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Tặng SIM Wintel hoặc SIM MobiFone Hera
                                                dung lượng lên tới 6GB/ngày
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a href="" title="Redmi Note 12 Pro 5G (8GB/256GB) - Chính hãng">
                                        <img
                                            src={require('~/components/img/redminote12pro5g-0.png')}
                                            alt="Redmi Note 12 Pro 5G (8GB/256GB) - Chính hãng"
                                            title="Redmi Note 12 Pro 5G (8GB/256GB) - Chính hãng"
                                        />
                                    </a>
                                </div>

                                <div className="sticker sticker-left">
                                    <span>
                                        <img src={require('~/components/img/hot.png')} title="Sản phẩm HOT" />
                                    </span>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px; padding: 3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Gói BH Hcare</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>Giá tốt LH 1900.2091</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="https://hoanghamobile.com/dien-thoai-di-dong/redmi-note-12-pro-5g-8gb-256gb-chinh-hang"
                                        className="title"
                                        title="Redmi Note 12 Pro 5G (8GB/256GB) - Chính hãng"
                                    >
                                        Redmi Note 12 Pro 5G (8GB/256GB) - Chính hãng
                                    </a>
                                    <span className="price">
                                        <strong>8,990,000 ₫</strong>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh toán qua Moca tặng ngay đế sạc trị giá 320.000đ (Cho hóa đơn có tổng giá trị từ 6 Triệu) - Áp dụng từ 01/04">
                                        Thanh toán qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 12 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="https://hoanghamobile.com/dien-thoai-di-dong/redmi-note-12-pro-5g-8gb-256gb-chinh-hang">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh toán qua Moca tặng ngay đế sạc trị
                                                giá 320.000đ (Cho hóa đơn có tổng giá trị từ 6 Triệu) - Áp dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở ví VNPAY và thanh toán giảm thêm tới
                                                100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh toán qua
                                                VNPAY (Áp dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GlobalStyles>
    );
}
export default SanPhamDaXem;
