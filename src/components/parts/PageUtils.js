// Utility functions để chia trang tự động - Hỗ trợ hình ảnh
// Ước lượng số dòng hiển thị thực tế dựa trên số ký tự
// Trang rộng ~452px (500 - 2*24px padding), font 14px → ~55 ký tự/dòng
const estimateVisualLines = (text) => {
  const trimmed = text.trim();
  if (!trimmed) return 0.5;
  const CHARS_PER_LINE = 55;
  return Math.ceil(trimmed.length / CHARS_PER_LINE) + 0.5;
};

export const splitContentIntoPages = (content, maxVisualLines = 25) => {
  if (!content) {
    return [content];
  }

  const lines = content.split('\n');
  const pages = [];
  let currentPageLines = [];
  let currentVisualCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.includes('[IMAGE:')) {
      // Hình ảnh: max-height 300px + caption + margin ≈ 14 dòng visual
      const imageVisual = 14;

      if (currentVisualCount + imageVisual > maxVisualLines && currentPageLines.length > 0) {
        pages.push(currentPageLines.join('\n'));
        currentPageLines = [line];
        currentVisualCount = imageVisual;
      } else {
        currentPageLines.push(line);
        currentVisualCount += imageVisual;
      }
    } else {
      const lineVisual = estimateVisualLines(line);

      if (currentVisualCount + lineVisual > maxVisualLines && currentPageLines.length > 0) {
        pages.push(currentPageLines.join('\n'));
        currentPageLines = [line];
        currentVisualCount = lineVisual;
      } else {
        currentPageLines.push(line);
        currentVisualCount += lineVisual;
      }
    }
  }

  if (currentPageLines.length > 0) {
    pages.push(currentPageLines.join('\n'));
  }

  return pages.filter(page => page.trim().length > 0);
};// Tạo nhiều trang từ nội dung dài
export const createMultiplePages = (title, content, startId, type = 'content', maxVisualLines = 25) => {
  const contentPages = splitContentIntoPages(content, maxVisualLines);
  return contentPages.map((pageContent, index) => ({
    id: startId + index,
    type: type,
    title: index === 0 ? title : `${title} (tiếp)`,
    content: pageContent,
    isPartial: contentPages.length > 1,
    partInfo: contentPages.length > 1 ? `${index + 1}/${contentPages.length}` : null
  }));
};