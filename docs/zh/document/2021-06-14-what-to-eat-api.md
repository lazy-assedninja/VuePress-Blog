---
title: WhatToEat - API
date: 2021-06-14
tags:
 - WhatToEat
 - API
categories:
 - Document
---

## 1. DB
### UserAccount
Name|Type|Descriptions
:-|:-|:-
id|int(pk)|-
name|varchar(50)|使用者名稱
picture|varchar(200)|頭像檔名
email|varchar(100)(unique)|電子信箱
password|varchar(100)|密碼
role|int|角色(0=使用者, 1=管理者, 2=店家)
account_type|varchar(50)|帳號種類
verification_code|varchar(10)|驗證碼
permission_time|datetime|權限到期日
create_date|datetime|創建日期
modify_date|datetime|修改日期

### LineAccount
Name|Type|Descriptions
:-|:-|:-
id|int(pk)|-
display_name|varchar(50)|使用者名稱
picture_url|varchar()|頭像URL
user_id|varchar()(unique)|使用者編號
status_message|varchar()|使用者狀態
follow_status|boolean|追蹤狀態
what_to_eat_account|WhatToEatUserAccount(fk)|WhatToEat連結之帳號
binging_status|varchar()|綁定流程狀態
create_date|datetime|創建日期
modify_date|datetime|修改日期

### Classify
Name|Type|Descriptions
:-|:-|:-
id|int(pk)|-
name|varchar(50)|種類名稱
tag_color|varchar()|標籤色號

### Tag
Name|Type|Descriptions
:-|:-|:-
id|int(pk)|-
name|varchar(50)|標籤名稱

### Store
Name|Type|Descriptions
:-|:-|:-
id|int(pk)|-
place_id|varchar(50)|google place編號
name|varchar(50)|店家名稱
address|varchar(50)|地址
phone|varchar(30)|電話
picture|varchar(200)|頭像檔名
favorite|WhatToEatUserAccount(m2m)|喜愛之使用者
classify|Classify(m2m)|種類
tag|Tag(fk)|標籤
latitude|varchar(30)|緯度
longitude|varchar(30)|經度
star|float(0)|星數
website|varchar(300)|帳號種類
create_date|datetime|創建日期
modify_date|datetime|修改日期

### Comment
Name|Type|Descriptions
:-|:-|:-
id|int(pk)|-
store|Store(fk)|店家之留言
user|WhatToEatUserAccount(fk)|留言之使用者
star_amount|float(0)|評論星數
content|varchar(200)|評論內容
create_date|datetime|創建日期

### Post
Name|Type|Descriptions
:-|:-|:-
id|int(pk)|-
store|Store(fk)|店家之貼文
title|varchar(50)|貼文標題
content|varchar(200)|貼文內容
create_date|datetime|創建日期

### Reservation
Name|Type|Descriptions
:-|:-|:-
id|int(pk)|-
store|Store(fk)|預約之店家
user|WhatToEatUserAccount(fk)|預約之使用者
name|varchar(50)|姓名
phone|varchar(20)|電話
amount|varchar(5)|人數
reservation_time|varchar(100)|預約時間
create_date|datetime|創建日期

### ReservationInformation
Name|Type|Descriptions
:-|:-|:-
id|int(pk)|-
store|Store(fk)|預約之店家
user|WhatToEatUserAccount(fk)|預約之使用者

### Discount
Name|Type|Descriptions
:-|:-|:-
id|int(pk)|-
store|Store(fk)|折扣之店家
title|varchar(50)|折扣標題
picture|varchar(100)|折扣照片檔名
discount|varchar(50)|折數
deadline|varchar(50)|截止日期
notice|varchar(200)|注意事項

### Report
Name|Type|Descriptions
:-|:-|:-
id|int(pk)|-
store|Store(fk)|回報之店家
user|WhatToEatUserAccount(fk)|回報之使用者
content|varchar(200)|回報內容
create_date|datetime|創建日期

### SystemLog
Name|Type|Descriptions
:-|:-|:-
id|int(pk)|-
application|varchar(50)|報錯之APP
logged|datetime|錯誤發生日期
level|varchar(50)|報錯之種類
message|varchar()|報錯內容
logger|varchar(250)|報錯之功能
call_site|varchar(250)|
exception|varchar()|


