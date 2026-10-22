# ESE ONLINE - Hướng dẫn chơi multiplayer qua Internet (kiểu Kahoot)

## 1. Đã làm được gì?

Đã thêm một **server Node.js (Express + Socket.IO)** để đồng bộ dữ liệu real-time giữa giáo viên (host)
và nhiều học sinh ở các mạng WiFi/4G khác nhau. Luồng chơi:

1. Giáo viên mở `host.html` → tạo phiên chơi mới, được cấp **1 mã PIN 6 số**.
2. Học sinh mở domain của bạn (`http://ese.publicvm.com/`) trên điện thoại/laptop riêng,
   nhập **PIN + Tên** (giống Kahoot) → vào phòng chờ.
3. Giáo viên chọn bài học (Directions / Travel / Hotel / Grammar Review) và bấm **START GAME**.
4. Mỗi học sinh nhận câu hỏi trắc nghiệm trên màn hình của mình, có thanh đếm giờ, trả lời càng nhanh
   càng được nhiều điểm (giống Kahoot). Trả lời sai bị trừ 1 tim (tổng 3 tim), hết tim thì bị loại
   nhưng vẫn xem được bảng xếp hạng.
5. Sau mỗi câu, cả lớp thấy đáp án đúng + bảng xếp hạng. Giáo viên bấm **NEXT QUESTION** để tiếp tục,
   hoặc **END GAME** để kết thúc sớm và xem kết quả cuối cùng.

**Phạm vi hiện tại:** phần ngữ pháp trắc nghiệm (Goal Striker cũ) đã được chuyển thành multiplayer
online đầy đủ. Các game cũ (Cool Pair ghép thẻ, Red/Green Light, Word Guess) vẫn hoạt động ở bản
offline 2 người chung 1 máy tại [ese.html](ese.html) — có thể mở rộng thêm sau này theo cùng kiến trúc
server này nếu bạn cần.

File mới được thêm vào dự án:
- `server.js` — server Node.js điều khiển toàn bộ phòng chơi.
- `lessonData.js` — kho câu hỏi ngữ pháp dùng chung cho server.
- `index.html` + `join.js` — trang học sinh (vào bằng domain chính).
- `host.html` + `host.js` — trang điều khiển của giáo viên.
- `online.css` — giao diện cho 2 trang trên.
- `package.json` — khai báo thư viện cần cài (express, socket.io).

## 2. Chạy thử trên máy tính của bạn (trước khi public ra Internet)

