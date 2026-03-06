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
        **1. Mở đầu**

        Cuối Chiến tranh thế giới thứ hai, phát xít Nhật đầu hàng Đồng minh vào tháng 8 năm 1945 đã tạo ra thời cơ thuận lợi cho cách mạng Việt Nam. Dưới sự lãnh đạo của Đảng và Mặt trận Việt Minh, nhân dân ta đã tiến hành Cách mạng Tháng Tám năm 1945, giành chính quyền trên phạm vi cả nước. Ngày 2/9/1945, tại Quảng trường Ba Đình (Hà Nói), Chủ tịch Hồ Chí Minh long trọng đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa, mở ra kỷ nguyên độc lập cho dân tộc.

        Tuy nhiên, nền độc lập non trẻ của nước ta ngay lập tức phải đối mặt với nhiều khó khăn, thách thức. Thực dân Pháp với tham vọng khôi phục ách thống trị đã quay trở lại Đông Dương. Từ tháng 9/1945, quân Pháp nổ súng chiếm lại Nam Bộ và từng bước mở rộng phạm vi kiểm soát. Trước tình thế đó, Chính phủ Việt Nam chủ trương tạm thời hòa hoãn với Pháp nhằm tranh thủ thời gian củng cố lực lượng và tránh phải đối đầu quân sự khi đất nước còn nhiều khó khăn.

        Tháng 3/1946, Chính phủ Việt Nam và Pháp ký Hiệp định Sơ bộ, theo đó Pháp công nhận Việt Nam là một quốc gia tự do trong Liên hiệp Pháp. Tuy nhiên trên thực tế, thực dân Pháp vẫn tiếp tục thực hiện âm mưu tái chiếm và mở rộng chiến tranh. Nhiều hành động khiêu khích quân sự liên tiếp xảy ra tại các địa phương. Đỉnh điểm là ngày 23/11/1946, quân Pháp nổ súng tấn công Hải Phòng, gấy nhiều thương vong cho nhân dân.




        













        Trước tình hình đó, mọi nỗ lực hòa hoãn không còn hiệu quả. Ngày 19/12/1946, Chủ tịch Hồ Chí Minh ra **"Lời kêu gọi Toàn quốc kháng chiến"**, khẳng định quyết tâm bảo vệ độc lập dân tộc:

        "Không! Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ… Hễ là người Việt Nam thì phải đứng lên đánh thực dân Pháp để cứu Tổ quốc."

        Từ thời điểm này, cuộc kháng chiến chống thực dân Pháp của nhân dân Việt Nam chính thức bùng nổ, mở đầu cho cuộc đấu tranh lâu dài, gian khổ nhưng đầy anh dũng của dân tộc nhằm bảo vệ nền độc lập và chủ quyền của đất nước.
        [IMAGE:hochiminh_giap_1945.jpg|Chủ tịch Hồ Chí Minh và Đại tướng Võ Nguyên Giáp (1945)]

        
      `;

  pages.push(...createMultiplePages("MỞ ĐẦU", section1, currentId));
  currentId = startId + pages.length;

  // 2. Kháng chiến chống Pháp (1946–1950)
  const section2 = `
        **Cuộc kháng chiến chống thực dân Pháp (1946–1950)**
        **2.1. Cuộc kháng chiến toàn diện**
        Sau khi Lời kêu gọi Toàn quốc kháng chiến được công bố ngày 19/12/1946, nhân dân cả nước bước vào cuộc kháng chiến chống thực dân Pháp. Dưới sự lãnh đạo của Đảng, đường lối kháng chiến được xác định với phương châm toàn dân, toàn diện, lâu dài và tự lực cánh sinh, nhằm huy động sức mạnh của toàn dân tộc để đánh bại kẻ thù.

        Trong những năm đầu, nhiệm vụ trọng tâm là xây dựng và củng cố lực lượng kháng chiến. Các cơ quan lãnh đạo của Đảng và Chính phủ chuyển lên căn cứ địa Việt Bắc, trở thành trung tâm chỉ đạo kháng chiến. Lực lượng vũ trang nhân dân từng bước được tổ chức và phát triển, kết hợp với chiến tranh du kích rộng khắp. Nhân dân tích cực tăng gia sản xuất, bảo đảm hậu cần cho cuộc kháng chiến lâu dài.
        
        **2.2. Chiến dịch Việt Bắc Thu – Đông 1947**
        Từ năm 1947 đến năm 1950, quân và dân ta vừa củng cố căn cứ địa, vừa tiến hành nhiều hoạt động quân sự nhằm tiêu hao sinh lực địch. Tiêu biểu là **Chiến dịch Việt Bắc Thu – Đông năm 1947**, khi thực dân Pháp huy động lực lượng lớn tấn công lên căn cứ Việt Bắc với mục tiêu tiêu diệt cơ quan đầu não của cuộc kháng chiến. Tuy nhiên, quân và dân ta đã chủ động tổ chức phản công, buộc quân Pháp phải rút lui, qua đó bảo vệ vững chắc căn cứ địa cách mạng và làm thất bại âm mưu "đánh nhanh thắng nhanh" của địch.

        [IMAGE:luoc-do-chien-dich-viet-bac-thu-dong-1947.jpg|Lược đồ Chiến dịch Việt Bắc Thu-Đông 1947|width:97%;height:230px]
        **2.3. Bước ngoặt 1949 – Chiến dịch Biên giới 1950**
        Đến cuối những năm 1940, tình hình quốc tế có nhiều chuyển biến thuận lợi. Cách mạng Trung Quốc thành công năm 1949, và sau đó Trung Quốc và Liên Xô lần lượt công nhận và thiết lập quan hệ ngoại giao với Việt Nam Dân chủ Cộng hòa, tạo điều kiện quan trọng cho cuộc kháng chiến.
        Trên cơ sở đó, ngày 16/9/1950, quân đội ta mở Chiến dịch Biên giới Thu – Đông 1950 nhằm tiêu diệt sinh lực địch và phá vỡ hệ thống phòng thủ của Pháp trên tuyến biên giới Việt – Trung. Sau 29 ngày đêm chiến đấu, quân ta đã phá tan phòng tuyến Cao Bằng – Lạng Sơn và mở thông biên giới với Trung Quốc. Chiến thắng Biên giới 1950 đã đưa cuộc kháng chiến từ thế phòng ngự sang chủ động tiến công.
      `;

  pages.push(...createMultiplePages("2. CUỘC KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP", section2, currentId));
  currentId = startId + pages.length;

  // Trang 8 - Giới thiệu Chiến dịch Việt Bắc + video
  pages.push({
    id: currentId++,
    type: "content",
    title: "",
    content: `
        **2.4 Video tài liệu về Chiến dịch Việt Bắc Thu – Đông 1947**
        Để trực quan hơn về diễn biến của cuộc kháng chiến trong giai đoạn đầu, video dưới đây giới thiệu tư liệu lịch sử về Chiến dịch Việt Bắc Thu – Đông năm 1947, một chiến dịch quan trọng làm thất bại kế hoạch tấn công quy mô lớn của thực dân Pháp vào căn cứ địa Việt Bắc.
        [VIDEO:S_hDDUgXCNo| ]
        Qua những thước phim tư liệu, có thể thấy rõ sự phối hợp giữa bộ đội chủ lực và lực lượng du kích trong việc đánh trả các cuộc tiến công của quân Pháp. Thắng lợi của chiến dịch đã bảo vệ vững chắc căn cứ địa Việt Bắc và làm phá sản chiến lược “đánh nhanh thắng nhanh” của thực dân Pháp trong giai đoạn đầu cuộc kháng chiến.`
  });
  

  // Trang 9 - Video Chiến dịch Biên giới Thu – Đông 1950
  pages.push({
    id: currentId++,
    type: "content", 
    title: "",
    content: `
        **2.5 Video tài liệu về Chiến dịch Biên giới Thu – Đông 1950**
        Đoạn phim dưới đây tái hiện diễn biến của Chiến dịch Biên giới Thu – Đông 1950, một chiến dịch quan trọng của quân đội Việt Nam trong cuộc kháng chiến chống thực dân Pháp. 
        [VIDEO:UvGFxDek3zM| ]
        Qua những thước phim tư liệu, có thể thấy rõ các trận đánh quyết liệt của quân đội Việt Nam tại các cứ điểm quan trọng như Đông Khê trên tuyến Đường số 4. Chiến thắng của chiến dịch đã phá vỡ hệ thống phòng thủ của Pháp ở khu vực biên giới, mở thông biên giới Việt – Trung và tạo điều kiện để Việt Nam nhận được sự giúp đỡ từ các nước xã hội chủ nghĩa. Đồng thời, chiến thắng này giúp quân ta giành thế chủ động trên chiến trường Bắc Bộ.    
