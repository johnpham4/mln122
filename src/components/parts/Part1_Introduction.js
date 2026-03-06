import { createMultiplePages } from './PageUtils';

export const Part1_Introduction = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang bìa
  pages.push({
    id: currentId++,
    type: "cover",
    title: "Đảng lãnh đạo cuộc kháng chiến chống Pháp (1946–1954)",
    subtitle: "Tài liệu nghiên cứu - VNR202",
    author: "Nhóm 5"
  });

  // Mục lục
  const tocContent = `
1. Mở đầu ......................................................... 3

2. Kháng chiến chống Pháp (1946–1950) .............................. 5

\u00A0\u00A0\u00A0\u00A0• Cuộc kháng chiến toàn diện ...................................... 5
\u00A0\u00A0\u00A0\u00A0• Chiến dịch Việt Bắc thu-đông 1947 .............................. 6
\u00A0\u00A0\u00A0\u00A0• Bước ngoặt 1949 – Chiến dịch Biên giới 1950 ................... 7

3. Tăng tốc kháng chiến đến thắng lợi (1951–1954) ................. 9

\u00A0\u00A0\u00A0\u00A0• Đại hội đại biểu toàn quốc lần II .............................. 9
\u00A0\u00A0\u00A0\u00A0• Chiến dịch Hòa Bình và Tây Bắc ................................ 10
\u00A0\u00A0\u00A0\u00A0• Chiến dịch Điện Biên Phủ (1954) ................................ 12

4. Kết luận chung .................................................. 14

5. Nguồn tham khảo ................................................ 16
      `;

  pages.push(...createMultiplePages("MỤC LỤC", tocContent, currentId, 'content', 26));

  return pages;
};
