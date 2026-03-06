import { createMultiplePages } from './PageUtils';

export const Part3_VietnamSituation = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang chương Kết luận
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "4. KẾT LUẬN CHUNG",
    subtitle: "",
    content: ""
  });

  // 4. Kết luận chung
  const section4 = `
        **4. KẾT LUẬN CHUNG**
        Cuộc kháng chiến chống thực dân Pháp (1946–1954) là thắng lợi vĩ đại của dân tộc Việt Nam trong sự nghiệp đấu tranh giành độc lập và chủ quyền quốc gia. Dưới sự lãnh đạo đúng đắn của Đảng Cộng sản Việt Nam và Chủ tịch Hồ Chí Minh, nhân dân ta đã phát huy tinh thần đoàn kết, ý chí kiên cường và sức mạnh toàn dân tộc để đánh bại thực dân Pháp xâm lược.
        Chiến thắng Điện Biên Phủ năm 1954 trở thành thắng lợi quyết định của cuộc kháng chiến chống thực dân Pháp, buộc Pháp phải ký Hiệp định Genève năm 1954, chấm dứt chiến tranh ở Đông Dương. Theo hiệp định, Việt Nam tạm thời bị chia cắt thành hai miền ở vĩ tuyến 17, tạo tiền đề cho cuộc đấu tranh tiếp theo nhằm thống nhất đất nước. Thắng lợi cuộc kháng chiến chống Pháp không chỉ khẳng định đường lối lãnh đạo đúng đắn của Đảng mà còn cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên thế giới, mở ra giai đoạn mới trong lịch sử cách mạng Việt Nam.
        [IMAGE:dbp_french_prisoners.jpg|Tù binh Pháp bị áp giải sau trận Điện Biên Phủ (1954)|width:90%;height:190px]


      `;

  pages.push(...createMultiplePages("4. KẾT LUẬN CHUNG", section4, currentId, 'content', 50));
  currentId = startId + pages.length;

  // Trang riêng cho hình ảnh L'Humanité
  const imageContent = `
        Chiến thắng này cũng nhận được sự quan tâm và ủng hộ của dư luận quốc tế. Nhiều tờ báo tiến bộ trên thế giới, trong đó có báo L'Humanité của Pháp, đã đăng bài ca ngợi thắng lợi của nhân dân Việt Nam.

        [IMAGE:dbp_image_2.png|Trang nhất báo L'Humanité (25/7/1954) tán dương chiến thắng tại Đông Dương|width:98%;height:350px]

      `;

  pages.push(...createMultiplePages("4. KẾT LUẬN CHUNG (TIẾP)", imageContent, currentId, 'content', 50));
  currentId = startId + pages.length;

  // Trang chương Nguồn tham khảo
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "5. NGUỒN THAM KHẢO",
    subtitle: "",
    content: ""
  });

  // 5. Nguồn tham khảo
  const references = `
        **5. NGUỒN THAM KHẢO**
        1. Giáo trình lịch sử Đảng Cộng Sản Việt Nam (2021)
        2. Tư liệu hình ảnh lịch sử từ các thư viện và cơ sở dữ liệu trực tuyến (Wikimedia Commons, báo chí quốc tế).
        **HÌNH ẢNH:**
        Nguồn hình ảnh: Wikimedia Commons và các tư liệu lịch sử công khai.
        [LINK:1. Chủ tịch Hồ Chí Minh và Đại tướng Võ Nguyên Giáp (1945)|hochiminh_giap_1945.jpg]
        Nguồn: Wikimedia Commons 

        [LINK:2. Lược đồ Chiến dịch Việt Bắc Thu-Đông 1947|luoc-do-chien-dich-viet-bac-thu-dong-1947.jpg]
        Nguồn: Lời giải hay

        [LINK:3. Bản đồ Chiến dịch Tây Bắc (1952)|ban-do-tay-bac.jpg]
        Nguồn: Báo Sơn La 

        [LINK:4. Toàn cảnh thung lũng Điện Biên Phủ (1953)|dbp_valley_aerial.jpg]

        Nguồn: Wikimedia Commons

        [LINK:5. Lá cờ "Quyết chiến quyết thắng" trên hầm De Castries|dbp_image_1.png]

        Nguồn: Wikimedia Commons 
      `;

  pages.push(...createMultiplePages("5. Nguồn tham khảo", references, currentId, 'content', 35));
  currentId = startId + pages.length;

  // phụ lục AI
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "PHỤ LỤC AI",
    subtitle: "",
    content: ""
  });

  const appendixAI = `
        **Công cụ hỗ trợ trong quá trình thực hiện**
        Trong quá trình xây dựng nội dung và thiết kế website cho tài liệu này, một số công cụ công nghệ đã được sử dụng nhằm hỗ trợ việc biên soạn, xử lý và trình bày thông tin.
        **Visual Studio Code (Công cụ phát triển website)**
        Về mặt phát triển giao diện và cấu trúc trang web, nhóm sử dụng Visual Studio Code để viết và chỉnh sửa mã nguồn. Công cụ này giúp quản lý các tệp mã, xây dựng bố cục trang web và kiểm tra quá trình hiển thị nội dung trong quá trình phát triển.
        **Công cụ AI hỗ trợ:**
        **ChatGPT (OpenAI)**: Hỗ trợ tóm tắt tài liệu, gợi ý cách diễn đạt và hệ thống hóa thông tin từ nhiều nguồn tư liệu lịch sử khác nhau.

        **NotebookLM (Google)**: Hỗ trợ phân tích và tổng hợp thông tin từ các tài liệu lịch sử, giúp tạo ra bản tóm tắt và các câu hỏi kiểm tra kiến thức.
        Các công cụ AI chỉ đóng vai trò hỗ trợ trong việc tổng hợp và trình bày thông tin. Nội dung lịch sử trong tài liệu vẫn được chọn lọc, kiểm tra và biên tập cẩn thận dựa trên các nguồn tư liệu đáng tin cậy trước khi đưa vào sản phẩm hoàn chỉnh.
        Việc kết hợp các công cụ công nghệ trong quá trình thực hiện đã giúp nâng cao hiệu quả xử lý tài liệu, đồng thời góp phần đảm bảo tính mạch lạc và dễ tiếp cận của nội dung khi trình bày trên nền tảng website.
      `;
  pages.push(...createMultiplePages("PHỤ LỤC: CÔNG CỤ HỖ TRỢ", appendixAI, currentId, 'content', 35));
  currentId = startId + pages.length;

  // Trang bìa sau
  pages.push({
    id: currentId++,
    type: "cover",
    title: "Đảng lãnh đạo cuộc kháng chiến chống Pháp (1946–1954)",
    subtitle: "Tài liệu nghiên cứu - VNR202",
    author: "Nhóm 3"
  });

  return pages;
};