## 2. APIs
URL|Descriptions
:-|:-|:-
User/Login|使用者登入
User/ThreePartLogin|第三方登入
User/SignUp|使用者註冊
User/UpdatePassword|更改密碼
User/SendVerificationCodeEmail|發送驗證碼Email
User/ResetPassword|重設密碼
User/UpdateAccountPermissionDeadline|更新店家權限時限
User/UpdatePicture|更新圖片
User/GetPicture|取得圖片URL
Stores/GetClassifyList|取得標籤列表
Stores/GetStoreList|取得店家列表
Stores/StoreSearch|店家搜尋
Stores/GetTabList|取得符合標籤之店家列表
Stores/CreateComment|新增留言
Stores/GetCommentList|取得留言列表
Stores/CreatePost|新增貼文
Stores/GetPostList|取得貼文列表
Stores/CreateReservation|新增預約
Stores/GetReservationList|取得預約列表
Stores/GetReservationInformation|取得預約資訊
Stores/DeleteReservation|刪除預約
Stores/GetDiscountList|取得折扣列表
Stores/AddToFavorite|新增收藏
Stores/CancelFavorite|取消收藏
Stores/GetFavoriteList|取得收藏列表
Stores/GetHistoryList|取得歷史列表
Stores/CreateReport|新增回報
Stores/GetReportList|取得回報列表
Picture/Create|新增圖片

### User/Login
>request:
>```json
>{
>    "email": "",
>    "password": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1,
>    "email": "",
>    "name": "",
>    "picture": "",
>    "role": 0, 
>    "accountType": "",
>    "permissionTime": ""
>}
>```

### User/ThreePartLogin
>request:
>```json
>{
>    "email": "",
>    "name": "",
>    "accountType": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1,
>    "email": "",
>    "name": "",
>    "picture": "",
>    "role": 1,
>    "accountType": "",
>    "permissionTime": ""
>}
>```

### User/SignUp
>request:
>```json
>{
>    "email": "",
>    "password": "",
>    "name": "",
>    "role": "",
>    "accountType": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1
>}
>```

### User/UpdatePassword
>request:
>```json
>{
>    "email": "",
>    "oldPassword": "",
>    "newPassword": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1
>}
>```

### User/SendVerificationCodeEmail
>request:
>```json
>{
>    "email": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1,
>    "verificationCode": ""
>}
>```

### User/ResetPassword
>request:
>```json
>{
>    "email": "",
>    "verificationCode": "",
>    "newPassword": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1
>}
>```

### User/UpdateAccountPermissionDeadline
>request:
>```json
>{
>    "email": "",
>    "role": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1,
>    "permissionTime": ""
>}
>```

### User/UpdatePicture
>request:
>```json
>{
>    "email": "",
>    "picture": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1
>}
>```

### User/GetPicture
>request:
>```json
>{
>    "email": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1,
>    "picture": ""
>}
>```

### Stores/GetClassifyList
>response:
>```json
>{
>    "result": 1,
>    "classifications": [
>        {
>            "name": "",
>            "tagColor": ""
>        }
>    ]
>}
>```

### Stores/GetStoreList
>request:
>```json
>{
>    "email": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1,
>    "stores": [
>        {
>            "name": "",
>            "address": "",
>            "picture": "",
>            "phone": "",
>            "website": "",
>            "classification": [
>                {
>                    "name": "",
>                    "tagColor": ""
>                }
>            ],
>            "tag": "",
>            "isFavorite": true,
>            "latitude": "",
>            "longitude": "",
>            "star": ""
>        }
>    ]
>}
>```

### Stores/StoreSearch
>request:
>```json
>{
>    "email": "",
>    "kind": "",
>    "keywords": [""]
>}
>```
>
>response:
>```json
>{
>    "result": 1,
>    "stores": [
>        {
>            "name": "",
>            "address": "",
>            "picture": "",
>            "phone": "",
>            "website": "",
>            "classification": [
>                {
>                    "name": "",
>                    "tagColor": ""
>                }
>            ],
>            "tag": "",
>            "isFavorite": true,
>            "latitude": "",
>            "longitude": "",
>            "star": ""
>        }
>    ]
>}
>```

