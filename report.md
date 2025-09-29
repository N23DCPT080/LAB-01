# Lab 03 – UML Thiết kế (Use Case & Sequence Diagram)

## 1. Giới thiệu
Lab 03 nhằm mục tiêu mô tả chi tiết luồng tương tác trong hệ thống ATM mini project bằng sơ đồ UML:
- **Use Case Diagram**: mô tả các chức năng chính và tác nhân.
- **Sequence Diagram**: mô tả chi tiết chuỗi tương tác cho một quy trình nghiệp vụ.

## 2. Use Case Diagram
### Actors:
- **Customer (Khách hàng)**: người sử dụng ATM.

### Use Cases chính:
- Đăng nhập / Xác thực PIN
- Rút tiền
- Kiểm tra số dư

### Sơ đồ Use Case:
![Use Case Diagram](usecase.png)


## 3. Sequence Diagram – Withdraw Cash
### Đối tượng tham gia:
- **Customer**: tác nhân khởi tạo giao dịch.
- **ATM UI**: giao diện máy ATM.
- **Controller**: xử lý luồng nghiệp vụ.
- **BankService**: dịch vụ giao tiếp với hệ thống ngân hàng.
- **Account**: thông tin tài khoản khách hàng.

### Luồng chính:
1. Customer chọn chức năng **Withdraw Cash**.
2. ATM UI yêu cầu nhập số tiền cần rút.
3. Controller gửi yêu cầu xử lý đến BankService.
4. BankService truy vấn Account để kiểm tra số dư.
5. Nếu số dư đủ:
   - Trừ tiền trong Account.
   - Ghi nhận Transaction.
   - Trả kết quả thành công về cho Customer.
6. Nếu số dư không đủ:
   - BankService trả lỗi.
   - ATM UI thông báo cho Customer.

## 4. Kết quả
- Hoàn thiện sơ đồ Use Case và Sequence Diagram cho chức năng **Withdraw Cash**.
- Làm rõ vai trò từng đối tượng và các luồng thông điệp.
- Cơ sở để phát triển tiếp **Class Diagram và Coding Module Withdraw** trong các lab tiếp theo.
