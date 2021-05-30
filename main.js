document.getElementById("btnThanhTien").onclick = function (event) {
    event.preventDefault();
    var ten = document.getElementById("txtTenHang").value;
    var soLuong = document.getElementById("txtSoLuong").value;
    var donGia = document.getElementById("txtDonGia").value;
    var thanhTien = 0;

    if (soLuong > 100) {
        thanhTien = (49 * donGia) + ((51 * donGia) * 92 / 100) + (((soLuong - 100) * donGia) * 88 / 100);
    } else if (soLuong > 50) {
        thanhTien = (49 * donGia) + (((soLuong - 49) * donGia) * 92 / 100);
    } else {
        thanhTien = soLuong * donGia;
    };
    var info = "<div class='alert alert-success'>" + thanhTien + "</div>";
    document.getElementById("footerCard").innerHTML = info;
};