Yêu cầu: đã cài [Node.js bản LTS](https://nodejs.org/) (khi cài xong, mở terminal/PowerShell mới).

```powershell
cd "C:\Users\eng127\Desktop\Project English\ESE (English is Easy)"
npm install
npm start
```

Server sẽ chạy ở cổng 3000. Mở 2 tab trình duyệt để thử:
- Giáo viên: http://localhost:3000/host.html
- Học sinh: http://localhost:3000/ (nhập PIN hiện trên trang host + tên bất kỳ)

Nếu PowerShell báo lỗi "running scripts is disabled", dùng `npm.cmd install` và `npm.cmd start`
thay vì `npm install`/`npm start`.

## 3. Đưa lên Internet qua domain `ese.publicvm.com`

`publicvm.com` là kiểu domain Dynamic DNS (DDNS, giống No-IP) — domain này tự động trỏ về địa chỉ
IP mạng nhà bạn. Vì vậy cách đơn giản nhất là **chạy server ngay trên máy tính ở nhà** và mở cổng
mạng cho học sinh truy cập từ xa.

### Bước 1 — Giữ máy chủ chạy ổn định (khuyên dùng PM2)

```powershell
npm install -g pm2
pm2 start server.js --name ese-online
pm2 save
```

PM2 sẽ tự khởi động lại server nếu nó bị crash. (Để PM2 tự chạy lại khi bật máy tính, có thể cần
thêm `pm2-windows-startup`, tìm theo hướng dẫn gói đó nếu cần.)

### Bước 2 — Xác nhận phần mềm DDNS (No-IP/...) đang chạy

Domain `ese.publicvm.com` chỉ đúng khi phần mềm client DDNS trên máy bạn (hoặc trên router) đang
chạy và cập nhật IP công khai hiện tại. Kiểm tra lại phần mềm đó (ví dụ No-IP DUC) đang ở trạng thái
"Connected"/"Updated".

### Bước 3 — Port forwarding trên router

Mặc định server chạy ở cổng **3000**. Học sinh truy cập domain ở cổng 80 (mặc định của http://),
nên cần forward cổng trên router:

- Đăng nhập trang quản trị router (thường là `192.168.1.1` hoặc `192.168.0.1`).
- Tìm mục **Port Forwarding / Virtual Server**.
- Tạo rule: cổng ngoài (External/WAN) **80** → IP máy tính đang chạy server (ví dụ `192.168.1.25`)
  → cổng trong (Internal) **3000**, giao thức TCP.
- Lưu lại.

Cách khác (không cần forward cổng 80): chạy thẳng server ở cổng 80 bằng cách đặt biến môi trường
trước khi start:

```powershell
$env:PORT=80
pm2 start server.js --name ese-online
```

Lưu ý: chạy ở cổng 80 trên Windows có thể cần quyền Administrator.

### Bước 4 — Kiểm tra truy cập thật từ bên ngoài

Dùng điện thoại, **tắt WiFi, bật 4G/5G**, truy cập:
```
http://ese.publicvm.com/            (trang học sinh)
http://ese.publicvm.com/host.html   (trang giáo viên)
```
Nếu vào được nghĩa là học sinh ở bất kỳ mạng WiFi nào khác cũng vào được.

### Bước 5 (tuỳ chọn nhưng nên làm) — Bảo vệ trang Host

Theo mặc định, **bất kỳ ai** biết đường link `/host.html` cũng có thể tự nhận làm host và điều khiển
trò chơi. Để chỉ mình bạn điều khiển được, đặt mật khẩu host:

```powershell
$env:HOST_PASSWORD="matkhaucuaban"
pm2 restart ese-online
```

(Hiện tại trang `host.html` chưa có ô nhập mật khẩu trên giao diện — nếu bạn muốn dùng tính năng
này, báo tôi để tôi thêm ô nhập mật khẩu vào `host.html`/`host.js`.)

## 4. Giới hạn cần biết

- **HTTP chứ chưa phải HTTPS**: trình duyệt có thể hiển thị cảnh báo "Not Secure" — không ảnh hưởng
  đến việc chơi, nhưng nếu muốn gỡ cảnh báo này cần cấu hình HTTPS (ví dụ dùng Caddy hoặc
  Cloudflare Tunnel) — có thể làm thêm sau.
- **Chỉ 1 phòng chơi tại một thời điểm**: phù hợp với 1 lớp học cùng lúc. Nếu cần nhiều lớp chơi
  độc lập cùng lúc (nhiều mã PIN khác nhau), cần nâng cấp kiến trúc thành nhiều phòng (có thể làm
  thêm khi cần).
- **Nếu máy chủ (máy tính nhà bạn) tắt hoặc mất mạng**, học sinh sẽ không vào được — vì đây là mô
  hình tự host tại nhà, không phải cloud.
- Học sinh trùng tên trong cùng 1 phiên sẽ bị từ chối, cần đổi tên khác.

## 5. Quy trình sử dụng cho 1 buổi học

1. Mở `pm2 status` kiểm tra server đang chạy (hoặc double-click chạy `npm start` nếu không dùng PM2).
2. Mở `http://ese.publicvm.com/host.html` trên máy/máy chiếu của bạn.
3. Đọc to mã PIN cho học sinh, gửi link `http://ese.publicvm.com/`.
4. Chờ học sinh vào đủ ở phòng chờ → chọn bài học → bấm START GAME.
5. Điều khiển qua từng câu bằng NEXT QUESTION, có thể bấm SHOW ANSWER NOW nếu muốn chốt sớm.
6. Bấm END GAME để xem bảng xếp hạng cuối, hoặc NEW SESSION để chơi phiên mới (PIN mới) cho lớp sau.
