import { createMultiplePages } from './PageUtils';

export const Part2_TheoryFoundation = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang chương
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "1. Công nghiệp hóa, hiện đại hóa ở Việt Nam",
    subtitle: "",
    content: ``
  });

  // 1.1. Khái quát về cách mạng công nghiệp và công nghiệp hóa
  const section1_1 = `
        **1.1. Khái quát về cách mạng công nghiệp và công nghiệp hóa**

        **1.1.1. Khái quát về cách mạng công nghiệp**

        Trong giáo trình kinh tế chính trị Mác - Lênin có nói: "Cách mạng công nghiệp là những bước phát triển nhảy vọt về chất trình độ của tư liệu lao động trên cơ sở những phát minh đột phá về kỹ thuật và công nghệ trong quá trình phát triển của nhân loại kéo theo sự thay đổi căn bản về phân công lao động xã hội cũng như tạo bước phát triển năng suất lao động cao hơn hẳn nhờ áp dụng một cách phổ biến những tính năng mới trong kỹ thuật – công nghệ đó vào đời sống xã hội"

        LỊCH SỬ CÁCH MẠNG CÔNG NGHIỆP:

        1. Cách mạng công nghiệp lần thứ nhất (thế kỷ XVIII đến giữa thế kỷ XIX):
        • Khởi phát ở Anh
        • Diễn ra trước hết trong lĩnh vực dệt vải
        • Nội dung cơ bản là chuyển từ lao động thủ công sang lao động sử dụng máy móc, thực hiện cơ giới hóa sản xuất bằng việc sử dụng năng lượng nước và hơi nước

        [IMAGE:nhamaydetAnh.png|Nhà máy dệt cơ giới hóa ở Anh trong thời kỳ Cách mạng công nghiệp lần thứ nhất]

        2. Cách mạng công nghiệp lần thứ hai (nửa cuối thế kỷ XIX đến đầu thế kỷ XX):
        • Nội dung của cách mạng công nghiệp lần thứ hai thể hiện ở việc chuyển từ cơ khí sang điện – cơ khí, mở đầu cho thời kỳ tự động hóa cục bộ trong sản xuất.
        • Đây là giai đoạn chứng kiến sự ra đời của điện năng, động cơ đốt trong, dây chuyền sản xuất hàng loạt, và sự bùng nổ của các ngành công nghiệp nặng như luyện kim, hóa chất, cơ khí chế tạo, và giao thông vận tải.

        [IMAGE:LoLucyFurnace.png|Lò Lucy Furnace của Carnegie Steel Company (Cuối thế kỷ 19, khoảng năm 1900) Một trong những lò luyện gang hiện đại của Carnegie Steel Company tại Pittsburgh (Mỹ), tiêu biểu cho Cách mạng công nghiệp lần thứ hai (nửa cuối thế kỷ XIX – đầu thế kỷ XX).]

        3. Cách mạng công nghiệp lần thứ ba (đầu thập niên 60 đến cuối thế kỷ XX):
        • Đặc trưng: Sự xuất hiện công nghệ thông tin, tự động hóa sản xuất

        [IMAGE:Robot.png|Robot Unimate của George Devol – robot công nghiệp đầu tiên trên thế giới được sử dụng trong dây chuyền sản xuất ô tô (General Motors, Hoa Kỳ, năm 1961).]

        4. Cách mạng công nghiệp lần thứ tư (2010s - đang diễn ra):
        • Được đề cập lần đầu tiên tại hội chơi triển lãm công nghệ Hannover (CHLB Đức) năm 2011 và được chính phủ Đức đưa vào “kế hoạch hành động chiến lược công nghệ cao” năm 2012
        • Đặc trưng: Sự xuất hiện của trí tuệ nhân tạo, big data, in 3D...

        [IMAGE:LaprapOto.png|Dây chuyền lắp ráp ô tô tại nhà máy của Công ty cổ phần Ô tô Trường Hải (Thaco) trong Khu kinh tế mở Chu Lai, huyện Núi Thành, tỉnh Quảng Nam]


        **Vai trò của cách mạng công nghiệp đối với phát triển:**

        1. Thúc đẩy sự phát triển của lực lượng sản xuất:
        Tác động to lớn đến lực lượng sản xuất, cấu trúc và vai trò của các nhân tố. Các cuộc cách mạng công nghiệp tạo ra những bước nhảy vọt về năng suất lao động, mở ra những khả năng sản xuất mới.

        2. Thúc đẩy hoàn thiện quan hệ sản xuất:
        Phát triển lực lượng sản xuất tất yếu dẫn đến điều chỉnh, hoàn thiện quan hệ sản xuất cho phù hợp với trình độ phát triển mới.

        3. Thúc đẩy đổi mới phương thức quản trị phát triển:
        Thay đổi phương thức quản trị, điều hành của chính phủ, hình thành chính phủ điện tử, tạo môi trường thuận lợi cho phát triển.


        1.1.2. CÔNG NGHIỆP HÓA VÀ CÁC MÔ HÌNH CÔNG NGHIỆP HÓA TRÊN THẾ GIỚI

        **Khái niệm công nghiệp hóa:**

        Trong giáo trình kinh tế chính trị Mác - Lênin có nói: "Công nghiệp hóa là quá trình chuyển đổi nền sản xuất xã hội từ dựa trên lao động thủ công là chính sang nền sản xuất xã hội chủ yếu dựa trên lao động máy móc nhằm tạo ra năng suất lao động xã hội cao"


        CÁC MÔ HÌNH CÔNG NGHIỆP HÓA TIÊU BIỂU TRÊN THẾ GIỚI:

        1. Mô hình công nghiệp hóa cổ điển (Giữa TK XVIII - 60 đến 80 năm):
        • Gắn liền với cách mạng công nghiệp lần thứ nhất
        • Bắt đầu từ công nghiệp nhẹ
        • Điển hình: Anh, Pháp, Đức

        [IMAGE:Nhamay.png|Cre: Công nghiệp hóa ở Việt Nam và quá trình phát triển kinh tế xã hội (moit.gov.vn)]

        2. Mô hình công nghiệp hóa kiểu Liên Xô (cũ) (1930s):
        • Ưu tiên phát triển công nghiệp nặng
        • Xây dựng cơ sở vật chất – kỹ thuật to lớn trong thời gian ngắn
        • Do Nhà nước tập trung chỉ đạo theo kế hoạch hóa tập trung
        • Hạn chế: Thiếu cân đối, bỏ qua nhu cầu tiêu dùng của nhân dân

        3. Mô hình công nghiệp hóa của Nhật Bản và các nước công nghiệp mới (NICs) (1970s đến nay - 20 đến 30 năm):
        • Đẩy mạnh xuất khẩu, thu hút nguồn lực nước ngoài
        • Mô hình rút ngắn (20-30 năm)
        • Chủ thể: tư nhân, Nhà nước tạo môi trường thuận lợi
        • Đầu tư mạnh vào giáo dục và đào tạo nguồn nhân lực
        • Điển hình: Nhật Bản, Hàn Quốc, Singapore, Đài Loan, Hồng Kông
      `;

  pages.push(...createMultiplePages("1.1. Khái quát về cách mạng công nghiệp", section1_1, currentId));
  currentId = startId + pages.length;

  // 1.2. Tính tất yếu khách quan và nội dung của công nghiệp hóa, hiện đại hóa ở Việt Nam
  const section1_2 = `
        1.2. TÍNH TẤT YẾU KHÁCH QUAN VÀ NỘI DUNG CỦA CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA Ở VIỆT NAM

        1.2.1. TÍNH TẤT YẾU CỦA CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA Ở VIỆT NAMs
        KHÁI NIỆM CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA:

        Trong giáo trình kinh tế chính trị Mác - Lênin có nói: "Công nghiệp hóa là quá trình chuyển đổi căn bản, toàn diện các hoạt động sản xuất kinh doanh, dịch vụ và quản lý kinh tế - xã hội, từ sử dụng sức lao động thử công là chính sang sử dụng một cách phổ biến sức lao động với công nghệ, phương tiện, phương pháp tiên tiến hiện đại, dựa trên sự phát triển của công nghiệp và tiến bộ khoa học công nghệ nhằm tạo ra năng suất lao động xã hội cao"

        ĐẶC TRƯNG CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA Ở VIỆT NAM:

        • Công nghiệp hóa, hiện đại hóa theo định hướng xã hội chủ nghĩa:
        Vì mục tiêu "dân giàu, nước mạnh, dân chủ, công bằng, văn minh". Đặt con người ở vị trí trung tâm, vì lợi ích của nhân dân lao động.

        • Công nghiệp hóa, hiện đại hóa gắn liền với phát triển kinh tế tri thức:
        Phát huy vai trò của tri thức, khoa học công nghệ, đổi mới sáng tạo. Chú trọng phát triển nguồn nhân lực chất lượng cao.

        • Công nghiệp hóa, hiện đại hóa trong điều kiện kinh tế thị trường định hướng xã hội chủ nghĩa:
        Kết hợp vai trò điều tiết của thị trường với vai trò quản lý của Nhà nước. Phát huy vai trò của các thành phần kinh tế.

        • Công nghiệp hóa, hiện đại hóa trong bối cảnh toàn cầu hóa kinh tế:
        Chủ động, tích cực hội nhập quốc tế. Kết hợp nguồn lực trong nước và nước ngoài. Tham gia chuỗi giá trị toàn cầu nhưng giữ vững độc lập, tự chủ.


        1.2.2. NỘI DUNG CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA Ở VIỆT NAM

        1. TẠO LẬP NHỮNG ĐIỀU KIỆN để có thể thực hiện chuyển đổi:
        Từ nền sản xuất – xã hội lạc hậu sang nền sản xuất – xã hội tiến bộ. Đây là nội dung quan trọng hàng đầu, bao gồm:
        • Cơ sở vật chất - kỹ thuật
        • Nguồn nhân lực chất lượng cao
        • Thể chế kinh tế đồng bộ, hiện đại
        • Hạ tầng kinh tế - xã hội
        • Môi trường đầu tư kinh doanh thuận lợi

        2. THỰC HIỆN CÁC NHIỆM VỤ để chuyển đổi nền sản xuất – xã hội:
        Cụ thể:

        • Đẩy mạnh ứng dụng thành tựu của khoa học, công nghệ mới, hiện đại:
        - Tăng cường đầu tư cho R&D
        - Chuyển giao, tiếp thu công nghệ tiên tiến
        - Ứng dụng công nghệ thông tin, AI vào sản xuất và quản lý
        - Phát triển công nghiệp công nghệ cao

        • Chuyển đổi cơ cấu kinh tế theo hướng hiện đại, hợp lý và hiệu quả:
        - Tăng tỷ trọng công nghiệp, dịch vụ
        - Phát triển công nghiệp chế biến, chế tạo có giá trị gia tăng cao
        - Chuyển dịch cơ cấu nội bộ từng ngành theo hướng hiện đại
        - Hình thành các ngành công nghiệp mũi nhọn

        • Từng bước hoàn thiện quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất:
        - Hoàn thiện thể chế kinh tế thị trường định hướng XHCN
        - Phát triển đồng bộ các loại hình sở hữu, các thành phần kinh tế
        - Cải cách hành chính, tạo môi trường kinh doanh thuận lợi
        - Xây dựng hệ thống pháp luật đồng bộ, hiện đại

        • Sẵn sàng thích ứng với tác động của cách mạng công nghiệp 4.0:
        - Phát triển kinh tế số, xã hội số, chính phủ số
        - Đào tạo nguồn nhân lực đáp ứng yêu cầu CMCN 4.0
        - Ứng dụng công nghệ mới như AI, IoT, Big Data, blockchain
        - Chuyển đổi số toàn diện trong doanh nghiệp và xã hội

        [IMAGE:nhamay2.png|Cre: Công nghiệp hóa là gì? Tác động của quá trình công nghiệp hóa ở nước ta (luatvietnam.vn)]
      `;

  pages.push(...createMultiplePages("1.2. Tính tất yếu và nội dung", section1_2, currentId));

  return pages;
};