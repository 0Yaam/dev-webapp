18.1 Hyperlink trong Express-handlebars

Ở bài học về Express-handlebars, chúng ta đã tạo được trang chủ (index) của web app. Tuy nhiên, ở giao diện trang chủ, khi bạn bấm vào các mục của menu (ví dụ: HOME, PRODUCTS, PAGES), giao diện của web app sẽ không làm việc.

Khi bạn mở trang chủ, quan sát trên thanh địa chỉ sẽ thấy giá trị của URL là: http://localhost:9000/index.html. Nghĩa là, giá trị URL của các liên kết cần được cập nhật, vì
trong web root không còn tập tin index.html.

Trong tập tin index.hbs, chúng ta sẽ sửa URL cho menu HOME:

<a href="index.html" class="nav-item nav-link active">Home</a>

thành:

<a href="/" class="nav-item nav-link active">Home</a>

Lưu lại mã nguồn, mở lại web app trên trình duyệt, bấm vào menu HOME, bạn sẽ thấy trang chủ hoạt động bình thường.

Việc thay đổi giá trị href="/", có nghĩa là: khi người dùng bấm vào menu HOME, trình duyệt sẽ gửi request GET tới web root (“/”) của web app. 

Khi server nhận được request GET tới web root, nó sẽ xử lý và gửi về trang index, như đoạn mã sau:

// routes va render trang index

app.get('/', (req, res) => {

    res.render('index');
// se lay index.hbs do vao {{{ body }}} trong main.hbs

});



18.2 Tạo giao diện cho các trang con

Web app của chúng ta, ngoài trang chủ (index) còn có các trang con như cart, checkout, contact, login, my-account, product-detail, product-list và wishlist.

Chúng ta sẽ tạo giao diện cho các trang con theo các bước sau:

-[1] Di chuyển toàn bộ các trang  cart.html, checkout.html, contact.html, login.html, my-account.html, product-detail.html, product-list.html, wishlist.html từ thư mục public sang thư mục views.

