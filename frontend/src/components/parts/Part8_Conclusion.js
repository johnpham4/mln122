import { createMultiplePages } from './PageUtils';

export const Part8_Conclusion = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang chương (trống)
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "KẾT LUẬN",
    subtitle: "VÀ KIẾN NGHỊ",
    content: ""
  });

  // Nội dung chính
  const mainContent = `
        KẾT LUẬN VÀ KIẾN NGHỊ

        KẾT LUẬN:

        Công nghiệp hóa theo hướng xanh-thông minh-sáng tạo là con đường tất yếu để Việt Nam trở thành nước công nghiệp hiện đại vào năm 2030 và nước phát triển có thu nhập cao vào năm 2045.

        1. VỀ MẶT LÝ LUẬN:

        Việc vận dụng sáng tạo lý luận Mác-Lênin về công nghiệp hóa trong điều kiện mới cho thấy:

        • Vai trò chỉ đạo của Đảng và Nhà nước:
        - Đảng Cộng sản Việt Nam đóng vai trò lãnh đạo tuyệt đối trong quá trình công nghiệp hóa
        - Nhà nước đóng vai trò chủ đạo trong định hướng và điều tiết kinh tế vĩ mô
        - Kết hợp chặt chẽ giữa vai trò của thị trường và sự điều tiết của Nhà nước
        - Đảm bảo công nghiệp hóa phục vụ lợi ích của nhân dân và phát triển bền vững

        • Sự kết hợp hài hòa các thành phần kinh tế:
        - Kinh tế nhà nước giữ vai trò chủ đạo trong các lĩnh vực then chốt
        - Kinh tế tư nhân là động lực quan trọng của tăng trưởng và đổi mới
        - Kinh tế có đầu tư nước ngoài đóng góp vốn, công nghệ và kinh nghiệm quản lý
        - Các thành phần kinh tế cùng phát triển và bổ sung cho nhau

        • Phát triển bền vững và công bằng xã hội:
        - Không hy sinh môi trường và công bằng xã hội để đổi lấy tăng trưởng kinh tế
        - Đảm bảo lợi ích của người lao động trong quá trình công nghiệp hóa
        - Phát triển hài hòa giữa các vùng, giảm thiểu khoảng cách phát triển
        - Bảo vệ và phát huy các giá trị văn hóa truyền thống tốt đẹp

        • Hội nhập quốc tế tích cực và chủ động:
        - Tham gia tích cực vào phân công lao động quốc tế với vị thế ngày càng cao
        - Học hỏi kinh nghiệm và tiếp thu có chọn lọc các thành tựu của nhân loại
        - Giữ vững độc lập, tự chủ và bảo đảm an ninh kinh tế quốc gia
        - Đóng góp tích cực vào giải quyết các vấn đề toàn cầu

        2. VỀ MẶT THỰC TIỄN:

        Thực tiễn hơn 35 năm đổi mới đã chứng minh:

        • Những thành tựu to lớn:
        - GDP tăng gấp 18 lần (1990-2021), thu nhập bình quân đầu người đạt 3.700 USD
        - Tỷ trọng công nghiệp-xây dựng từ 23% lên 33.7% GDP
        - Từ nước nhập khẩu lương thực trở thành nước xuất khẩu nông sản lớn thứ 3 thế giới
        - Từ nước kém phát triển trở thành nước có thu nhập trung bình thấp

        • Những hạn chế cần khắc phục:
        - Chất lượng tăng trưởng chưa cao, năng suất lao động còn thấp
        - Cơ cấu kinh tế chuyển dịch chậm, thiếu ngành công nghiệp nặng
        - Phụ thuộc nhiều vào tài nguyên thiên nhiên và lao động giản đơn
        - Ô nhiễm môi trường và bất công xã hội gia tăng

        • Bài học kinh nghiệm quý báu:
        - Phải kiên trì con đường xã hội chủ nghĩa và chính sách đổi mới
        - Kết hợp hài hòa giữa tăng trưởng kinh tế và phát triển xã hội
        - Chủ động hội nhập quốc tế nhưng giữ vững độc lập, tự chủ
        - Đặt con người ở trung tâm của sự phát triển

        3. VỀ TRIỂN VỌNG PHÁT TRIỂN:

        Với những lợi thế và cơ hội hiện có, Việt Nam hoàn toàn có thể thực hiện thành công mục tiêu công nghiệp hóa xanh-thông minh-sáng tạo:

        • Lợi thế cơ bản:
        - Vị trí địa lý thuận lợi, nằm trên các tuyến đường thương mại quốc tế
        - Nguồn nhân lực dồi dào, trẻ và có học thức
        - Thị trường trong nước lớn với gần 100 triệu dân
        - Hệ thống chính trị ổn định, chính sách nhất quán

        • Cơ hội từ xu thế thời đại:
        - Cách mạng công nghiệp 4.0 mở ra nhiều cơ hội leap-frogging
        - Xu hướng phát triển xanh trở thành yêu cầu tất yếu
        - Dịch chuyển chuỗi cung ứng toàn cầu tạo cơ hội cho Việt Nam
        - Hợp tác quốc tế về khoa học công nghệ ngày càng mở rộng

        • Thách thức cần vượt qua:
        - Cạnh tranh gay gắt về thu hút đầu tư và nhân tài
        - Áp lực về biến đổi khí hậu và bảo vệ môi trường
        - Yêu cầu ngày càng cao về chất lượng sản phẩm và dịch vụ
        - Rủi ro từ những biến động của nền kinh tế thế giới

        KIẾN NGHỊ:

        Để thực hiện thành công mục tiêu công nghiệp hóa xanh-thông minh-sáng tạo, cần tập trung vào các giải pháp then chốt sau:

        1. TĂNG CƯỜNG ĐẦU TƯ CHO GIÁO DỤC VÀ ĐÀO TẠO:

        • Nâng cao chất lượng giáo dục tổng thể:
        - Đầu tư ít nhất 20% ngân sách nhà nước cho giáo dục
        - Đổi mới căn bản chương trình, phương pháp giáo dục
        - Tập trung phát triển giáo dục STEM từ bậc tiểu học
        - Tăng cường giáo dục kỹ năng mềm và tư duy sáng tạo

        • Phát triển mạnh giáo dục nghề nghiệp:
        - Xây dựng hệ thống giáo dục nghề nghiệp theo tiêu chuẩn quốc tế
        - Tăng tỷ lệ học sinh chọn học nghề lên 60%
        - Liên kết chặt chẽ giữa nhà trường và doanh nghiệp
        - Đào tạo 2 triệu lao động có tay nghề cao đến 2030

        • Phát triển giáo dục đại học định hướng nghiên cứu:
        - 10 đại học Việt Nam vào top 500 thế giới
        - Tăng số lượng tiến sĩ lên 10.000 người/năm
        - Xây dựng 100 phòng thí nghiệm trọng điểm quốc gia
        - Thu hút 1.000 giáo sư, phó giáo sư nước ngoài

        2. ƯU TIÊN PHÁT TRIỂN CÔNG NGHỆ XANH:

        • Đầu tư mạnh vào năng lượng tái tạo:
        - 50 tỷ USD đầu tư năng lượng tái tạo đến 2030
        - 50% điện năng từ nguồn tái tạo vào 2050
        - Phát triển công nghiệp sản xuất thiết bị năng lượng tái tạo
        - Xuất khẩu công nghệ năng lượng xanh ra khu vực

        • Phát triển công nghệ môi trường:
        - Đầu tư 20 tỷ USD cho công nghệ xử lý ô nhiễm
        - 100% khu công nghiệp có hệ thống xử lý chất thải tập trung
        - Phát triển công nghệ tái chế và kinh tế tuần hoàn
        - Xuất khẩu dịch vụ môi trường và công nghệ xanh

        • Khuyến khích sản xuất xanh:
        - Thuế carbon 50 USD/tấn CO2 từ 2030
        - Ưu đãi thuế 50% for doanh nghiệp xanh
        - Hỗ trợ vốn lãi suất 0% cho dự án công nghệ xanh
        - Chứng nhận xanh bắt buộc cho tất cả sản phẩm

        3. HOÀN THIỆN THỂ CHẾ THỊ TRƯỜNG:

        • Cải cách thể chế kinh tế toàn diện:
        - Hoàn thiện luật pháp theo hướng minh bạch, hiệu quả
        - Rút ngắn thời gian giải quyết thủ tục hành chính xuống 50%
        - Áp dụng chính phủ điện tử trong tất cả các thủ tục
        - Xây dựng hệ thống tư pháp độc lập và công正

        • Phát triển thị trường tài chính hiện đại:
        - Thị trường chứng khoán đạt quy mô 100% GDP
        - Phát triển thị trường trái phiếu doanh nghiệp
        - 50 quỹ đầu tư mạo hiểm với vốn 10 tỷ USD
        - Hệ thống ngân hàng số hiện đại và an toàn

        • Bảo vệ quyền sở hữu trí tuệ nghiêm ngặt:
        - Rút ngắn thời gian đăng ký bằng sáng chế xuống 12 tháng
        - Tăng mức phạt vi phạm sở hữu trí tuệ lên 10 lần
        - Thành lập tòa án chuyên về sở hữu trí tuệ
        - Gia nhập các hiệp định bảo hộ sở hữu trí tuệ quốc tế

        4. TĂNG CƯỜNG HỢP TÁC QUỐC TẾ:

        • Hợp tác khoa học công nghệ:
        - Ký kết 100 thỏa thuận hợp tác KH&CN với các nước
        - Xây dựng 50 phòng thí nghiệm liên kết quốc tế
        - Tham gia 20 chương trình nghiên cứu đa quốc gia
        - Đăng cai tổ chức 10 hội nghị khoa học quốc tế/năm

        • Thu hút đầu tư chất lượng cao:
        - 300 tỷ USD FDI trong giai đoạn 2025-2030
        - 70% FDI vào các lĩnh vực công nghệ cao
        - Thu hút 100 tập đoàn Fortune 500 đầu tư
        - Xây dựng 20 trung tâm R&D khu vực

        • Phát triển thương hiệu quốc gia:
        - 10 thương hiệu Việt Nam vào top 100 châu Á
        - Tham gia 50 triển lãm quốc tế lớn/năm
        - Xây dựng 100 trung tâm thương mại Việt Nam ở nước ngoài
        - "Made in Vietnam" trở thành thương hiệu uy tín toàn cầu

        5. BẢO ĐẢM AN SINH XÃ HỘI TRONG CHUYỂN ĐỔI:

        • Chính sách hỗ trợ lao động:
        - Bảo hiểm thất nghiệp cho 100% lao động
        - Đào tạo lại miễn phí cho lao động bị thay thế
        - Hỗ trợ khởi nghiệp cho lao động nông thôn
        - Nâng lương tối thiểu lên 500 USD/tháng vào 2030

        • Phát triển hạ tầng xã hội:
        - 100% dân số có tiếp cận dịch vụ y tế cơ bản
        - 95% dân số có tiếp cận internet băng rộng
        - Xây dựng 1 triệu căn nhà ở xã hội
        - Phủ sóng giáo dục mầm non toàn quốc

        • Giảm bất bình đẳng xã hội:
        - Hệ số Gini giảm xuống dưới 0.35
        - Thu nhập bình quân 20% dân nghèo nhất tăng 10%/năm
        - 100% xã khó khăn có đường điện, nước sạch
        - Tỷ lệ hộ nghèo giảm xuống dưới 1%

        KẾT LUẬN CUỐI CÙNG:

        Thành công của công nghiệp hóa xanh-thông minh-sáng tạo sẽ góp phần quan trọng vào việc xây dựng Việt Nam thành:

        • Nước công nghiệp hiện đại vào năm 2030 với thu nhập trung bình cao
        • Nước phát triển có thu nhập cao vào năm 2045
        • Một trong những trung tâm sản xuất, khoa học công nghệ quan trọng của khu vực
        • Hình mẫu về phát triển bền vững và công bằng xã hội

        Đây là sứ mệnh lịch sử của thế hệ hôm nay, đòi hỏi sự đoàn kết, quyết tâm và nỗ lực không ngừng của toàn Đảng, toàn dân và toàn quân ta.

        "Không có gì quý hơn độc lập tự do, nhưng để giữ vững độc lập tự do, chúng ta phải không ngừng đổi mới, sáng tạo và phát triển để sánh vai cùng các cường quốc năm châu" - Theo tinh thần di chúc của Chủ tịch Hồ Chí Minh.
      `;

  pages.push(...createMultiplePages("Kết luận và kiến nghị", mainContent, currentId));

  // Trang bìa sau
  pages.push({
    id: currentId++,
    type: "back-cover",
    title: "CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA VÀ HỘI NHẬP KINH TẾ QUỐC TẾ CỦA VIỆT NAM",
    subtitle: "Làm thế nào để Việt Nam công nghiệp hóa theo hướng xanh - thông minh - sáng tạo?",
    author: "Nghiên cứu về Kinh tế Chính trị Mác-Lênin",
    flag: "VN"
  });

  return pages;
};