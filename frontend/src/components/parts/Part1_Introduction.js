import { createMultiplePages } from './PageUtils';

export const Part1_Introduction = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang bìa
  pages.push({
    id: currentId++,
    type: "cover",
    title: "Chương 6: Công nghiệp hóa, hiện đại hóa và hội nhập kinh tế quốc tế của Việt Nam",
    subtitle: "Giáo trình Kinh tế chính trị Mác – Lênin",
    author: "Bộ Giáo dục và Đào tạo - Năm 2019"
  });

  // Mục lục
  const tocContent = `
1. Công nghiệp hóa, hiện đại hóa ở Việt Nam .......................... 3

\u00A0\u00A0\u00A0\u00A01.1. Khái quát về cách mạng công nghiệp và công nghiệp hóa ......... 3
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A01.1.1. Khái quát về cách mạng công nghiệp .................... 3
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A01.1.2. Công nghiệp hóa và các mô hình CNH trên thế giới ...... 5

\u00A0\u00A0\u00A0\u00A01.2. Tính tất yếu khách quan và nội dung của CNH, HĐH ở VN ......... 7
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A01.2.1. Tính tất yếu của CNH, HĐH ở Việt Nam .................. 7
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A01.2.2. Nội dung công nghiệp hóa, hiện đại hóa ở Việt Nam ..... 9

2. Hội nhập kinh tế quốc tế ở Việt Nam ............................. 12

\u00A0\u00A0\u00A0\u00A02.1. Khái niệm và nội dung hội nhập kinh tế quốc tế ............... 12
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.1.1. Khái niệm và sự cần thiết khách quan ................. 12
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.1.2. Tính tất yếu khách quan của hội nhập ................. 13
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.1.3. Nội dung hội nhập kinh tế quốc tế .................... 14

\u00A0\u00A0\u00A0\u00A02.2. Tác động của hội nhập kinh tế quốc tế ........................ 16
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.2.1. Tác động tích cực .................................... 16
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.2.2. Tác động tiêu cực .................................... 18

\u00A0\u00A0\u00A0\u00A02.3. Phương hướng nâng cao hiệu quả hội nhập ...................... 20
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.3.1. Nhận thức sâu sắc về thời cơ và thách thức ........... 20
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.3.2. Xây dựng chiến lược và lộ trình phù hợp .............. 21
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.3.3. Tích cực, chủ động tham gia và thực hiện cam kết ..... 22
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.3.4. Hoàn thiện thể chế kinh tế và pháp luật .............. 23
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.3.5. Nâng cao năng lực cạnh tranh quốc tế ................. 24
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.3.6. Xây dựng nền kinh tế độc lập, tự chủ ................. 25
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.3.7. Biện pháp xây dựng nền kinh tế độc lập tự chủ ........ 26

\u00A0\u00A0\u00A0\u00A03. Nguồn tham khảo ...................... 32
-------------------------------------------------------------------
NGUỒN THAM KHẢO:

        Sách, giáo trình chính:
        Giáo trình Kinh tế chính trị Mác – Lênin (giáo trình tập huấn năm 2019 - Bộ GDĐT)
      `;

  pages.push(...createMultiplePages("MỤC LỤC", tocContent, currentId, 'content', 26));

  return pages;
};