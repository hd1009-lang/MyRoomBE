# My Room - Phần dành cho server

Một web app tào lao quản lý các công việc cần được quản lý , làm màu là chính 😎

## Hệ thống sử dụng

> 🚀 Nodejs - ExpressJs
>
> 🏪 Mongodb - mongoose
>
> 💄   Học cách sử dụng eslint, prettier
>
> 🔐  Học cách sử dụng JWT

## UML

### 🗺 Tổng quát

![tongquat](https://res.cloudinary.com/tp-hcm/image/upload/v1631110128/product/Untitled_Diagram-Page-1.drawio_mhrb03.png)

### 🌎 Quản lý Web Profile

![Untitled Diagram-Page-2.drawio](https://res.cloudinary.com/tp-hcm/image/upload/v1631110576/product/Untitled_Diagram-Page-2.drawio_kssiej.png)

### 📃 Quản lý tài liệu

## Danh sách các API

| Mã            | Tên                              | Phương thức |
| ------------- | -------------------------------- | ----------- |
| LG01          | Đăng nhập                        | POST        |
| LTTW01        | Lấy danh sách thông tin timeline | GET         |
| LTTW02        | Lấy danh sách thông tin Project  | GET         |
| LTTW03        | Lấy thông tin cá nhân            | GET         |
| ATTW01        | Thêm vào timeline                | POST        |
| ADTTW02       | Thêm project mới                 | POST        |
| ADTTW03       | Thêm thông tin cá nhân           | POST        |
| UPTTW01       | Cập nhật thông tin timeline      | POST        |
| UDTTW02       | Cập nhật thông tin project       | POST        |
| UDTTW03       | Cập nhật thông tin cá nhân       | POST        |
| HDTTW01       | Xoá(Ẩn 1 timeline)               | POST        |
| HDTTW02       | Xoá 1 project                    | POST        |
| HDTTW03       | Xoá 1 thông tin cá nhân          | POST        |
| Updating..... |                                  |             |

## 🌎 Quản lý web Profile

Tại đây sẽ quản lý các thông tin, và thực hiện các thao tác cập nhật thông tin cá nhân như con đường học vấn, các công ty đã làm, các dự án nhỏ đã làm, các thông tin cá nhân.

### 🥌 Chi tiết các API

#### LG01: Đăng nhập hệ thống

Khi vào hệ thống sẽ yêu cầu đăng nhập.

**URL**

> /login

**METHOD**

`POST`

**Request**

| Thuộc tính | Kiểu   | Bắt buộc                                                     | Mô tả                           |
| ---------- | ------ | ------------------------------------------------------------ | ------------------------------- |
| password   | string | Ít nhất 6 kí tự<br />Ít nhất 2 kí tự hoa<br />Ít nhất 2 thường<br />Ít nhất 1 kí tự đặc biệt | Mật khẩu đăng nhập vào hệ thống |

**Request mẫu**

```json
{
    "password":"123abB@@"
}
```

**Response**

| Thuộc tính | Kiểu   | Bắt buộc | Mô tả                                |
| ---------- | ------ | -------- | ------------------------------------ |
| Thông báo  | string |          | Thông báo lỗi khi đăng nhập thất bại |

**Response mẫu**

```json
{
    "message":"Đăng nhập thất bại, tài khoản hoặc mật khẩu sai"
}
```

