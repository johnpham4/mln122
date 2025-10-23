import { createMultiplePages } from './PageUtils';

export const Part1_Introduction = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang bìa
  pages.push({
    id: currentId++,
    type: "cover",
    title: "CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA VÀ HỘI NHẬP KINH TẾ QUỐC TẾ CỦA VIỆT NAM",
    subtitle: "Làm thế nào để Việt Nam công nghiệp hóa theo hướng xanh - thông minh - sáng tạo?",
    author: "Nghiên cứu về Kinh tế Chính trị Mác-Lênin"
  });

  // Mục lục
  const tocContent = `
        Chương I: Cơ sở lý luận Mác-Lênin về công nghiệp hóa..................3

        Chương II: Thực trạng công nghiệp hóa Việt Nam.........................5

        Chương III: Hội nhập kinh tế quốc tế - Cơ hội và thách thức...........7

        Chương IV: Công nghiệp hóa xanh - Xu hướng tất yếu..................9

        Chương V: Công nghiệp hóa thông minh và sáng tạo....................11

        Chương VI: Giải pháp và định hướng phát triển........................13

        Kết luận và kiến nghị.................................................15
      `;

  pages.push(...createMultiplePages("MỤC LỤC", tocContent, currentId));

  return pages;
};