"use strict";
exports.__esModule = true;
var sanpham_1 = require("./sanpham");
var QuanLyHang = /** @class */ (function () {
    function QuanLyHang() {
        this.hang = sanpham_1.SanPham[] = [];
        console.log('test class');
    }
    QuanLyHang.prototype.getCacSanPham = function () {
        return [];
    };
    QuanLyHang.prototype.getSanPhamById = function () {
        var motsanpham = new sanpham_1.SanPham(1, 'sp1', 90000, "mota", true, "images/1.jpg");
        return motsanpham;
    };
    QuanLyHang.prototype.addSanPham = function () {
    };
    QuanLyHang.prototype.showSanPham = function () {
        return "";
    };
    return QuanLyHang;
}());
exports.QuanLyHang = QuanLyHang;
