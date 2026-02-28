import { createMultiplePages } from './PageUtils';

export const Part1_Introduction = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang bìa
  pages.push({
    id: currentId++,
    type: "cover",
    title: "Thức giấc từ tro than: Công nghiệp xanh cho tương lai Việt Nam",
    subtitle: "Tài liệu nghiên cứu - MLN122",
    author: "Nhóm 5"
  });

  // Mục lục
  const tocContent = `
1. Công nghiệp hóa, hiện đại hóa ở Việt Nam .......................... 3

\u00A0\u00A0\u00A0\u00A01.1. Khái quát về cách mạng công nghiệp và công nghiệp hóa ......... 5
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A01.1.1. Khái quát về cách mạng công nghiệp .................... 5
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A01.1.2. Công nghiệp hóa và các mô hình CNH trên thế giới ...... 10

\u00A0\u00A0\u00A0\u00A01.2. Tính tất yếu khách quan và nội dung của CNH, HĐH ở VN ....... 14
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A01.2.1. Tính tất yếu của CNH, HĐH ở Việt Nam .................. 14
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A01.2.2. Nội dung công nghiệp hóa, hiện đại hóa ở Việt Nam ..... 16

2. Hội nhập kinh tế quốc tế ở Việt Nam ............................. 19

\u00A0\u00A0\u00A0\u00A02.1. Khái niệm và nội dung hội nhập kinh tế quốc tế ............... 19
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.1.1. Khái niệm và sự cần thiết khách quan ................. 19
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.1.2. Tính tất yếu khách quan của hội nhập ................. 20
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.1.3. Nội dung hội nhập kinh tế quốc tế .................... 21

\u00A0\u00A0\u00A0\u00A02.2. Tác động của hội nhập kinh tế quốc tế ........................ 23
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.2.1. Tác động tích cực .................................... 23
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.2.2. Tác động tiêu cực .................................... 24

\u00A0\u00A0\u00A0\u00A02.3. Phương hướng nâng cao hiệu quả hội nhập ...................... 25
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.3.1. Nhận thức sâu sắc về thời cơ và thách thức ........... 25
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.3.2. Xây dựng chiến lược và lộ trình phù hợp .............. 26
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.3.3. Tích cực, chủ động tham gia và thực hiện cam kết ..... 27
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.3.4. Hoàn thiện thể chế kinh tế và pháp luật .............. 28
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.3.5. Nâng cao năng lực cạnh tranh quốc tế ................. 29
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.3.6. Xây dựng nền kinh tế độc lập, tự chủ ................. 30
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A02.3.7. Biện pháp xây dựng nền kinh tế độc lập tự chủ ........ 31

3. Làm thế nào để Việt Nam CNH theo hướng xanh - thông minh ....... 33

4. Từ các làng nghề Việt Nam đến các nhà máy 4.0 .................. 35

5. Nguồn tham khảo ................................................. 48
      `;

  pages.push(...createMultiplePages("MỤC LỤC", tocContent, currentId, 'content', 26));

  return pages;
};