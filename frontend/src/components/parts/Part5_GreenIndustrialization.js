import { createMultiplePages } from './PageUtils';

export const Part5_GreenIndustrialization = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang chương - chỉ có tiêu đề
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "CHƯƠNG IV",
    subtitle: "CÔNG NGHIỆP HÓA XANH - XU HƯỚNG TẤT YẾU",
    content: ``
  });

  // Tất cả nội dung chương IV - bao gồm cả định nghĩa
  const mainContent = `
        Công nghiệp hóa xanh là mô hình phát triển bền vững, hài hòa giữa tăng trưởng kinh tế và bảo vệ môi trường.

        KHÁI NIỆM:
        Công nghiệp hóa xanh là quá trình phát triển công nghiệp dựa trên:
        • Công nghệ sạch, thân thiện môi trường
        • Sử dụng hiệu quả tài nguyên, năng lượng
        • Giảm thiểu phát thải và chất thải
        • Kinh tế tuần hoàn
        • Năng lượng tái tạo

        TẦM QUAN TRỌNG:
        • Đáp ứng cam kết Net Zero 2050
        • Phù hợp xu thế toàn cầu
        • Bảo vệ môi trường sống
        • Tạo lợi thế cạnh tranh bền vững
        CÁC LĨNH VỰC ƯU TIÊN PHÁT TRIỂN XANH:

        1. NĂNG LƯỢNG TÁI TẠO:

        • Điện mặt trời:
        - Tiềm năng kỹ thuật: 35.000 MW
        - Hiện tại đã lắp đặt: 16.500 MW (2021)
        - Mục tiêu 2030: 18.600 MW
        - Lợi thế: Nhiều nắng, công nghệ ngày càng rẻ
        - Thách thức: Sự bất ổn của lưới điện, cần đầu tư hạ tầng

        • Điện gió:
        - Tiềm năng kỹ thuật: 24.000 MW (trên bờ) + 160.000 MW (ngoài khơi)
        - Hiện tại đã lắp đặt: 600 MW
        - Mục tiêu 2030: 6.000 MW
        - Lợi thế: Đường bờ biển dài, gió mùa ổn định
        - Thách thức: Công nghệ ngoài khơi phức tạp, chi phí cao

        • Thủy điện nhỏ:
        - Tiềm năng: 4.000 MW
        - Đã khai thác: 70%
        - Ưu điểm: Công nghệ trưởng thành, chi phí vận hành thấp
        - Hạn chế: Tác động môi trường, di dời dân cư

        • Sinh khối:
        - Tiềm năng: 2.000 MW
        - Nguồn nguyên liệu: Phế phẩm nông nghiệp, rác thải hữu cơ
        - Lợi ích: Xử lý chất thải, tạo việc làm nông thôn
        - Khó khăn: Thu gom nguyên liệu, công nghệ đốt sạch

        2. CÔNG NGHIỆP SẠCH:

        • Công nghệ sản xuất sạch hơn:
        - Áp dụng công nghệ BAT (Best Available Technology)
        - Sử dụng nguyên liệu thân thiện môi trường
        - Tối ưu hóa quy trình sản xuất để giảm chất thải
        - Áp dụng hệ thống quản lý môi trường ISO 14001

        • Tái chế và kinh tế tuần hoàn:
        - Phát triển công nghiệp tái chế kim loại, nhựa, giấy
        - Xây dựng mô hình sản xuất khép kín
        - Biến chất thải thành nguyên liệu đầu vào
        - Giảm thiểu chất thải ra môi trường

        • Giảm phát thải carbon:
        - Thay thế nhiên liệu hóa thạch bằng năng lượng sạch
        - Áp dụng công nghệ CCS (Carbon Capture and Storage)
        - Cải thiện hiệu suất năng lượng
        - Sử dụng vật liệu có hàm lượng carbon thấp

        • Xử lý chất thải công nghiệp:
        - Xây dựng hệ thống xử lý nước thải tập trung
        - Phát triển công nghệ xử lý chất thải rắn
        - Quản lý chất thải nguy hại an toàn
        - Giám sát chất lượng môi trường liên tục

        3. GIAO THÔNG XANH:

        • Xe điện và xe hybrid:
        - Phát triển công nghiệp sản xuất xe điện trong nước
        - Xây dựng hạ tầng trạm sạc điện
        - Ưu đãi thuế cho xe điện
        - Mục tiêu: 100% xe máy điện vào 2030

        • Giao thông công cộng sạch:
        - Phát triển hệ thống BRT, tàu điện
        - Sử dụng xe buýt điện, xe buýt CNG
        - Khuyến khích sử dụng giao thông công cộng
        - Giảm ùn tắc và ô nhiễm đô thị

        • Nhiên liệu sinh học:
        - Sản xuất ethanol từ cây năng lượng
        - Phát triển biodiesel từ dầu thực vật
        - Nghiên cứu nhiên liệu từ tảo biển
        - Giảm phụ thuộc vào nhiên liệu hóa thạch

        • Logistics xanh:
        - Tối ưu hóa tuyến đường vận chuyển
        - Sử dụng phương tiện vận tải tiết kiệm nhiên liệu
        - Phát triển vận tải đường thủy, đường sắt
        - Ứng dụng công nghệ số trong logistics

        4. NÔNG NGHIỆP BỀN VỮNG:

        • Nông nghiệp hữu cơ:
        - Sản xuất không sử dụng hóa chất độc hại
        - Phát triển thị trường nông sản hữu cơ
        - Xây dựng hệ thống chứng nhận quốc tế
        - Tăng giá trị gia tăng cho nông sản

        • Công nghệ tiết kiệm nước:
        - Hệ thống tưới nhỏ giọt, phun mưa
        - Sử dụng cảm biến độ ẩm đất
        - Tái sử dụng nước thải đã xử lý
        - Bảo vệ nguồn nước ngầm

        • Giảm sử dụng hóa chất:
        - Áp dụng IPM (Quản lý dịch hại tổng hợp)
        - Sử dụng phân bón vi sinh, phân hữu cơ
        - Phát triển giống cây kháng bệnh
        - Kiểm soát an toàn thực phẩm

        CHÍNH SÁCH HỖ TRỢ CÔNG NGHIỆP XANH:

        • Ưu đãi đầu tư:
        - Giảm thuế thu nhập doanh nghiệp
        - Miễn thuế nhập khẩu thiết bị công nghệ xanh
        - Hỗ trợ vốn vay lãi suất ưu đãi
        - Cho thuê đất với giá ưu đãi

        • Khung pháp lý:
        - Ban hành tiêu chuẩn môi trường nghiêm ngặt
        - Áp dụng thuế carbon, thuế môi trường
        - Quy định bắt buộc về hiệu suất năng lượng
        - Hệ thống chứng nhận xanh

        • Đầu tư công:
        - Xây dựng hạ tầng năng lượng tái tạo
        - Đầu tư hệ thống xử lý chất thải
        - Phát triển giao thông công cộng xanh
        - Nghiên cứu phát triển công nghệ xanh
      `;

  const mainPages = createMultiplePages("Công nghiệp hóa xanh", mainContent, currentId);
  pages.push(...mainPages);

  return pages;
};