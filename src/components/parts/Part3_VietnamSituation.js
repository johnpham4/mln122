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

        Cuộc kháng chiến chống Pháp (1946–1954) là thắng lợi vĩ đại khẳng định quyền độc lập, thống nhất của Việt Nam. Dưới sự lãnh đạo sáng suốt của Đảng Cộng sản và Chủ tịch Hồ Chí Minh, nhân dân ta đã kiên cường đánh bại giai cấp thực dân xâm lược.

        Kết thúc chiến tranh, nước ta thống nhất miền Bắc – Nam dưới chính quyền Cộng hòa dân chủ. Chiến thắng này được bạn bè thế giới ghi nhận: báo L'Humanité (Pháp) ngày 25/7/1954 đã chạy trang nhất ca ngợi kết quả kháng chiến của Việt Nam.

        Kháng chiến toàn quốc chống Pháp đã mở đầu cho giai đoạn mới của cách mạng nước ta, đặt nền móng cho thắng lợi sau này trong cuộc kháng chiến chống Mỹ.

        [IMAGE:dbp_french_prisoners.jpg|Tù binh Pháp bị áp giải sau trận Điện Biên Phủ (1954) – Nguồn: Wikimedia Commons]
      `;

  pages.push(...createMultiplePages("4. Kết luận chung", section4, currentId));
  currentId = startId + pages.length;

  // Trang riêng cho hình ảnh L'Humanité
  const imageContent = `
        [IMAGE:dbp_image_2.png|Trang nhất báo L'Humanité (25/7/1954) tán dương chiến thắng tại Đông Dương]
      `;

  pages.push(...createMultiplePages("4. Kết luận chung (tiếp)", imageContent, currentId, 'content', 20));
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
        **NGUỒN THAM KHẢO:**

        Tư liệu lịch sử được trích từ các sách báo và cơ sở dữ liệu uy tín về chiến tranh Đông Dương. Nội dung đã được vận dụng và bổ sung nhằm truyền tải mạch chuyện lịch sử đầy đủ, cụ thể.


        **HÌNH ẢNH:**

        1. Chủ tịch Hồ Chí Minh và Đại tướng Võ Nguyên Giáp (1945)
        Nguồn: Wikimedia Commons – Giap-Ho.jpg

        2. Hồ Chí Minh và Marius Moutet ký Tạm ước Việt-Pháp (1946)
        Nguồn: Wikimedia Commons – Vietnam France modus vivendi

        3. Dân công các dân tộc vận chuyển hàng ra mặt trận
        Nguồn: Wikimedia Commons

        4. Toàn cảnh thung lũng Điện Biên Phủ (1953)
        Nguồn: Wikimedia Commons

        5. Lực lượng Việt Minh áp giải quân Pháp bị bắt sau chiến thắng Điện Biên Phủ (1954)
        Nguồn: Wikimedia Commons – Victory in Battle of Dien Bien Phu

        6. Tù binh Pháp bị áp giải sau trận Điện Biên Phủ (1954)
        Nguồn: Wikimedia Commons – Dien Bien Phu 1954 French prisoners

        7. Trang nhất báo L'Humanité (25/7/1954) tán dương chiến thắng tại Đông Dương
        Nguồn: Wikimedia Commons – Huma Paix Viet Nam
      `;

  pages.push(...createMultiplePages("5. Nguồn tham khảo", references, currentId, 'content', 18));
  currentId = startId + pages.length;

  // Trang bìa sau
  pages.push({
    id: currentId++,
    type: "cover",
    title: "Đảng lãnh đạo cuộc kháng chiến chống Pháp (1946–1954)",
    subtitle: "Tài liệu nghiên cứu - VNR202",
    author: "Nhóm 5"
  });

  return pages;
};