[có thể thư mục Eshop bạn tải từ https://htmlcodex.com/ sẽ bị thiếu một số tập tin như: my-account.html, product-detail.html, login.html, wishlist.html. Bạn có thể tải các tập tin còn thiếu ở đây: bootstrap-ecommerce-template (https://drive.google.com/file/d/1qNsjpFAucM2poKWsKC6dJQylkV4rpJu3/view?usp=drive_link)]

-[2] Đổi đuôi tập tin của các trang con từ .html sang .hbs

-[3] Vào mỗi tập tin cart.hbs, checkout.hbs, contact.hbs, login.hbs, my-account.hbs, product-detail.hbs, product-list.hbs, wishlist.hbs xóa đi mã nguồn từ đầu đến hết phần header, và từ phần footer đến hết tập tin (giống như bạn đã làm cho tập tin index.hbs). Xem hình minh họa về cấu trúc các tập tin trong views.



- [4] Vào tập tin main.hbs, sửa lại URL của các liên kết thành giá trị mới sau:

[giá trị cũ > giá trị mới]

product-list.html > /product-list

product-detail.html > /product-detail

cart.html > /cart

wishlist.html > /wishlist

checkout.html > /checkout

login.html > /login

my-account.html > /my-account

contact.html > /contact

Ví dụ, một phần của main.hbs sau khi thay đổi:

[main.hbs]

...

<a href="/" class="nav-item nav-link active">Home</a>

<a href="/product-list" class="nav-item nav-link">Products</a>

<div
class="nav-item dropdown"> 

  <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>

  <div
class="dropdown-menu">

     <a href="/product-list" class="dropdown-item">Product</a>

      <a href="/product-detail" class="dropdown-item">Product
Detail</a>

<a href="/cart" class="dropdown-item">Cart</a>

      <a href="/wishlist" class="dropdown-item">Wishlist</a>

      <a href="/checkout" class="dropdown-item">Checkout</a>

      <a href="/login" class="dropdown-item">Login
& Register</a>

      <a href="/my-account" class="dropdown-item">My
Account</a>

  </div>

</div>

<a href="/contact" class="nav-item nav-link">Contact Us</a>

</div>

...

[5] Vào tập tin index.js, thêm đoạn mã xử lý để hiển thị các trang con.

[index.js]

// routes va render trang index

app.get('/', (req, res) =>
{

    res.render('index');
// se lay index.hbs do vao {{{ body }}} trong main.hbs

});

 

// hien thi cac trang con

app.get('/:page', (req, res) =>{

    res.render(req.params.page);

});

// khoi dong web server

- [6] Lưu lại các tập tin mã nguồn, khởi động lại server, vào trình duyệt, mở lại web app, bấm vào các mục của menu sẽ thấy giao diện đã hoạt động tốt.



18.3 Sử dụng partial


Như đã đề cập, trong express-handlebars, partial là các thành phần con, là các đoạn mã HTML có thể tái sử dụng, được nhúng vào các “view” hoặc “layout”. Việc sử dụng partial giúp bạn chia nhỏ giao diện thành các thành phần nhỏ hơn, dễ quản lý hơn.



Trong giao diện của web app, bạn quan sát 2 trang: Products-list  http://localhost:9000/product-list và trang Product-detail http://localhost:9000/product-detail. Bạn sẽ thấy, cả 2 trang đều có sidebar (khung bên phải) giống nhau (gồm: Category, Featured Product, Our Brands, và Tags Cloud). Xem hình minh họa.



Chúng ta sẽ tách đoạn mã nguồn của sidebar thành một partial có tên là sidebar.hbs.

Bạn mở trang product-list bằng trình duyệt, sử dụng Inspect để định vị phần mã nguồn của sidebar. Vào VS code, mở tập tin mã nguồn product-list.hbs, định vị vùng mã nguồn của sidebar, cắt phần mã nguồn này, chép vào tập tin partials/sidebar.hbs (bạn tạo tập tin sidebar.hbs, nếu chưa tạo).

Ví dụ: trong product-list.hbs, đoạn mã nguồn của sidebar sẽ là:

<div class="col-md-3">

  <div class="sidebar-widget category">

      <h2 class="title">Category</h2>

……

<!-- lược bớt một số dòng mã -->

……

     <a href="#">Sit amet</a>

     <a href="#">Vel posuere</a>

<a href="#">orci luctus</a>

<a href="#">Nam lorem</a>

 </div>

</div>

Trong product-list.hbs, bạn thêm dòng mã sau vào đúng vùng mã của sidebar mà bạn vừa cắt đi.

{{> sidebar }}

Cú pháp {{> sidebar }} được sử dụng để nhúng một partial có tên là sidebar vào vị trí tương ứng trong template.

Lưu lại các tập tin mã nguồn, khởi động lại server, vào trình duyệt, mở lại web app, bấm vào mục PRODUCT của menu sẽ thấy giao diện đã hoạt động tốt.

Tương tự, chúng ta vào trang product-detail.hbs, xóa đi vùng mã của sidebar và thay vào đó là đoạn mã {{> sidebar }}.

Tạo partial cho product-item

Chúng ta sẽ thực hành thêm với partial bằng cách tạo partial cho product-item (đoạn mã hiển thị thông tin cho một sản phẩm).

- Tạo tập tin product-item.hbs trong partials.

- Vào tập tin product-list.hbs, cắt đoạn mã nguồn của một product-item, chép sang tập tin product-item.hbs.

- Chèn dòng mã {{> product-item}} vào vị trí mã nguồn vừa cắt.

- Lưu lại các tập tin mã nguồn, khởi động lại server, vào trình duyệt, mở lại web app, bấm vào mục PRODUCT của menu sẽ thấy giao diện vẫn hoạt động tốt.