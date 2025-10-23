import { createMultiplePages } from './PageUtils';

export const Part2_TheoryFoundation = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang chương - chỉ có tiêu đề
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "CHƯƠNG I",
    subtitle: "CƠ SỞ LÝ LUẬN MÁC-LÊNIN VỀ CÔNG NGHIỆP HÓA",
    content: ``
  });

  // Tất cả nội dung chương I - bao gồm cả phần giới thiệu
  const mainContent = `
        Theo quan điểm của chủ nghĩa Mác-Lênin, công nghiệp hóa là quá trình chuyển đổi từ nền kinh tế nông nghiệp lạc hậu sang nền kinh tế công nghiệp tiên tiến, với việc phát triển công nghiệp nặng làm nền tảng.

        Karl Marx đã chỉ ra rằng công nghiệp hóa không chỉ là sự thay đổi về kỹ thuật mà còn là cuộc cách mạng về quan hệ sản xuất và cấu trúc xã hội.

        Lênin bổ sung quan điểm về sự cần thiết của công nghiệp hóa trong điều kiện của các nước có nền kinh tế lạc hậu, nhấn mạnh vai trò của Nhà nước trong việc chỉ đạo quá trình này.
        Công nghiệp hóa theo quan điểm Mác-Lênin có những đặc điểm cơ bản:

        • Thay đổi cơ cấu kinh tế: Từ nông nghiệp sang công nghiệp

        Việc chuyển đổi này không chỉ đơn thuần là thay đổi tỷ trọng các ngành trong cơ cấu kinh tế
        mà còn là sự biến đổi căn bản về phương thức sản xuất.
        Từ sản xuất nông nghiệp nhỏ lẻ, phân tán sang sản xuất công nghiệp tập trung, quy mô lớn với năng suất cao.

        • Nâng cao năng suất lao động: Thông qua ứng dụng khoa học kỹ thuật

        Marx đã chỉ ra rằng năng suất lao động là yếu tố quyết định sự phát triển của xã hội.
        Trong quá trình công nghiệp hóa, việc ứng dụng khoa học kỹ thuật vào sản xuất
        giúp nâng cao năng suất lao động một cách đáng kể.

        [IMAGE:industrial-revolution.jpg|Hình 1.1: Quá trình công nghiệp hóa thay đổi phương thức sản xuất]

        • Phát triển lực lượng sản xuất: Máy móc, thiết bị hiện đại

        Lực lượng sản xuất bao gồm con người và tư liệu sản xuất.
        Trong đó, tư liệu sản xuất (máy móc, thiết bị, công nghệ) đóng vai trò ngày càng quan trọng
        trong việc tạo ra của cải vật chất.

        • Hình thành giai cấp công nhân: Lực lượng xã hội tiên tiến

        Giai cấp công nhân là sản phẩm của quá trình công nghiệp hóa.
        Đây là lực lượng xã hội tiên tiến, có tổ chức, có ý thức cách mạng cao
        và là động lực chính của sự phát triển xã hội.

        [IMAGE:working-class.jpg|Hình 1.2: Giai cấp công nhân - động lực của công nghiệp hóa]

        • Đô thị hóa: Tập trung dân cư và hoạt động kinh tế

        Quá trình công nghiệp hóa đi đôi với đô thị hóa.
        Các thành phố công nghiệp ra đời và phát triển, thu hút dân cư từ nông thôn,
        tạo thành các trung tâm kinh tế - xã hội lớn.

        Quá trình này phải đảm bảo sự phát triển hài hòa giữa các ngành, các vùng
        và phục vụ lợi ích của nhân dân. Không được hy sinh môi trường và phúc lợi xã hội
        để đổi lấy tăng trưởng kinh tế đơn thuần.

        NGUYÊN LÝ PHÁT TRIỂN CÔNG NGHIỆP THEO MÁC-LÊNIN:

        1. Nguyên lý ưu tiên phát triển công nghiệp nặng
        Theo Lênin, để xây dựng nền kinh tế độc lập, tự chủ, cần ưu tiên phát triển công nghiệp nặng làm nền tảng. Công nghiệp nặng sản xuất tư liệu sản xuất cho các ngành khác.

        2. Nguyên lý phát triển có kế hoạch
        Khác với kinh tế thị trường tự do, công nghiệp hóa xã hội chủ nghĩa được thực hiện theo kế hoạch tổng thể, đảm bảo sự phối hợp hài hòa giữa các ngành, các vùng.

        3. Nguyên lý dựa vào nội lực chủ yếu
        Mặc dù có thể học hỏi kinh nghiệm và hợp tác quốc tế, nhưng cần dựa vào nội lực chủ yếu, phát huy tiềm năng, lợi thế của đất nước.

        4. Nguyên lý gắn với cách mạng khoa học - công nghệ
        Công nghiệp hóa hiện đại phải gắn liền với việc nắm bắt và ứng dụng những thành tựu khoa học - công nghệ tiên tiến.
      `;

  pages.push(...createMultiplePages("Chương I: Cơ sở lý thuyết", mainContent, currentId));

  return pages;
};