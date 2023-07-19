import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCaretRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ZaloSvg from '~/components/Layout/Components/ZaloSvg';
import GlobalStyles from '~/components/GlobalStyles';
import { ReactSVG } from 'react-svg';
function GioiThieuCH() {
    return (
        <GlobalStyles>
            <section>
                <div className="container">
                    <div className="cart">
                        <div className="header">
                            <div className="back">
                                <a href></a>
                                <div>
                                    <a href>
                                        <strong>
                                            <FontAwesomeIcon icon={faArrowLeft} />
                                            Về trang chủ
                                        </strong>
                                    </a>
                                </div>
                            </div>
                            <div className="list-shops">
                                <div className="header">
                                    <div className="just-center">
                                        <img
                                            src={require('~/page/img/content-icon/icon-store.png')}
                                            style={{ width: '900px', maxWidth: '90%' }}
                                        />
                                    </div>
                                    <h1>Hệ thống 126 siêu thị Hoàng Hà Mobile trên toàn quốc</h1>
                                    <div className="selector">
                                        <label>
                                            <FontAwesomeIcon icon={faLocationDot} />

                                            <span>LỰA CHỌN TỈNH/THÀNH PHỐ</span>
                                        </label>
                                        <div className="ctn">
                                            <ul>
                                                <li>
                                                    <a data-id={0} href="javascript:;">
                                                        Toàn bộ hệ thống
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={1} href="javascript:;">
                                                        Hà Nội
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={50} href="javascript:;">
                                                        TP HCM
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={57} href="javascript:;">
                                                        An Giang
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={49} href="javascript:;">
                                                        Bà Rịa - Vũng Tàu
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={15} href="javascript:;">
                                                        Bắc Giang
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={62} href="javascript:;">
                                                        Bạc Liêu
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={18} href="javascript:;">
                                                        Bắc Ninh
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={35} href="javascript:;">
                                                        Bình Định
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={47} href="javascript:;">
                                                        Bình Dương
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={45} href="javascript:;">
                                                        Bình Phước
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={39} href="javascript:;">
                                                        Bình Thuận
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={63} href="javascript:;">
                                                        Cà Mau
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={59} href="javascript:;">
                                                        Cần Thơ
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={32} href="javascript:;">
                                                        Đà Nẵng
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={42} href="javascript:;">
                                                        Đắk Lắk
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={43} href="javascript:;">
                                                        Đắk Nông
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={7} href="javascript:;">
                                                        Điện Biên
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={48} href="javascript:;">
                                                        Đồng Nai
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={56} href="javascript:;">
                                                        Đồng Tháp
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={41} href="javascript:;">
                                                        Gia Lai
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={23} href="javascript:;">
                                                        Hà Nam
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={28} href="javascript:;">
                                                        Hà Tĩnh
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={19} href="javascript:;">
                                                        Hải Dương
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={20} href="javascript:;">
                                                        Hải Phòng
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={11} href="javascript:;">
                                                        Hoà Bình
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={21} href="javascript:;">
                                                        Hưng Yên
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={37} href="javascript:;">
                                                        Khánh Hòa
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={58} href="javascript:;">
                                                        Kiên Giang
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={44} href="javascript:;">
                                                        Lâm Đồng
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={6} href="javascript:;">
                                                        Lào Cai
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={51} href="javascript:;">
                                                        Long An
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={24} href="javascript:;">
                                                        Nam Định
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={27} href="javascript:;">
                                                        Nghệ An
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={25} href="javascript:;">
                                                        Ninh Bình
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={38} href="javascript:;">
                                                        Ninh Thuận
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={16} href="javascript:;">
                                                        Phú Thọ
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={36} href="javascript:;">
                                                        Phú Yên
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={29} href="javascript:;">
                                                        Quảng Bình
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={33} href="javascript:;">
                                                        Quảng Nam
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={34} href="javascript:;">
                                                        Quảng Ngãi
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={14} href="javascript:;">
                                                        Quảng Ninh
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={30} href="javascript:;">
                                                        Quảng Trị
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={61} href="javascript:;">
                                                        Sóc Trăng
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={9} href="javascript:;">
                                                        Sơn La
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={46} href="javascript:;">
                                                        Tây Ninh
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={22} href="javascript:;">
                                                        Thái Bình
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={12} href="javascript:;">
                                                        Thái Nguyên
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={26} href="javascript:;">
                                                        Thanh Hóa
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={31} href="javascript:;">
                                                        Thừa Thiên Huế
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={52} href="javascript:;">
                                                        Tiền Giang
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={5} href="javascript:;">
                                                        Tuyên Quang
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={55} href="javascript:;">
                                                        Vĩnh Long
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={17} href="javascript:;">
                                                        Vĩnh Phúc
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-id={10} href="javascript:;">
                                                        Yên Bái
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="lists">
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />

                                        <div className="info">
                                            <p>194 Lê Duẩn, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0962.066.208"> 0962.066.208</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 </p>
                                            <p>
                                                <a href="194-le-duan-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>102 Phố Xốm, Phú Lãm, Hà Đông, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0818.576.586"> 0818.576.586</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30 </p>
                                            <p>
                                                <a href="102-pho-xom-phu-lam-ha-dong-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>392 Cầu Giấy, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0968.32.33.99"> 0968.32.33.99</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h20 - 21h00 </p>
                                            <p>
                                                <a href="392-cau-giay-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>101 Kim Mã - Phường Kim Mã - Quận Ba ĐÌnh - Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:088.6868.101"> 088.6868.101</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h00</p>
                                            <p>
                                                <a href="101-kim-ma-phuong-kim-ma-quan-ba-dinh-ha-noi">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>109 Trần Duy Hưng, Cầu Giấy, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0985568109"> 0985568109</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="109-tran-duy-hung-cau-giay-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>122 Thái Hà, Hà Nội </p>
                                            <p>
                                                ĐT: <a href="tel:0973.790.122"> 0973.790.122</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30</p>
                                            <p>
                                                <a href="122-thai-ha-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>126 Phố Huế, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0968.668.995"> 0968.668.995</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 </p>
                                            <p>
                                                <a href="95b-pho-hue-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>176 Chùa Thông, P. Sơn Lộc, TX Sơn Tây, Hà Nội </p>
                                            <p>
                                                ĐT: <a href="tel:088.686.39.38"> 088.686.39.38</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30 </p>
                                            <p>
                                                <a href="176-chua-thong-p-son-loc-tx-son-tay-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>182 Cao Lỗ, H. Đông Anh, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:090.228.93.39"> 090.228.93.39</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="182-cao-lo-h-dong-anh-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>196 Quang Trung, Hà Đông, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:098.2468.196"> 098.2468.196</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="196-quang-trung-ha-dong-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>208 Trần Lư. Thường Tín, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:088.6868.223"> 088.6868.223</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00 - 21h30</p>
                                            <p>
                                                <a href="208-tran-lu-thuong-tin-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>213 Xã Đàn, P.Nam Đồng, Hà Nội </p>
                                            <p>
                                                ĐT: <a href="tel:0936.231.213"> 0936.231.213</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h00 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="797-799-xa-dan-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>258 Ngô Gia Tự, Long Biên, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0836886258"> 0836886258</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="258-ngo-gia-tu-long-bien-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>259 Lạc long quân, Phường Nghĩa Đô, Quận Cầu Giấy, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0968.590.259"> 0968.590.259</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 </p>
                                            <p>
                                                <a href="259-lac-long-quan-phuong-nghia-do-quan-cau-giay-ha-noi-khai-truong-ngay-02-10">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>28 Trần Phú, Hà Đông, Hà Nội </p>
                                            <p>
                                                ĐT: <a href="tel:0911.266.669"> 0911.266.669</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h20 - 21h30 </p>
                                            <p>
                                                <a href="28-tran-phu-ha-dong">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>336 Phạm Văn Đồng, Quận Bắc Từ Liêm, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0886.868.010"> 0886.868.010</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30</p>
                                            <p>
                                                <a href="1a-co-nhue-quan-bac-tu-liem-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>348 Hồ Tùng Mậu, Cầu Diễn, Từ Liêm, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0968.218.919"> 0968.218.919</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 </p>
                                            <p>
                                                <a href="348-ho-tung-mau-cau-dien-tu-liem">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>368 Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:093.628.1628"> 093.628.1628</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h00 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="368-nguyen-trai-thanh-xuan-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>382 Nguyễn Văn Cừ, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0915.963.222"> 0915.963.222</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h00 </p>
                                            <p>
                                                <a href="382-nguyen-van-cu-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>392 Trương Định, Hoàng Mai, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:083.263.9292"> 083.263.9292</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 </p>
                                            <p>
                                                <a href="392-truong-dinh-hoang-mai">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>651 Nguyễn Văn Linh, Long Biên, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0968.789.651"> 0968.789.651</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30</p>
                                            <p>
                                                <a href="651-nguyen-van-linh-long-bien-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>797 - 799 Giải Phóng, P.Giáp Bát, Q.Hoàng Mai, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0936.396.799"> 0936.396.799</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h00 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="213-giai-phong-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>89 Tam Trinh, Hoàng Mai, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0815.86.79.89"> 0815.86.79.89</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="89-tam-trinh-hoang-mai-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 110 Cầu Bươu, Tân Triều, Thanh Trì, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0978866110"> 0978866110</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="so-110-cau-buou-tan-trieu-thanh-tri-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 15 Trần Phú, Ba Đình, Hà Nội (Shop cũ 12 Điện Biên Phủ)</p>
                                            <p>
                                                ĐT: <a href="tel:089.66.777.12"> 089.66.777.12</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="12-dien-bien-phu-ha-noi">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 20 Khu 7, Thị trấn Trạm Trôi, Huyện Hoài Đức, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0899.559.669"> 0899.559.669</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h00 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="so-20-khu-7-thi-tran-tram-troi-huyen-hoai-duc-ha-noi">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 372 Hà Huy Tập, TT Yên Viên, Gia Lâm, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:086.8866.372"> 086.8866.372</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="so-372-ha-huy-tap-tt-yen-vien-gia-lam-ha-noi">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 52 Hàng Đậu - Đồng Xuân - Hoàn Kiếm - Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:090.215.5252"> 090.215.5252</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="so-52-hang-dau-dong-xuan-hoan-kiem-ha-noi-sap-khai-truong">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={1}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 59 Quang Trung, TT Vân Đình, Ứng Hòa, Hà Nội</p>
                                            <p>
                                                ĐT: <a href="tel:0936045959"> 0936045959</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="so-59-quang-trung-tt-van-dinh-ung-hoa-ha-noi">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>1060 Đường 3/2, Phường 12, Quận 11, TP HCM</p>
                                            <p>
                                                ĐT: <a href="tel:0932892255"> 0932892255</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="1142-1144-duong-3-2-phuong-12-quan-11-tp-ho-chi-minh">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>156 Trần Não, P. An Khánh, Tp Thủ Đức, Hồ Chí Minh</p>
                                            <p>
                                                ĐT: <a href="tel:0909222156"> 0909222156</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00-21h00 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="156-tran-nao-p-an-khanh-quan-2-tp-hcm">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>1680 Huỳnh Tấn Phát, TT. Nhà Bè, Nhà Bè, Tp. HCM</p>
                                            <p>
                                                ĐT: <a href="tel:0909051680"> 0909051680</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>
                                                HĐ: Từ Thứ 2-Thứ 6: 8h00-19h00. Thứ 7: 8h30-17h. Chủ nhật off - (Shop
                                                SIS MobiFone)
                                            </p>
                                            <p>
                                                <a href="1680-huynh-tan-phat-tt-nha-be-nha-be-tp-hcm">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>170C Quang Trung, P10, Q.Gò Vấp, TP.HCM</p>
                                            <p>
                                                ĐT: <a href="tel:0898899170"> 0898899170</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: Từ thứ 2-6 mở cửa 8h-21H, T7 CN: 8h-19h (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="170c-quang-trung-p10-q-go-vap-tp-hcm">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>188Ter Trần Quang Khải, Quận 1, TP HCM</p>
                                            <p>
                                                ĐT: <a href="tel:0942.89.2255"> 0942.89.2255</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h20 - 21h30</p>
                                            <p>
                                                <a href="188ter-tran-quang-khai-quan-1-tp-hcm">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>215 Lê Văn Việt, phường Hiệp Phú, Quận 9, TP HCM</p>
                                            <p>
                                                ĐT: <a href="tel:0966.356.215"> 0966.356.215</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="215-le-van-viet-phuong-hiep-phu-quan-9">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>243 Bạch Đằng, Phường 15, Quận Bình Thạnh, Tp HCM </p>
                                            <p>
                                                ĐT: <a href="tel:0826.80.2255"> 0826.80.2255</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="243-bach-dang-phuong-15-quan-binh-thanh-tp-hcm">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>
                                                347 Hoàng Văn Thụ, Quận Tân Bình, TP. Hồ Chí Minh (Vòng xoay Lăng Cha
                                                Cả)
                                            </p>
                                            <p>
                                                ĐT: <a href="tel:083.830.22.55"> 083.830.22.55</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="347-hoang-van-thu-quan-tan-binh-tp-ho-chi-minh">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>
                                                397 Nguyễn Thị Tú, Phường Bình Hưng Hòa B, Quận Bình Tân, TP.Hồ Chí Minh
                                            </p>
                                            <p>
                                                ĐT: <a href="tel:0787.395.397"> 0787.395.397</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="397-nguyen-thj-tu-phuong-binh-hung-hoa-b-quan-binh-tan-tp-ho-chi-minh">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>419 Nguyễn Ảnh Thủ (đối diện chợ Trung Chánh), Quận 12, TP.HCM</p>
                                            <p>
                                                ĐT: <a href="tel:0902.840.419"> 0902.840.419</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="419-nguyen-anh-thu-doi-dien-cho-trung-chanh-quan-12-tp-hcm">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>436 Quang Trung, Phường 10, Quận Gò Vấp, TP.HCM</p>
                                            <p>
                                                ĐT: <a href="tel:088.996.8436"> 088.996.8436</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="436-quang-trung-phuong-10-quan-go-vap-tp-hcm">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>503 Âu Cơ, Q.Tân Phú. HCM</p>
                                            <p>
                                                ĐT: <a href="tel:0826.30.2255"> 0826.30.2255</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h20 - 21h30</p>
                                            <p>
                                                <a href="503-au-co-q-tan-phu-hcm">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>505 Lê Hồng Phong, Phường 2, Quận 10, Tp.HCM</p>
                                            <p>
                                                ĐT: <a href="tel:0702825505"> 0702825505</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="505-le-hong-phong-phuong-2-quan-10-tp-hcm">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>
                                                572-574 Tỉnh Lộ 10, Phường Bình Trị Đông, Quận Bình Tân, Tp Hồ Chí Minh
                                            </p>
                                            <p>
                                                ĐT: <a href="tel:0705.572.574"> 0705.572.574</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="572-574-tinh-lo-10-binh-tan-ho-chi-minh">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>621D Cách Mạng Tháng 8, Phường 15, Quận 10, TP HCM</p>
                                            <p>
                                                ĐT: <a href="tel:0972.89.22.55"> 0972.89.22.55</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="621d-cach-mang-thang-8-phuong-15-quan-10-tp-ho-chi-minh">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>663-665 Hậu Giang, Phường 11, Quận 6, TP.Hồ Chí Minh</p>
                                            <p>
                                                ĐT: <a href="tel:0768.663.665"> 0768.663.665</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>
                                                HĐ: *Thứ hai đến thử sáu: 8h00-21h00. *Thứ bảy, chủ nhật: 8h00-19h00
                                                (Shop SIS MobiFone)
                                            </p>
                                            <p>
                                                <a href="663-665-hau-giang-phuong-11-quan-6-tp-ho-chi-minh">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>867 Lũy Bán Bích, P. Tân Thành, Q. Tân Phú, TP HCM</p>
                                            <p>
                                                ĐT: <a href="tel:0828.25.2255"> 0828.25.2255</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="867-luy-ban-bich-p-tan-thanh-q-tan-phu-tp-hcm">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 384 Võ Văn Ngân, P.Bình Thọ, Q.Thủ Đức, TP.HCM</p>
                                            <p>
                                                ĐT: <a href="tel:0909898384 "> 0909898384 </a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00 - 21h00 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="so-384-vo-van-ngan-p-binh-tho-q-thu-duc-tp-hcm">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={50}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 75 Nguyễn Thị Thập, phường Tân Phú, Quận 7, Tp HCM</p>
                                            <p>
                                                ĐT: <a href="tel:0836302255"> 0836302255</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="so-75-nguyen-thi-thap-phuong-tan-phu-quan-7-tp-hcm">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={57}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>1415 Trần Hưng Đạo, Phường Mỹ Long, TP. Long Xuyên, Tỉnh An Giang </p>
                                            <p>
                                                ĐT: <a href="tel:090.229.1415"> 090.229.1415</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="1415-tran-hung-dao-phuong-my-long-tp-long-xuyen-tinh-an-giang">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={49}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>605 Trương Công Định, Phường 7, TP. Vũng Tàu</p>
                                            <p>
                                                ĐT: <a href="tel:090.889.22.55"> 090.889.22.55</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="605-truong-cong-dinh-phuong-7-tp-vung-tau">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={49}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>
                                                Số 158 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP. Bà Rịa, Tỉnh Bà Rịa -
                                                Vũng Tàu
                                            </p>
                                            <p>
                                                ĐT: <a href="tel:079216.22.55"> 079216.22.55</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="so-158-nguyen-thanh-dang-phuong-phuoc-hiep-tp-ba-ria-tinh-ba-ria-vung-tau">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={49}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>
                                                Số 631 đường 30 Tháng 4, P. Rạch Dừa, Tp. Vũng Tàu, Tỉnh Bà Rịa – Vũng
                                                Tàu
                                            </p>
                                            <p>
                                                ĐT: <a href="tel:0933032255"> 0933032255</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="so-631-duong-30-thang-4-p-rach-dua-tp-vung-tau-tinh-ba-ria-–-vung-tau">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={15}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 2 Nguyễn Văn Cừ, TP Bắc Giang</p>
                                            <p>
                                                ĐT: <a href="tel:093.668.2091"> 093.668.2091</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="so-2-nguyen-van-cu-tp-bac-giang">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={62}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>12-13 Lô B, Đường Bà Triệu, P.3, TP. Bạc Liêu</p>
                                            <p>
                                                ĐT: <a href="tel:079.492.88.99"> 079.492.88.99</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00 - 21h00 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="12-13-lo-b-duong-ba-trieu-p-3-tp-bac-lieu">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={18}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>207 Nguyễn Văn Cừ, P. Võ Cường, TP. Bắc Ninh</p>
                                            <p>
                                                ĐT: <a href="tel:0936.83.12.12"> 0936.83.12.12</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="207-duong-nguyen-van-cu-p-vo-cuong-tp-bac-ninh">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={18}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>40 Trần Phú - Đông Ngàn - Từ Sơn - Bắc Ninh</p>
                                            <p>
                                                ĐT: <a href="tel:0886869338"> 0886869338</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30</p>
                                            <p>
                                                <a href="40-tran-phu-dong-ngan-tu-son-bac-ninh">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={18}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 155, Khu 1, Thị Trấn Phố Mới, Huyện Quế Võ, Tỉnh Bắc Ninh</p>
                                            <p>
                                                ĐT: <a href="tel:079.636.3366"> 079.636.3366</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="so-155-khu-1-thi-tran-pho-moi-huyen-que-vo-tinh-bac-ninh">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={35}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>190-192 Tăng Bạt Hổ - P. Lê Hồng Phong - TP. Quy Nhơn</p>
                                            <p>
                                                ĐT: <a href="tel:0896.23.83.83"> 0896.23.83.83</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="190-192-tang-bat-ho-p-le-hong-phong-tp-quy-nhon">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={35}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 232 Nguyễn Thái Học, P.Ngô Mây, TP.Quy Nhơn, Bình Định</p>
                                            <p>
                                                ĐT: <a href="tel:0898.19.83.83"> 0898.19.83.83</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30</p>
                                            <p>
                                                <a href="so-232-nguyen-thai-hoc-p-ngo-may-tp-quy-nhon-binh-dinh">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={47}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>160 Nguyễn An Ninh, Dĩ An, Bình Dương</p>
                                            <p>
                                                ĐT: <a href="tel:093351.22.55"> 093351.22.55</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30. (Shop SIS MobiFone) </p>
                                            <p>
                                                <a href="160-nguyen-an-ninh-di-an-binh-duong">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={47}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>491 Đại lộ Bình Dương, Phú Cường, TP. Thủ Dầu Một, Bình Dương </p>
                                            <p>
                                                ĐT: <a href="tel:090857.22.55"> 090857.22.55</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 -21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="491-dai-lo-binh-duong-phu-cuong-thu-dau-mot-binh-duong">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={47}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>
                                                57C-57D Nguyễn Văn Tiết, KP. Bình Hòa, P.Lái Thiêu, TP Thuận An, Bình
                                                Dương
                                            </p>
                                            <p>
                                                ĐT: <a href="tel:078.67.222.55"> 078.67.222.55</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00 - 21h30 (Shop SIS MobiFone) </p>
                                            <p>
                                                <a href="57c-57d-nguyen-van-tiet-kp-binh-hoa-p-lai-thieu-tp-thuan-an-binh-duong">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={47}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 499 Đường Phú Lợi, P. Phú Lợi, Tp. Thủ Dầu Một, Bình Dương</p>
                                            <p>
                                                ĐT: <a href="tel: 0786.07.2255"> 0786.07.2255</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="so-499-duong-phu-loi-p-phu-loi-tp-thu-dau-mot-binh-duong">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={45}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>1057 Phú Riềng Đỏ, P.Tân Bình, TP Đồng Xoài, Bình Phước</p>
                                            <p>
                                                ĐT: <a href="tel:079.757.22.55"> 079.757.22.55</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="1057-phu-rieng-do-p-tan-binh-tp-dong-xoai-binh-phuoc">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={39}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>
                                                168 Trần Hưng Đạo, Phú Thủy, Phan Thiết, Bình Thuận (Shop cũ 198 Tôn Đức
                                                Thắng)
                                            </p>
                                            <p>
                                                ĐT: <a href="tel:093794.22.55"> 093794.22.55</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone) </p>
                                            <p>
                                                <a href="198-ton-duc-thang-phu-thuy-phan-thiet-binh-thuan">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={63}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>132c Nguyễn Tất Thành, Phường 8, TP. Cà Mau</p>
                                            <p>
                                                ĐT: <a href="tel:0763.928899"> 0763.928899</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00 - 21h00 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="132c-nguyen-tat-thanh-phuong-8-tp-ca-mau">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={59}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>221 Đường 3 Tháng 2 - Ninh Kiều - Cần Thơ</p>
                                            <p>
                                                ĐT: <a href="tel:08.285.222.55"> 08.285.222.55</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="221-duong-3-thang-2-ninh-kieu-can-tho">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={59}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>
                                                Toà nhà STS, 11B Đại Lộ Hoà Bình, Tân An, Ninh Kiều, Cần Thơ (Shop SIS
                                                MobiFone)
                                            </p>
                                            <p>
                                                ĐT: <a href="tel:0794.30.88.99"> 0794.30.88.99</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="11-dai-lo-hoa-binh-tan-an-ninh-kieu-can-tho-shop-sis-mobifone">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={32}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>153-155 Nguyễn Văn Linh, TP Đà Nẵng</p>
                                            <p>
                                                ĐT: <a href="tel:0788.655.155"> 0788.655.155</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 -21h00 (Shop SIS MobiFone) </p>
                                            <p>
                                                <a href="153-155-nguyen-van-linh-tp-da-nang">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={32}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>460 462 Đ.Tôn Đức Thắng, P.Hoà Khánh Nam, Q.Liên Chiểu, TP Đà Nẵng</p>
                                            <p>
                                                ĐT: <a href="tel:0777.499.899 "> 0777.499.899 </a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00 - 21h30</p>
                                            <p>
                                                <a href="460-462-duong-ton-duc-thang-phuong-hoa-khanh-nam-quan-lien-chieu-tp-da-nang">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={32}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>
                                                Số 580-582 Điện Biên Phủ, Thanh Khê Đông, Thanh Khê, Đà Nẵng (Đối diện
                                                Tượng đài Mẹ Nhu)
                                            </p>
                                            <p>
                                                ĐT: <a href="tel:0905.582.580"> 0905.582.580</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h00 (Shop SIS MobiFone) </p>
                                            <p>
                                                <a href="580-582-dien-bien-phu-thanh-khe-dong-thanh-khe-da-nang">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={42}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>16 Trường Chinh, TP Buôn Ma Thuột, Đắk Lắk </p>
                                            <p>
                                                ĐT: <a href="tel:089 639 8383"> 089 639 8383</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="16-truong-chinh-tp-buon-ma-thuot">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={43}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>25 Huỳnh Thúc Kháng, P.Nghĩa Thành, Gia Nghĩa, Đăk Nông</p>
                                            <p>
                                                ĐT: <a href="tel:0896.48.8383"> 0896.48.8383</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="25-huynh-thuc-khang-p-nghia-thanh-gia-nghia-dak-nong">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={7}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>
                                                Số 896 Đ. Võ Nguyên Giáp, P. Mường Thanh, Tp. Điện Biên Phủ, Tỉnh Điện
                                                Biên (Đối diện quảng trưởng 07-05)
                                            </p>
                                            <p>
                                                ĐT: <a href="tel:089.982.9966"> 089.982.9966</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="so-896-duong-vo-nguyen-giap-phuong-muong-thanh-thanh-pho-dien-bien-phu-tinh-dien-bien">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={48}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>
                                                92 Nguyễn Ái Quốc, KP 8A, Phường Tân Biên, Tp. Biên Hòa, Đồng Nai (Gần
                                                công viên 30/4)
                                            </p>
                                            <p>
                                                ĐT: <a href="tel:0933362255"> 0933362255</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="so-92-duong-nguyen-ai-quoc-pho-8a-p-tan-bien-tp-bien-hoa-tinh-dong-nai">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={48}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>260D Phạm Văn Thuận, TP. Biên Hoà, Đồng Nai </p>
                                            <p>
                                                ĐT: <a href="tel:079269.22.55"> 079269.22.55</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone) </p>
                                            <p>
                                                <a href="260d-pham-van-thuan-so-moi-1331-gan-nga-tu-vincom-tp-bien-hoa-dong-nai">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={48}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>149 Hùng Vương, Thành Phố Long Khánh, Tỉnh Đồng Nai </p>
                                            <p>
                                                ĐT: <a href="tel:0908592255"> 0908592255</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="149-hung-vuong-thanh-pho-long-khanh-tinh-dong-nai">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={48}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>246-256 Lê Duẩn, TT. Long Thành, Đồng Nai</p>
                                            <p>
                                                ĐT: <a href="tel:093.732.2255"> 093.732.2255</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone) </p>
                                            <p>
                                                <a href="246-256-le-duan-tt-long-thanh-dong-nai">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={48}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>692 Phạm Văn Thuận, Tam Hiệp, TP Biên Hoà, Đồng Nai (Gần chợ Tân Mai)</p>
                                            <p>
                                                ĐT: <a href="tel:082.520.2255"> 082.520.2255</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h20 - 21h30</p>
                                            <p>
                                                <a href="692-pham-van-thuan-tam-hiep-bien-hoa-dong-nai-gan-cho-tan-mai">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={48}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 188 đường Bùi Văn Hoà, Khu phố 3A, Long Bình Tân, Tp. Biên Hoà</p>
                                            <p>
                                                ĐT: <a href="tel:0933812255"> 0933812255</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30</p>
                                            <p>
                                                <a href="so-188-duong-bui-van-hoa-khu-pho-3a-long-binh-tan-tp-bien-hoa">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={56}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>85 Nguyễn Huệ, P.1, TP. Cao Lãnh, Đồng Tháp</p>
                                            <p>
                                                ĐT: <a href="tel:0786.91.88.99"> 0786.91.88.99</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="85-nguyen-hue-p-1-tp-cao-lanh">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={41}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>82 Trần Phú, phường Diên Hồng, TP.Pleiku, Tỉnh Gia Lai, Việt Nam</p>
                                            <p>
                                                ĐT: <a href="tel:0899.32.8383"> 0899.32.8383</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="82-tran-phu-phuong-dien-hong-tp-pleiku-tinh-gia-lai-viet-nam">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={23}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>222 Lê Hoàn, Tp. Phủ Lý, Hà Nam </p>
                                            <p>
                                                ĐT: <a href="tel:0789.15.98.98"> 0789.15.98.98</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="222-le-hoan-tp-phu-ly-ha-nam">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={28}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>161 Trần Phú, TP. Hà Tĩnh</p>
                                            <p>
                                                ĐT: <a href="tel:089963.91.91"> 089963.91.91</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00 - 21h00 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="161-tran-phu-tp-ha-tinh">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={19}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>382 Trường Chinh (Số 5 cũ), TP Hải Dương</p>
                                            <p>
                                                ĐT: <a href="tel:0906.026.382"> 0906.026.382</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="382-truong-chinh-so-5-cu-tp-hai-duong">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={20}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>67 Bạch Đằng, TT Núi Đèo, Thủy Nguyên, Hải Phòng</p>
                                            <p>
                                                ĐT: <a href="tel:0904202067"> 0904202067</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00 - 21h30</p>
                                            <p>
                                                <a href="67-bach-dang-tt-nui-deo-thuy-nguyen-hai-phong">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={20}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>72 Lạch Tray, Ngô Quyền, TP Hải Phòng</p>
                                            <p>
                                                ĐT: <a href="tel:079.323.72.72"> 079.323.72.72</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="72-lach-tray-ngo-quyen-tp-hai-phong">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={20}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>258 Tô Hiệu - Lê Chân - Hải Phòng</p>
                                            <p>
                                                ĐT: <a href="tel:0961.79.15.16"> 0961.79.15.16</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30</p>
                                            <p>
                                                <a href="258-to-hieu-le-chan-hai-phong">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={11}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>479 - 481 Cù Chính Lan - Tp.Hòa Bình - Tỉnh Hòa Bình</p>
                                            <p>
                                                ĐT: <a href="tel: 0976651585"> 0976651585</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="479-481-cu-chinh-lan-tp-hoa-binh-tinh-hoa-binh">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={21}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 2, Phố Nối, Phường Bần Yên Nhân, Thị Xã Mỹ Hào, Tỉnh Hưng Yên</p>
                                            <p>
                                                ĐT: <a href="tel:0766.38.6633"> 0766.38.6633</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="so-2-pho-noi-phuong-ban-yen-nhan-thi-xa-my-hao-tinh-hung-yen">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={37}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>69 Quang Trung, Lộc Thọ, TP. Nha Trang, T. Khánh Hoà </p>
                                            <p>
                                                ĐT: <a href="tel:089 638 8383"> 089 638 8383</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="69-quang-trung-loc-tho-tp-nha-trang-t-khanh-hoa">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={37}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 580 Đường 2 tháng 4, Vĩnh Phước, Tp.Nha Trang, Tỉnh Khánh Hòa</p>
                                            <p>
                                                ĐT: <a href="tel:0793.68.8383"> 0793.68.8383</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30</p>
                                            <p>
                                                <a href="so-28a-duong-2-thang-4-vinh-phuoc-tp-nha-trang-tinh-khanh-hoa">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={58}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>148 Nguyễn Trung Trực, Rạch Giá, Kiên Giang</p>
                                            <p>
                                                ĐT: <a href="tel:0902.050.148"> 0902.050.148</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h20</p>
                                            <p>
                                                <a href="148-nguyen-trung-truc-rach-gia-kien-giang">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={58}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 180 Nguyễn Trung Trực, P.Dương Đông, Tp. Phú Quốc, Kiên Giang</p>
                                            <p>
                                                ĐT: <a href="tel:0778178899"> 0778178899</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="so-180-nguyen-trung-truc-p-duong-dong-tp-phu-quoc-kien-giang">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={44}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>6A Lê Hồng Phong, Phường 4, Đà Lạt, Lâm Đồng</p>
                                            <p>
                                                ĐT: <a href="tel:079.869.22.55"> 079.869.22.55</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="6a-le-hong-phong-phuong-4-da-lat">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={6}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Lô 10, Ngã 6 Phố Lý Công Uẩn, TP. Lào Cai</p>
                                            <p>
                                                ĐT: <a href="tel:078912.83.83"> 078912.83.83</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="lo-10-nga-6-pho-ly-cong-uan-tp-lao-cai">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={51}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>189 Hùng Vương, P3, TP. Tân An, Long An</p>
                                            <p>
                                                ĐT: <a href="tel:090.897.22.55"> 090.897.22.55</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="189-hung-vuong-p3-tp-tan-an">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={24}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 4 Thành Chung, TP. Nam Định, Tỉnh Nam Định</p>
                                            <p>
                                                ĐT: <a href="tel:089.662.82.26"> 089.662.82.26</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="so-4-thanh-chung-tp-nam-dinh-tinh-nam-dinh">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={27}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p> Số 34 Nguyễn Sỹ Sách, Phường Hưng Bình, Thành Phố Vinh, Nghệ An</p>
                                            <p>
                                                ĐT: <a href="tel:0763.162.162"> 0763.162.162</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="so-34-nguyen-sy-sach-phuong-hung-binh-thanh-pho-vinh-nghe-an">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={27}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>10 Nguyễn Thị Minh Khai, Hưng Bình, TP. Vinh, Nghệ An</p>
                                            <p>
                                                ĐT: <a href="tel:0778.523.523"> 0778.523.523</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30</p>
                                            <p>
                                                <a href="10-nguyen-thi-minh-khai-hung-binh-tp-vinh-nghe-an">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={25}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>960 Trần Hưng Đạo, TP. Ninh Bình</p>
                                            <p>
                                                ĐT: <a href="tel:0902.826.960"> 0902.826.960</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h20 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="960-tran-hung-dao-tp-ninh-binh">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={38}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 44 Đường 16 tháng 4, P.Tấn Tài, TP.Phan Rang-Tháp Chàm, Ninh Thuận</p>
                                            <p>
                                                ĐT: <a href="tel:079.218.22.55"> 079.218.22.55</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="so-44-duong-16-thang-4-p-tan-tai-tp-phan-rang-thap-cham-ninh-thuan">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={16}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>1502 Đại lộ Hùng Vương, K6, phường Gia Cẩm, TP. Việt Trì, Phú Thọ</p>
                                            <p>
                                                ĐT: <a href="tel:090481.98.68"> 090481.98.68</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="1502-dl-hung-vuong-k6-phuong-gia-cam-tp-viet-tri-phu-tho">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={36}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>151-153 Hùng Vương, TP Tuy Hòa, Phú Yên</p>
                                            <p>
                                                ĐT: <a href="tel:077.545.85.85"> 077.545.85.85</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h00 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="151-153-hung-vuong-tp-tuy-hoa-phu-yen">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={29}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>23 Lý Thường Kiệt, TP. Đồng Hới, Quảng Bình</p>
                                            <p>
                                                ĐT: <a href="tel:089.961.7373"> 089.961.7373</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="23-ly-thuong-kiet-tp-dong-hoi-quang-binh">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={33}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>
                                                225 Phan Châu Trinh, P. Phước Hòa, TP Tam Kỳ, Quảng Nam (Shop cũ Số 47
                                                Phan Chu Trinh)
                                            </p>
                                            <p>
                                                ĐT: <a href="tel:0935.04.9292"> 0935.04.9292</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00 - 21h00</p>
                                            <p>
                                                <a href="so-47-phan-chu-trinh-p-phuoc-hoa-tp-tam-ky-quang-nam">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={34}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>222 Quang Trung, P.Lê Hồng Phong, TP Quảng Ngãi, Quảng Ngãi</p>
                                            <p>
                                                ĐT: <a href="tel:0788.56.7676"> 0788.56.7676</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00 - 21h00 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="222-quang-trung-p-le-hong-phong-tp-quang-ngai-quang-ngai">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={14}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>297 Quang Trung, TP. Uông Bí, Quảng Ninh</p>
                                            <p>
                                                ĐT: <a href="tel:0936.866.297"> 0936.866.297</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="297-quang-trung-tp-uong-bi-quang-ninh">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={14}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>758 Trần Phú , phường Cẩm Thạch, TP. Cẩm Phả, Quảng Ninh</p>
                                            <p>
                                                ĐT: <a href="tel:0906.062.758"> 0906.062.758</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="758-tran-phu-phuong-cam-thach-tp-cam-pha-quang-ninh">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={14}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 68 Kênh Liêm, TP.Hạ Long, Quảng Ninh</p>
                                            <p>
                                                ĐT: <a href="tel:0705587868"> 0705587868</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="so-68-kenh-liem-tp-ha-long">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={14}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Tòa nhà MobiFone, đường 25/4, Hồng Gai, TP. Hạ Long, Quảng Ninh</p>
                                            <p>
                                                ĐT: <a href="tel:0789.268.616"> 0789.268.616</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="toa-nha-mobifone-duong-25-4-hong-gai-tp-ha-long-quang-ninh">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={30}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>
                                                139 Quốc Lộ 9, Phường 5, TP Đông Hà, Quảng Trị (Shop cũ: 94 Quốc Lộ 9,
                                                P1) - Sắp khai trương
                                            </p>
                                            <p>
                                                ĐT: <a href="tel:0777.450.550"> 0777.450.550</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30</p>
                                            <p>
                                                <a href="50-hung-vuong-tp-dong-ha-tinh-quang-tri-shop-sis-mobifone">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={61}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>174 Mạc Đĩnh Chi, Tp.Sóc Trăng (Shop SIS MobiFone)</p>
                                            <p>
                                                ĐT: <a href="tel:070.491.88.99"> 070.491.88.99</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h00 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="174-mac-dinh-chi-tp-soc-trang-shop-sis-mobifone">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={9}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>130 Chu Văn Thịnh, P. Tô Hiệu, TP. Sơn La ( Gần cầu Dây văng cũ)</p>
                                            <p>
                                                ĐT: <a href="tel:0762.39.9393"> 0762.39.9393</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h30</p>
                                            <p>
                                                <a href="130-chu-van-thinh-p-to-hieu-tp-son-la-gan-cau-day-vang-cu">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={46}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>935 Cách Mạng Tháng 8, TP. Tây Ninh </p>
                                            <p>
                                                ĐT: <a href="tel:079.773.22.55"> 079.773.22.55</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="935-cach-mang-thang-8-tp-tay-ninh">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={22}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>390 Lý Bôn, TP. Thái Bình</p>
                                            <p>
                                                ĐT: <a href="tel:0896.639.638"> 0896.639.638</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00 - 21h30</p>
                                            <p>
                                                <a href="390-ly-bon-tp-thai-binh">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={12}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>135A Cách Mạng Tháng 8, TP. Thái Nguyên</p>
                                            <p>
                                                ĐT: <a href="tel:0936.53.31.35"> 0936.53.31.35</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="135a-duong-cach-mang-t8-tp-thai-nguyen">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={26}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>306 Nguyễn Trãi, Phường Tân Sơn, TP Thanh Hóa</p>
                                            <p>
                                                ĐT: <a href="tel:07054.024.02"> 07054.024.02</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="306-nguyen-trai-phuong-tan-son-tp-thanh-hoa">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={26}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>222 Trần Phú, phường Lam Sơn, TP Thanh Hóa</p>
                                            <p>
                                                ĐT: <a href="tel:0888.20.3536"> 0888.20.3536</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h30</p>
                                            <p>
                                                <a href="222-tran-phu-phuong-lam-son">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={31}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>48 Đống Đa - TP Huế</p>
                                            <p>
                                                ĐT: <a href="tel:0905.66.88.48"> 0905.66.88.48</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h00 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="48-dong-da-tp-hue">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={52}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>80 Nam Kỳ Khởi Nghĩa, P1, TP. Mỹ Tho, Tiền Giang</p>
                                            <p>
                                                ĐT: <a href="tel:0794.37.88.99"> 0794.37.88.99</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="80-nam-ky-khoi-nghia-p-tp-my-tho">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={5}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>447-449 Quang Trung, P.Phan Thiết, Tp.Tuyên Quang</p>
                                            <p>
                                                ĐT: <a href="tel:0936619161"> 0936619161</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h00 - 21h30</p>
                                            <p>
                                                <a href="447-449-quang-trung-p-phan-thiet-tp-tuyen-quang">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={55}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>150 Nguyễn Huệ, P.2, TP, Vĩnh Long</p>
                                            <p>
                                                ĐT: <a href="tel:0766.90.88.99"> 0766.90.88.99</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h00 - 21h30 (Shop SIS MobiFone)</p>
                                            <p>
                                                <a href="150-nguyen-hue-p-2-tp-vinh-long">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={17}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 1 Lạc Long Quân, Phúc Yên, Vĩnh Phúc</p>
                                            <p>
                                                ĐT: <a href="tel:0899.820.821"> 0899.820.821</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h30 - 21h20</p>
                                            <p>
                                                <a href="so-1-lac-long-quan-phuc-yen-vinh-phuc">Bản đồ đường đi</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={17}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>Số 20 Mê Linh, Phường Liên Bảo, TP Vĩnh Yên, Tỉnh Vĩnh Phúc </p>
                                            <p>
                                                ĐT: <a href="tel:0779.355.366"> 0779.355.366</a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 8h30 - 21h20</p>
                                            <p>
                                                <a href="so-20-me-linh-phuong-lien-bao-tp-vinh-yen-tinh-vinh-phuc">
                                                    Bản đồ đường đi
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item" data-id={10}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <div className="info">
                                            <p>24 Nguyễn Thái Học, Thành Phố Yên Bái</p>
                                            <p>
                                                ĐT: <a href="tel:0899159688 "> 0899159688 </a> <span>|</span>
                                                <a href="https://oa.zalo.me/262829019064124420">
                                                    <ZaloSvg />
                                                    Chat Zalo
                                                </a>
                                            </p>
                                            <p>HĐ: 08h20 - 21h30</p>
                                            <p>
                                                <a href="24-nguyen-thai-hoc-thanh-pho-yen-bai">Bản đồ đường đi</a>
                                            </p>
                                        </div>
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

export default GioiThieuCH;
