// Utility functions để chia trang tự động - Hỗ trợ hình ảnh
export const splitContentIntoPages = (content, maxLines = 20) => {
  if (!content) {
    return [content];
  }

  // Tách thành các dòng
  const lines = content.split('\n');

  // Nếu ít dòng, không cần chia
  if (lines.length <= maxLines) {
    return [content];
  }

  const pages = [];
  let currentPageLines = [];
  let currentLineCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Kiểm tra nếu là hình ảnh (format đặc biệt)
    if (line.includes('[IMAGE:')) {
      // Hình ảnh tốn 8 dòng (hình + chú thích + khoảng trắng)
      const imageLines = 8;

      // Nếu thêm hình vào trang hiện tại sẽ quá, tạo trang mới
      if (currentLineCount + imageLines > maxLines && currentPageLines.length > 0) {
        pages.push(currentPageLines.join('\n'));
        currentPageLines = [line];
        currentLineCount = imageLines;
      } else {
        currentPageLines.push(line);
        currentLineCount += imageLines;
      }
    } else {
      // Dòng text thông thường tốn 1 dòng
      if (currentLineCount + 1 > maxLines && currentPageLines.length > 0) {
        pages.push(currentPageLines.join('\n'));
        currentPageLines = [line];
        currentLineCount = 1;
      } else {
        currentPageLines.push(line);
        currentLineCount += 1;
      }
    }
  }

  // Thêm trang cuối
  if (currentPageLines.length > 0) {
    pages.push(currentPageLines.join('\n'));
  }

  return pages;
};// Tạo nhiều trang từ nội dung dài
export const createMultiplePages = (title, content, startId, type = 'content') => {
  const contentPages = splitContentIntoPages(content, 20); // 20 dòng mỗi trang - đơn giản và ổn định

  return contentPages.map((pageContent, index) => ({
    id: startId + index,
    type: type,
    title: index === 0 ? title : `${title} (tiếp)`,
    content: pageContent,
    isPartial: contentPages.length > 1,
    partInfo: contentPages.length > 1 ? `${index + 1}/${contentPages.length}` : null
  }));
};