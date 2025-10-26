import { createMultiplePages } from './PageUtils';

export const Part5_Ref = (startId) => {
  const pages = [];
  let currentId = startId;

  // Trang chương
  pages.push({
    id: currentId++,
    type: "chapter",
    title: "3. Nguồn tham khảo",
    subtitle: "",
    content: ``
  });

  // 3.1. Khái niệm và nội dung hội nhập kinh tế quốc tế
  const section3_1 = `
        **3.1. Các nguồn tham khảo**

        - Giáo trình Kinh tế chính trị Mác – Lênin (giáo trình tập huấn năm 2019- Bộ GDĐT)

        **3.2. Các nguồn ảnh**
        https://www.bctf.ca/classroom-resources/details/social-studies-9-industrial-revolution-assessment
        
        https://commons.wikimedia.org/wiki/File:Lucy_Furnace_1900.jpg
        
        https://spectrum.ieee.org/unimation-robot

        https://lyluanchinhtri.vn/tac-dong-cua-cuoc-cach-mang-cong-nghiep-lan-thu-tu-toi-su-phat-trien-cua-giai-cap-cong-nhan-viet-nam-4298.html

        https://moit.gov.vn/tin-tuc/phat-trien-cong-nghiep/cong-nghiep-hoa-o-viet-nam-va-qua-trinh-phat-trien-kinh-te-xa-hoi.html

        https://luatvietnam.vn/linh-vuc-khac/cong-nghiep-hoa-la-gi-883-91444-article.html

        https://baochinhphu.vn/tu-bai-viet-cua-tong-bi-thu-to-lam-nghi-ve-tu-duy-hoi-nhap-trong-ky-nguyen-moi-1022504110854009.htm

        https://vietq.vn/kinh-te-viet-nam-trong-boi-canh-toan-cau-hoa-va-hoi-nhap-quoc-te-d211846.html

        https://nhandan.vn/viet-nam-va-buoc-ngoat-hoi-nhap-kinh-te-quoc-te-post906092.html

        https://tcnn.vn/news/detail/42929/Motso-van-de-ve-hoi-nhap-kinh-te-quoctecuaVietNam.html

        https://baochinhphu.vn/nang-cao-hoi-nhap-kinh-te-quoc-te-thuc-day-kinh-te-phat-trien-nhanh-va-ben-vung-102230705170803971.htm

        https://haiduong.baohiemxahoi.gov.vn/tintuc/Pages/kinh-te-xa-hoi.aspx?CateID=67&ItemID=14798

        https://baochinhphu.vn/de-doanh-nghiep-viet-nam-tan-dung-co-hoi-khi-hoi-nhap-102204691.htm	

        https://btgdvtukhanhhoa.vn/dua-nghi-quyet-cua-dang-vao-cuoc-song/ve-xay-dung-nen-kinh-te-doc-lap-tu-chu-va-chu-dong-tich-cuc-hoi-nhap-quoc-te-tro

      `;

  pages.push(...createMultiplePages("3. Nguồn tham khảo", section3_1, currentId));
  currentId = startId + pages.length;

    // Trang bìa sau - giống trang bìa đầu
  pages.push({
    id: currentId++
  });

  // Trang bìa sau - giống trang bìa đầu
  pages.push({
    id: currentId++,
    type: "cover",
    title: "Chương 6: Công nghiệp hóa, hiện đại hóa và hội nhập kinh tế quốc tế của Việt Nam",
    subtitle: "Giáo trình Kinh tế chính trị Mác – Lênin",
    author: "Bộ Giáo dục và Đào tạo - Năm 2019"
  });

  return pages;
};