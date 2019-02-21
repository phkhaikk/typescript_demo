import { SanPham } from "./sanpham";

export class QuanLyHang {
	private hang = SanPham[] = [];

	constructor() {
		console.log('test class');
	}

	getCacSanPham(): SanPham[] {
		return [];
	}

	getSanPhamById(): SanPham {
		var motsanpham = new SanPham(1, 'sp1', 90000, "mota", true, "images/1.jpg");
		return motsanpham;
	}

	addSanPham(): void {

	}

	showSanPham(): string {
		return "";
	}

}