### Stores/GetTabList
>request:
>```json
>{
>    "email": "",
>    "tag": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1,
>    "stores": [
>        {
>            "name": "",
>            "address": "",
>            "picture": "",
>            "phone": "",
>            "website": "",
>            "classification": [
>                {
>                    "name": "",
>                    "tagColor": ""
>                }
>            ],
>            "tag": "",
>            "isFavorite": true,
>            "latitude": "",
>            "longitude": "",
>            "star": ""
>        }
>    ]
>}
>```

### Stores/CreateComment
>request:
>```json
>{
>    "storeName": "",
>    "userEmail": "",
>    "content": "",
>    "starAmount": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1
>}
>```

### Stores/GetCommentList
>request:
>```json
>{
>    "storeName": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1,
>    "comments": [
>        {
>            "id": "",
>            "userName": "",
>            "userPicture": "",
>            "content": "",
>            "starAmount": "",
>            "createDate": ""
>        }
>    ]
>}
>```

### Stores/CreatePost
>request:
>```json
>{
>    "storeName": "",
>    "title": "",
>    "content": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1
>}
>```

### Stores/GetPostList
>request:
>```json
>{
>    "storeName": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1,
>    "posts": [
>        {
>            "id": "",
>            "title": "",
>            "content": "",
>            "createDate": ""
>        }
>    ]
>}
>```

### Stores/CreateReservation
>request:
>```json
>{
>    "storeName": "",
>    "email": "",
>    "name": "",
>    "phone": "",
>    "amount": "",
>    "reservationTime": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1
>}
>```

### Stores/GetReservationList
>request:
>```json
>{
>    "kind": "",
>    "information": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1,
>    "reservations": [
>        {
>            "id": "",
>            "name": "",
>            "phone": "",
>            "amount": "",
>            "reservationTime": "",
>            "createDate": ""
>        }
>    ]
>}
>```

### Stores/GetReservationInformation
>request:
>```json
>{
>    "email": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1,
>    "reservationInformation": ""
>}
>```

### Stores/DeleteReservation
>request:
>```json
>{
>    "id": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1
>}
>```

### Stores/GetDiscountList
>request:
>```json
>{
>    "email": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1,
>    "discounts": [
>        {
>            "storeName": "",
>            "title": "",
>            "picture": "",
>            "discount": "",
>            "deadline": "",
>            "notice": ""
>        }
>    ]
>}
>```

### Stores/AddToFavorite
>request:
>```json
>{
>    "email": "",
>    "storeName": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1
>}
>```

### Stores/CancelFavorite
>request:
>```json
>{
>    "email": "",
>    "storeName": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1
>}
>```

### Stores/GetFavoriteList
>request:
>```json
>{
>    "email": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1,
>    "stores": [
>        {
>            "name": "",
>            "address": "",
>            "picture": "",
>            "phone": "",
>            "website": "",
>            "tag": "",
>            "isFavorite": true,
>            "latitude": "",
>            "longitude": "",
>            "star": ""
>        }
>    ]
>}
>```

### Stores/GetHistoryList
>request:
>```json
>{
>    "email": "",
>    "names": [""]
>}
>```
>
>#### response:
>```json
>{
>    "result": 1,
>    "stores": [
>        {
>            "name": "",
>            "address": "",
>            "picture": "",
>            "phone": "",
>            "website": "",
>            "tag": "",
>            "isFavorite": true,
>            "latitude": "",
>            "longitude": "",
>            "star": ""
>        }
>    ]
>}
>```

### Stores/CreateReport
>request:
>```json
>{
>    "storeName": "",
>    "email": "",
>    "content": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1
>}
>```

### Stores/GetReportList
>response:
>```json
>{
>    "result": 1,
>    "reports": [
>        {
>            "id": "",
>            "userName": "",
>            "userPicture": "",
>            "storeName": "",
>            "content": "",
>            "createDate": ""
>        }
>    ]
>}
>```

### Picture/Create
>request:
>```json
>{
>    "file_name": "",
>    "sub_file_name": "",
>    "file": "",
>    "type": ""
>}
>```
>
>response:
>```json
>{
>    "result": 1,
>    "picturePath": "",
>    "fullPath": ""
>}
>```