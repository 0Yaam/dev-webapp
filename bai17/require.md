17.3 Sử dụng Express-handlebars trong Express

Sau khi đã cài đặt express-handlebars trong dự án, chúng ta cùng làm theo các bước sau để sử dụng:

[1] Khai báo để sử dụng gói express-handlebars

[index.js]

...

const port = process.env.PORT || 9000

// khai bao su dung express-handlebars

const expressHandlebars = require(expressHandlebars);

…

[2] Tổ chức thư mục, tập tin

Chúng ta sẽ tạo cấu trúc thư mục và tập tin cho phần giao diện như sau:

TeoShop/

├── views/

│   ├── layouts/ 

│   │   └── main.hbs 

│   ├── partials/

│   │   ├── header.hbs

│   │   └── footer.hbs

│   ├── index.hbs

│   └── cart.hbs

└── index.js

Trong đó,

- Thư mục views: là thư mục chứa tất cả các template của ứng dụng. Express sẽ tìm kiếm các template trong thư mục này khi bạn gọi phương thức res.render().

- Thư mục layouts: chứa các layout chính (main layout - main.hbs) của ứng dụng. Main layout là một template HTML chung, là bộ khung thống nhất cho các giao diện có bố cục tương tự nhau. Ví dụ: main.hbs có thể chứa cấu trúc HTML cơ bản, header, footer. Việc sử dụng layout giúp bạn tránh việc lặp lại mã HTML trên nhiều trang.

- Thư mục partials: chứa các template con. Partial nghĩa là các thành phần con. Partials là các đoạn mã HTML có thể tái sử dụng, được nhúng vào các “view” hoặc “layout”. Ví dụ: bạn có thể tạo một partial cho header, footer, hoặc một form đăng nhập. Việc sử dụng partials giúp bạn chia nhỏ giao diện thành các thành phần nhỏ hơn, dễ quản lý hơn.

Việc tổ chức thư mục, tập tin như trên có một số ưu điểm là:

- Tách biệt logic xử lý và giao diện: giúp dễ đọc mã nguồn, dễ bảo trì và dễ mở rộng.

- Tái sử dụng mã: tránh lặp lại mã HTML, giảm thiểu lỗi và tăng tốc độ phát triển.

- Quản lý giao diện dễ dàng: cho phép bạn thay đổi giao diện một cách nhất quán trên toàn bộ ứng dụng.

Để đơn giản, trong thư mục dự án (TeoShop) chúng ta sẽ tạo thư mục và tập tin như sau:

- Tạo thư mục views

- Trong thư mục views, tạo 2 thư mục là layouts và partials

- Trong thư mục layouts, tạo tập tin main.hbs

Xem hình minh họa.

![alt text](image.png)

[3] Cấu hình để sử dụng express-handlebars trong mã nguồn

Trong tập tin index.js, thêm đoạn mã sau:

const port = process.env.PORT || 9000

const expressHandlebars = require('express-handlebars');

 

// cau hinh de su dung express handlebars, dinh nghia engine

app.engine('hbs', expressHandlebars.engine({

    // thu muc chua cac layout

    layoutsDir: __dirname + '/views/layouts',

    // thu muc chua cac template con

    partialsDir: __dirname + '/views/partials',

    // duoi cua tap tin layout

    extname: 'hbs',

    // tap tin layout chinh la

    defaultLayout: 'main'

}));

 

// khai bao de su dung engine da dinh nghia

app.set('view engine', 'hbs');

 

// khoi dong web server

[4] Tạo các tập tin template, gồm mã HTML và cú pháp của express-handlebars (sao tôi làm tới bước này, chạy index.js mà nó không có gì xảy ra nhỉ ?, web vẫn không thay đổi như trong ảnh giống thầy)

Bạn mở lại web app ở chế độ các trang tĩnh để quan sát giao diện. Bạn sẽ thấy trang HOME, PRODUCTS, PAGES, CONTACT US đều có phần header và footer giống nhau; chỉ khác nhau phần nội dung giữa trang.

Xem hình minh họa.


![alt text](image-1.png)
Vậy, trong thư mục views/layouts chúng ta sẽ tạo main.hbs bao gồm mã nguồn của header và footer.

Cách làm:

- Trong trình duyệt, bạn mở trang http://localhost:9000/index.html

- Dùng chế độ inspect để phân tích giao diện, để biết đoạn mã nguồn nào là của phần header, của “nội dung trang con” và của footer.

- Chép toàn bộ mã nguồn của trang public\index.html vào tập tin main.hbs

- Trong main.hbs, giữ lại mã nguồn phần header và footer, cắt đi mã nguồn phần chính giữa (“nội dung trang con”) đưa vào tập tin index.hbs (bạn tạo tập tin index.hbs trong views, nếu bạn chưa tạo)

- Như vậy, nội dung của main.hbs sẽ gồm:

(lưu ý: nội dung trong {{! }} là dòng chú thích của express-handlebars)

[main.hbs]

{{! từ đầu tập tin tới dòng mã
[96] <!-- Header End -->}}

…

<!-- Header End -->

{{! thêm placeholder body }}

 {{{ body }}}

 

{{! và từ dòng mã [518]  
      <!-- Footer Start --> }}

<!-- Footer Start -->

{{! tới hết tập tin. }}

…

Xem hình minh họa (tập tin main.hbs).
![alt text](image-2.png)

- Trong tập tin main.hbs, nội dung header và footer sẽ được lặp lại trong các trang giao diện, phần “nội dung của mỗi trang con” sẽ được “đổ” vào vùng {{{ body }}} 

- Sau khi đã tạo xong được main.hbs và index.hbs, nghĩa là chúng ta đã tạo được giao diện động cho trang index. Vì vậy, chúng ta sẽ xóa tập tin index.html trong public.

- Mở trình duyệt, truy cập vào ứng dụng web http://localhost:9000/, sẽ có thông báo lỗi “Cannot GET /”. Vì chúng ta đã xóa trang index.html.

- Chúng ta lập trình đoạn mã để render ra trang index.

[index.js]

//
khai bao de su dung engine da dinh nghia

app.set('view
engine', 'hbs');

 

// routes va render trang index

app.get('/', (req, res) => {

    res.render('index'); // se lay index.hbs do vao {{{ body }}} trong main.hbs

});

 

//
khoi dong web server



- Khởi động lại web server, vào lại trình duyệt, truy cập web app: http://localhost:9000/. Bạn sẽ thấy trang chủ của web app (index) xuất hiện trở lại. Tuy nhiên, trên giao diện sẽ bị lỗi không tải được các hình ảnh. Lý do là đường dẫn của các hình ảnh không còn đúng nữa. Bạn hãy tìm cách sửa các đường dẫn hình ảnh; hoặc chép thư mục hình ảnh vào cùng với 



Gợi ý: do, trong mã nguồn của tập tin index.js đã bị mất dòng mã này, bạn hãy thêm vào:



[index.js]

…

const expressHandlebars = require('express-handlebars');



// cau hinh public static folder

app.use(express.static(__dirname + "/public"));



app.engine('hbs', expressHandlebars.engine({

…\

- Khởi động lại web server, vào lại trình duyệt, truy cập web app: http://localhost:9000/. Bạn sẽ thấy trang chủ của web app (index) xuất hiện trở lại, với đầy đủ hình ảnh.