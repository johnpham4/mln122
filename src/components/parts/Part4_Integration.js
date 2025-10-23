import { createMultiplePages } from './PageUtils';

export const Part4_Integration = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang chương - chỉ có tiêu đề
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "CHƯƠNG III",
    subtitle: "HỘI NHẬP KINH TẾ QUỐC TẾ - CƠ HỘI VÀ THÁCH THỨC",
    content: ``
  });

  // Tất cả nội dung chương III - bao gồm cả phần giới thiệu
  const mainContent = `
        Hội nhập kinh tế quốc tế là xu thế tất yếu trong bối cảnh toàn cầu hóa. Việt Nam đã tham gia nhiều hiệp định thương mại quan trọng:

        CÁC HIỆP ĐỊNH QUAN TRỌNG:
        • ASEAN (1995)
        • AFTA (1996)
        • APEC (1998)
        • WTO (2007)
        • CPTPP (2018)
        • EVFTA (2020)
        • RCEP (2022)

        Việc hội nhập mang lại cả cơ hội và thách thức cho quá trình công nghiệp hóa của Việt Nam.
        CƠ HỘI TỪ HỘI NHẬP KINH TẾ QUỐC TẾ:

        1. Thu hút đầu tư và công nghệ:
        • Tiếp cận nguồn vốn FDI lớn từ các nước đối tác
        - Tổng vốn FDI đăng ký từ 1988-2021: trên 400 tỷ USD
        - FDI thực hiện bình quân 15-20 tỷ USD/năm
        - Các dự án công nghệ cao tăng mạnh

        • Chuyển giao công nghệ tiên tiến
        - Học hỏi công nghệ sản xuất từ các tập đoàn đa quốc gia
        - Nâng cao năng lực công nghệ của doanh nghiệp trong nước
        - Tiếp cận các tiêu chuẩn quốc tế

        • Tham gia chuỗi giá trị toàn cầu
        - Đưa sản phẩm Việt Nam vào chuỗi cung ứng toàn cầu
        - Nâng cao vị thế trong phân công lao động quốc tế
        - Tăng giá trị gia tăng từ xuất khẩu

        2. Mở rộng thị trường:
        • Xuất khẩu hàng hóa dễ dàng hơn
        - Giảm thuế quan đối với nhiều mặt hàng
        - Đơn giản hóa thủ tục hải quan
        - Tạo điều kiện thuận lợi cho doanh nghiệp

        • Tiếp cận thị trường khổng lồ
        - RCEP: thị trường 2.2 tỷ người, chiếm 30% GDP toàn cầu
        - CPTPP: 13.4% GDP toàn cầu
        - EVFTA: 500 triệu người châu Âu

        • Giảm thuế quan và rào cản phi thuế quan
        - Nhiều mặt hàng xuất khẩu được giảm thuế về 0%
        - Thống nhất tiêu chuẩn kỹ thuật
        - Tạo môi trường cạnh tranh công bằng

        3. Nâng cao năng lực cạnh tranh:
        • Áp lực cạnh tranh thúc đẩy đổi mới
        - Buộc doanh nghiệp phải nâng cao chất lượng sản phẩm
        - Thúc đẩy đầu tư vào công nghệ và R&D
        - Cải tiến quy trình sản xuất

        • Học hỏi kinh nghiệm quản lý tiên tiến
        - Tiếp thu phương pháp quản lý hiện đại
        - Áp dụng các chuẩn mực quốc tế
        - Nâng cao hiệu quả sản xuất kinh doanh

        • Phát triển nguồn nhân lực chất lượng cao
        - Đào tạo theo tiêu chuẩn quốc tế
        - Tăng cường hợp tác giáo dục với nước ngoài
        - Nâng cao trình độ của lao động Việt Nam

        KẾT QUẢ ĐẠT ĐƯỢC:

        • Kim ngạch xuất khẩu tăng mạnh:
        - 2000: 14.5 tỷ USD → 2021: 336.3 tỷ USD
        - Tăng trưởng bình quân 15%/năm
        - Việt Nam trở thành nước xuất khẩu lớn thứ 20 thế giới

        • Cơ cấu xuất khẩu được cải thiện:
        - Hàng công nghiệp chiếm 85% tổng xuất khẩu
        - Xuất hiện nhiều mặt hàng mới có giá trị cao
        - Giảm phụ thuộc vào xuất khẩu nông sản thô

        • Năng lực cạnh tranh tăng:
        - Chỉ số năng lực cạnh tranh toàn cầu (GCI): từ hạng 70 (2007) lên 67 (2019)
        - Môi trường kinh doanh được cải thiện đáng kể
        - Thu hút nhiều dự án đầu tư chất lượng cao

        THÁCH THỨC TỪ HỘI NHẬP KINH TẾ QUỐC TẾ:

        1. Cạnh tranh gay gắt:
        • Hàng hóa nước ngoài gia tăng mạnh
        - Nhiều sản phẩm nước ngoài chất lượng cao, giá cả cạnh tranh
        - Doanh nghiệp trong nước khó cạnh tranh
        - Một số ngành sản xuất truyền thống bị thu hẹp

        • Áp lực về giá cả và chất lượng
        - Phải đáp ứng tiêu chuẩn quốc tế ngày càng cao
        - Cạnh tranh về giá với các nước có chi phí thấp hơn
        - Yêu cầu đổi mới công nghệ liên tục

        2. Rủi ro phụ thuộc:
        • Phụ thuộc vào thị trường xuất khẩu
        - Khi các nước đối tác có khó khăn, Việt Nam bị ảnh hưởng
        - Biến động giá cả hàng hóa quốc tế tác động mạnh
        - Dễ bị tác động bởi các cuộc chiến tranh thương mại

        • Phụ thuộc công nghệ nước ngoài
        - Chưa tự chủ được công nghệ cốt lõi
        - Dễ bị "kẹt" khi có tranh chấp công nghệ
        - Chi phí chuyển giao công nghệ cao

        3. Áp lực về tiêu chuẩn:
        • Tiêu chuẩn môi trường ngày càng cao
        - Các nước phát triển áp dụng tiêu chuẩn môi trường nghiêm ngặt
        - Yêu cầu giảm phát thải carbon
        - Chi phí tuân thủ tiêu chuẩn xanh tăng

        • Tiêu chuẩn lao động và xã hội
        - Áp lực về điều kiện lao động
        - Yêu cầu bảo vệ quyền lợi người lao động
        - Tiêu chuẩn về an toàn lao động

        4. Rủi ro tài chính:
        • Biến động tỷ giá
        - Ảnh hưởng đến kim ngạch xuất nhập khẩu
        - Rủi ro trong thanh toán quốc tế
        - Tác động đến lợi nhuận doanh nghiệp

        • Khủng hoảng tài chính lan truyền
        - Khủng hoảng từ các nước khác có thể lan sang Việt Nam
        - Ảnh hưởng đến dòng vốn đầu tư
        - Tác động đến tăng trưởng kinh tế

        GIẢI PHÁP Ứng PHÓ:

        1. Nâng cao năng lực cạnh tranh:
        • Đầu tư mạnh vào R&D và đổi mới công nghệ
        • Phát triển thương hiệu quốc gia mạnh
        • Nâng cao chất lượng nguồn nhân lực
        • Xây dựng hệ thống tiêu chuẩn quốc gia

        2. Đa dạng hóa thị trường và sản phẩm:
        • Không phụ thuộc quá nhiều vào một thị trường
        • Phát triển các sản phẩm có giá trị gia tăng cao
        • Tăng cường xuất khẩu sang các thị trường mới nổi
        • Phát triển mạnh thị trường nội địa

        3. Tăng cường tự chủ công nghệ:
        • Đầu tư phát triển công nghệ trong nước
        • Hợp tác công nghệ có chọn lọc với nước ngoài
        • Xây dựng các trung tâm R&D mạnh
        • Khuyến khích đổi mới sáng tạo

        4. Hoàn thiện thể chế kinh tế:
        • Cải cách thể chế theo hướng hiện đại
        • Tăng cường minh bạch và hiệu quả quản lý
        • Xây dựng môi trường đầu tư thuận lợi
        • Nâng cao năng lực quản lý rủi ro
      `;

  const mainPages = createMultiplePages("Hội nhập kinh tế quốc tế", mainContent, currentId);
  pages.push(...mainPages);

  return pages;
};