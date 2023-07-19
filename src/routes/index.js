import Home from '~/page/Home';
import DanhSachSanPham from '~/page/DanhSachSanPham';
import GioHang from '~/page/GioHang';
import HeaderOnly from '~/components/Layout/HeaderOnly';
import ThongTinSanPham from '~/page/ThongTinSanPham';
import HeaderDroplist from '~/components/Layout/HeaderDroplist';
import SanPhamDaXem from '~/page/SanPhamDaXem';
import TrungTamBH from '~/page/TrungTamBH';
import GioiThieuCT from '~/page/GioiThieuCT';
import GioiThieuCH from '~/page/GioiThieuCH';
export const publicRoutes = [
    { path: '/', components: Home },
    { path: '/san-pham', components: DanhSachSanPham },
    { path: '/thong-tin-san-pham', components: ThongTinSanPham, layout: HeaderDroplist },
    { path: '/san-pham-da-xem', components: SanPhamDaXem, layout: HeaderDroplist },
    { path: '/gio-hang', components: GioHang, layout: HeaderOnly },
    { path: '/trung-tam-bao-hanh', components: TrungTamBH, layout: HeaderOnly },
    { path: '/gioi-thieu-cong-ty', components: GioiThieuCT, layout: HeaderOnly },
    { path: '/gioi-thieu-cua-hang', components: GioiThieuCH, layout: HeaderOnly },
];

export const privateRoutes = [];
