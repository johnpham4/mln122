import { createMultiplePages } from './PageUtils';

export const Part2_TheoryFoundation = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang chương
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "1. CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA Ở VIỆT NAM",
    subtitle: "",
    content: ``
  });

  // 1.1. Khái quát về cách mạng công nghiệp và công nghiệp hóa
  const section1_1 = `
        **1.1. KHÁI QUÁT VỀ CÁCH MẠNG CÔNG NGHIỆP VÀ CÔNG NGHIỆP HÓA**

        **1.1.1. Khái quát về cách mạng công nghiệp**

        Trong giáo trình kinh tế chính trị Mác - Lênin có nói: "Cách mạng công nghiệp là những bước phát triển nhảy vọt về chất trình độ của tư liệu lao động trên cơ sở những phát minh đột phá về kỹ thuật và công nghệ trong quá trình phát triển của nhân loại kéo theo sự thay đổi căn bản về phân công lao động xã hội cũng như tạo bước phát triển năng suất lao động cao hơn hẳn nhờ áp dụng một cách phổ biến những tính năng mới trong kỹ thuật – công nghệ đó vào đời sống xã hội"

        **Lịch sử cách mạng công nghiệp:**
        1) Cách mạng công nghiệp lần thứ nhất (thế kỷ XVIII đến giữa thế kỷ XIX):
        Cách mạng công nghiệp lần thứ nhất được khởi nguồn tại Anh vào khoảng thế kỷ XVIII và kéo dài đến giữa thế kỷ XIX. Đây là bước ngoặt vĩ đại trong lịch sử phát triển của nền sản xuất xã hội loài người. Cuộc cách mạng này bắt đầu từ ngành dệt vải – lĩnh vực tiêu biểu nhất của nền sản xuất thủ công thời bấy giờ. Điểm cốt lõi của nó là quá trình chuyển đổi từ lao động thủ công sang lao động sử dụng máy móc, mở đầu cho thời kỳ cơ giới hóa sản xuất. Con người đã biết khai thác và sử dụng các nguồn năng lượng mới như nước và hơi nước để vận hành máy móc, giúp tăng năng suất lao động vượt bậc, giảm sức lao động của con người, và tạo ra tiền đề cho sự phát triển mạnh mẽ của nền công nghiệp hiện đại.

        [IMAGE:nhamaydetAnh.png|Nhà máy dệt cơ giới hóa ở Anh trong thời kỳ Cách mạng công nghiệp lần thứ nhất]

        2) Cách mạng công nghiệp lần thứ hai (nửa cuối thế kỷ XIX đến đầu thế kỷ XX):
        Cách mạng công nghiệp lần thứ hai diễn ra từ nửa cuối thế kỷ XIX đến đầu thế kỷ XX, đánh dấu một bước phát triển nhảy vọt của nền sản xuất xã hội. Nếu như cuộc cách mạng công nghiệp lần thứ nhất đưa loài người bước vào thời kỳ cơ giới hóa, thì ở giai đoạn này, nhân loại chuyển từ cơ khí đơn thuần sang điện – cơ khí, mở đầu cho thời kỳ tự động hóa cục bộ trong sản xuất. Điện năng trở thành nguồn năng lượng chủ yếu, thay thế cho hơi nước, tạo điều kiện cho sự ra đời của động cơ đốt trong và dây chuyền sản xuất hàng loạt. Đây cũng là thời kỳ bùng nổ của các ngành công nghiệp nặng như luyện kim, hóa chất, cơ khí chế tạo và giao thông vận tải, góp phần đẩy nhanh tốc độ tăng trưởng kinh tế và mở rộng thị trường tư bản chủ nghĩa.

        [IMAGE:LoLucyFurnace.png|Lò Lucy Furnace của Carnegie Steel Company (Cuối thế kỷ 19, khoảng năm 1900) Một trong những lò luyện gang hiện đại của Carnegie Steel Company tại Pittsburgh (Mỹ), tiêu biểu cho Cách mạng công nghiệp lần thứ hai.]
        
        3) Cách mạng công nghiệp lần thứ ba (khoảng những năm đầu thập niên 60 của thế kỷ XX đến cuối thế kỷ XX):
        Cách mạng công nghiệp lần thứ ba bắt đầu vào khoảng đầu thập niên 60 của thế kỷ XX và kéo dài đến cuối thế kỷ này. Cuộc cách mạng này được xem là bước ngoặt quan trọng đưa loài người bước vào kỷ nguyên công nghệ thông tin và tự động hóa sản xuất. Đặc trưng nổi bật của nó là sự ra đời và phát triển mạnh mẽ của máy tính điện tử, công nghệ bán dẫn, vi mạch, và Internet, tạo điều kiện cho việc tự động hóa quy trình sản xuất trong nhiều ngành kinh tế. Nhờ đó, năng suất lao động tăng cao, chi phí sản xuất giảm, và hình thức tổ chức sản xuất – quản lý cũng trở nên linh hoạt, hiệu quả hơn.

        [IMAGE:Robot.png|Robot Unimate của George Devol – robot công nghiệp đầu tiên trên thế giới được sử dụng trong dây chuyền sản xuất ô tô (General Motors, Hoa Kỳ, năm 1961).]

        4) Cách mạng công nghiệp lần thứ tư (2010s - đang diễn ra):
        Khái niệm Cách mạng công nghiệp lần thứ tư (CMCN 4.0) được đề cập lần đầu tiên tại Hội chợ triển lãm công nghệ Hannover (CHLB Đức) năm 2011, và sau đó được chính phủ Đức chính thức đưa vào "Kế hoạch hành động chiến lược công nghệ cao" năm 2012. Cuộc cách mạng này đánh dấu bước phát triển vượt bậc của nền sản xuất hiện đại, với đặc trưng nổi bật là sự xuất hiện của các công nghệ mới có tính đột phá về chất như trí tuệ nhân tạo (AI), dữ liệu lớn (Big Data), Internet vạn vật (IoT), và công nghệ in 3D. Những công nghệ này đang làm mờ ranh giới giữa thế giới vật lý, số hóa và sinh học, tạo nên những thay đổi căn bản trong phương thức sản xuất, quản lý và tiêu dùng.

        [IMAGE:LaprapOto.png|Dây chuyền lắp ráp ô tô tại nhà máy của Công ty cổ phần Ô tô Trường Hải (Thaco) trong Khu kinh tế mở Chu Lai, huyện Núi Thành, tỉnh Quảng Nam.] 
        Dây chuyền sản xuất ô tô hiện đại, nơi robot công nghiệp và con người cùng làm việc trong môi trường tự động hóa cao. Các cánh tay robot thực hiện thao tác hàn, lắp ráp chi tiết kim loại với độ chính xác gần như tuyệt đối, được điều khiển bởi các hệ thống trí tuệ nhân tạo (AI) và cảm biến kết nối mạng (IoT)




        **Vai trò của công nghiệp hóa đối với phát triển:**
        1) Thúc đẩy sự phát triển của lực lượng sản xuất
        Các cuộc cách mạng công nghiệp có tác động vô cùng to lớn đến sự phát triển lực lượng sản xuất ở các quốc gia, đồng thời tác động mạnh mẽ tới cấu trúc và vai trò của các nhân tố trong lực lượng sản xuất xã hội
        2) Thúc đẩy hoàn thiện quan hệ sản xuất
        Các cuộc cách mạng công nghiệp tạo sự phát triển nhảy vọt về chất trong lực lượng sản xuất và phát triển này tất yếu dẫn đến điều chỉnh, phát triển và hoàn thiện quan hệ sản xuất xã hội
        3) Thúc đẩy đổi mới phương thức quản trị phát triển
        Phương thức quản trị, điều hành của chính phủ có sự thay đổi để thích ứng với sự phát triển của công nghệ mới, hình thành hệ thống tin học hóa trong quản lý và chính phủ điện tử.
        **1.1.2. Công nghiệp hóa và các mô hình công nghiệp hóa trên thế giới**
        Trong giáo trình kinh tế chính trị Mác - Lênin có nói: "Công nghiệp hóa là quá trình chuyển đổi nền sản xuất xã hội từ dựa trên lao động thủ công là chính sang nền sản xuất xã hội chủ yếu dựa trên lao động máy móc nhằm tạo ra năng suất lao động xã hội cao"
        
        
        **Các mô hình công nghiệp hóa tiêu biểu trên thế giới:**
        1) Mô hình công nghiệp hóa cổ điển (Giữa TK XVIII (60 - 80 năm)):
        Quá trình công nghiệp hoá lần thứ nhất gắn liền với cuộc Cách mạng công nghiệp lần thứ nhất, bắt đầu từ những ngành công nghiệp nhẹ – những lĩnh vực đòi hỏi ít vốn đầu tư nhưng mang lại lợi nhuận cao, tiêu biểu như ngành dệt may, chế biến thực phẩm, đồ gốm và thủ công mỹ nghệ. Đây là giai đoạn khởi đầu cho sự chuyển đổi từ nền sản xuất thủ công sang sản xuất cơ giới hóa, tạo tiền đề cho sự hình thành và phát triển của các ngành công nghiệp nặng sau này. Quá trình công nghiệp hóa ở giai đoạn này diễn ra trong thời gian tương đối dài, thường kéo dài từ 60 đến 80 năm, phản ánh tính chất tuần tự và tích lũy dần về vốn, kỹ thuật và kinh nghiệm quản lý sản xuất.
        [IMAGE:nhamaydetkhung.png|Máy dệt bằng khung dệt điện được Edmund Cartwright (1743-1823) phát minh vào năm 1785.]

        2) Mô hình công nghiệp hóa kiểu Liên Xô (cũ) (1930s - ở Liên Xô và các nước XHCN):
        Quá trình công nghiệp hoá lần thứ hai bắt đầu ở Liên Xô (cũ) với xu hướng ưu tiên phát triển công nghiệp nặng, coi đây là nền tảng chủ yếu để thúc đẩy sự phát triển của toàn bộ nền kinh tế quốc dân. Nhờ tập trung nguồn lực vào các ngành như luyện kim, cơ khí chế tạo, năng lượng và hoá chất, mô hình công nghiệp hoá kiểu Liên Xô đã cho phép trong một thời gian ngắn xây dựng được hệ thống cơ sở vật chất – kỹ thuật to lớn, tạo nên tiềm lực mạnh mẽ cho nền kinh tế xã hội chủ nghĩa.

        [IMAGE:lienxo.png|Công nhân lắp ráp rotor trong nhà máy luyện kim, Liên Xô năm 1930. Ảnh: Arkady Shaikhet – trích từ tạp chí “USSR Under Construction”]

        3) Mô hình công nghiệp hóa của Nhật Bản và các nước công nghiệp mới (NICs) (1970s đến nay (20 - 30 năm)):
        Mô hình công nghiệp hoá của Nhật Bản và các nước công nghiệp mới (NICs) như Hàn Quốc, Singapore, Trung Quốc, Brazil,… được hình thành và phát triển mạnh mẽ từ những năm 1970 đến nay, thể hiện một hướng đi rút ngắn trong quá trình công nghiệp hoá. Đặc trưng nổi bật của mô hình này là đẩy mạnh xuất khẩu, thu hút và tận dụng nguồn lực công nghệ, vốn, kinh nghiệm quản lý từ nước ngoài, đồng thời kết hợp linh hoạt với nguồn lực trong nước để thúc đẩy tăng trưởng kinh tế nhanh và bền vững. Trong mô hình này, khu vực tư nhân đóng vai trò chủ thể trực tiếp trong hoạt động sản xuất – kinh doanh, còn Nhà nước giữ vai trò kiến tạo, ban hành chính sách và tạo môi trường thuận lợi cho phát triển công nghiệp, thương mại và đầu tư.

        [IMAGE:nhatban.png|Dây chuyền lắp ráp tại nhà máy Motomachi của Toyota (Nhật Bản)]
      `;

  pages.push(...createMultiplePages("1.1. Khái quát về cách mạng công nghiệp", section1_1, currentId));
  currentId = startId + pages.length;

  // 1.2. Tính tất yếu khách quan và nội dung của công nghiệp hóa, hiện đại hóa ở Việt Nam
  const section1_2 = `

  
        **1.2. TÍNH TẤT YẾU KHÁCH QUAN VÀ NỘI DUNG CỦA CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA Ở VIỆT NAM**

        **1.2.1. Tính tất yếu của công nghiệp hóa, hiện đại hóa ở Việt Nam**

        **Khái niệm công nghiệp hóa, hiện đại hóa:**

        Trong giáo trình kinh tế chính trị Mác - Lênin có nói: "Công nghiệp hóa là quá trình chuyển đổi căn bản, toàn diện các hoạt động sản xuất kinh doanh, dịch vụ và quản lý kinh tế - xã hội, từ sử dụng sức lao động thử công là chính sang sử dụng một cách phổ biến sức lao động với công nghệ, phương tiện, phương pháp tiên tiến hiện đại, dựa trên sự phát triển của công nghiệp và tiến bộ khoa học công nghệ nhằm tạo ra năng suất lao động xã hội cao"
        **Đặc trưng công nghiệp hóa, hiện đại hóa ở Việt Nam:**
        Công nghiệp hoá, hiện đại hoá ở Việt Nam mang những đặc trưng riêng, phản ánh định hướng phát triển của đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội. Trước hết, Việt Nam tiến hành công nghiệp hoá, hiện đại hoá theo định hướng xã hội chủ nghĩa, nhằm thực hiện mục tiêu tổng quát là "dân giàu, nước mạnh, dân chủ, công bằng, văn minh". Quá trình này đồng thời gắn liền với sự phát triển của nền kinh tế tri thức, coi tri thức, khoa học – công nghệ và đổi mới sáng tạo là động lực then chốt của tăng trưởng.
        Bên cạnh đó, Việt Nam thực hiện công nghiệp hoá, hiện đại hoá trong điều kiện kinh tế thị trường định hướng xã hội chủ nghĩa, nghĩa là vừa tuân theo quy luật của thị trường, vừa bảo đảm vai trò định hướng, quản lý và điều tiết của Nhà nước vì lợi ích chung của nhân dân. Đặc biệt, quá trình này diễn ra trong bối cảnh toàn cầu hoá kinh tế sâu rộng, khi Việt Nam chủ động và tích cực hội nhập kinh tế quốc tế, tận dụng cơ hội từ hợp tác, đầu tư và chuyển giao công nghệ để rút ngắn khoảng cách phát triển với các quốc gia tiên tiến.
        [IMAGE:Nhamay.png|Công nghiệp hóa ở Việt Nam và quá trình phát triển kinh tế xã hội]
        
        
        
        **1.2.2. Nội dung công nghiệp hóa, hiện đại hóa ở Việt Nam**
        1) Tạo lập những điều kiện để có thể thực hiện chuyển đổi từ nền sản xuất – xã hội lạc hậu sang nền sản xuất – xã hội tiến bộ.
        Nội dung quan trọng hàng đầu để thực hiện thành công công nghiệp hóa, hiện đại hóa là phải thực hiện tạo lập các điều kiện cần thiết trên tất cả các mặt của đời sống sản xuất xã hội
        2) Thực hiện các nhiệm vụ để chuyển đổi nền sản xuất – xã hội lạc hậu sang nền sản xuất – xã hội hiện đại.
        Công nghiệp hoá, hiện đại hoá ở Việt Nam là quá trình thực hiện các nhiệm vụ trọng tâm nhằm chuyển đổi nền sản xuất – xã hội lạc hậu sang nền sản xuất – xã hội hiện đại, phù hợp với yêu cầu phát triển của thời đại mới. Trước hết, Việt Nam đẩy mạnh ứng dụng các thành tựu khoa học và công nghệ tiên tiến, đặc biệt là những công nghệ mang tính đột phá của Cách mạng công nghiệp 4.0 như trí tuệ nhân tạo, dữ liệu lớn, tự động hoá và chuyển đổi số, để nâng cao năng suất và chất lượng sản phẩm.
        Đồng thời, đất nước chuyển đổi cơ cấu kinh tế theo hướng hiện đại, hợp lý và hiệu quả, phát triển hài hoà giữa các ngành công nghiệp, nông nghiệp và dịch vụ, gắn sản xuất với nhu cầu của thị trường và xu thế hội nhập quốc tế. Bên cạnh đó, Việt Nam từng bước hoàn thiện quan hệ sản xuất, bảo đảm sự phù hợp với trình độ phát triển của lực lượng sản xuất, qua đó thúc đẩy tiến bộ xã hội và nâng cao đời sống nhân dân. Toàn bộ quá trình này hướng tới mục tiêu xây dựng nền kinh tế độc lập, tự chủ, năng động và sẵn sàng thích ứng với những tác động nhanh chóng của bối cảnh Cách mạng công nghiệp lần thứ tư.
        [IMAGE:nhamay2.png|Tác động của quá trình công nghiệp hóa ở nước ta]
        `;

  pages.push(...createMultiplePages("1.2. Tính tất yếu và nội dung", section1_2, currentId));

  return pages;
};
