import { createMultiplePages } from './PageUtils';

export const Part1_Introduction = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang bìa
  pages.push({
    id: currentId++,
    type: "cover",
    title: "Đảng lãnh đạo hai cuộc kháng chiến, hoàn thành giải phóng dân tộc, thống nhất đất nước (1945 - 1975)",
    subtitle: "Tài liệu nghiên cứu - VNR202",
    author: "Nhóm 3"
  });

  // Mục lục
  const tocContent = `
**1. Mở đầu** ......................................................... 4

**2. Cuộc kháng chiến chống thực dân Pháp (1946–1950)** ................... 6
\u00A0\u00A0\u00A0\u00A02.1. Đường lối kháng chiến toàn dân, toàn diện .................................. 6
\u00A0\u00A0\u00A0\u00A02.2. Chiến dịch Việt Bắc Thu – Đông 1947 .............................. 6
\u00A0\u00A0\u00A0\u00A02.3. Bước ngoặt quốc tế và Chiến dịch Biên giới 1950 ................... 7
\u00A0\u00A0\u00A0\u00A02.4 Tài liệu lịch sử về Chiến dịch Việt Bắc Thu – Đông 1947 ........ 8
\u00A0\u00A0\u00A0\u00A02.5 Tài liệu lịch sử về Chiến dịch Biên giới Thu – Đông 1950 ........ 9


**3. Đẩy mạnh cuộc kháng chiến đến thắng lợi (1951 - 1954)** ............... 10
\u00A0\u00A0\u00A0\u00A03.1. Đại hội đại biểu toàn quốc lần thứ II của Đảng ........................... 10
\u00A0\u00A0\u00A0\u00A03.2. Chiến dịch Hòa Bình và Tây Bắc ................................ 10
\u00A0\u00A0\u00A0\u00A03.3. Chiến dịch Điện Biên Phủ (1954) ................................ 11

**4. Kết luận chung** .................................................. 13
**5. Nguồn tham khảo** ................................................ 16
**6. Phụ lục công cụ hỗ trợ** ............................................. 18
      `;

  pages.push(...createMultiplePages("MỤC LỤC", tocContent, currentId, 'content', 100));

  return pages;
};
