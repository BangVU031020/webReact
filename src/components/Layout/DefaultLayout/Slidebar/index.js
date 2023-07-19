import GlobalStyles from '~/components/GlobalStyles';
import { Carousel } from 'antd';
function Slidebar() {
    return (
        <GlobalStyles>
            <section>
                <div className="container">
                    <div className="top-slider">
                        <Carousel autoplay>
                            <div>
                                <a
                                    href="dien-thoai-di-dong/samsung/galaxy-z-fold-z-flip-2022"
                                    title="Samsung Galaxy Z Fold4 | Z Flip4"
                                >
                                    <img
                                        data-u="image"
                                        src={require('~/components/img/home/Uploads/2023/04/14/galaxy-a14-a14-5g-02.jpg')}
                                        title="Samsung Galaxy Z Fold4 | Z Flip4"
                                    />
                                </a>
                            </div>
                            <div>
                                <a href="dien-thoai-di-dong/redmi-note-12-4gb-128gb-chinh-hang" title="Redmi Note 12">
                                    <img
                                        data-u="image"
                                        src={require('~/components/img/home/Uploads/2023/04/14/galaxy-a14-a14-5g-02.jpg')}
                                        title="Redmi Note 12"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="dien-thoai-di-dong/samsung/samsung-galaxy-a-series?utm_source=web&amp;utm_medium=Homebanner&amp;utm_content=2703_MOBANa34A54&amp;utm_campaign=MOBANa34A54"
                                    title="Mở b&#225;n Galaxy A34 | A54 mới"
                                >
                                    <img
                                        data-u="image"
                                        src={require('~/components/img/home/Uploads/2023/04/15/asus-1200x200-01.jpg')}
                                        title="Mở b&#225;n Galaxy A34 | A54 mới"
                                    />
                                </a>
                            </div>

                            <div>
                                <a
                                    href="do-gia-dung/may-loc-khong-khi/clair"
                                    title="M&#225;y lọc kh&#244;ng kh&#237; clair"
                                >
                                    <img
                                        data-u="image"
                                        src={require('~/components/img/home/Uploads/2023/04/15/asus-1200x200-01.jpg')}
                                        title="M&#225;y lọc kh&#244;ng kh&#237; clair"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="dien-thoai-di-dong/realme-c55-6gb-128gb-chinh-hang"
                                    title="Mở b&#225;n realme C55"
                                >
                                    <img
                                        data-u="image"
                                        src={require('~/components/img/home/Uploads/2023/04/14/galaxy-a14-a14-5g-02.jpg')}
                                        title="Mở b&#225;n realme C55"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="laptop/laptop-gaming-msi-katana-gf66-12uck-815vn"
                                    title="Laptop MSI Katana GF66"
                                >
                                    <img
                                        data-u="image"
                                        src={require('~/components/img/home/Uploads/2023/04/15/asus-1200x200-01.jpg')}
                                        title="Laptop MSI Katana GF66"
                                    />
                                </a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="quick-sales">
                        <div className="item">
                            <a href="dien-thoai-di-dong/samsung-galaxy-s20-fe-256gb-chinh-hang">
                                <img
                                    src={require('~/components/img/home/Uploads/2023/04/05/sanphamhot-s20-fe.png')}
                                    title="S20 FE"
                                    alt="S20 FE"
                                />
                            </a>
                        </div>
                        <div className="item">
                            <a href="lap-top/macbook-air-13-inch-2020-256gb-chinh-hang-apple-viet-nam-phien-ban-moi?utm_source=web&amp;utm_medium=Homebanner&amp;utm_content=2402_MacAirM1&amp;utm_campaign=MacAirM1">
                                <img
                                    src={require('~/components/img/home/Uploads/2023/04/13/group-47.png')}
                                    title="MacBook Air M1 8GB/256GB"
                                    alt="MacBook Air M1 8GB/256GB"
                                />
                            </a>
                        </div>
                        <div className="item">
                            <a href="lap-top/macbook-air-13-inch-2020-256gb-chinh-hang-apple-viet-nam-phien-ban-moi?utm_source=web&amp;utm_medium=Homebanner&amp;utm_content=2402_MacAirM1&amp;utm_campaign=MacAirM1">
                                <img
                                    src={require('~/components/img/home/Uploads/2023/04/13/group-47.png')}
                                    title="MacBook Air M1 8GB/256GB"
                                    alt="MacBook Air M1 8GB/256GB"
                                />
                            </a>
                        </div>
                        <div className="item">
                            <a href="may-tinh-bang/apple-ipad-gen-9-10-2-2021-wifi-64gb-chinh-hang-apple-viet-nam?utm_source=web&amp;utm_medium=Homebanner&amp;utm_content=2402_Gen9&amp;utm_campaign=Gen9">
                                <img
                                    src={require('~/components/img/home/Uploads/2023/04/08/group-22.png')}
                                    title="iPad Gen 9 Wi-Fi 64GB"
                                    alt="iPad Gen 9 Wi-Fi 64GB"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </GlobalStyles>
    );
}

export default Slidebar;