`
  });

  // 3. Tăng tốc kháng chiến đến thắng lợi (1951–1954)
  const section3 = `
        **Đẩy mạnh cuộc kháng chiến đến thắng lợi (1951 - 1954)**
        **3.1. Đại hội đại biểu toàn quốc lần II của Đảng**
        Trong bối cảnh cuộc kháng chiến chống thực dân Pháp bước vào giai đoạn mới, từ ngày 11 đến 19/2/1951, Đảng triệu tập Đại hội đại biểu toàn quốc lần thứ II tại căn cứ Việt Bắc (Tuyên Quang). Đại hội có 158 đại biểu chính thức và 53 đại biểu dự khuyết, đại diện cho khoảng 760.000 đảng viên trong cả nước.
        Đại hội quyết định đổi tên Đảng Cộng sản Đông Dương thành Đảng Lao động Việt Nam, đưa Đảng ra hoạt động công khai và xác định nhiệm vụ trung tâm của cách mạng là đánh đuổi đế quốc xâm lược, giành độc lập và thống nhất đất nước. Đại hội cũng đề ra nhiều chủ trương quan trọng nhằm củng cố lực lượng kháng chiến về chính trị, quân sự và kinh tế.
        **3.2. Các chiến dịch lớn: Hòa Bình và Tây Bắc**
        Sau Đại hội II, quân và dân ta liên tiếp mở nhiều chiến dịch lớn nhằm tiêu diệt sinh lực địch và mở rộng vùng giải phóng. Tiêu biểu là Chiến dịch Hòa Bình (12/1951 – 2/1952). Mục tiêu là phá vỡ phòng tuyến sông Đà và tiêu diệt lực lượng Pháp chiếm đóng tại Hòa Bình. Sau gần ba tháng chiến đấu, quân ta buộc quân Pháp phải rút lui, làm thất bại kế hoạch quân sự của đối phương.
        Năm 1952, quân ta tiếp tục mở Chiến dịch Tây Bắc, giải phóng nhiều vùng rộng lớn, phá vỡ âm mưu chia cắt chiến trường của Pháp. Cùng với đó, phong trào chiến tranh du kích ở đồng bằng và trung du Bắc Bộ ngày càng phát triển, tạo thế trận ngày càng có lợi cho ta.
        [IMAGE:tay-bac.jpg|Bản đồ Chiến dịch Tây Bắc (14/10 – 12/12/1952).|width:97%;height:240px]
        **3.3. Đỉnh cao: Chiến dịch Điện Biên Phủ (1954)**
        Năm 1953, thực dân Pháp dưới sự chỉ huy của tướng Navarre xây dựng tập đoàn cứ điểm Điện Biên Phủ nhằm biến nơi đây thành pháo đài quân sự mạnh nhất ở Đông Dương. Trước tình hình đó, Bộ Chính trị quyết định mở Chiến dịch Điện Biên Phủ (3–5/1954). Sau 56 ngày đêm chiến đấu quyết liệt, quân và dân ta đã tiêu diệt và bắt sống toàn bộ tập đoàn cứ điểm của Pháp, bắt sống tướng De Castries cùng nhiều sĩ quan cao cấp.
        Chiến thắng Điện Biên Phủ trở thành thắng lợi quyết định của cuộc kháng chiến chống thực dân Pháp, tạo điều kiện quan trọng để Hội nghị Genève năm 1954 đi đến việc ký kết Hiệp định Genève về chấm dứt chiến tranh, lập lại hòa bình ở Đông Dương.
        [IMAGE:dbp_image_1.png|Lá cờ “Quyết chiến quyết thắng” trên hầm De Castries|width:90%;height:220px]
        [IMAGE:bat-song-tuong-de-castries.jpg|Bắt sống tướng De Castries, chiến dịch Điện Biên Phủ toàn thắng|width:98%;height:240px]
        `;

  pages.push(...createMultiplePages("3. ĐẨY MẠNH KHÁNG CHIẾN ĐẾN THẮNG LỢI", section3, currentId));
  currentId = startId + pages.length;

  

  return pages;
};
