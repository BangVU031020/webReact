import GlobalStyles from '~/components/GlobalStyles';

function CoreValue() {
    return (
        <GlobalStyles>
            <section>
                <div class="container">
                    <div class="corevalue">
                        <div class="item">
                            <span class="icon">
                                <i class="fa-solid fa-check-to-slot"></i>
                            </span>
                            <div class="text">
                                <span>Sản phẩm</span>
                                <strong>CH&#205;NH H&#195;NG</strong>
                            </div>
                        </div>
                        <div class="item">
                            <span class="icon">
                                <i class="fa-solid fa-cart-flatbed"></i>
                            </span>
                            <div class="text">
                                <span>Miễn ph&#237; vận chuyển</span>
                                <strong>TO&#192;N QUỐC</strong>
                            </div>
                        </div>
                        <div class="item">
                            <span class="icon">
                                <i class="fa-solid fa-headset"></i>
                            </span>
                            <div class="text">
                                <span>Hotline hỗ trợ</span>
                                <strong>1900.2091</strong>
                            </div>
                        </div>
                        <div class="item">
                            <span class="icon">
                                <i class="fa-solid fa-shuffle"></i>
                            </span>
                            <div class="text">
                                <span>Thủ tục đổi trả</span>
                                <strong>DỄ D&#192;NG</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GlobalStyles>
    );
}

export default CoreValue;
