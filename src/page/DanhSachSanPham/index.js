import React from 'react';
import GlobalStyles from '~/components/GlobalStyles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowDown, faArrowRight, faHome } from '@fortawesome/free-solid-svg-icons';
function DanhSachSanPham() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 12,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <GlobalStyles>
            <section>
                <div className="top-category-ads">
                    <div className="container">
                        <div className="ads-container">
                            <div className="full item">
                                <a target="_top">
                                    <img
                                        src={require('~/page/img/home/Uploads/2023/04/15/asus-1200x200-01.jpg')}
                                        className="img-responsive img-border-radius"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="category-list" style={{ padding: '10px 40px', margin: '0' }}>
                        <div className="category_type_2 lrs-slider">
                            <Carousel className="ul" autoPlay rewind={true} responsive={responsive}>
                                <div className="li">
                                    <a className="" href="laptop/macbook" title="Apple">
                                        <img
                                            src={require('~/page/img//cat/Uploads/2022/09/07/logoooooooooooooooo.png')}
                                        />
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="" href="laptop/hang-san-xuat/acer" title="Acer">
                                        <img
                                            src={require('~/page/img//cat/Uploads/2022/05/30/logo-acer-inkythuatso-2-01-27-15-50-00.jpg')}
                                        />
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="" href="laptop/asus" title="ASUS">
                                        <img src={require('~/page/img//cat/Uploads/2021/11/11/asu-logo.png')} />
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="" href="laptop/dell" title="Dell">
                                        <img src={require('~/page/img//cat/Uploads/2021/11/20/dell.png')} />
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="" href="laptop/msi" title="MSI">
                                        <img
                                            src={require('~/page/img//cat/Uploads/2022/01/15/anh-chup-man-hinh-2022-01-15-luc-08-49-50.png')}
                                        />
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="" href="laptop/hp" title="HP">
                                        <img src={require('~/page/img//cat/Uploads/2021/11/18/oooo.png')} />
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="" href="laptop/huawei" title="Huawei">
                                        <img src={require('~/page/img//cat/Uploads/2022/04/15/lai.png')} />
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="" href="laptop/lenovo" title="Lenovo">
                                        <img
                                            src={require('~/page/img//cat/Uploads/2021/11/20/whatsapp-image-2021-11-18-at-16-20-33-1.jpeg')}
                                        />
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="" href="laptop/hang-san-xuat/lg" title="LG">
                                        <img src={require('~/page/img//cat/Uploads/2020/11/07/logo-lg.png')} />
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="" href="laptop/microsoft" title="Surface">
                                        <img
                                            src={require('~/page/img//cat/Uploads/2021/11/11/microsoft-logo-inkythuatso-01-29-10-05-20.jpg')}
                                        />
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="" href="laptop/gigabyte" title="GIGABYTE">
                                        <img src={require('~/page/img//cat/Uploads/2022/09/21/logo-gygabyte.png')} />
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="" href="laptop/hang-san-xuat/xiaomi" title="Xiaomi">
                                        <img src={require('~/page/img//cat/Uploads/2022/06/06/xiaomi.png')} />
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="" href="laptop/masstel" title="Masstel">
                                        <img src={require('~/page/img//cat/Uploads/2020/11/07/logo-masstel1.png')} />
                                    </a>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

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
                            <FontAwesomeIcon icon={faAngleRight} />
                            <a
                                itemprop="item"
                                href="laptop"
                                title="Laptop - M&#225;y t&#237;nh x&#225;ch tay | H&#224;ng ch&#237;nh h&#227;ng gi&#225; rẻ, Trả g&#243;p 0%"
                                className="actived"
                            >
                                <span itemprop="name" content="Laptop">
                                    Laptop
                                </span>
                            </a>
                            <meta itemprop="position" content="2" />
                        </li>
                    </ol>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="product-filters2">
                        <div className="left">
                            <strong className="label">Lọc danh sách:</strong>

                            <div className="facet">
                                <label>
                                    <a href="javascript:;">
                                        Danh mục <FontAwesomeIcon icon={faArrowDown} />
                                    </a>
                                </label>
                                <div className="sub">
                                    <ul>
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
                                </div>
                            </div>

                            <div className="facet">
                                <label>
                                    <a href="javascript:;">
                                        D&#242;ng CPU <FontAwesomeIcon icon={faArrowDown} />
                                    </a>
                                </label>
                                <div className="sub">
                                    <ul>
                                        <li>
                                            <a href="laptop?filters=%7b%22dong-cpu%22%3a%22Core+i5%22%7d&amp;search=true">
                                                Core i5 <i className="total">(71)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22dong-cpu%22%3a%22Core+i7%22%7d&amp;search=true">
                                                Core i7 <i className="total">(18)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22dong-cpu%22%3a%22Ryzen+5%22%7d&amp;search=true">
                                                Ryzen 5 <i className="total">(18)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22dong-cpu%22%3a%22Ryzen+7%22%7d&amp;search=true">
                                                Ryzen 7 <i className="total">(18)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22dong-cpu%22%3a%22Core+i3%22%7d&amp;search=true">
                                                Core i3 <i className="total">(17)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22dong-cpu%22%3a%22Apple+M2%22%7d&amp;search=true">
                                                Apple M2 <i className="total">(5)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22dong-cpu%22%3a%22Apple+M1%22%7d&amp;search=true">
                                                Apple M1 <i className="total">(4)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22dong-cpu%22%3a%22Celeron%22%7d&amp;search=true">
                                                Celeron
                                                <i className="total">(3)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22dong-cpu%22%3a%22Apple+M1+8-core%22%7d&amp;search=true">
                                                Apple M1 8-core <i className="total">(2)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22dong-cpu%22%3a%22Core+i9%22%7d&amp;search=true">
                                                Core i9 <i className="total">(1)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22dong-cpu%22%3a%22Intel+Core+i5+Tiger+Lake%22%7d&amp;search=true">
                                                Intel Core i5 Tiger Lake <i className="total">(1)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22dong-cpu%22%3a%22M1+series%22%7d&amp;search=true">
                                                M1 series <i className="total">(1)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22dong-cpu%22%3a%22Pentium+Silver%22%7d&amp;search=true">
                                                Pentium Silver <i className="total">(1)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22dong-cpu%22%3a%22Ryzen+3%22%7d&amp;search=true">
                                                Ryzen 3 <i className="total">(1)</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="facet">
                                <label>
                                    <a href="javascript:;">
                                        Thương hiệu <FontAwesomeIcon icon={faArrowDown} />
                                    </a>
                                </label>
                                <div className="sub">
                                    <ul>
                                        <li>
                                            <a href="laptop?filters=%7b%22brand%22%3a%2245%22%7d&amp;search=true">
                                                HP <i className="total">(58)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22brand%22%3a%2249%22%7d&amp;search=true">
                                                Acer <i className="total">(29)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22brand%22%3a%225%22%7d&amp;search=true">
                                                Lenovo <i className="total">(25)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22brand%22%3a%22135%22%7d&amp;search=true">
                                                MSI <i className="total">(21)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22brand%22%3a%2248%22%7d&amp;search=true">
                                                Dell <i className="total">(20)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22brand%22%3a%229%22%7d&amp;search=true">
                                                LG <i className="total">(15)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22brand%22%3a%2211%22%7d&amp;search=true">
                                                Huawei <i className="total">(7)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22brand%22%3a%22202%22%7d&amp;search=true">
                                                Microsoft <i className="total">(3)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22brand%22%3a%22221%22%7d&amp;search=true">
                                                Gigabyte <i className="total">(3)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22brand%22%3a%221%22%7d&amp;search=true">
                                                Apple <i className="total">(26)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22brand%22%3a%228%22%7d&amp;search=true">
                                                Asus <i className="total">(44)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22brand%22%3a%223%22%7d&amp;search=true">
                                                Xiaomi <i className="total">(2)</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="facet">
                                <label>
                                    <a href="javascript:;">
                                        Gi&#225; <FontAwesomeIcon icon={faArrowDown} />
                                    </a>
                                </label>
                                <div className="sub">
                                    <ul>
                                        <li>
                                            <a href="laptop?filters=%7b%22price%22%3a%22T100t%22%7d&amp;search=true">
                                                Tr&#234;n 100 triệu <i className="total">(2)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22price%22%3a%223t-4t%22%7d&amp;search=true">
                                                3 đến 4 triệu <i className="total">(3)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22price%22%3a%225t-6t%22%7d&amp;search=true">
                                                5 đến 6 triệu <i className="total">(2)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22price%22%3a%226t-8t%22%7d&amp;search=true">
                                                6 đến 8 triệu <i className="total">(1)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22price%22%3a%228t-10t%22%7d&amp;search=true">
                                                8 đến 10 triệu <i className="total">(14)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22price%22%3a%2210t-12t%22%7d&amp;search=true">
                                                10 đến 12 triệu <i className="total">(12)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22price%22%3a%2212t-15t%22%7d&amp;search=true">
                                                12 đến 15 triệu <i className="total">(45)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22price%22%3a%2215t-20t%22%7d&amp;search=true">
                                                15 đến 20 triệu <i className="total">(74)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22price%22%3a%2220t-100tr%22%7d&amp;search=true">
                                                20 đến 100 triệu <i className="total">(98)</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="facet">
                                <label>
                                    <a href="javascript:;">
                                        Loại sản phẩm <FontAwesomeIcon icon={faArrowDown} />
                                    </a>
                                </label>
                                <div className="sub">
                                    <ul>
                                        <li>
                                            <a href="laptop?filters=%7b%22type%22%3a%2247%22%7d&amp;search=true">
                                                PC <i className="total">(5)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22type%22%3a%223%22%7d&amp;search=true">
                                                Laptop <i className="total">(250)</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="facet">
                                <label>
                                    <a href="javascript:;">
                                        K&#237;ch thước m&#224;n h&#236;nh <FontAwesomeIcon icon={faArrowDown} />
                                    </a>
                                </label>
                                <div className="sub">
                                    <ul>
                                        <li>
                                            <a href="laptop?filters=%7b%22kich-thuoc-man-hinh%22%3a%2215.6+inch%22%7d&amp;search=true">
                                                15.6 inch <i className="total">(88)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22kich-thuoc-man-hinh%22%3a%2214+inch%22%7d&amp;search=true">
                                                14 inch <i className="total">(52)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22kich-thuoc-man-hinh%22%3a%2216+inch%22%7d&amp;search=true">
                                                16 inch <i className="total">(17)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22kich-thuoc-man-hinh%22%3a%2213.3+inch%22%7d&amp;search=true">
                                                13.3 inch <i className="total">(12)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22kich-thuoc-man-hinh%22%3a%2216.1+inch%22%7d&amp;search=true">
                                                16.1 inch <i className="total">(4)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22kich-thuoc-man-hinh%22%3a%2216.2+inch%22%7d&amp;search=true">
                                                16.2 inch <i className="total">(4)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22kich-thuoc-man-hinh%22%3a%2211.6+inch%22%7d&amp;search=true">
                                                11.6 inch <i className="total">(3)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22kich-thuoc-man-hinh%22%3a%2214.2+inch%22%7d&amp;search=true">
                                                14.2 inch <i className="total">(3)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22kich-thuoc-man-hinh%22%3a%2212.3+inch%22%7d&amp;search=true">
                                                12.3 inch <i className="total">(2)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22kich-thuoc-man-hinh%22%3a%2213.6+inch%22%7d&amp;search=true">
                                                13.6 inch <i className="total">(2)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22kich-thuoc-man-hinh%22%3a%2217.3+inch%22%7d&amp;search=true">
                                                17.3 inch <i className="total">(2)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22kich-thuoc-man-hinh%22%3a%2218+inch%22%7d&amp;search=true">
                                                18 inch <i className="total">(2)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22kich-thuoc-man-hinh%22%3a%2224+inch%22%7d&amp;search=true">
                                                24 inch <i className="total">(2)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22kich-thuoc-man-hinh%22%3a%2213.4+inch%22%7d&amp;search=true">
                                                13.4 inch <i className="total">(1)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22kich-thuoc-man-hinh%22%3a%2217+inch%22%7d&amp;search=true">
                                                17 inch <i className="total">(1)</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="facet">
                                <label>
                                    <a href="javascript:;">
                                        RAM <FontAwesomeIcon icon={faArrowDown} />
                                    </a>
                                </label>
                                <div className="sub">
                                    <ul>
                                        <li>
                                            <a href="laptop?filters=%7b%22ram%22%3a%228GB%22%7d&amp;search=true">
                                                8GB <i className="total">(139)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22ram%22%3a%2216GB%22%7d&amp;search=true">
                                                16GB <i className="total">(39)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22ram%22%3a%224GB%22%7d&amp;search=true">
                                                4GB <i className="total">(11)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22ram%22%3a%2232GB%22%7d&amp;search=true">
                                                32GB <i className="total">(7)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22ram%22%3a%228+GB%22%7d&amp;search=true">
                                                8 GB <i className="total">(1)</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="facet">
                                <label>
                                    <a href="javascript:;">
                                        Card đồ hoạ rời <FontAwesomeIcon icon={faArrowDown} />
                                    </a>
                                </label>
                                <div className="sub">
                                    <ul>
                                        <li>
                                            <a href="laptop?filters=%7b%22card-do-hoa-roi%22%3a%22RTX+3050%22%7d&amp;search=true">
                                                RTX 3050 <i className="total">(24)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22card-do-hoa-roi%22%3a%22GTX+1650%22%7d&amp;search=true">
                                                GTX 1650 <i className="total">(9)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22card-do-hoa-roi%22%3a%22RTX+3050Ti%22%7d&amp;search=true">
                                                RTX 3050Ti <i className="total">(8)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22card-do-hoa-roi%22%3a%22RTX+3060%22%7d&amp;search=true">
                                                RTX 3060 <i className="total">(3)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22card-do-hoa-roi%22%3a%22RTX+4080%22%7d&amp;search=true">
                                                RTX 4080 <i className="total">(2)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22card-do-hoa-roi%22%3a%22AMD+Radeon+660M%22%7d&amp;search=true">
                                                AMD Radeon 660M <i className="total">(1)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22card-do-hoa-roi%22%3a%22AMD+Radeon+680M%22%7d&amp;search=true">
                                                AMD Radeon 680M <i className="total">(1)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22card-do-hoa-roi%22%3a%22MX550%22%7d&amp;search=true">
                                                MX550
                                                <i className="total">(1)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22card-do-hoa-roi%22%3a%22NVIDIA+GeForce+MX450%22%7d&amp;search=true">
                                                NVIDIA GeForce MX450 <i className="total">(1)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22card-do-hoa-roi%22%3a%22NVIDIA+GeForce+MX550%22%7d&amp;search=true">
                                                NVIDIA GeForce MX550 <i className="total">(1)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22card-do-hoa-roi%22%3a%22NVIDIA+GeForce+RTX+3050%22%7d&amp;search=true">
                                                NVIDIA GeForce RTX 3050 <i className="total">(1)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22card-do-hoa-roi%22%3a%22NVIDIA+GeForce+RTX+3060%22%7d&amp;search=true">
                                                NVIDIA GeForce RTX 3060 <i className="total">(1)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22card-do-hoa-roi%22%3a%22RX6600M%22%7d&amp;search=true">
                                                RX6600M
                                                <i className="total">(1)</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="facet">
                                <label>
                                    <a href="javascript:;">
                                        Ổ cứng mặc định <FontAwesomeIcon icon={faArrowDown} />
                                    </a>
                                </label>
                                <div className="sub">
                                    <ul>
                                        <li>
                                            <a href="laptop?filters=%7b%22o-cung-mac-dinh%22%3a%22512GB%22%7d&amp;search=true">
                                                512GB
                                                <i className="total">(127)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22o-cung-mac-dinh%22%3a%22256GB%22%7d&amp;search=true">
                                                256GB
                                                <i className="total">(40)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22o-cung-mac-dinh%22%3a%221TB%22%7d&amp;search=true">
                                                1TB
                                                <i className="total">(7)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22o-cung-mac-dinh%22%3a%22128GB%22%7d&amp;search=true">
                                                128GB
                                                <i className="total">(4)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22o-cung-mac-dinh%22%3a%222TB%22%7d&amp;search=true">
                                                2TB
                                                <i className="total">(2)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22o-cung-mac-dinh%22%3a%22512+GB+SSD+NVMe+PCIe+(C%c3%b3+th%e1%bb%83+th%c3%a1o+ra%2c+l%e1%ba%afp+thanh+kh%c3%a1c+t%e1%bb%91i+%c4%91a+1TB)%22%7d&amp;search=true">
                                                512 GB SSD NVMe PCIe (C&#243; thể th&#225;o ra, lắp thanh kh&#225;c tối
                                                đa 1TB) <i className="total">(1)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22o-cung-mac-dinh%22%3a%22Gen4+512GB%22%7d&amp;search=true">
                                                Gen4 512GB <i className="total">(1)</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22o-cung-mac-dinh%22%3a%22H%e1%bb%97+tr%e1%bb%a3+th%c3%aam+1+khe+c%e1%ba%afm+SSD+M.2+PCIe+m%e1%bb%9f+r%e1%bb%99ng+(n%c3%a2ng+c%e1%ba%a5p+t%e1%bb%91i+%c4%91a+1TB)%22%7d&amp;search=true">
                                                Hỗ trợ th&#234;m 1 khe cắm SSD M.2 PCIe mở rộng (n&#226;ng cấp tối đa
                                                1TB) <i className="total">(1)</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="right">
                            <div className="facet">
                                <label>
                                    Sắp xếp <FontAwesomeIcon icon={faArrowDown} />
                                </label>
                                <div className="sub">
                                    <ul>
                                        <li>
                                            <a href="laptop?filters=%7b%22sort%22%3a%2212%22%7d&amp;search=true">
                                                <span className="fa fa-angle-right"></span> Mặc định
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22sort%22%3a%221%22%7d&amp;search=true">
                                                <span className="fa fa-angle-right"></span> Sản phẩm mới - cũ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22sort%22%3a%222%22%7d&amp;search=true">
                                                <span className="fa fa-angle-right"></span> Gi&#225; thấp đến cao
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22sort%22%3a%223%22%7d&amp;search=true">
                                                <span className="fa fa-angle-right"></span> Gi&#225; cao đến thấp
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22sort%22%3a%224%22%7d&amp;search=true">
                                                <span className="fa fa-angle-right"></span> Mới cập nhật
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22sort%22%3a%225%22%7d&amp;search=true">
                                                <span className="fa fa-angle-right"></span> Sản phẩm cũ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22sort%22%3a%226%22%7d&amp;search=true">
                                                <span className="fa fa-angle-right"></span> Xem nhiều h&#244;m nay
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22sort%22%3a%227%22%7d&amp;search=true">
                                                <span className="fa fa-angle-right"></span> Xem nhiều tuần n&#224;y
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22sort%22%3a%228%22%7d&amp;search=true">
                                                <span className="fa fa-angle-right"></span> Xem nhiều th&#225;ng
                                                n&#224;y
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22sort%22%3a%2210%22%7d&amp;search=true">
                                                <span className="fa fa-angle-right"></span> Xem nhiều năm nay
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22sort%22%3a%229%22%7d&amp;search=true">
                                                <span className="fa fa-angle-right"></span> Xem nhiều nhất
                                            </a>
                                        </li>
                                        <li>
                                            <a href="laptop?filters=%7b%22sort%22%3a%2211%22%7d&amp;search=true">
                                                <span className="fa fa-angle-right"></span> Kết quả t&#236;m kiếm
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <a name="page_1"></a>
                    <div className="list-product">
                        <h1>Laptop</h1>
                        <div className="col-content lts-product">
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-dell-vostro-3520-v5i3614w1-chinh-hang"
                                        title="Laptop Dell Vostro 3520-V5I3614W1 - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/04/25/v513614w1-0.jpg')}
                                            alt="Laptop Dell Vostro 3520-V5I3614W1 - Ch&#237;nh h&#227;ng"
                                            title="Laptop Dell Vostro 3520-V5I3614W1 - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="sticker sticker-left">
                                    <span>
                                        <img
                                            src={require('~/page/img/sticker/bao-hanh-12t.png')}
                                            title="Bảo h&#224;nh 12 th&#225;ng"
                                        />
                                    </span>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px',
                                            padding: '3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Balo Hoàng Hà</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>+ Chuột Logitech</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-dell-vostro-3520-v5i3614w1-chinh-hang"
                                        className="title"
                                        title="Laptop Dell Vostro 3520-V5I3614W1 - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop Dell Vostro 3520-V5I3614W1 - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>12,490,000 ₫</strong>
                                        <strike>13,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 9 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-dell-vostro-3520-v5i3614w1-chinh-hang">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-asus-gaming-tuf-fx506lhb-hn188w-chinh-hang"
                                        title="Laptop ASUS TUF Gaming FX506LHB-HN188W - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/03/08/laptop-asus-gaming-tuf-fx506lhb-hn188w-01.jpg')}
                                            alt="Laptop ASUS TUF Gaming FX506LHB-HN188W - Ch&#237;nh h&#227;ng"
                                            title="Laptop ASUS TUF Gaming FX506LHB-HN188W - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="sticker sticker-left">
                                    <span>
                                        <img
                                            src={require('~/page/img/sticker/bao-hanh-24t.png')}
                                            title="Bảo h&#224;nh 24 th&#225;ng"
                                        />
                                    </span>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px',
                                            padding: '3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Balo Hoàng Hà</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>+ Chuột Logitech</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-asus-gaming-tuf-fx506lhb-hn188w-chinh-hang"
                                        className="title"
                                        title="Laptop ASUS TUF Gaming FX506LHB-HN188W - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop ASUS TUF Gaming FX506LHB-HN188W - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>15,290,000 ₫</strong>
                                        <strike>21,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 12 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-asus-gaming-tuf-fx506lhb-hn188w-chinh-hang">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-asus-gaming-rog-strix-g15-g513ih-hn015w-chinh-hang"
                                        title="Laptop Asus Gaming Rog Strix G15 G513IH-HN015W - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/03/02/laptop-asus-gaming-rog-strix-g15-g513ih-hn015w-01.jpg')}
                                            alt="Laptop Asus Gaming Rog Strix G15 G513IH-HN015W - Ch&#237;nh h&#227;ng"
                                            title="Laptop Asus Gaming Rog Strix G15 G513IH-HN015W - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="sticker sticker-left">
                                    <span>
                                        <img
                                            src={require('~/page/img/sticker/bao-hanh-24t.png')}
                                            title="Bảo h&#224;nh 24 th&#225;ng"
                                        />
                                    </span>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px',
                                            padding: '3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Balo Hoàng Hà</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>+ Chuột Logitech</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-asus-gaming-rog-strix-g15-g513ih-hn015w-chinh-hang"
                                        className="title"
                                        title="Laptop Asus Gaming Rog Strix G15 G513IH-HN015W - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop Asus Gaming Rog Strix G15 G513IH-HN015W - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>17,790,000 ₫</strong>
                                        <strike>23,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 12 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-asus-gaming-rog-strix-g15-g513ih-hn015w-chinh-hang">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-gaming-gigabyte-g5-gd-51vn123so-i5-11400h-16gb-512gb-ssd-15-6-fhd"
                                        title="Laptop Gaming GIGABYTE G5 GD-51VN123SO - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/04/22/frame-1.jpg')}
                                            alt="Laptop Gaming GIGABYTE G5 GD-51VN123SO - Ch&#237;nh h&#227;ng"
                                            title="Laptop Gaming GIGABYTE G5 GD-51VN123SO - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="sticker sticker-left">
                                    <span>
                                        <img
                                            src={require('~/page/img/sticker/bao-hanh-24t.png')}
                                            title="Bảo h&#224;nh 24 th&#225;ng"
                                        />
                                    </span>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px',
                                            padding: '3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Balo Hoàng Hà</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>+ Chuột Logitech</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-gaming-gigabyte-g5-gd-51vn123so-i5-11400h-16gb-512gb-ssd-15-6-fhd"
                                        className="title"
                                        title="Laptop Gaming GIGABYTE G5 GD-51VN123SO - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop Gaming GIGABYTE G5 GD-51VN123SO - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>17,990,000 ₫</strong>
                                        <strike>20,490,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 11 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-gaming-gigabyte-g5-gd-51vn123so-i5-11400h-16gb-512gb-ssd-15-6-fhd">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Tặng phiếu mua h&#224;ng 500.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-msi-modern-14-c7m-083vn-chinh-hang"
                                        title="Laptop MSI Modern 14 C7M-083VN - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/04/18/c7m-083vn.jpg')}
                                            alt="Laptop MSI Modern 14 C7M-083VN - Ch&#237;nh h&#227;ng"
                                            title="Laptop MSI Modern 14 C7M-083VN - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px',
                                            padding: '3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Balo Hoàng Hà</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>+ Chuột Logitech</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-msi-modern-14-c7m-083vn-chinh-hang"
                                        className="title"
                                        title="Laptop MSI Modern 14 C7M-083VN - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop MSI Modern 14 C7M-083VN - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>12,290,000 ₫</strong>
                                        <strike>13,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 11 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-msi-modern-14-c7m-083vn-chinh-hang">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-msi-modern-15-b7m-098vn-chinh-hang"
                                        title="Laptop MSI Modern 15 B7M-098VN - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/04/18/b7m-098vn.jpg')}
                                            alt="Laptop MSI Modern 15 B7M-098VN - Ch&#237;nh h&#227;ng"
                                            title="Laptop MSI Modern 15 B7M-098VN - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px',
                                            padding: '3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Balo Hoàng Hà</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>+ Chuột Logitech</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-msi-modern-15-b7m-098vn-chinh-hang"
                                        className="title"
                                        title="Laptop MSI Modern 15 B7M-098VN - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop MSI Modern 15 B7M-098VN - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>14,990,000 ₫</strong>
                                        <strike>16,490,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 12 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-msi-modern-15-b7m-098vn-chinh-hang">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-msi-modern-15-b7m-099vn-chinh-hang"
                                        title="Laptop MSI Modern 15 B7M-099VN - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/04/18/b7m-099vn.jpg')}
                                            alt="Laptop MSI Modern 15 B7M-099VN - Ch&#237;nh h&#227;ng"
                                            title="Laptop MSI Modern 15 B7M-099VN - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px',
                                            padding: '3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Balo Hoàng Hà</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>+ Chuột Logitech</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-msi-modern-15-b7m-099vn-chinh-hang"
                                        className="title"
                                        title="Laptop MSI Modern 15 B7M-099VN - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop MSI Modern 15 B7M-099VN - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>12,790,000 ₫</strong>
                                        <strike>14,490,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 11 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-msi-modern-15-b7m-099vn-chinh-hang">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-gaming-msi-katana-gf66-12uck-815vn"
                                        title="Laptop Gaming MSI Katana GF66 12UCK-815VN - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/03/06/laptop-laptop-gaming-msi-katana-gf66-12uck-815vn-01.jpg')}
                                            alt="Laptop Gaming MSI Katana GF66 12UCK-815VN - Ch&#237;nh h&#227;ng"
                                            title="Laptop Gaming MSI Katana GF66 12UCK-815VN - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px',
                                            padding: '3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Balo Hoàng Hà</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>+ Chuột Logitech</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-gaming-msi-katana-gf66-12uck-815vn"
                                        className="title"
                                        title="Laptop Gaming MSI Katana GF66 12UCK-815VN - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop Gaming MSI Katana GF66 12UCK-815VN - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>18,990,000 ₫</strong>
                                        <strike>23,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 10 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-gaming-msi-katana-gf66-12uck-815vn">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-lenovo-ideapad-3-14iau7-82rj009mvn-chinh-hang"
                                        title="Laptop Lenovo IdeaPad 3 14IAU7-82RJ009MVN - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/04/04/82rj009mvn-0.jpg')}
                                            alt="Laptop Lenovo IdeaPad 3 14IAU7-82RJ009MVN - Ch&#237;nh h&#227;ng"
                                            title="Laptop Lenovo IdeaPad 3 14IAU7-82RJ009MVN - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="sticker sticker-left">
                                    <span>
                                        <img
                                            src={require('~/page/img/sticker/bao-hanh-24t.png')}
                                            title="Bảo h&#224;nh 24 th&#225;ng"
                                        />
                                    </span>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px',
                                            padding: '3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Balo Hoàng Hà</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>+ Chuột Logitech</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-lenovo-ideapad-3-14iau7-82rj009mvn-chinh-hang"
                                        className="title"
                                        title="Laptop Lenovo IdeaPad 3 14IAU7-82RJ009MVN - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop Lenovo IdeaPad 3 14IAU7-82RJ009MVN - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>9,890,000 ₫</strong>
                                        <strike>13,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 11 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-lenovo-ideapad-3-14iau7-82rj009mvn-chinh-hang">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-lenovo-ideapad-5-pro-16arh7-82sn003lvn-chinh-hang"
                                        title="Laptop Lenovo Ideapad 5 Pro 16ARH7-82SN003LVN - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/03/23/82sn003lvn-0.jpg')}
                                            alt="Laptop Lenovo Ideapad 5 Pro 16ARH7-82SN003LVN - Ch&#237;nh h&#227;ng"
                                            title="Laptop Lenovo Ideapad 5 Pro 16ARH7-82SN003LVN - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px',
                                            padding: '3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Balo Hoàng Hà</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>+ Chuột Logitech</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-lenovo-ideapad-5-pro-16arh7-82sn003lvn-chinh-hang"
                                        className="title"
                                        title="Laptop Lenovo Ideapad 5 Pro 16ARH7-82SN003LVN - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop Lenovo Ideapad 5 Pro 16ARH7-82SN003LVN - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>21,290,000 ₫</strong>
                                        <strike>27,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 10 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-lenovo-ideapad-5-pro-16arh7-82sn003lvn-chinh-hang">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-lenovo-ideapad-3-15aba7-82rn006yvn-r7-5825u-8gb-512gb-15-6fhd-w11h"
                                        title="Laptop Lenovo IdeaPad 3 15ABA7 - 82RN006YVN - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/03/03/laptop-lenovo-ideapad-3-15aba7-82rn006yvn-01-01.jpg')}
                                            alt="Laptop Lenovo IdeaPad 3 15ABA7 - 82RN006YVN - Ch&#237;nh h&#227;ng"
                                            title="Laptop Lenovo IdeaPad 3 15ABA7 - 82RN006YVN - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="sticker sticker-left">
                                    <span>
                                        <img
                                            src={require('~/page/img/sticker/bao-hanh-24t.png')}
                                            title="Bảo h&#224;nh 24 th&#225;ng"
                                        />
                                    </span>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px',
                                            padding: '3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Balo Hoàng Hà</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>+ Chuột Logitech</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-lenovo-ideapad-3-15aba7-82rn006yvn-r7-5825u-8gb-512gb-15-6fhd-w11h"
                                        className="title"
                                        title="Laptop Lenovo IdeaPad 3 15ABA7 - 82RN006YVN - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop Lenovo IdeaPad 3 15ABA7 - 82RN006YVN - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>12,490,000 ₫</strong>
                                        <strike>17,490,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 10 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-lenovo-ideapad-3-15aba7-82rn006yvn-r7-5825u-8gb-512gb-15-6fhd-w11h">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-msi-modern-14-c13m-458vn-chinh-hang"
                                        title="Laptop MSI Modern 14 C13M-458VN - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/03/14/c13m-458vn-0.jpg')}
                                            alt="Laptop MSI Modern 14 C13M-458VN - Ch&#237;nh h&#227;ng"
                                            title="Laptop MSI Modern 14 C13M-458VN - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px',
                                            padding: '3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Balo Hoàng Hà</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>+ Chuột Logitech</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-msi-modern-14-c13m-458vn-chinh-hang"
                                        className="title"
                                        title="Laptop MSI Modern 14 C13M-458VN - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop MSI Modern 14 C13M-458VN - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>17,490,000 ₫</strong>
                                        <strike>17,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 12 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-msi-modern-14-c13m-458vn-chinh-hang">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Tặng Phiếu mua h&#224;ng 600.000đ
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-msi-modern-15-b13m-297vn-chinh-hang"
                                        title="Laptop MSI Modern 15 B13M-297VN - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/03/14/b13m-297vn-0.jpg')}
                                            alt="Laptop MSI Modern 15 B13M-297VN - Ch&#237;nh h&#227;ng"
                                            title="Laptop MSI Modern 15 B13M-297VN - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px',
                                            padding: '3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Balo Hoàng Hà</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>+ Chuột Logitech</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-msi-modern-15-b13m-297vn-chinh-hang"
                                        className="title"
                                        title="Laptop MSI Modern 15 B13M-297VN - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop MSI Modern 15 B13M-297VN - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>21,490,000 ₫</strong>
                                        <strike>21,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 12 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-msi-modern-15-b13m-297vn-chinh-hang">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Tặng Phiếu mua h&#224;ng 600.000đ
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-gaming-hp-victus-16-d1193tx-7c138pa-i5-12500h-8gb-512gb-16-1fhd144h"
                                        title="Laptop Gaming HP VICTUS 16 d1193TX-7C138PA - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/03/14/laptop-gaming-hp-victus-16-d1193tx-7c138pa-01.jpg')}
                                            alt="Laptop Gaming HP VICTUS 16 d1193TX-7C138PA - Ch&#237;nh h&#227;ng"
                                            title="Laptop Gaming HP VICTUS 16 d1193TX-7C138PA - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="sticker sticker-left">
                                    <span>
                                        <img
                                            src={require('~/page/img/sticker/bao-hanh-12t.png')}
                                            title="Bảo h&#224;nh 12 th&#225;ng"
                                        />
                                    </span>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-gaming-hp-victus-16-d1193tx-7c138pa-i5-12500h-8gb-512gb-16-1fhd144h"
                                        className="title"
                                        title="Laptop Gaming HP VICTUS 16 d1193TX-7C138PA - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop Gaming HP VICTUS 16 d1193TX-7C138PA - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>21,490,000 ₫</strong>
                                        <strike>27,490,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 9 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-gaming-hp-victus-16-d1193tx-7c138pa-i5-12500h-8gb-512gb-16-1fhd144h">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-gaming-hp-victus-15-fa0111tx-7c0r4pa-i5-12500h-16gb-512gb-15-6fhd1"
                                        title="Laptop Gaming HP VICTUS 15 fa0111TX-7C0R4PA - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/03/14/laptop-gaming-hp-victus-15-fa0111tx-7c0r4pa-01.jpg')}
                                            alt="Laptop Gaming HP VICTUS 15 fa0111TX-7C0R4PA - Ch&#237;nh h&#227;ng"
                                            title="Laptop Gaming HP VICTUS 15 fa0111TX-7C0R4PA - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="sticker sticker-left">
                                    <span>
                                        <img
                                            src={require('~/page/img/sticker/bao-hanh-12t.png')}
                                            title="Bảo h&#224;nh 12 th&#225;ng"
                                        />
                                    </span>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-gaming-hp-victus-15-fa0111tx-7c0r4pa-i5-12500h-16gb-512gb-15-6fhd1"
                                        className="title"
                                        title="Laptop Gaming HP VICTUS 15 fa0111TX-7C0R4PA - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop Gaming HP VICTUS 15 fa0111TX-7C0R4PA - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>23,490,000 ₫</strong>
                                        <strike>28,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 9 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-gaming-hp-victus-15-fa0111tx-7c0r4pa-i5-12500h-16gb-512gb-15-6fhd1">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-gaming-hp-victus-16-e1104ax-7c0s9pa-r7-6800h-8gb-512gb-16-1fhd144hz"
                                        title="Laptop Gaming HP VICTUS 16 e1104AX-7C0S9PA - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/03/14/laptop-gaming-hp-victus-16-e1104ax-7c0s9pa-01.jpg')}
                                            alt="Laptop Gaming HP VICTUS 16 e1104AX-7C0S9PA - Ch&#237;nh h&#227;ng"
                                            title="Laptop Gaming HP VICTUS 16 e1104AX-7C0S9PA - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="sticker sticker-left">
                                    <span>
                                        <img
                                            src={require('~/page/img/sticker/bao-hanh-12t.png')}
                                            title="Bảo h&#224;nh 12 th&#225;ng"
                                        />
                                    </span>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-gaming-hp-victus-16-e1104ax-7c0s9pa-r7-6800h-8gb-512gb-16-1fhd144hz"
                                        className="title"
                                        title="Laptop Gaming HP VICTUS 16 e1104AX-7C0S9PA - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop Gaming HP VICTUS 16 e1104AX-7C0S9PA - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>23,490,000 ₫</strong>
                                        <strike>31,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 9 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-gaming-hp-victus-16-e1104ax-7c0s9pa-r7-6800h-8gb-512gb-16-1fhd144hz">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-hp-pavilion-15-fa0115TX 7C0X1PA-chinh-hang"
                                        title="Laptop Gaming HP Victus 15 fa0115TX-7C0X1PA - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/03/14/laptop-gaming-hp-victus-15-fa0115tx-7c0x1pa-01.jpg')}
                                            alt="Laptop Gaming HP Victus 15 fa0115TX-7C0X1PA - Ch&#237;nh h&#227;ng"
                                            title="Laptop Gaming HP Victus 15 fa0115TX-7C0X1PA - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-hp-pavilion-15-fa0115TX 7C0X1PA-chinh-hang"
                                        className="title"
                                        title="Laptop Gaming HP Victus 15 fa0115TX-7C0X1PA - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop Gaming HP Victus 15 fa0115TX-7C0X1PA - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>20,990,000 ₫</strong>
                                        <strike>26,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 9 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-hp-pavilion-15-fa0115TX 7C0X1PA-chinh-hang">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-lenovo-thinkpad-e15-gen-4-21ed0069vn-chinh-hang"
                                        title="Laptop Lenovo ThinkPad E15 Gen 4 21ED0069VN - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/03/09/thinkpad-e15-gen-4-0.jpg')}
                                            alt="Laptop Lenovo ThinkPad E15 Gen 4 21ED0069VN - Ch&#237;nh h&#227;ng"
                                            title="Laptop Lenovo ThinkPad E15 Gen 4 21ED0069VN - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px',
                                            padding: '3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Balo Hoàng Hà</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>+ Chuột Logitech</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-lenovo-thinkpad-e15-gen-4-21ed0069vn-chinh-hang"
                                        className="title"
                                        title="Laptop Lenovo ThinkPad E15 Gen 4 21ED0069VN - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop Lenovo ThinkPad E15 Gen 4 21ED0069VN - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>15,490,000 ₫</strong>
                                        <strike>18,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 10 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-lenovo-thinkpad-e15-gen-4-21ed0069vn-chinh-hang">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-hp-victus-16-e1107ax-7c140pa-chinh-hang"
                                        title="Laptop HP VICTUS 16 e1107AX-7C140PA - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/03/28/7c140pa-0.jpg')}
                                            alt="Laptop HP VICTUS 16 e1107AX-7C140PA - Ch&#237;nh h&#227;ng"
                                            title="Laptop HP VICTUS 16 e1107AX-7C140PA - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-hp-victus-16-e1107ax-7c140pa-chinh-hang"
                                        className="title"
                                        title="Laptop HP VICTUS 16 e1107AX-7C140PA - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop HP VICTUS 16 e1107AX-7C140PA - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>19,490,000 ₫</strong>
                                        <strike>23,990,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 9 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-hp-victus-16-e1107ax-7c140pa-chinh-hang">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <a
                                        href="laptop/laptop-hp-pavilion-15-eg2035tx-6k781pa-i5-1235u-8gb-512gb-pcie-15-6-fhd-vg"
                                        title="Laptop HP Pavilion 15 eg2035TX-6K781PA - Ch&#237;nh h&#227;ng"
                                    >
                                        <img
                                            src={require('~/page/img//productlist/ts/Uploads/2023/03/09/laptop-hp-pavilion-15-eg2035tx-6k781pa-01.jpg')}
                                            alt="Laptop HP Pavilion 15 eg2035TX-6K781PA - Ch&#237;nh h&#227;ng"
                                            title="Laptop HP Pavilion 15 eg2035TX-6K781PA - Ch&#237;nh h&#227;ng"
                                        />
                                    </a>
                                </div>

                                <div className="sticker sticker-left">
                                    <span>
                                        <img
                                            src={require('~/page/img/sticker/bao-hanh-12t.png')}
                                            title="Bảo h&#224;nh 12 th&#225;ng"
                                        />
                                    </span>
                                </div>

                                <div className="cover">
                                    <div
                                        style={{
                                            color: 'yellow',
                                            background: '#00483D',
                                            margin: '-95px 5px 0 52px',
                                            padding: '3px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <span style={{ color: 'white' }}>Tặng Balo Hoàng Hà</span>
                                        <br />
                                        <span style={{ color: 'yellow' }}>+ Chuột Logitech</span>
                                    </div>
                                </div>

                                <div className="info">
                                    <a
                                        href="laptop/laptop-hp-pavilion-15-eg2035tx-6k781pa-i5-1235u-8gb-512gb-pcie-15-6-fhd-vg"
                                        className="title"
                                        title="Laptop HP Pavilion 15 eg2035TX-6K781PA - Ch&#237;nh h&#227;ng"
                                    >
                                        Laptop HP Pavilion 15 eg2035TX-6K781PA - Ch&#237;nh h&#227;ng
                                    </a>
                                    <span className="price">
                                        <strong>15,990,000 ₫</strong>
                                        <strike>20,490,000 ₫</strike>
                                    </span>
                                </div>

                                <div className="note">
                                    <span className="bag">KM</span>
                                    <label title="Thanh to&#225;n qua Moca tặng ngay đế sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04">
                                        Thanh to&#225;n qua Moca tặng ngay đế sạ...
                                    </label>
                                    <strong className="text-orange">VÀ 10 KM KHÁC</strong>
                                </div>
                                <div className="promote">
                                    <a href="laptop/laptop-hp-pavilion-15-eg2035tx-6k781pa-i5-1235u-8gb-512gb-pcie-15-6-fhd-vg">
                                        <ul>
                                            <li>
                                                <span className="bag">KM</span> Thanh to&#225;n qua Moca tặng ngay đế
                                                sạc trị gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng gi&#225; trị từ
                                                6 Triệu) - &#193;p dụng từ 01/04
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Mở v&#237; VNPAY v&#224; thanh to&#225;n
                                                giảm th&#234;m tới 100.000đ
                                            </li>
                                            <li>
                                                <span className="bag">KM</span> Giảm tới 300.000đ khi thanh to&#225;n
                                                qua VNPAY (&#193;p dụng từ 01/04- 30/06)
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="page-holder"></div>

                    <div className="more-product" id="page-pager">
                        <a href="javascript:getPage(2)">Xem thêm 235 sản phẩm</a>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="page-content page-content-img">
                        <p
                            className="MsoNormal"
                            align="center"
                            style={{ marginBottom: '6.0pt', textAlign: 'center', lineHeight: '150%' }}
                        >
                            <span style={{ fontSize: '12pt' }}>﻿</span>
                            <span style={{ fontSize: '12pt' }}>﻿</span>
                            <b>
                                <span style={{ fontSize: '22.0pt', lineHeight: '150px' }}>
                                    Mua Laptop giá rẻ chính hãng tại Hoàng Hà Mobile
                                </span>
                            </b>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <span style={{ fontSize: '13.0pt', lineHeight: '150px' }}>
                                <span style={{ fontSize: '12pt' }}>
                                    Laptop hay còn được biết đến với tên gọi máy tính xách tay, là một kiểu dạng máy
                                    tính cá nhân được tối giản tuyệt đối nhằm giúp người dùng có thể dễ dàng di chuyển
                                    cũng như mang theo bên mình.
                                </span>
                            </span>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <b>
                                <span style={{ fontSize: '18.0pt', lineHeight: '150%' }}>Định nghĩa về laptop</span>
                            </b>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <span style={{ fontSize: '13.0pt', lineHeight: '150px' }}>
                                <span style={{ fontSize: '12pt' }}>
                                    Máy tính để bàn chắc hẳn đã là một thiết bị đã quá quen thuộc với chúng ta trong
                                    cuộc sống hiện đại ngày nay. Một bộ máy tính để bản bao gồm hai thành phần chính là
                                    thùng máy CPU và màn hình. Thế nhưng máy tính để bàn lại có một điểm yếu chí mạng đó
                                    là không có tính cơ động và người dùng chỉ có thể ở yên một chỗ. Đây thực sự là một
                                    điều cực kỳ bất tiện trong một xã hội luôn luôn chuyển động không ngừng hiện nay. Và
                                    vì vậy, laptop (máy tính xách tay) đã được ra đời, đáp ứng được nhu cầu di động mà
                                    vẫn đảm bảo những gì mà máy tính để bàn làm được.
                                </span>
                            </span>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <span style={{ fontSize: '13.0pt', lineHeight: '150px' }}>
                                <span style={{ fontSize: '12pt' }}>
                                    Laptop thay vì chạy trực tiếp bằng nguồn điện, thiết bị này được tích hợp pin đi kèm
                                    hoặc gắn liền bên trong cho phép máy hoạt động ngay cả khi không được cung cấp nguồn
                                    điện trực tiếp. Ngoài ra, laptop cũng được tích hợp những chức năng và tính năng cần
                                    thiết mà người dùng cần như: bàn phím, chuột, loa, ổ đĩa quang, các loại cổng kết
                                    nối, kết nối không dây, v.v.
                                </span>
                            </span>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <b>
                                <span style={{ fontSize: '18.0pt', lineHeight: '150%' }}>
                                    Laptop thương hiệu nào tốt và đáng mua hiện nay?
                                </span>
                            </b>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <span style={{ fontSize: '13.0pt', lineHeight: '150px' }}>
                                <span style={{ fontSize: '12pt' }}>
                                    Trong nhiều năm trở lại đây, trên thị trường Việt Nam nói riêng cũng như thế giới
                                    nói chung đã có rất nhiều hãng sản xuất xuất hiện và cùng nhau cạnh tranh trên thị
                                    trường máy tính xách tay. Vậy nên laptop cũng được chia ra làm nhiều phân khúc từ
                                    máy tính giá rẻ cho tới cao cấp, chuyên văn phòng đến chuyên chơi game, v.v. Dưới
                                    đây, Hoàng Hà Mobile xin được liệt kê một vài dòng máy laptop tốt và đáng mua tới từ
                                    những thương hiệu nổi tiếng.
                                </span>
                            </span>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <b>
                                <span style={{ fontSize: '16.0pt', lineHeight: '150%' }}>
                                    Laptop Windows (ASUS, HP, Dell,…)
                                </span>
                            </b>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <span style={{ fontSize: '13.0pt', lineHeight: '150px' }}>
                                <span style={{ fontSize: '12pt' }}>
                                    Laptop Windows là những chiếc máy tính xách tay được cài đặt hệ điều hành Windows
                                    đến từ Microsoft. Đây là laptop được nhiều người tiêu dùng lựa chọn nhất hiện nay
                                    bởi tính phổ biến cũng như tiện dụng đã được khẳng định qua nhiều năm của Windows
                                    OS, cũng như được nhiều nhà sản xuất, đại lý bày bán.
                                </span>
                            </span>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <span style={{ fontSize: '12pt', lineHeight: '150%' }}>
                                Ở thời điểm hiện tại, mỗi khi nhắc tới những mẫu laptop giá rẻ, cấu hình ổn, độ bền cao
                                thì không thể bỏ qua được các dòng máy sau đây:
                            </span>
                        </p>
                        <ul>
                            <li style={{ marginBottom: '6pt', textAlign: 'justify', lineHeight: '150%' }}>
                                <b style={{ textIndent: '-0.25in' }}>
                                    <span style={{ fontSize: '12pt', lineHeight: '150%' }}>
                                        <a href="laptop/asus" target="_blank">
                                            ASUS
                                        </a>
                                    </span>
                                </b>
                                <span style={{ textIndent: '-0.25in', fontSize: '12pt', lineHeight: '150%' }}>
                                    : Đây là hãng công nghệ chuyên sản xuất laptop, smartphone và các thiết bị công nghệ
                                    tới từ Đài Loan, đã nhanh chóng du nhập và phát triển mạnh mẽ tại Việt Nam. Những
                                    thiết bị laptop đến từ ASUS chú trọng vào thiết kế trẻ trung, mỏng nhẹ hướng tới các
                                    bạn trẻ sinh viên hoặc dân văn phòng. Những mẫu laptop của ASUS luôn có giá thành
                                    vừa phải cùng cấu hình vượt trội trong tầm giá, đa dạng sự lựa chọn cho người mua.
                                </span>
                            </li>
                            <li style={{ marginBottom: '6pt', textAlign: 'justify', lineHeight: '150%' }}>
                                <b style={{ textIndent: '-0.25in' }}>
                                    <span style={{ fontSize: '12pt', lineHeight: '150%' }}>
                                        <a href="laptop/hp" target="_blank">
                                            HP
                                        </a>
                                    </span>
                                </b>
                                <span style={{ textIndent: '-0.25in', fontSize: '12pt', lineHeight: '150%' }}>
                                    : Là hãng sản xuất laptop uy tín tới từ Mỹ, các sản phẩm máy tính xách tay tới từ HP
                                    đã sớm được du nhập vào thị trường Việt Nam và trở thành thương hiệu yêu thích được
                                    nhiều khách hàng tìm mua. Với thế mạnh về độ bền bỉ cao, HP đã nhanh chóng chinh
                                    phục được người dùng. Ngoài độ bền ra, những dòng laptop của HP còn có thiết kế đẹp,
                                    sang trọng và bắt mắt.
                                </span>
                            </li>
                            <li style={{ marginBottom: '6pt', textAlign: 'justify', lineHeight: '150%' }}>
                                <b style={{ textIndent: '-0.25in' }}>
                                    <span style={{ fontSize: '12pt', lineHeight: '150%' }}>
                                        <a href="laptop/dell" target="_blank">
                                            Dell
                                        </a>
                                    </span>
                                </b>
                                <span style={{ textIndent: '-0.25in', fontSize: '12pt', lineHeight: '150%' }}>
                                    : Đây cũng là một hãng điện tử tới từ Mỹ. Với 30 năm hoạt động, Dell đã mang tới cho
                                    người dùng trên toàn thế giới hàng triệu chiếc máy tính xách tay trải dài trong từng
                                    phân khúc. Những chiếc laptop tới từ Dell luôn có thiết kế đẹp, nhã nhặn cùng cấu
                                    hình cao, tính năng đầy đủ nhưng luôn có mức giá hợp lý. Năm 2018, Dell đã được bình
                                    chọn là một trong những hãng máy tính trọng yếu tại thị trường Việt Nam, khẳng định
                                    vị thế của chính mình tại đất nước có mảnh đất hình chữ S.
                                </span>
                            </li>
                        </ul>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <span style={{ fontSize: '13.0pt', lineHeight: '150px' }}>
                                <span style={{ fontSize: '12pt' }}>
                                    Trên đây là một vài thương hiệu laptop Windows phổ biến. Ngoài ra, còn rất nhiều
                                    thương hiệu uy tín khác như
                                    <a href="laptop/hang-san-xuat/acer" target="_blank">
                                        <b>Acer</b>
                                    </a>
                                    ,
                                    <b>
                                        <a href="laptop/lenovo" target="_blank">
                                            Lenovo
                                        </a>
                                    </b>
                                    ,
                                    <b>
                                        <a href="laptop/gigabyte" target="_blank">
                                            Gigabyte
                                        </a>
                                    </b>
                                    ,
                                    <b>
                                        <a href="laptop/msi" target="_blank">
                                            MSI
                                        </a>
                                    </b>
                                    ... hay những cái tên mới như
                                    <b>
                                        <a href="laptop/huawei" target="_blank">
                                            Huawei
                                        </a>
                                    </b>
                                    ,
                                    <b>
                                        <a href="laptop/microsoft" target="_blank">
                                            Surface
                                        </a>
                                    </b>
                                    ... Để tham khảo thêm các dòng máy laptop tới từ các thương hiệu khác, hãy truy cập
                                    vào hoanghamobile.com để biết chi tiết.
                                </span>
                            </span>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <b>
                                <span style={{ fontSize: '16.0pt', lineHeight: '150%' }}>Laptop Apple MacBook</span>
                            </b>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <span style={{ fontSize: '13.0pt', lineHeight: '150px' }}>
                                <span style={{ fontSize: '12pt' }}>
                                    Như chúng ta đã biết, Apple không chỉ nổi tiếng với những dòng điện thoại thông minh
                                    iPhone mà những chiếc máy tính xách tay
                                    <a href="laptop/macbook" target="_blank">
                                        <b>MacBook</b>
                                    </a>
                                    chạy MacOS cũng được coi là mũi nhọn của hãng. Những mẫu MacBook của Apple luôn được
                                    biết tới là những chiếc laptop có cấu hình mạnh mẽ, tính ổn định cao cùng khả năng
                                    bảo mật tốt, giao diện thân thiện với người dùng. Hầu hết những mẫu MacBook đều có
                                    thiết kế tuyệt đẹp, và sang trọng như một kiệt tác công nghệ. Vì vậy MacBook thường
                                    là những sản phẩm hướng tới tệp người dùng là doanh nhân, có điều kiện kinh tế hoặc
                                    đơn giản là dành cho những người yêu thích sự đơn giản và ổn định của hệ điều hành
                                    MacOS.
                                </span>
                            </span>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <b>
                                <span style={{ fontSize: '18.0pt', lineHeight: '150%' }}>
                                    Một vài lưu ý khi mua laptop mà bạn nên nắm được
                                </span>
                            </b>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <span style={{ fontSize: '12pt', lineHeight: '150%' }}>
                                Để lựa chọn được cho mình một mẫu laptop ưng ý, phù hợp với nhu cầu của bản thân, Hoàng
                                Hà Mobile xin được chia sẻ một vài lưu ý như sau:
                            </span>
                        </p>
                        <ul>
                            <li style={{ marginBottom: '6pt', textAlign: 'justify', lineHeight: '150%' }}>
                                <b style={{ textIndent: '-0.25in' }}>
                                    <span style={{ fontSize: '12pt', lineHeight: '150%' }}>
                                        Hãy chọn laptop mới chính hãng
                                    </span>
                                </b>
                                <span style={{ textIndent: '-0.25in', fontSize: '12pt', lineHeight: '150%' }}>
                                    : Nếu như bạn muốn mua một chiếc laptop xác định sử dụng chúng lâu dài, hãy chọn
                                    những chiếc laptop mới nguyên seal tới từ những thương hiệu nổi tiếng để có được ưu
                                    đãi cũng như chế độ bảo hành tốt nhất.
                                </span>
                            </li>
                            <li style={{ marginBottom: '6pt', textAlign: 'justify', lineHeight: '150%' }}>
                                <b style={{ textIndent: '-0.25in' }}>
                                    <span style={{ fontSize: '12pt', lineHeight: '150%' }}>Cấu hình</span>
                                </b>
                                <span style={{ textIndent: '-0.25in', fontSize: '12pt', lineHeight: '150%' }}>
                                    : Đây được coi là lưu ý quan trọng nhất mỗi khi chúng ta chọn mua một chiếc laptop.
                                    Khi đi mua laptop, hãy chú ý tới các thông số như: CPU, GPU, RAM, ổ cứng, hệ điều
                                    hành, các loại cổng kết nối. Hãy trang bị cho mình những kiến thức cơ bản về những
                                    linh kiện trên là bạn có thể tìm được chiếc laptop ưng ý.
                                </span>
                            </li>
                            <li style={{ marginBottom: '6pt', textAlign: 'justify', lineHeight: '150%' }}>
                                <b style={{ textIndent: '-0.25in' }}>
                                    <span style={{ fontSize: '12pt', lineHeight: '150%' }}>Giá bán</span>
                                </b>
                                <span style={{ textIndent: '-0.25in', fontSize: '12pt', lineHeight: '150%' }}>
                                    : Mua một chiếc laptop phù hợp với nhu cầu bản thân sẽ giúp bạn tiết kiệm được rất
                                    nhiều chi phí. Vậy nên vấn đề giá cả cũng vô cùng quan trọng và bạn nên lưu ý nhé.
                                </span>
                            </li>
                        </ul>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <b>
                                <span style={{ fontSize: '18.0pt', lineHeight: '150%' }}>
                                    Laptop giá rẻ chính hãng tại Hoàng Hà Mobile
                                </span>
                            </b>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150%' }}
                        >
                            <span style={{ fontSize: '13.0pt', lineHeight: '150%' }}>
                                <span style={{ fontSize: '12pt' }}>
                                    Hiện tại, có rất nhiều mẫu Laptop khác nhau đang có mặt trên thị trường, và để chọn
                                    được những sản phẩm chất lượng, chính hãng thì địa chỉ mà khách hàng “chọn mặt gửi
                                    vàng” luôn là yếu tố quan trọng nhất. Hoàng Hà Mobile tự hào là địa chỉ uy tín,
                                    chuyên cung cấp các sản phẩm Laptop chính hãng với chính sách bảo hành, đổi trả hấp
                                    dẫn.
                                </span>
                            </span>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ marginBottom: '6.0pt', textAlign: 'justify', lineHeight: '150px' }}
                        >
                            <span style={{ fontSize: '13.0pt', lineHeight: '150px' }}>
                                <span style={{ fontSize: '12pt' }}>
                                    Các sản phẩm Laptop của Hoàng Hà Mobile luôn đảm bảo có được chế độ bảo hành chính
                                    hãng nhằm mang tới cho khách hàng những trải nghiệm sử dụng tốt nhất. Do đó, nếu bạn
                                    đang có ý định mua Laptop chính hãng với mức giá phải chăng thì hãy truy cập vào
                                    website&nbsp;
                                </span>
                                <a href="">
                                    <span style={{ color: 'blue', fontSize: '12pt' }}></span>
                                </a>
                                <span style={{ fontSize: '12pt' }}>
                                    &nbsp;hoặc đến ngay cửa hàng gần nhất của Hoàng Hà Mobile nhé.
                                </span>
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </GlobalStyles>
    );
}

export default DanhSachSanPham;
