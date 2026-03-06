import { createMultiplePages } from './PageUtils';

export const Part2_TheoryFoundation = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang chương
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "ĐẢNG LÃNH ĐẠO CUỘC KHÁNG CHIẾN CHỐNG PHÁP (1946–1954)",
    subtitle: "",
    content: ``
  });

  // 1. Mở đầu
  const section1 = `
        **1. MỞ ĐẦU**

        Cuối Thế chiến II, Nhật đầu hàng (8/1945) tạo cơ hội cho Việt Minh giành chính quyền tại Hà Nội, Bác Hồ tuyên bố độc lập ngày 2/9/1945. Tuy nhiên Pháp trở lại Đông Dương, chiếm lại Nam Bộ và tìm cách khôi phục quyền cai trị, dẫn đến tình thế "hai Việt Nam" – miền Bắc do Việt Minh kiểm soát và miền Nam do chính quyền thân Pháp nắm giữ.

        Tháng 3/1946, Pháp và Hồ Chí Minh ký hiệp định sơ bộ tại Paris, hứa trao cho Việt Nam vị thế "liên bang tự do" trong Liên hiệp Pháp nhưng thực chất vẫn đòi khôi phục thực dân.

        Khi Pháp phớt lờ cam kết, ngày 23/11/1946 chúng nã pháo Hà Nội, gây thương vong lớn; ngay sau đó quân dân Việt Nam đã đứng lên kháng chiến (bắt đầu được tính từ chiến tranh bùng phát ở Hà Nội tháng 12/1946). Chính trong hoàn cảnh khó khăn này, Đảng ta đã phát động phong trào toàn dân kháng chiến.

        Ngày 19/12/1946, Chủ tịch Hồ Chí Minh ra **"Lời kêu gọi toàn quốc kháng chiến"**: "Không! Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước!… Hỡi đồng bào toàn quốc!… Hễ là người Việt Nam thì phải đoàn kết lại đánh thực dân Pháp, cứu nước!".
      `;

  pages.push(...createMultiplePages("1. Mở đầu", section1, currentId));
  currentId = startId + pages.length;

  // 2. Kháng chiến chống Pháp (1946–1950)
  const section2 = `
        **2. KHÁNG CHIẾN CHỐNG PHÁP (1946–1950)**

        Sau khi lời kêu gọi được công bố, cả nước bước vào cuộc kháng chiến toàn diện. Đảng đặt nhiệm vụ trọng tâm là **"toàn dân, toàn diện, lâu dài"** đánh đuổi giặc Pháp. Lực lượng vũ trang nhân dân được tổ chức thành ba chiến khu (Việt Bắc, Việt Trung, Việt Nam) cùng hệ thống chính quyền kháng chiến ở nông thôn và đô thị.

        Đảng Cộng sản Đông Dương phát động phong trào tự lực cánh sinh, phát huy sản xuất để nuôi quân, củng cố hậu phương. Triển khai kháng chiến, cán bộ cốt cán (Bác Hồ, Tổng Tư lệnh Võ Nguyên Giáp, Trường Chinh…) chỉ đạo liên tục từ chiến trường đến chiến khu.

        Trong giai đoạn 1947–1950, ta chủ yếu củng cố căn cứ địa và tiến hành phản công nhỏ lẻ. Tiêu biểu là **Chiến dịch Việt Bắc thu-đông 1947**, khi Pháp huy động gần 10.000 quân áp sát cơ quan đầu não tại Cao – Bắc – Lạng. Quân ta dưới quyền Chỉ huy trưởng Giáp đã tổ chức đánh địch rút lui, tiêu hao sinh lực đối phương, bảo vệ thành công căn cứ Việt Bắc. Đồng thời, kháng chiến ở đồng bằng Bắc Bộ tiếp diễn dưới hình thức chiến tranh du kích.

        **Bước ngoặt 1949 – Chiến dịch Biên giới 1950:** Năm 1949 chứng kiến bước ngoặt quan trọng: Cách mạng Trung Quốc thành công (10/1949) và Liên Xô, Trung Quốc lần lượt công nhận chính thể Việt Nam Dân chủ Cộng hòa (Trung Quốc ngày 1/10/1949, Liên Xô ngày 18/1/1950). Sự kiện này giúp ta có thêm viện trợ quân sự, chính trị.

        Năm 1950, Chủ tịch Bảo Đại trở về Việt Nam công bố thành lập "Quốc gia Việt Nam" bù nhìn, nhưng không lôi kéo được nhân tâm.

        Ngày 16/9/1950, Quân đội ta mở **Chiến dịch Biên giới thu-đông 1950**. Chiến dịch kéo dài 29 ngày đêm đã giải vây căn cứ Việt Bắc, phá tan phòng tuyến Pháp ở các cứ điểm Cao Bằng – Lạng Sơn, mở thông biên giới với Trung Quốc nhận viện trợ. Chiến thắng Biên giới 1950 là bước chuyển mình đưa kháng chiến ta từ thế giữ cự lâu dài sang chủ động tiến công.
      `;

  pages.push(...createMultiplePages("2. Kháng chiến chống Pháp (1946–1950)", section2, currentId));
  currentId = startId + pages.length;

  // 3. Tăng tốc kháng chiến đến thắng lợi (1951–1954)
  const section3 = `
        **3. TĂNG TỐC KHÁNG CHIẾN ĐẾN THẮNG LỢI (1951–1954)**

        **Đại hội đại biểu toàn quốc lần II:** Đầu năm 1951, hoàn cảnh mới trên chiến trường (Trung Quốc giúp, Pháp mở chiến dịch quy mô) đã được Đảng thảo luận. Từ ngày 11 đến 19/2/1951, Đại hội đại biểu toàn quốc lần II họp ở căn cứ Việt Bắc (Tuyên Quang). Đại hội II thu hút 158 đại biểu chính thức, đại diện cho 766.349 đảng viên.

        Dưới sự chủ trì của Chủ tịch Hồ Chí Minh, Đại hội xác định đối tượng chiến đấu: "đế quốc xâm lược và phong kiến" trên miền Bắc, cùng "đế quốc Mỹ" ở miền Nam (gây rối). Đại hội đã quyết định đổi tên Đảng Cộng sản Đông Dương thành **Đảng Lao động Việt Nam** và cho phép Đảng hoạt động công khai trở lại.

        Tại đại hội này, Trường Chinh báo cáo chính trị khẳng định nhiệm vụ của kháng chiến: **"đánh đuổi đế quốc xâm lược, giành độc lập và thống nhất hoàn toàn cho dân tộc, xóa bỏ tàn tích phong kiến… làm cho người cày có ruộng, phát triển chế độ dân chủ nhân dân, tạo cơ sở cho chủ nghĩa xã hội ở Việt Nam"**.

        **Chiến dịch Hòa Bình và Tây Bắc:** Các kế hoạch quân sự trọng điểm được Đảng Bộ Tổng chỉ huy và Chính phủ triển khai. Từ cuối 1951 đến đầu 1952, ta mở các chiến dịch tiêu biểu như **Hòa Bình (12/1951–2/1952)**. Mục tiêu của Hòa Bình là tiêu diệt lực lượng Pháp chiếm đóng Hòa Bình, bẻ gãy tuyến phòng ngự Sông Đà, đồng thời tạo điều kiện đẩy mạnh du kích xuống đồng bằng Bắc Bộ.

        Theo lịch sử, "Chiến dịch Hòa Bình… nhằm tiêu diệt sinh lực địch, đánh bại kế hoạch chiếm đóng Hòa Bình của Pháp, phá vỡ phòng tuyến Sông Đà và tạo điều kiện phát triển chiến tranh du kích ở đồng bằng Bắc Bộ". Sau gần 3 tháng chiến đấu gian khổ, ta giành thắng lợi, buộc quân Pháp phải rút lui.

        Tiếp đó năm 1952, quân ta mở chiến dịch quy mô tại **Tây Bắc**, tiêu diệt sinh lực địch, phá tan kế hoạch chia cắt nước ta của Pháp tại vùng dân tộc Thái. Song song đó, nhiều trận đánh ác liệt liên tục diễn ra ở trung du, như chiến dịch Tây Bắc và đòn lửa đạn vào các cứ điểm đông dương – quốc lộ. Việc phối hợp tác chiến giữa các chiến khu ngày càng nhịp nhàng.

        Về chính trị – dân sinh, sau Đại hội II, Đảng tổ chức chỉnh đốn nội bộ Đảng và quân đội, tăng cường giáo dục lý luận, thi đua sản xuất, chuẩn bị mặt trận hậu phương. Nhân dân tích cực gia tăng sản xuất lương thực, công trường, trường học ở khắp nơi hoạt động bình thường, góp phần cung cấp nhu cầu chiến đấu.

        Đặc biệt, Ban Chấp hành Trung ương khóa II đã tiến hành cuộc **cải cách ruộng đất** từng bước ở vùng căn cứ, nhằm giải quyết mâu thuẫn ruộng đất và tranh thủ nhân dân các tỉnh Bắc Bộ. Đến cuối năm 1953, chính sách này được hoàn thành về cơ bản, tạo sự đồng thuận trong quần chúng nông thôn.

        **Chiến dịch Điện Biên Phủ (1954):** Đến năm 1953, trước âm mưu của Tướng Navarre gom quân, biến Điện Biên Phủ thành "điểm quyết chiến" của địch, Bộ Chính trị chỉ đạo chuyển hướng tác chiến. Từ Đông Xuân 1953–1954, Quân đội ta mở rộng chiến dịch phối hợp.

        Đỉnh cao là **Chiến dịch Điện Biên Phủ (3–5/1954)**. Trận này ta huy động tổng lực tiêu diệt hơn vạn quân Pháp. Quân ta đặt đại liên bắn cháy hầm chỉ huy, cuối cùng Trung đoàn 316 treo lá cờ chiến thắng trên hầm chỉ huy De Castries. Thắng lợi vang dội này đã kết thúc kháng chiến chống Pháp.

        [IMAGE:dbp_image_1.png|Lực lượng Việt Minh áp giải quân Pháp bị bắt sau chiến thắng Điện Biên Phủ (1954)]
      `;

  pages.push(...createMultiplePages("3. Tăng tốc kháng chiến (1951–1954)", section3, currentId));

  return pages;
};
