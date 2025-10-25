import { createMultiplePages } from './PageUtils';

export const Part3_VietnamSituation = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang chương
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "2. Hội nhập kinh tế quốc tế ở Việt Nam",
    subtitle: "",
    content: ""
  });

  // 2.1. Khái niệm và nội dung hội nhập kinh tế quốc tế
  const section2_1 = `
        **2.1. Khái niệm và nội dung hội nhập kinh tế quốc tế**

        **2.1.1. Khái niệm và sự cần thiết khách quan hội nhập kinh tế quốc tế**

        Trong giáo trình kinh tế chính trị Mác - Lênin có nói: "Hội nhập kinh tế quốc tế của một quốc gia là quá trình quốc gia đó thực hiện gắn kết nền kinh tế của mình với nền kinh tế thế giới dựa trên sự chia sẻ lợi ích đồng thời tuân thủ các chuẩn mực quốc tế chung"

        [IMAGE:co.png|Cre: Từ bài viết của Tổng Bí thư Tô Lâm, nghĩ về tư duy hội nhập trong kỷ nguyên mới (baochinhphu.vn)]

        **2.1.2. Tính tất yếu khách quan của hội nhập kinh tế quốc tế**

        1. Do xu thế khách quan trong bối cảnh toàn cầu hóa kinh tế:
        • Toàn cầu hóa tạo ra liên kết và sự phụ thuộc lẫn nhau
        • Các yếu tố sản xuất được lưu thông trên phạm vi toàn cầu
        • Sự phát triển của công nghệ thông tin, giao thông vận tải làm rút ngắn khoảng cách
        • Không một quốc gia nào có thể phát triển biệt lập

        [IMAGE:vn.png|Cre: Kinh tế Việt Nam trong bối cảnh toàn cầu hóa và hội nhập quốc tế (vietq.vn)]

        2. Hội nhập kinh tế quốc tế là phương thức phát triển phổ biến của các nước:
        • Giúp các nước đang và kém phát triển tận dụng thời cơ
        • Giúp mở cửa thị trường, thu hút vốn, thúc đẩy công nghiệp hóa, tạo việc làm
        • Các nước thành công đều chủ động hội nhập quốc tế
        • Tham gia phân công lao động quốc tế, chuỗi giá trị toàn cầu


        **2.1.3. Nội dung hội nhập kinh tế quốc tế**

        1. Chuẩn bị đầy đủ các điều kiện để thực hiện hội nhập thành công:
        • Quá trình hội nhập phải được cân nhắc với lộ trình và cách thức tối ưu
        • Xây dựng nền kinh tế độc lập, tự chủ làm cơ sở
        • Hoàn thiện thể chế kinh tế thị trường phù hợp với chuẩn mực quốc tế
        • Nâng cao năng lực cạnh tranh của nền kinh tế
        • Đào tạo nguồn nhân lực đáp ứng yêu cầu hội nhập

        2. Thực hiện đa dạng các hình thức, các mức độ hội nhập kinh tế quốc tế:
        • Giúp các nước đang và kém phát triển phát triển rút ngắn, thu hẹp khoảng cách
        • Tham gia các tổ chức kinh tế quốc tế: WTO, ASEAN, APEC, CPTPP, RCEP, EVFTA...
        • Mở cửa thị trường, giảm rào cản thương mại
        • Thu hút đầu tư trực tiếp nước ngoài (FDI)
        • Hợp tác song phương và đa phương

        [IMAGE:Wto.png|Năm 2006, Việt Nam chính thức ký Nghị định thư gia nhập WTO.]
      `;

  pages.push(...createMultiplePages("2.1. Khái niệm và nội dung", section2_1, currentId));
  currentId = startId + pages.length;

  // 2.2. Tác động của hội nhập kinh tế quốc tế
  const section2_2 = `
        **2.2. Tác động của hội nhập kinh tế quốc tế đến phát triển của Việt Nam**

        **2.2.1. Tác động tích cực**

        • Tạo điều kiện mở rộng thị trường, tiếp thu khoa học công nghệ, vốn:
        - Mở rộng thị trường xuất khẩu hàng hóa, dịch vụ
        - Thu hút vốn đầu tư nước ngoài (FDI, ODA)
        - Tiếp cận và chuyển giao công nghệ tiên tiến
        - Học hỏi kinh nghiệm quản lý, điều hành hiện đại
        - Chuyển dịch cơ cấu kinh tế theo hướng hiện đại

        • Tạo cơ hội để nâng cao chất lượng nguồn nhân lực:
        - Đào tạo theo tiêu chuẩn quốc tế
        - Học hỏi kỹ năng, kinh nghiệm từ chuyên gia nước ngoài
        - Tiếp cận tri thức, khoa học kỹ thuật tiên tiến
        - Nâng cao trình độ chuyên môn và tay nghề

        • Tạo điều kiện để thúc đẩy hội nhập các lĩnh vực văn hóa, chính trị, củng cố an ninh quốc phòng:
        - Tăng cường quan hệ hợp tác quốc tế toàn diện
        - Nâng cao vị thế của Việt Nam trên trường quốc tế
        - Củng cố an ninh, quốc phòng thông qua hợp tác
        - Giao lưu văn hóa, học tập kinh nghiệm quản trị xã hội


        **2.2.2. Tác động tiêu cực**

        • Gia tăng cạnh tranh gay gắt:
        - Hàng hóa, dịch vụ nước ngoài gia tăng trên thị trường nội địa
        - Doanh nghiệp trong nước phải đối mặt với áp lực cạnh tranh lớn
        - Một số ngành sản xuất yếu kém có nguy cơ bị đào thải
        - Phải đáp ứng tiêu chuẩn quốc tế ngày càng cao

        • Gia tăng sự phụ thuộc nền kinh tế quốc gia vào thị trường bên ngoài:
        - Phụ thuộc vào xuất khẩu và đầu tư nước ngoài
        - Dễ bị tác động bởi biến động kinh tế thế giới
        - Nguy cơ mất tự chủ về kinh tế
        - Phụ thuộc vào công nghệ nước ngoài

        • Dẫn đến phân phối không công bằng lợi ích và rủi ro:
        - Lợi ích hội nhập phân bổ không đều giữa các vùng, miền
        - Chênh lệch giàu nghèo có thể gia tăng
        - Mất cân đối trong phát triển

        • Các nước đang phát triển phải đối mặt với nguy cơ chuyển dịch cơ cấu kinh tế tự nhiên:
        - Mất cân đối trong cơ cấu kinh tế
        - Phát triển thiếu bền vững
        - Phụ thuộc vào xuất khẩu nguyên liệu thô, gia công giá trị thấp

        • Tạo ra thách thức đối với quyền lực nhà nước, chủ quyền quốc gia:
        - Áp lực về cam kết quốc tế, tuân thủ luật chơi chung
        - Hạn chế quyền tự chủ trong một số chính sách
        - Đòi hỏi phải cân đối giữa hội nhập và giữ vững độc lập
        - Ảnh hưởng đến chủ quyền quốc gia trong một số lĩnh vực

        • Hội nhập có thể làm gia tăng tình trạng khủng bố quốc tế, buôn lậu, tội phạm xuyên quốc gia:
        - Biên giới mở rộng tạo điều kiện cho tội phạm xuyên quốc gia
        - Buôn lậu, trốn thuế gia tăng
        - Các vấn đề an ninh phi truyền thống
      `;

  pages.push(...createMultiplePages("2.2. Tác động của hội nhập", section2_2, currentId));
  currentId = startId + pages.length;

  // 2.3. Phương hướng nâng cao hiệu quả hội nhập kinh tế quốc tế
  const section2_3 = `
        **2.3. Phương hướng nâng cao hiệu quả hội nhập kinh tế quốc tế trong phát triển của Việt Nam**

        **2.3.1. Nhận thức sâu sắc về thời cơ và thách thức**

        • Hội nhập là xu thế khách quan, không thể né tránh
        • Cần thấy rõ cả mặt tích cực và tiêu cực
        • Đánh giá đúng tác động của hội nhập đến từng ngành, lĩnh vực
        • Chuẩn bị tốt để tận dụng cơ hội và hạn chế thách thức
        • Nâng cao nhận thức của toàn xã hội về hội nhập

        [IMAGE:co2.png|Cre: Một số vấn đề về hội nhập kinh tế quốc tế của Việt Nam (tcnn.vn)]


        **2.3.2. Xây dựng chiến lược và lộ trình hội nhập kinh tế phù hợp**

        Cần thực hiện:
        1. Đánh giá đúng bối cảnh quốc tế
        2. Đánh giá được những điều kiện khách quan và chủ quan
        3. Nghiên cứu kinh nghiệm của các nước
        4. Xây dựng phương hướng, mục tiêu, giải pháp hiệu quả
        5. Chiến lược hội nhập phải gắn với tiến trình hội nhập toàn diện
        6. Xác định lộ trình rõ ràng từng bước, có trọng tâm, trọng điểm


        **2.3.3. Tích cực, chủ động tham gia và thực hiện đầy đủ các cam kết**

        • Tham gia tích cực các tổ chức kinh tế quốc tế
        • Thực hiện nghiêm túc các cam kết đã ký kết
        • Nâng cao uy tín, vai trò của Việt Nam
        • Tạo sự tin cậy, tôn trọng của cộng đồng quốc tế
        • Tranh thủ sự ủng hộ của cộng đồng quốc tế

        [IMAGE:co3.png|Cre: Nâng cao hội nhập kinh tế quốc tế, thúc đẩy kinh tế phát triển nhanh và bền vững (baochinhphu.vn)]


        **2.3.4. Hoàn thiện thể chế kinh tế và pháp luật**

        • Hoàn thiện cơ chế thị trường, đổi mới cơ chế quản lý của nhà nước
        • Rà soát, hoàn thiện hệ thống pháp luật (đất đai, đầu tư, thương mại, thuế...)
        • Xây dựng thể chế kinh tế thị trường đồng bộ, hiện đại
        • Hoàn thiện hệ thống pháp luật phù hợp với cam kết quốc tế
        • Cải cách hành chính, tạo môi trường kinh doanh thuận lợi
        • Nâng cao hiệu lực, hiệu quả quản lý nhà nước

        [IMAGE:toa.png|Cre: Tăng cường công tác xây dựng pháp luật, hoàn thiện các dự án Luật trình Quốc hội (haiduong.baohiemxahoi.gov.vn)]


        **2.3.5. Nâng cao năng lực cạnh tranh quốc tế của nền kinh tế**

        • Hiệu quả hội nhập phụ thuộc vào năng lực cạnh tranh
        • Nhà nước cần tăng cường hỗ trợ các doanh nghiệp
        • Cơ cấu lại nền kinh tế, đổi mới mô hình tăng trưởng
        • Phát triển nguồn nhân lực chất lượng cao
        • Đầu tư mạnh vào nghiên cứu, phát triển, đổi mới công nghệ
        • Xây dựng thương hiệu quốc gia, thương hiệu sản phẩm

        [IMAGE:co4.png|Cre: Để doanh nghiệp Việt Nam tận dụng cơ hội khi hội nhập (baochinhphu.vn)]


        **2.3.6. Xây dựng nền kinh tế độc lập, tự chủ của Việt Nam**

        • Là nền kinh tế không bị lệ thuộc, phụ thuộc vào nước khác, không bị áp đặt, khống chế
        • Phát triển kinh tế dựa vào nội lực là chính, kết hợp với nguồn lực bên ngoài
        • Xây dựng ngành công nghiệp chủ lực, công nghiệp phụ trợ
        • Đảm bảo an ninh lương thực, an ninh năng lượng
        • Giữ vững độc lập, tự chủ trong hội nhập

        [IMAGE:co5.png|Cre: Về xây dựng nền kinh tế độc lập tự chủ và chủ động, tích cực hội nhập quốc tế trong kỷ nguyên mới (btgdvtukhanhhoa.vn)]


        **2.3.7. Biện pháp để xây dựng nền kinh tế độc lập tự chủ**

        1. Hoàn thiện, bổ sung đường lối phát triển đất nước:
        • Xây dựng chiến lược phát triển kinh tế - xã hội dài hạn
        • Định hướng rõ ràng cho từng giai đoạn phát triển

        2. Đẩy mạnh công nghiệp hóa, hiện đại hóa:
        • Phát triển công nghiệp làm nền tảng cho nền kinh tế độc lập
        • Ưu tiên phát triển công nghiệp công nghệ cao

        3. Đẩy mạnh quan hệ kinh tế đối ngoại và chủ động hội nhập:
        • Mở rộng quan hệ kinh tế với nhiều quốc gia, vùng lãnh thổ
        • Đa dạng hóa thị trường và đối tác

        4. Tăng cường năng lực cạnh tranh bằng đổi mới:
        • Đổi mới sáng tạo trong sản xuất, kinh doanh
        • Nâng cao chất lượng sản phẩm, dịch vụ

        5. Kết hợp chặt chẽ quốc phòng, an ninh và đối ngoại:
        • Đảm bảo an ninh quốc gia trong hội nhập
        • Bảo vệ lợi ích quốc gia trong mọi điều kiện


        ---

        NGUỒN THAM KHẢO:

        Sách, giáo trình chính:
        Giáo trình Kinh tế chính trị Mác – Lênin (giáo trình tập huấn năm 2019 - Bộ GDĐT)
      `;

  pages.push(...createMultiplePages("2.3. Phương hướng nâng cao hiệu quả", section2_3, currentId));
  currentId = startId + pages.length;

  // Trang bìa cuối
  pages.push({
    id: currentId++,
    type: "cover",
    title: "CHƯƠNG 6: CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA VÀ HỘI NHẬP KINH TẾ QUỐC TẾ CỦA VIỆT NAM",
    subtitle: "Hoàn thành nghiên cứu",
    author: "Giáo trình Kinh tế chính trị Mác – Lênin (Bộ GDĐT - 2019)"
  });

  return pages;
};