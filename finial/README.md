## Yêu cầu:
- Hoàn thiện 4 pages theo đúng yêu cầu design
- Liên kết các màn hình lại với nhau
- Tích hợp với API 2 màn Registration, Dashboard
- Màn Login được chỉ cần nhập email và password bấm login là di chuyển sang màn dashboard k cần tích hợp API
- Thời gian làm bài: 12h - 18h
- Sử dụng Create React App typescript (https://create-react-app.dev/docs/adding-typescript/)
- Tạo repo github `reactplus-final` copy example code và làm trên đó

### API Endpoint cho Registration
```text
https://639164380bf398c73aa0a71d.mockapi.io/users
```
Model user 
```
name: string
password: string
email: string
```
- đăng ký user sử dụng method POST

### API Endpoint cho Dashboard
```text
https://639164380bf398c73aa0a71d.mockapi.io/tasks
```
Model user 
```
name: string
complated: boolean
```
- hiển thị danh sách list task sử dung method GET

## Tiêu chí đánh giá:
- CÓ thể di chuyển qua lại giữa các màn hình 
- Đăng ký được user
- Login vào được màn Dashboard
- Hiển thị list task get from API
- Props, State rõ nghĩa 
- Đúng convention
- Code clean 

## Chú ý:
- không copy hoặc chia sẻ source code cho người khác.
