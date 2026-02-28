import { createMultiplePages } from './PageUtils';

export const Part3_VietnamSituation = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang chương
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "2. HỘI NHẬP KINH TẾ QUỐC TẾ Ở VIỆT NAM",
    subtitle: "",
    content: ""
  });

  // 2.1. Khái niệm và nội dung hội nhập kinh tế quốc tế
  const section2_1 = `
        **2.1. KHÁI NIỆM VÀ NỘI DUNG HỘI NHẬP KINH TẾ QUỐC TẾ**
        [IMAGE:co.png|Cre: Từ bài viết của Tổng Bí thư Tô Lâm, nghĩ về tư duy hội nhập trong kỷ nguyên mới (baochinhphu.vn)]
        **2.1.1. Khái niệm và sự cần thiết khách quan hội nhập kinh tế quốc tế**        
        Trong giáo trình kinh tế chính trị Mác - Lênin có nói: "Hội nhập kinh tế quốc tế của một quốc gia là quá trình quốc gia đó thực hiện gắn kết nền kinh tế của mình với nền kinh tế thế giới dựa trên sự chia sẻ lợi ích đồng thời tuân thủ các chuẩn mực quốc tế chung".
        **2.1.2. Tính tất yếu khách quan của hội nhập kinh tế quốc tế**
         [IMAGE:vn.png|Cre: Kinh tế Việt Nam trong bối cảnh toàn cầu hóa và hội nhập quốc tế (vietq.vn)]
        1) Do xu thế khách quan trong bối cảnh toàn cầu hóa kinh tế
        Hội nhập kinh tế quốc tế là xu thế tất yếu, xuất phát từ quy luật khách quan của quá trình toàn cầu hoá kinh tế. Toàn cầu hoá đã và đang tạo nên mối liên kết chặt chẽ và sự phụ thuộc lẫn nhau ngày càng gia tăng giữa các quốc gia, không chỉ trong lĩnh vực thương mại mà còn ở các lĩnh vực đầu tư, tài chính, khoa học – công nghệ và lao động. Trong bối cảnh đó, các yếu tố sản xuất như vốn, lao động, công nghệ, thông tin và hàng hoá được lưu thông trên phạm vi toàn cầu, hình thành nên một mạng lưới kinh tế thế giới thống nhất và có tính tương tác cao.

       

        2) Hội nhập kinh tế quốc tế là phương thức phát triển phổ biến của các nước
        Hội nhập kinh tế quốc tế ngày nay được xem là phương thức phát triển phổ biến của các quốc gia, đặc biệt trong bối cảnh toàn cầu hoá sâu rộng. Đối với các nước đang và kém phát triển, hội nhập kinh tế quốc tế trở thành con đường quan trọng để tận dụng thời cơ, rút ngắn khoảng cách phát triển so với các nước công nghiệp tiên tiến. Thông qua quá trình này, các quốc gia có thể mở rộng và tiếp cận thị trường quốc tế, thu hút vốn đầu tư nước ngoài, tiếp nhận công nghệ hiện đại, đồng thời thúc đẩy quá trình công nghiệp hoá, tăng cường tích lũy nội lực cho nền kinh tế.

        Bên cạnh đó, hội nhập còn mở ra nhiều cơ hội việc làm mới, nâng cao thu nhập và đời sống của người dân, góp phần thúc đẩy tăng trưởng kinh tế bền vững. Với Việt Nam, đây là một hướng đi tất yếu nhằm phát huy lợi thế, mở rộng hợp tác và khẳng định vị thế của đất nước trên trường quốc tế, đồng thời gắn kết chặt chẽ quá trình công nghiệp hoá, hiện đại hoá với hội nhập kinh tế toàn cầu.



        **2.1.3. Nội dung hội nhập kinh tế quốc tế**
        1) Chuẩn bị đầy đủ các điều kiện để thực hiện hội nhập thành công.
        Quá trình hội nhập không phải bằng mọi giá. Quá trình hội nhập phải được cân nhắc với lội trình và cách thức tối ưu.
        2) Thực hiện đa dạng các hình thức, các mức độ hội nhập kinh tế quốc tế
        [IMAGE:Wto.png|Năm 2006, Việt Nam chính thức ký Nghị định thư gia nhập WTO.]
        Hội nhập kinh tế quốc tế là con đường có thể giúp cho các nước đang và kém phát triển có thể tận dụng thời cơ phát triển rút ngắn, thu hẹp khoảng cách với các nước tiên tiến, khắc phục nguy cơ tụt hậu ngày càng rõ rệt.
      `;

  pages.push(...createMultiplePages("2.1. Khái niệm và nội dung", section2_1, currentId));
  currentId = startId + pages.length;

  // 2.2. Tác động của hội nhập kinh tế quốc tế
  const section2_2 = `
        **2.2. TÁC ĐỘNG CỦA HỘI NHẬP KINH TẾ QUỐC TẾ ĐẾN PHÁT TRIỂN CỦA VIỆT NAM**

        **2.2.1. Tác động tích cực**

        Hội nhập kinh tế quốc tế mang lại những tác động tích cực to lớn đối với sự phát triển của các quốc gia, đặc biệt là các nước đang trong quá trình công nghiệp hoá, hiện đại hoá. Trước hết, hội nhập giúp mở rộng thị trường tiêu thụ hàng hoá và dịch vụ, đồng thời tạo cơ hội tiếp nhận các nguồn lực từ bên ngoài như khoa học – công nghệ hiện đại, vốn đầu tư và kinh nghiệm quản lý tiên tiến, qua đó thúc đẩy chuyển dịch cơ cấu kinh tế trong nước theo hướng hiện đại và hiệu quả hơn.

        Bên cạnh đó, quá trình hội nhập còn tạo điều kiện để nâng cao chất lượng nguồn nhân lực, khi người lao động có cơ hội tiếp cận tri thức, kỹ năng và phong cách làm việc quốc tế, từ đó nâng cao năng suất và năng lực cạnh tranh. Không chỉ dừng lại ở lĩnh vực kinh tế, hội nhập quốc tế còn mở rộng giao lưu và hợp tác trong các lĩnh vực văn hoá, chính trị, góp phần củng cố an ninh, quốc phòng và nâng cao vị thế của quốc gia trên trường quốc tế.




        **2.2.2. Tác động tiêu cực**

        Bên cạnh những lợi ích to lớn, hội nhập kinh tế quốc tế cũng mang lại nhiều tác động tiêu cực và thách thức đối với các quốc gia, đặc biệt là những nước đang phát triển. Trước hết, hội nhập làm gia tăng mức độ cạnh tranh gay gắt giữa các doanh nghiệp và nền kinh tế, buộc các quốc gia phải không ngừng nâng cao năng lực sản xuất, quản lý và đổi mới công nghệ. Đồng thời, quá trình này cũng khiến nền kinh tế quốc gia trở nên phụ thuộc nhiều hơn vào thị trường bên ngoài, dễ bị tác động khi có biến động kinh tế toàn cầu.

        Ngoài ra, hội nhập còn có thể dẫn đến sự phân phối không công bằng về lợi ích và rủi ro, làm gia tăng khoảng cách phát triển giữa các quốc gia, cũng như giữa các nhóm dân cư trong cùng một xã hội. Đối với các nước đang phát triển, đây là nguy cơ chuyển dịch cơ cấu kinh tế tự nhiên một cách thiếu bền vững, gây ảnh hưởng đến sản xuất nội địa và các ngành truyền thống.

        Bên cạnh đó, hội nhập sâu rộng còn tạo ra thách thức đối với quyền lực nhà nước, chủ quyền quốc gia, khi phải tuân thủ các cam kết và quy tắc quốc tế. Hơn nữa, quá trình mở cửa và giao lưu toàn cầu cũng làm gia tăng nguy cơ về khủng bố quốc tế, buôn lậu, tội phạm xuyên quốc gia và các vấn đề an ninh phi truyền thống khác.
      `;

  pages.push(...createMultiplePages("2.2. Tác động hội nhập kinh tế", section2_2, currentId));
  currentId = startId + pages.length;

  // 2.3. Phương hướng nâng cao hiệu quả hội nhập
  const section2_3 = `
        **2.3. PHƯƠNG HƯỚNG NÂNG CAO HIỆU QUẢ HỘI NHẬP KINH TẾ QUỐC TẾ TRONG PHÁT TRIỂN CỦA VIỆT NAM**

        **2.3.1. Nhận thức sâu sắc về thời cơ và thách thức do hội nhập kinh tế quốc tế mang lại**

        Trong bối cảnh toàn cầu hoá hiện nay, việc nhận thức sâu sắc về thời cơ và thách thức do hội nhập kinh tế quốc tế mang lại là vấn đề hết sức quan trọng đối với mỗi quốc gia, đặc biệt là Việt Nam. Trước hết, cần hiểu rằng hội nhập kinh tế quốc tế là một thực tiễn khách quan, là xu thế tất yếu của thời đại, không một quốc gia nào có thể né tránh hay quay lưng lại nếu muốn phát triển và hội nhập vào nền kinh tế thế giới. Đây là con đường bắt buộc để mở rộng hợp tác, tiếp thu tri thức, công nghệ và vốn, từ đó thúc đẩy quá trình công nghiệp hoá, hiện đại hoá đất nước.

        Tuy nhiên, trong quá trình hội nhập, cần nhận thức rõ cả hai mặt – tích cực và tiêu cực. Bên cạnh những thời cơ to lớn như mở rộng thị trường, thu hút đầu tư, nâng cao trình độ khoa học – công nghệ và chất lượng nguồn nhân lực, hội nhập cũng tiềm ẩn nhiều thách thức, như sức ép cạnh tranh gay gắt, nguy cơ phụ thuộc kinh tế, hay những biến động từ bên ngoài có thể tác động đến ổn định trong nước.

        [IMAGE:co2.png|Cre: Một số vấn đề về hội nhập kinh tế quốc tế của Việt Nam (tcnn.vn)]

        **2.3.2. Xây dựng chiến lược và lộ trình hội nhập kinh tế phù hợp**

        Việc xây dựng chiến lược và lộ trình hội nhập kinh tế phù hợp là yêu cầu then chốt để tận dụng thời cơ và ứng phó thách thức trong bối cảnh toàn cầu hoá. Trước hết cần đánh giá đúng bối cảnh quốc tế và xu hướng vận động kinh tế — chính trị toàn cầu để xác định những cơ hội, rủi ro và thời điểm thích hợp cho các bước hội nhập. Đồng thời phải làm rõ những điều kiện khách quan và chủ quan ảnh hưởng tới khả năng hội nhập của nước ta (như trình độ lực lượng sản xuất, năng lực cạnh tranh của doanh nghiệp, thể chế, nguồn nhân lực và nguồn lực tài chính). Việc nghiên cứu kinh nghiệm quốc tế sẽ giúp rút ra bài học, tránh sai lầm và vận dụng hợp lý các chính sách đã được chứng minh hiệu quả. Trên cơ sở đó, xây dựng phương hướng, mục tiêu và các giải pháp mang tính thực tiễn, hiệu quả và phù hợp với điều kiện nước ta; đồng thời đảm bảo chiến lược hội nhập gắn với tiến trình hội nhập toàn diện (kinh tế, chính trị, văn hoá, an ninh) và được triển khai theo lộ trình rõ ràng, có bước đi cụ thể, kiểm soát được rủi ro để phục vụ mục tiêu công nghiệp hoá — hiện đại hoá theo định hướng xã hội chủ nghĩa.


        **2.3.3. Tích cực, chủ động tham gia vào các liên kết kinh tế quốc tế và thực hiện đầy đủ các cam kết**
        Việc tích cực, chủ động tham gia vào các liên kết kinh tế quốc tế và thực hiện đầy đủ các cam kết là biểu hiện của một quốc gia có trách nhiệm và bản lĩnh trong quá trình hội nhập. Khi Việt Nam chủ động tham gia các tổ chức, hiệp định và khu vực kinh tế như WTO, ASEAN, CPTPP, RCEP… không chỉ giúp mở rộng thị trường, thu hút đầu tư, tăng cường xuất khẩu, mà còn góp phần nâng cao năng lực cạnh tranh quốc gia. Đồng thời, việc thực hiện nghiêm túc các cam kết quốc tế thể hiện uy tín và tinh thần hợp tác của Việt Nam, qua đó tạo dựng niềm tin và sự tôn trọng từ cộng đồng quốc tế, giúp Việt Nam khẳng định vai trò, vị thế và hình ảnh tích cực trên trường quốc tế. Điều này cũng là tiền đề quan trọng để đất nước nâng tầm hội nhập toàn diện, tiến tới phát triển bền vững và tự chủ trong nền kinh tế toàn cầu hóa.
        [IMAGE:co3.png|Cre: Nâng cao hội nhập kinh tế quốc tế, thúc đẩy kinh tế phát triển nhanh và bền vững (baochinhphu.vn)]

        **2.3.4. Hoàn thiện thể chế kinh tế và pháp luật**
        Hoàn thiện thể chế kinh tế và pháp luật là yêu cầu cấp thiết nhằm bảo đảm cho quá trình hội nhập kinh tế quốc tế diễn ra hiệu quả và bền vững. Song song với việc hoàn thiện cơ chế thị trường, cần phải đổi mới cơ chế quản lý của Nhà nước theo hướng minh bạch, linh hoạt và phù hợp với chuẩn mực quốc tế. Bên cạnh đó, cần tiến hành rà soát, sửa đổi và hoàn thiện hệ thống pháp luật, đặc biệt là các quy định liên quan trực tiếp đến hội nhập kinh tế như luật đất đai, đầu tư, thương mại, doanh nghiệp, thuế, tài chính và tín dụng. Một hệ thống pháp luật đồng bộ, rõ ràng và ổn định sẽ tạo môi trường kinh doanh thuận lợi, bảo đảm quyền lợi cho doanh nghiệp và nhà đầu tư, đồng thời giúp nâng cao năng lực cạnh tranh của nền kinh tế Việt Nam trong bối cảnh toàn cầu hóa.
        [IMAGE:luat.png|Cre: thuvienphapluat.vn]

        **2.3.5. Nâng cao năng lực cạnh tranh quốc tế của nền kinh tế**
        Nâng cao năng lực cạnh tranh quốc tế của nền kinh tế là yếu tố then chốt quyết định hiệu quả của quá trình hội nhập kinh tế. Thực tiễn cho thấy, hiệu quả hội nhập phụ thuộc rất lớn vào năng lực cạnh tranh của nền kinh tế và của từng doanh nghiệp trong nước. Để đạt được điều đó, Nhà nước cần tăng cường các chính sách hỗ trợ doanh nghiệp, giúp họ đổi mới công nghệ, nâng cao năng suất lao động, chất lượng sản phẩm và năng lực quản trị. Bên cạnh đó, cần tạo môi trường kinh doanh minh bạch, ổn định, hỗ trợ doanh nghiệp tiếp cận thị trường quốc tế, nâng cao năng lực nhân sự và khả năng thích ứng với các tiêu chuẩn toàn cầu. Chỉ khi năng lực cạnh tranh được nâng cao, nền kinh tế Việt Nam mới có thể đứng vững, phát triển bền vững và khẳng định vị thế trên trường quốc tế.

        [IMAGE:co4.png|Cre: Để doanh nghiệp Việt Nam tận dụng cơ hội khi hội nhập (baochinhphu.vn)]

        **2.3.6. Xây dựng nền kinh tế độc lập, tự chủ của Việt Nam**
        Nền kinh tế độc lập tự chủ là nền kinh tế không bị lệ thuộc, phụ thuộc vào nước khác, người khác, hoặc vào một tổ chức kinh tế nào đó về đường lối, chính sách phát triển, không bị bất cứ ai dung những điều kiện kinh tế, tài chính, thương mại, viện trợ… để áp đặt, khống chế, làm tổn hại chủ quyền quốc gia và lợi ích dân tộc
        [IMAGE:co5.png|Cre: Về xây dựng nền kinh tế độc lập tự chủ và chủ động, tích cực hội nhập quốc tế trong kỷ nguyên mới (btgdvtukhanhhoa.vn)]




        **2.3.7. Biện pháp để xây dựng nền kinh tế độc lập tự chủ**

        Biện pháp để xây dựng nền kinh tế độc lập, tự chủ là nhiệm vụ có ý nghĩa chiến lược trong quá trình phát triển đất nước. Trước hết, cần hoàn thiện và bổ sung đường lối chung cũng như đường lối kinh tế, nhằm bảo đảm định hướng phát triển đúng đắn, phù hợp với bối cảnh trong nước và quốc tế. Song song đó, việc đẩy mạnh công nghiệp hóa, hiện đại hóa được xem là yếu tố then chốt để nâng cao nội lực, tăng năng suất lao động và giảm sự phụ thuộc vào các nguồn lực bên ngoài. Bên cạnh đó, Việt Nam cần chủ động mở rộng quan hệ kinh tế đối ngoại và tích cực hội nhập kinh tế quốc tế nhưng vẫn giữ vững quyền tự chủ trong hoạch định chính sách và chiến lược phát triển. Năng lực cạnh tranh của nền kinh tế phải được tăng cường thông qua đổi mới sáng tạo, ứng dụng khoa học – công nghệ hiện đại và phát triển nguồn nhân lực chất lượng cao. Cuối cùng, cần kết hợp chặt chẽ giữa phát triển kinh tế với củng cố quốc phòng, an ninh và mở rộng đối ngoại, tạo thế cân bằng vững chắc để vừa hội nhập hiệu quả, vừa bảo vệ chủ quyền và lợi ích quốc gia.
      `;

  pages.push(...createMultiplePages("2.3. Phương hướng nâng cao hiệu quả", section2_3, currentId));
  currentId = startId + pages.length;

  // Trang chương Phần 3
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "3. LÀM THẾ NÀO ĐỂ VIỆT NAM CÔNG NGHIỆP HÓA THEO HƯỚNG XANH – THÔNG MINH – SÁNG TẠO?",
    subtitle: "",
    content: ""
  });

  // 3. Làm thế nào để Việt Nam CNH theo hướng xanh - thông minh - sáng tạo
  const section3 = `
        **Để Việt Nam thực hiện theo hướng xanh - thông minh - sáng tạo về cơ bản chính là thực hiện "Công nghiệp hoá theo hướng hiện đại".**

        Quá trình này đòi hỏi Việt Nam cần thiết phải:

        • Đầu tiên là tiến từ nền sản xuất tiền công nghiệp sang nền sản xuất công nghiệp hiện đại tiên tiến.

        • Tiếp theo, yếu tố "Thông minh" và "Sáng tạo" ở đây cần phải ứng dụng mạnh mẽ thành tựu của CMCN 3.0 (như công nghệ thông tin, viễn thông, tự động hoá) và nghiên cứu, phát triển đối với trí tuệ nhân tạo, ứng dụng AI cùng công nghệ đổi mới và sáng tạo.

        • Yếu tố "Xanh" có thể thực hiện thông qua phát triển các lĩnh vực như "năng lượng tái tạo" (như thuỷ điện, gió mặt trời, địa nhiệt,....)

        Để đạt được các biện pháp nêu trên thì yêu cầu đặt ra ở đây là cần có "Nguồn vốn để đầu tư cho công nghệ hiện đại" và "Nguồn nhân lực được đào tạo với chất lượng cao".

        Cuối cùng điểm then chốt ở đây là "đẩy mạnh hội nhập kinh tế quốc tế" để đạt được hai yêu cầu trên. Việc hội nhập cho phép Việt Nam thu hút công nghệ và đầu tư bên ngoài, tiếp cận hệ thống tài liệu và học tập kinh nghiệm quản lý tiên tiến. Song song đó cần phải xây dựng chiến lược hội nhập hợp lý và phù hợp với thị trường trong nước, đảm bảo môi trường cạnh tranh bình đẳng từ đó tạo động lực cho các doanh nghiệp cùng đổi mới và sáng tạo, nâng cao sức cạnh tranh trong bối cảnh thời đại mới.
      `;

  pages.push(...createMultiplePages("3. CNH xanh - thông minh - sáng tạo", section3, currentId, 'content', 20));
  currentId = startId + pages.length;

  // Trang chương Phần 4
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "4. TÌM HIỂU QUÁ TRÌNH TỪ CÁC LÀNG NGHỀ VIỆT NAM ĐẾN CÁC NHÀ MÁY 4.0",
    subtitle: "",
    content: ""
  });

  // 4. Hành trình từ làng nghề đến nhà máy 4.0
  const section4 = `
        Phần này với mong muốn giới thiệu đến độc giả về các làng nghề truyền thống Việt Nam của ông cha ta từ xa xưa. Từ đó thế hệ ngày nay đã làm như thế nào để gìn giữ và phát triển đưa các nét văn hoá truyền thống đó rộng rãi hơn?

        Các nhà máy phát triển sản phẩm mang nét cổ xưa đã được hình thành như thế nào? Niềm biết ơn và tự hào đến các làng nghề của Việt Nam được thể hiện ra sao trong suốt bề dày lịch sử phát triển đất nước?

        Ở đây chúng mình sẽ chia theo vị trí địa lý lần lượt là Bắc - Trung - Nam.








        





        **CÁC LÀNG NGHỀ TRUYỀN THỐNG Ở MIỀN BẮC:**
        Tại khu vực miền Bắc nổi trội là cái nôi của các làng nghề truyền thống, cổ truyền Việt Nam và có thể kể đến như:
        1. Làng Gốm Bát Tràng (Hà Nội)
        [IMAGE:langgom.jpeg|Làng gốm Bát Tràng - Nét đẹp văn hóa truyền thống Việt Nam]
        2. Làng Nón lá Chuông (Hà Nội)
        [IMAGE:langnon.jpeg|Làng nón lá Chuông - Biểu tượng văn hóa Việt Nam|width:300px;height:200px]

        3. Làng Quạt Chàng Sơn (Hà Nội)
        [IMAGE:langquat.jpeg|Làng quạt Chàng Sơn - Nghệ thuật làm quạt truyền thống|width:300px;height:200px]

        4. Làng Tranh Đông Hồ (Bắc Ninh)
        [IMAGE:langtranhdongho.jpeg|Làng tranh Đông Hồ - Nghệ thuật tranh dân gian|width:300px;height:200px]

        5. Làng Đúc đồng Ngũ Xá (Bắc Ninh)
        [IMAGE:langducdong.jpeg|Làng Đúc đồng Ngũ Xá - Nghệ thuật đúc đồng truyền thống|width:300px;height:200px]
        6. Làng lụa Vạn Phúc - Nổi tiếng với lụa Hà Đông
        [IMAGE:langlua.jpeg|Làng lụa Vạn Phúc - Nét đẹp văn hóa truyền thống Việt Nam|width:300px;height:200px]

        7. Làng nghề mây tre đan Phú Vinh
        [IMAGE:langmay.jpeg|Làng nghề mây tre đan Phú Vinh - Nghệ thuật đan lát truyền thống|width:300px;height:200px]
        







        


        **CÁC LÀNG NGHỀ TRUYỀN THỐNG Ở MIỀN TRUNG:**
        1. Làng Đá mỹ nghệ - điêu khắc (Ngũ Hành Sơn, Đà Nẵng)
        [IMAGE:langda.jpeg|Làng Đá mỹ nghệ - điêu khắc (Ngũ Hành Sơn, Đà Nẵng)|width:300px;height:200px]
        2. Làng Gốm Thanh Hà (Hội An)
        [IMAGE:langgomthanha.jpeg|Làng Gốm Thanh Hà (Hội An)|width:300px;height:200px]

        3. Làng Nón lá Tây Hồ - Phú Vang (Thừa Thiên Huế)
        [IMAGE:langnontayho.jpeg|Làng Nón lá Tây Hồ - Phú Vang (Thừa Thiên Huế)|width:300px;height:200px]
        4. Làng dệt thổ cẩm Mỹ Nghiệp (Ninh Thuận)
        [IMAGE:langdethocam.jpeg|Làng dệt thổ cẩm Mỹ Nghiệp (Ninh Thuận)|width:300px;height:200px]
        

        5. Làng Gốm Bàu Trúc - hồn Chăm Cổ (Ninh Thuận)
        [IMAGE:langbautruc.jpeg|Làng Gốm Bàu Trúc - hồn Chăm Cổ (Ninh Thuận)|width:300px;height:200px]












        **CÁC LÀNG NGHỀ TRUYỀN THỐNG Ở MIỀN NAM:**

        Tại miền Nam được biết đến với các làng nghề truyền thống như:

        1. Làng Gốm sứ Lái Thiêu (Thuận An, Bình Dương)
        [IMAGE:langgomsulai.jpeg|Làng Gốm sứ Lái Thiêu (Thuận An, Bình Dương)|width:300px;height:200px]








        2. Tranh sơn mài Tương Bình Hiệp (Bình Dương)
        [IMAGE:langsonmai.jpeg|Tranh sơn mài Tương Bình Hiệp (Bình Dương)|width:320px;height:220px]
        3. Làng lụa Tân Châu (An Giang)
        [IMAGE:langluatanchau1.jpeg|Làng lụa Tân Châu (An Giang)]


        4. Làng Dệt thổ cẩm Châu Giang - Khmer (An Giang)
        [IMAGE:langdetchaugian.jpeg|Làng Dệt thổ cẩm Châu Giang - Khmer (An Giang)|width:300px;height:200px]
        5. Làng chiếu Định Yên (Đồng Tháp)
        [IMAGE:langchieudinhyen.jpeg|Làng chiếu Định Yên (Đồng Tháp)|width:300px;height:200px]


        **THÁCH THỨC VÀ GIẢI PHÁP PHÁT TRIỂN:**

        Làng nghề truyền thống là một phần không thể thiếu của di sản văn hoá Việt Nam tuy nhiên ngày nay các làng nghề đang vướng phải những cạnh tranh khốc liệt và đối mặt với những trở ngại đáng kể trên thị trường tiêu thụ sản phẩm công nghiệp.

        Hiển nhiên với bối cảnh thế giới phát triển với tốc độ nhanh chóng để gìn giữ, phát triển tinh hoa văn hoá truyền thống của dân tộc điều đó đòi hỏi chúng ta phải áp dụng vào những khâu sản xuất mới, tạo điều kiện và môi trường để đưa các sản phẩm văn hoá truyền thống của nước ta đến với bạn bè quốc tế.

        Các nhà máy, công ty được thành lập mang tinh thần kế thừa những làng nghề truyền thống và hỗ trợ phát triển giúp sản phẩm sản xuất hiện đại hoá trở thành mặt hàng dễ tiếp cận hơn với công chúng và cộng đồng quốc tế.
      `;

  pages.push(...createMultiplePages("4. Từ làng nghề đến nhà máy 4.0", section4, currentId, 'content', 20));
  currentId = startId + pages.length;

  // Trang chương Phần 5 - Nguồn tham khảo
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "5. NGUỒN THAM KHẢO",
    subtitle: "",
    content: ""
  });

  // Nguồn tham khảo
  const references = `
        **SÁCH, GIÁO TRÌNH CHÍNH:**

        Giáo trình Kinh tế chính trị Mác – Lênin (giáo trình tập huấn năm 2019 - Bộ Giáo dục và Đào tạo)


        **TÀI LIỆU THAM KHẢO BỔ SUNG:**

        **Phần 3: Làm thế nào để Việt Nam công nghiệp hóa theo hướng xanh – thông minh – sáng tạo?**

        1. Giải pháp nào để đô thị xanh thông minh tại Việt Nam
        https://mst.gov.vn/giai-phap-nao-de-do-thi-xanh-thong-minh-tai-viet-nam-197155985.htm

        2. Chính sách công nghiệp xanh hướng tới sự phát triển bền vững ở Việt Nam
        https://www.tapchicongsan.org.vn/web/guest/kinh-te/-/2018/910402/chinh-sach-cong-nghiep-xanh-huong-toi-su-phat-trien-ben-vung-o-viet-nam.aspx

        3. Phát triển kinh tế xanh ở Việt Nam - Thực trạng và giải pháp
        https://vioit.org.vn/vn/chien-luoc-chinh-sach/phat-trien-kinh-te-xanh-o-viet-nam--thuc-trang-va-giai-phap-5941.4050.html


        **Phần 4: Tìm hiểu quá trình từ các làng nghề Việt Nam đến các nhà máy 4.0**

        1. Làng nghề truyền thống Việt Nam - Tạo nên quà tặng bản sắc Việt
        https://chus.vn/lang-nghe-truyen-thong-viet-nam-tao-nen-qua-tang-ban-sac-viet/

        2. Làng nghề truyền thống Việt Nam
        https://mia.vn/cam-nang-du-lich/lang-nghe-truyen-thong-viet-nam-15321

        3. Làng nghề cũng phải 4.0
        https://baochinhphu.vn/lang-nghe-cung-phai-40-102248040.htm
      `;

  pages.push(...createMultiplePages("5. Nguồn tham khảo", references, currentId, 'content', 18));
  currentId = startId + pages.length;

  // Trang bìa sau - giống trang bìa đầu
  pages.push({
    id: currentId++,
    type: "cover",
    title: "Thức giấc từ tro than: Công nghiệp xanh cho tương lai Việt Nam",
    subtitle: "Tài liệu nghiên cứu - MLN122",
    author: "Nhóm 5"
  });

  return pages;
};
