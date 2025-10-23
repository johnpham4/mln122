import { createMultiplePages } from './PageUtils';

export const Part3_VietnamSituation = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang chương (trống)
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "CHƯƠNG II",
    subtitle: "THỰC TRẠNG CÔNG NGHIỆP HÓA VIỆT NAM",
    content: ""
  });

  // Nội dung chính
  const mainContent = `
        Việt Nam đã trải qua hơn 35 năm đổi mới (1986-2021) với những thành tựu đáng kể trong công nghiệp hóa:

        THÀNH TỰU ĐẠT ĐƯỢC:
        • GDP tăng trưởng bình quân 6-7%/năm
        • Tỷ trọng công nghiệp-xây dựng đạt 33.7% GDP
        • Xuất khẩu hàng công nghiệp chiếm 85% tổng xuất khẩu
        • Thu hút được 400 tỷ USD FDI
        • Hình thành một số ngành công nghiệp mũi nhọn

        HẠN CHẾ TỒN TẠI:
        • Chưa có ngành công nghiệp nặng mạnh
        • Phụ thuộc vào công nghệ nước ngoài
        • Ô nhiễm môi trường nghiêm trọng
        • Thiếu nhân lực chất lượng cao

        CƠ CẤU CÔNG NGHIỆP VIỆT NAM HIỆN TẠI:

        Công nghiệp chế biến, chế tạo: 75.2%
        - Điện tử, viễn thông: 28.5%
        - Dệt may, da giày: 15.3%
        - Thực phẩm đồ uống: 12.8%
        - Hóa chất, cao su: 8.9%
        - Cơ khí, kim loại: 9.7%

        Công nghiệp khai khoáng: 8.6%
        - Dầu khí: 5.2%
        - Than: 2.1%
        - Khác: 1.3%

        Sản xuất và phân phối điện, khí, nước: 16.2%

        PHÂN TÍCH CHI TIẾT:

        1. Công nghiệp điện tử - viễn thông:
        Đây là ngành có tốc độ tăng trưởng cao nhất, chủ yếu dựa vào đầu tư FDI từ các tập đoàn công nghệ như Samsung, Intel, LG. Tuy nhiên, Việt Nam chủ yếu tham gia khâu lắp ráp, gia công với giá trị gia tăng thấp.

        2. Công nghiệp dệt may - da giày:
        Là ngành truyền thống của Việt Nam với lợi thế về lao động và nguyên liệu. Tuy nhiên, ngành này đang đối mặt với áp lực cạnh tranh từ các nước có chi phí lao động thấp hơn.

        3. Công nghiệp thực phẩm - đồ uống:
        Có lợi thế về nguyên liệu nông sản nhưng chưa phát huy được hết tiềm năng do công nghệ chế biến chưa cao, thương hiệu chưa mạnh.

        4. Công nghiệp hóa chất - cao su:
        Việt Nam có lợi thế về cao su tự nhiên nhưng chủ yếu xuất khẩu nguyên liệu thô, chưa phát triển mạnh công nghiệp chế biến sâu.

        5. Công nghiệp cơ khí - kim loại:
        Đây là điểm yếu lớn của công nghiệp Việt Nam. Chưa có công nghiệp cơ khí nặng, phụ thuộc nhiều vào nhập khẩu máy móc, thiết bị.

        NHỮNG THÁCH THỨC CHÍNH:

        • Thiếu công nghiệp phụ trợ phát triển:
        Tỷ lệ nội địa hóa trong các ngành công nghiệp chủ lực còn thấp. Phần lớn linh kiện, phụ tùng phải nhập khẩu.

        • Công nghệ lạc hậu:
        Nhiều doanh nghiệp trong nước vẫn sử dụng công nghệ cũ, năng suất thấp, không cạnh tranh được với sản phẩm nước ngoài.

        • Ô nhiễm môi trường:
        Nhiều khu công nghiệp gây ô nhiễm nghiêm trọng, đặc biệt ở các tỉnh có nhiều nhà máy xi măng, thép, hóa chất.

        • Thiếu nhân lực chất lượng cao:
        Tỷ lệ lao động qua đào tạo còn thấp, thiếu kỹ sư, kỹ thuật viên có trình độ cao.

        CƠ HỘI PHÁT TRIỂN:

        • Vị trí địa lý thuận lợi:
        Việt Nam nằm trên tuyến đường hàng hải quốc tế quan trọng, thuận lợi cho xuất nhập khẩu.

        • Nguồn nhân lực dồi dào:
        Dân số trẻ, tỷ lệ biết chữ cao, chi phí lao động cạnh tranh.

        • Thị trường trong nước lớn:
        Với gần 100 triệu dân và thu nhập tăng nhanh, thị trường trong nước có tiềm năng lớn.

        • Chính sách khuyến khích đầu tư:
        Nhà nước có nhiều chính sách ưu đãi đầu tư, đặc biệt cho công nghệ cao và công nghiệp hỗ trợ.

        ĐÁNH GIÁ CHẤT LƯỢNG TĂNG TRƯỞNG CÔNG NGHIỆP:

        1. Năng suất lao động:
        Năng suất lao động công nghiệp Việt Nam đã tăng đáng kể nhưng vẫn thấp so với khu vực:
        - Năng suất lao động công nghiệp: khoảng 4.200 USD/người/năm
        - So với Singapore: 1/10
        - So với Malaysia: 1/3
        - So với Thái Lan: 2/3

        2. Giá trị gia tăng:
        - Giá trị gia tăng bình quân của công nghiệp Việt Nam khoảng 15-20%
        - Trong khi các nước phát triển đạt 30-40%
        - Nguyên nhân: chủ yếu tham gia khâu gia công, lắp ráp

        3. Tiêu thụ năng lượng:
        - Việt Nam tiêu thụ 1.5-2 lần năng lượng so với trung bình thế giới để tạo ra 1 USD GDP
        - Chủ yếu sử dụng năng lượng hóa thạch, gây ô nhiễm môi trường

        4. Khả năng đổi mới sáng tạo:
        - Chi phí R&D chỉ chiếm 0.44% GDP (mục tiêu 2% GDP)
        - Số bằng sáng chế/1 triệu dân: 0.3 (Singapore: 261, Hàn Quốc: 325)

        ĐỊNH HƯỚNG PHÁT TRIỂN:

        Để nâng cao chất lượng công nghiệp hóa, Việt Nam cần:

        • Chuyển từ gia công sang sản xuất có giá trị gia tăng cao
        • Phát triển công nghiệp phụ trợ
        • Tăng cường đầu tư R&D
        • Áp dụng công nghệ xanh, tiết kiệm năng lượng
        • Đào tạo nhân lực chất lượng cao
        • Xây dựng thương hiệu quốc gia
      `;

  pages.push(...createMultiplePages("Chương II: Thực trạng công nghiệp hóa Việt Nam", mainContent, currentId));

  return pages;
};