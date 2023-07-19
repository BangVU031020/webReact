import React from 'react';
import GlobalStyles from '~/components/GlobalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faCaretRight,
    faCircleCheck,
    faCircleDot,
    faLocationDot,
    faMinus,
} from '@fortawesome/free-solid-svg-icons';
function GioHang() {
    return (
        <GlobalStyles>
            <section>
                <div className="container">
                    <div className="cart">
                        <div className="header">
                            <div className="back">
                                <a href="/">
                                    <div>
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                        <strong>Quay lại</strong>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="cart-layout">
                            <div className="cart-info" id="cartInfo">
                                <div className="cart-icon">
                                    <div style={{ fontSize: '50px' }}>
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                    </div>
                                    <label>Giỏ hàng</label>
                                </div>

                                <div className="cart-items">
                                    <div className="item " data-sku="IPN11128W">
                                        <div className="img">
                                            <img
                                                src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/03/31/image-removebg-preview.png"
                                                alt="iPhone 11 (128GB) - Ch&#237;nh h&#227;ng VN/A"
                                            />
                                            <p className="title">iPhone 11 (128GB) - Ch&#237;nh h&#227;ng VN/A</p>
                                            <p className="price">
                                                <strong>11,890,000 ₫</strong>

                                                <strike>21,990,000 ₫</strike>
                                            </p>
                                            <div className="number">
                                                <label>Số lượng</label>
                                                <div className="control">
                                                    <button onclick="cartMinutes('IPN11128W');">-</button>
                                                    <input type="text" onchange="cartChange('IPN11128W');" value="1" />
                                                    <button onclick="cartPlus('IPN11128W');" data-sku="IPN11128W">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="info">
                                            <div className="edit">
                                                <a href="javascript:cartDelete('IPN11128W');" className="red">
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </a>
                                            </div>

                                            <div className="promote">
                                                <div className="offer-items" id="of_IPN11128W">
                                                    <div className="offer">
                                                        <div className="stt">
                                                            <label>KM1</label>
                                                        </div>
                                                        <div className="offer-border">
                                                            <div className="content">
                                                                <label className="radio-ctn">
                                                                    <span>
                                                                        Hỗ trợ trả g&#243;p 0% qua 26 ng&#226;n
                                                                        h&#224;ng v&#224; c&#244;ng ty t&#224;i
                                                                        ch&#237;nh.
                                                                    </span>
                                                                    <input
                                                                        checked
                                                                        className="cart-promote"
                                                                        type="radio"
                                                                        name="IPN11128W_promote_g_0_131"
                                                                        value="131"
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="offer">
                                                        <div className="stt">
                                                            <label>KM2</label>
                                                        </div>
                                                        <div className="offer-border">
                                                            <div className="content">
                                                                <label className="radio-ctn">
                                                                    <span>
                                                                        Giảm th&#234;m tới 1.000.000đ khi Thu cũ -
                                                                        L&#234;n đời iPhone 11 | 12 | 13 Series
                                                                    </span>
                                                                    <input
                                                                        checked
                                                                        className="cart-promote"
                                                                        type="radio"
                                                                        name="IPN11128W_promote_g_0_428"
                                                                        value="428"
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="offer">
                                                        <div className="stt">
                                                            <label>KM3</label>
                                                        </div>
                                                        <div className="offer-border">
                                                            <div className="content">
                                                                <label className="radio-ctn">
                                                                    <span>
                                                                        Giảm th&#234;m 200.000đ cho tất c&#225;c sản
                                                                        phẩm M&#224;n h&#236;nh khi mua k&#232;m
                                                                        Laptop,MacBook, M&#225;y t&#237;nh bảng v&#224;
                                                                        điện thoại.
                                                                    </span>
                                                                    <input
                                                                        checked
                                                                        className="cart-promote"
                                                                        type="radio"
                                                                        name="IPN11128W_promote_g_0_1128"
                                                                        value="1128"
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="offer">
                                                        <div className="stt">
                                                            <label>KM4</label>
                                                        </div>
                                                        <div className="offer-border">
                                                            <div className="content">
                                                                <label className="radio-ctn">
                                                                    <span>
                                                                        Tặng esim data Mobifone Hera 5G (2GB/ng&#224;y)
                                                                        (Chưa bao gồm th&#225;ng đầu ti&#234;n) - Lưu
                                                                        &#253;: chỉ &#225;p dụng mua trực tiếp tại cửa
                                                                        h&#224;ng.
                                                                    </span>
                                                                    <input
                                                                        checked
                                                                        className="cart-promote"
                                                                        type="radio"
                                                                        name="IPN11128W_promote_g_0_1272"
                                                                        value="1272"
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="offer">
                                                        <div className="stt">
                                                            <label>KM5</label>
                                                        </div>
                                                        <div className="offer-border">
                                                            <div className="content">
                                                                <label className="radio-ctn">
                                                                    <span>
                                                                        Tiết kiệm l&#234;n tới 600.000đ khi mua
                                                                        Microsoft 365 (Office) k&#232;m Laptop, MacBook,
                                                                        M&#225;y t&#237;nh bảng, Điện thoại (&#193;p
                                                                        dụng từ 10/4/2023 - 31/5/2023).
                                                                    </span>
                                                                    <input
                                                                        checked
                                                                        className="cart-promote"
                                                                        type="radio"
                                                                        name="IPN11128W_promote_g_0_1274"
                                                                        value="1274"
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="offer">
                                                        <div className="stt">
                                                            <label>KM6</label>
                                                        </div>
                                                        <div className="offer-border">
                                                            <div className="content">
                                                                <label className="radio-ctn">
                                                                    <span>
                                                                        Thanh to&#225;n qua Moca tặng ngay đế sạc trị
                                                                        gi&#225; 320.000đ (Cho h&#243;a đơn c&#243; tổng
                                                                        gi&#225; trị từ 6 Triệu) - &#193;p dụng từ 01/04
                                                                    </span>
                                                                    <input
                                                                        checked
                                                                        className="cart-promote"
                                                                        type="radio"
                                                                        name="IPN11128W_promote_g_0_1388"
                                                                        value="1388"
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="offer">
                                                        <div className="stt">
                                                            <label>KM7</label>
                                                        </div>
                                                        <div className="offer-border">
                                                            <div className="content">
                                                                <label className="radio-ctn">
                                                                    <span>
                                                                        Giảm th&#234;m tới 800.000đ khi mở thẻ t&#237;n
                                                                        dụng TPBank EVO - Duyệt nhanh chỉ 15 ph&#250;t,
                                                                        LH Cửa h&#224;ng hoặc 19002091 để được hỗ trợ
                                                                    </span>
                                                                    <input
                                                                        checked
                                                                        className="cart-promote"
                                                                        type="radio"
                                                                        name="IPN11128W_promote_g_0_1471"
                                                                        value="1471"
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="offer">
                                                        <div className="stt">
                                                            <label>KM8</label>
                                                        </div>
                                                        <div className="offer-border">
                                                            <div className="content">
                                                                <label className="radio-ctn">
                                                                    <span>
                                                                        Tặng sim WINTEL(Reddi cũ) 055 chưa bao gồm
                                                                        g&#243;i cước (Trừ shop SiS) Hoặc sim data
                                                                        Mobifone Hera 5G (2GB/ng&#224;y) (Chưa bao gồm
                                                                        th&#225;ng đầu ti&#234;n) - Lưu &#253;: &#225;p
                                                                        dụng mua trực tiếp tại cửa h&#224;ng.
                                                                    </span>
                                                                    <input
                                                                        checked
                                                                        className="cart-promote"
                                                                        type="radio"
                                                                        name="IPN11128W_promote_g_0_1472"
                                                                        value="1472"
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="offer">
                                                        <div className="stt">
                                                            <label>KM9</label>
                                                        </div>
                                                        <div className="offer-border">
                                                            <div className="content">
                                                                <label className="radio-ctn">
                                                                    <span>
                                                                        Giảm tới 300.000đ khi thanh to&#225;n qua VNPAY
                                                                        (&#193;p dụng từ 01/04- 30/06)
                                                                    </span>
                                                                    <input
                                                                        checked
                                                                        className="cart-promote"
                                                                        type="radio"
                                                                        name="IPN11128W_promote_g_0_1527"
                                                                        value="1527"
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="offer">
                                                        <div className="stt">
                                                            <label>KM10</label>
                                                        </div>
                                                        <div className="offer-border">
                                                            <div className="content">
                                                                <label className="radio-ctn">
                                                                    <span>
                                                                        {' '}
                                                                        Trả g&#243;p qua Homepaylater giảm th&#234;m tới
                                                                        500.000đ, duyệt nhanh chỉ 30s
                                                                    </span>
                                                                    <input
                                                                        checked
                                                                        className="cart-promote"
                                                                        type="radio"
                                                                        name="IPN11128W_promote_g_0_1533"
                                                                        value="1533"
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="offer">
                                                        <div className="stt">
                                                            <label>KM11</label>
                                                        </div>
                                                        <div className="offer-border">
                                                            <div className="content">
                                                                <label className="radio-ctn">
                                                                    <span>
                                                                        Mở v&#237; VNPAY v&#224; thanh to&#225;n giảm
                                                                        th&#234;m tới 100.000đ
                                                                    </span>
                                                                    <input
                                                                        checked
                                                                        className="cart-promote"
                                                                        type="radio"
                                                                        name="IPN11128W_promote_g_0_1665"
                                                                        value="1665"
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="offer">
                                                        <div className="stt">
                                                            <label>KM12</label>
                                                        </div>
                                                        <div className="offer-border">
                                                            <div className="content">
                                                                <label className="radio-ctn">
                                                                    <span>
                                                                        Giảm 100.000đ cho đơn h&#224;ng gi&#225; trị từ
                                                                        8.000.000đ trở l&#234;n khi thanh to&#225;n qua
                                                                        ZaloPay.
                                                                    </span>
                                                                    <input
                                                                        checked
                                                                        className="cart-promote"
                                                                        type="radio"
                                                                        name="IPN11128W_promote_g_0_1680"
                                                                        value="1680"
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="options">
                                                <div className="option">
                                                    <strong>Phiên bản</strong>
                                                    <label>
                                                        <FontAwesomeIcon icon={faCircleDot} />
                                                        <span>128GB</span>
                                                    </label>
                                                </div>

                                                <div className="option">
                                                    <strong>Màu sắc</strong>
                                                    <label>
                                                        <FontAwesomeIcon icon={faCircleDot} />
                                                        <span>White</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart-total">
                                    <p>
                                        Tổng giá trị: <strong className="price">11,890,000 ₫</strong>{' '}
                                    </p>
                                    <p>
                                        Giảm giá: <strong className="price">-00 ₫</strong>
                                    </p>
                                    <p>
                                        Tổng thanh toán: <strong className="price text-red">11,890,000 ₫</strong>
                                    </p>
                                    <p>
                                        <i>Mười một triệu t&#225;m trăm ch&#237;n mươi ngh&#236;n đồng chẵn.</i>
                                    </p>
                                    <button className="next">Tiếp tục</button>
                                </div>
                            </div>

                            <div className="cart-form">
                                <form onsubmit="return validFormOrder_v3(this);">
                                    <input type="hidden" name="OrderPayTypeID" value="1" />
                                    <input type="hidden" id="ValidType" name="ValidType" value="2" />
                                    <input type="hidden" id="hdnGoogleRecaptcha" name="hdnGoogleRecaptcha" />

                                    <input type="hidden" name="IsPreOrder" id="IsPreOrder" value="False" />
                                    <input
                                        name="__RequestVerificationToken"
                                        type="hidden"
                                        value="dVIVZTkHHHmG2a5BUeX74E65yQaNHpNTrMtZjTLTuvKaRpgTT-l53R6aVcI_p9Pa871RVzwvCAD0ZVyB_fZsBWl4a4o1"
                                    />
                                    <h3>Thông tin đặt hàng</h3>
                                    <p className="text-gray">
                                        <i>Bạn cần nhập đầy đủ các trường thông tin có dấu *</i>
                                    </p>
                                    <div className="row">
                                        <div className="col">
                                            <div className="control">
                                                <input
                                                    name="Title"
                                                    type="text"
                                                    placeholder="Họ và tên *"
                                                    data-required="1"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <div className="control">
                                                <input
                                                    name="Phone"
                                                    type="tel"
                                                    placeholder="Số điện thoại *"
                                                    data-required="1"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row shInfo">
                                        <div className="col">
                                            <div className="control">
                                                <input name="Email" type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <span className="group">
                                            <strong>Hình thức nhận hàng</strong>
                                        </span>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div id="payType_1" className="payment-opt">
                                                <label className="radio-ctn">
                                                    <span>Nhận hàng tại nhà</span>
                                                    <input
                                                        name="ReceiveTypeID"
                                                        type="radio"
                                                        value="1"
                                                        className="cart-paymentTypeId"
                                                    />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div id="payType_5" className="payment-opt payment-selected">
                                                <label className="radio-ctn">
                                                    <span>Nhận hàng tại cửa hàng</span>
                                                    <input
                                                        name="ReceiveTypeID"
                                                        type="radio"
                                                        value="5"
                                                        className="cart-paymentTypeId"
                                                        checked
                                                    />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="f_payType_1" style={{ display: 'none' }}>
                                        <div className="row">
                                            <div className="col">
                                                <div className="control">
                                                    <select
                                                        id="SystemCityID"
                                                        name="SystemCityID"
                                                        placeholder="Tỉnh/Thành phố *"
                                                        data-required="1"
                                                    >
                                                        <option value="">Tỉnh/Thành phố *</option>
                                                        <option value="1">H&#224; Nội</option>
                                                        <option value="50">TP HCM</option>
                                                        <option value="57">An Giang</option>
                                                        <option value="49">B&#224; Rịa - Vũng T&#224;u</option>
                                                        <option value="15">Bắc Giang</option>
                                                        <option value="4">Bắc Kạn</option>
                                                        <option value="62">Bạc Li&#234;u</option>
                                                        <option value="18">Bắc Ninh</option>
                                                        <option value="53">Bến Tre</option>
                                                        <option value="35">B&#236;nh Định</option>
                                                        <option value="47">B&#236;nh Dương</option>
                                                        <option value="45">B&#236;nh Phước</option>
                                                        <option value="39">B&#236;nh Thuận</option>
                                                        <option value="63">C&#224; Mau</option>
                                                        <option value="59">Cần Thơ</option>
                                                        <option value="3">Cao Bằng</option>
                                                        <option value="32">Đ&#224; Nẵng</option>
                                                        <option value="42">Đắk Lắk</option>
                                                        <option value="43">Đắk N&#244;ng</option>
                                                        <option value="7">Điện Bi&#234;n</option>
                                                        <option value="48">Đồng Nai</option>
                                                        <option value="56">Đồng Th&#225;p</option>
                                                        <option value="41">Gia Lai</option>
                                                        <option value="2">H&#224; Giang</option>
                                                        <option value="23">H&#224; Nam</option>
                                                        <option value="28">H&#224; Tĩnh</option>
                                                        <option value="19">Hải Dương</option>
                                                        <option value="20">Hải Ph&#242;ng</option>
                                                        <option value="60">Hậu Giang</option>
                                                        <option value="11">Ho&#224; B&#236;nh</option>
                                                        <option value="21">Hưng Y&#234;n</option>
                                                        <option value="37">Kh&#225;nh H&#242;a</option>
                                                        <option value="58">Ki&#234;n Giang</option>
                                                        <option value="40">Kon Tum</option>
                                                        <option value="8">Lai Ch&#226;u</option>
                                                        <option value="44">L&#226;m Đồng</option>
                                                        <option value="13">Lạng Sơn</option>
                                                        <option value="6">L&#224;o Cai</option>
                                                        <option value="51">Long An</option>
                                                        <option value="24">Nam Định</option>
                                                        <option value="27">Nghệ An</option>
                                                        <option value="25">Ninh B&#236;nh</option>
                                                        <option value="38">Ninh Thuận</option>
                                                        <option value="16">Ph&#250; Thọ</option>
                                                        <option value="36">Ph&#250; Y&#234;n</option>
                                                        <option value="29">Quảng B&#236;nh</option>
                                                        <option value="33">Quảng Nam</option>
                                                        <option value="34">Quảng Ng&#227;i</option>
                                                        <option value="14">Quảng Ninh</option>
                                                        <option value="30">Quảng Trị</option>
                                                        <option value="61">S&#243;c Trăng</option>
                                                        <option value="9">Sơn La</option>
                                                        <option value="46">T&#226;y Ninh</option>
                                                        <option value="22">Th&#225;i B&#236;nh</option>
                                                        <option value="12">Th&#225;i Nguy&#234;n</option>
                                                        <option value="26">Thanh H&#243;a</option>
                                                        <option value="31">Thừa Thi&#234;n Huế</option>
                                                        <option value="52">Tiền Giang</option>
                                                        <option value="54">Tr&#224; Vinh</option>
                                                        <option value="5">Tuy&#234;n Quang</option>
                                                        <option value="55">Vĩnh Long</option>
                                                        <option value="17">Vĩnh Ph&#250;c</option>
                                                        <option value="10">Y&#234;n B&#225;i</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="control">
                                                    <select
                                                        id="SystemDistrictID"
                                                        name="SystemDistrictID"
                                                        placeholder="Quận/Huyện *"
                                                        data-required="1"
                                                    >
                                                        <option value="">Quận/Huyện *</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row shInfo">
                                            <div className="col">
                                                <div className="control">
                                                    <input
                                                        id="Address"
                                                        name="Address"
                                                        type="text"
                                                        placeholder="Địa chỉ nhận hàng *"
                                                        data-required="1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="f_payType_5" style={{ display: 'none' }}>
                                        <div className="row">
                                            <span className="group">
                                                <strong>Nơi nhận hàng</strong>
                                            </span>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="control">
                                                    <select
                                                        id="MKSystemCityID"
                                                        name="MKSystemCityID"
                                                        placeholder="Tỉnh/Thành phố"
                                                    >
                                                        <option value="">Tỉnh/Thành phố *</option>
                                                        <option value="1">H&#224; Nội</option>
                                                        <option value="50">TP HCM</option>
                                                        <option value="57">An Giang</option>
                                                        <option value="49">B&#224; Rịa - Vũng T&#224;u</option>
                                                        <option value="15">Bắc Giang</option>
                                                        <option value="62">Bạc Li&#234;u</option>
                                                        <option value="18">Bắc Ninh</option>
                                                        <option value="35">B&#236;nh Định</option>
                                                        <option value="47">B&#236;nh Dương</option>
                                                        <option value="45">B&#236;nh Phước</option>
                                                        <option value="39">B&#236;nh Thuận</option>
                                                        <option value="63">C&#224; Mau</option>
                                                        <option value="59">Cần Thơ</option>
                                                        <option value="32">Đ&#224; Nẵng</option>
                                                        <option value="42">Đắk Lắk</option>
                                                        <option value="43">Đắk N&#244;ng</option>
                                                        <option value="7">Điện Bi&#234;n</option>
                                                        <option value="48">Đồng Nai</option>
                                                        <option value="56">Đồng Th&#225;p</option>
                                                        <option value="41">Gia Lai</option>
                                                        <option value="23">H&#224; Nam</option>
                                                        <option value="28">H&#224; Tĩnh</option>
                                                        <option value="19">Hải Dương</option>
                                                        <option value="20">Hải Ph&#242;ng</option>
                                                        <option value="11">Ho&#224; B&#236;nh</option>
                                                        <option value="21">Hưng Y&#234;n</option>
                                                        <option value="37">Kh&#225;nh H&#242;a</option>
                                                        <option value="58">Ki&#234;n Giang</option>
                                                        <option value="44">L&#226;m Đồng</option>
                                                        <option value="6">L&#224;o Cai</option>
                                                        <option value="51">Long An</option>
                                                        <option value="24">Nam Định</option>
                                                        <option value="27">Nghệ An</option>
                                                        <option value="25">Ninh B&#236;nh</option>
                                                        <option value="38">Ninh Thuận</option>
                                                        <option value="16">Ph&#250; Thọ</option>
                                                        <option value="36">Ph&#250; Y&#234;n</option>
                                                        <option value="29">Quảng B&#236;nh</option>
                                                        <option value="33">Quảng Nam</option>
                                                        <option value="34">Quảng Ng&#227;i</option>
                                                        <option value="14">Quảng Ninh</option>
                                                        <option value="30">Quảng Trị</option>
                                                        <option value="61">S&#243;c Trăng</option>
                                                        <option value="9">Sơn La</option>
                                                        <option value="46">T&#226;y Ninh</option>
                                                        <option value="22">Th&#225;i B&#236;nh</option>
                                                        <option value="12">Th&#225;i Nguy&#234;n</option>
                                                        <option value="26">Thanh H&#243;a</option>
                                                        <option value="31">Thừa Thi&#234;n Huế</option>
                                                        <option value="52">Tiền Giang</option>
                                                        <option value="5">Tuy&#234;n Quang</option>
                                                        <option value="55">Vĩnh Long</option>
                                                        <option value="17">Vĩnh Ph&#250;c</option>
                                                        <option value="10">Y&#234;n B&#225;i</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="control">
                                                    <select
                                                        id="SystemMarketID"
                                                        name="SystemMarketID"
                                                        placeholder="Chọn cửa hàng nhận sản phẩm *"
                                                        data-required="1"
                                                    >
                                                        <option value="">Cửa hàng *</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row shInfo">
                                        <div className="col">
                                            <div className="control">
                                                <textarea
                                                    name="Note"
                                                    placeholder="Ghi chú"
                                                    spellcheck="false"
                                                    data-minlength="15"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <div className="control control-cbx">
                                                <label>
                                                    <input type="checkbox" id="GetVAT" name="GetVAT" value="True" />
                                                    <span>
                                                        Yêu cầu xuất hoát đơn công ty (Vui lòng điền email để nhận hóa
                                                        đơn VAT)
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shVAT">
                                        <div className="row ">
                                            <div className="col">
                                                <div className="control">
                                                    <input
                                                        className="rqVAT"
                                                        id="CompanyName"
                                                        name="CompanyName"
                                                        type="text"
                                                        placeholder="Tên công ty *"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <div className="control">
                                                    <input
                                                        className="rqVAT"
                                                        name="CompanyTaxID"
                                                        id="CompanyTaxID"
                                                        type="text"
                                                        placeholder="Mã số thuế *"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <div className="control">
                                                    <input
                                                        className="rqVAT"
                                                        id="CompanyAddress"
                                                        name="CompanyAddress"
                                                        type="text"
                                                        placeholder="Địa chỉ công ty *"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row shInfo">
                                        <div className="control-button">
                                            <p>Quý khách có thể lựa chọn hình thức thanh toán sau khi đặt hàng.</p>

                                            <button type="submit">XÁC NHẬN VÀ ĐẶT HÀNG</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GlobalStyles>
    );
}

export default GioHang;
