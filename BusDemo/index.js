const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.listen(8800,()=>{
    console.log('Server started on Port 8800')
})

app.post('/api/bus', (req,res)=>{
    try{
        if(req.body.from == 'Lăng chủ tịch Hồ Chí Minh' && req.body.to == 'Đại học Bách Khoa Hà Nội'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 32,
                            from: "147 Nguyễn Thái Học",
                            to: "Đối diện cổng Parabol ĐH Bách KHoa Hà Nội"
                        }],
                        time: 25,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 32,
                            from: "147 Nguyễn Thái Học",
                            to: "Đối diện cổng Parabol ĐH Bách KHoa Hà Nội"
                        }],
                        time: 25,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 32,
                            from: "147 Nguyễn Thái Học",
                            to: "Đối diện cổng Parabol ĐH Bách KHoa Hà Nội"
                        }],
                        time: 25,
                        money: 7000
                    },
                    {
                        car_line: [{
                            number: 02,
                            from: "18A Lê Hồng Phong",
                            to: "95 Lê Thanh Nghị"
                        },
                        {
                            number: 26,
                            from: "170 Lê Thanh Nghị",
                            to: "Gần cổng Parabol ĐH Bách KHoa Hà Nội"
                        }],
                        time: 39,
                        money: 14000
                    },
                ])
            }
        }
        if(req.body.from == 'Lăng chủ tịch Hồ Chí Minh' && req.body.to == 'Đại học Quốc Gia Hà Nội'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 32,
                            from: "Đối diện bệnh viên Xanh Pôn",
                            to: "Gần nhà sách Sư Phạm"
                        }],
                        time: 32,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 32,
                            from: "Đối diện bệnh viên Xanh Pôn",
                            to: "Gần nhà sách Sư Phạm"
                        }],
                        time: 32,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 32,
                            from: "Đối diện bệnh viên Xanh Pôn",
                            to: "Gần nhà sách Sư Phạm"
                        }],
                        time: 32,
                        money: 7000
                    },
                    {
                        car_line: [{
                            number: 18,
                            from: "18A Lê Hồng Phong",
                            to: "399 Đê La Thành"
                        },
                        {
                            number: 49,
                            from: "426 Đe La Thành",
                            to: "Gần nhà sách Sư Phạm"
                        }],
                        time: 51,
                        money: 14000
                    },
                ])
            }
        }
        if(req.body.from == 'Lăng chủ tịch Hồ Chí Minh' && req.body.to == 'Công viên nước Hồ Tây'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 9,
                            from: "18A Lê Hồng Phong",
                            to: "Khu liên cơ quan sở ngành Hà Nội"
                        }],
                        time: 56,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 9,
                            from: "18A Lê Hồng Phong",
                            to: "Khu liên cơ quan sở ngành Hà Nội"
                        }],
                        time: 56,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 9,
                            from: "18A Lê Hồng Phong",
                            to: "Khu liên cơ quan sở ngành Hà Nội"
                        }],
                        time: 56,
                        money: 7000
                    },
                    {
                        car_line: [{
                            number: 18,
                            from: "18A Lê Hồng Phong",
                            to: "138A Giảng Võ"
                        },
                        {
                            number: 25,
                            from: "138A Giảng Võ",
                            to: "Đối diện KĐT Nam Thăng Long"
                        }],
                        time: 65,
                        money: 14000
                    },
                ])
            }
        }
        if(req.body.from == 'Lăng chủ tịch Hồ Chí Minh' && req.body.to == 'Công viên Thống Nhất'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 32,
                            from: "147 Nuyễn Thái Học",
                            to: "358 Lê Duẩn"
                        }],
                        time: 22,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 32,
                            from: "147 Nuyễn Thái Học",
                            to: "358 Lê Duẩn"
                        }],
                        time: 22,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 32,
                            from: "147 Nuyễn Thái Học",
                            to: "358 Lê Duẩn"
                        }],
                        time: 22,
                        money: 7000
                    },
                    {
                        car_line: [{
                            number: 18,
                            from: "18A Lê Hồng Phong",
                            to: "Kim Mã (Nhà Chờ BRT Kim Mã)"
                        },
                        {
                            number: 32,
                            from: "Hè Trước Tòa Nhà PTA - Số 1 Kim Mã",
                            to: "358-360 Lê Duẩn"
                        }],
                        time: 37,
                        money: 14000
                    },
                ])
            }
        }
        if(req.body.from == 'Lăng chủ tịch Hồ Chí Minh' && req.body.to == 'Bệnh viện Thanh Nhàn'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 169,
                            from: "147 Nuyễn Thái Học",
                            to: "33 - 35 Thanh Nhàn"
                        }],
                        time: 37,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 169,
                            from: "147 Nuyễn Thái Học",
                            to: "33 - 35 Thanh Nhàn"
                        }],
                        time: 37,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 169,
                            from: "147 Nuyễn Thái Học",
                            to: "33 - 35 Thanh Nhàn"
                        }],
                        time: 37,
                        money: 7000
                    }
                ])
            }
        }
        if(req.body.from == 'Times City' && req.body.to == 'Đại học Quốc Gia Hà Nội'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 24,
                            from: "423 Minh Khai",
                            to: "1014 Đường Láng"
                        },
                        {
                            number: 16,
                            from: "1014 Đường Láng",
                            to: "Gần nhà sách sư phạm"
                        }],
                        time: 51,
                        money: 14000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 24,
                            from: "423 Minh Khai",
                            to: "1014 Đường Láng"
                        },
                        {
                            number: 16,
                            from: "1014 Đường Láng",
                            to: "Gần nhà sách sư phạm"
                        }],
                        time: 51,
                        money: 14000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 24,
                            from: "423 Minh Khai",
                            to: "1014 Đường Láng"
                        },
                        {
                            number: 16,
                            from: "1014 Đường Láng",
                            to: "Gần nhà sách sư phạm"
                        }],
                        time: 51,
                        money: 14000
                    },
                    {
                        car_line: [{
                            number: 159,
                            from: "KĐT Times City",
                            to: "Qua Cổng Bệnh Viện Thanh Nhàn"
                        },
                        {
                            number: 26,
                            from: "Qua Cổng Bệnh Viện Thanh Nhàn",
                            to: "Gần nhà sách sư phạm"
                        }],
                        time: 65,
                        money: 14000
                    },
                    {
                        car_line: [{
                            number: 19,
                            from: "423 Minh Khai",
                            to: "Platform Dành Riêng Cho Xe Buýt"
                        },
                        {
                            number: 26,
                            from: "Platform Dành Riêng Cho Xe Buýt",
                            to: "Gần nhà sách sư phạm"
                        }],
                        time: 59,
                        money: 14000
                    },
                ])
            }
        }
        if(req.body.from == 'Times City' && req.body.to == 'Đại học Bách Khoa Hà Nội'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Đối Diện 346 Kim Ngưu",
                            to: "Gần Cổng Parabol ĐH Bách Khoa "
                        }],
                        time: 26,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Đối Diện 346 Kim Ngưu",
                            to: "Gần Cổng Parabol ĐH Bách Khoa "
                        }],
                        time: 26,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                   {
                    car_line: [{
                        number: 26,
                        from: "Đối Diện 346 Kim Ngưu",
                        to: "Gần Cổng Parabol ĐH Bách Khoa "
                    }],
                    time: 26,
                    money: 7000
                   }
                ])
            }
        }
        if(req.body.from == 'Times City' && req.body.to == 'Công viên nước Hồ Tây'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 55,
                            from: "KĐT Times City",
                            to: "Đối Diện 596 Lạc Long Quân "
                        }],
                        time: 75,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 55,
                            from: "KĐT Times City",
                            to: "Đối Diện 596 Lạc Long Quân "
                        }],
                        time: 75,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                   {
                    car_line: [{
                        number: 55,
                        from: "KĐT Times City",
                        to: "Đối Diện 596 Lạc Long Quân "
                    }],
                    time: 75,
                    money: 7000
                   }
                ])
            }
        }
        if(req.body.from == 'Times City' && req.body.to == 'Công viên Thống Nhất'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 19,
                            from: "Viện Kinh Tế Và Kỹ Thuật Dệt May",
                            to: "Bãi Đỗ Xe Buýt Trần Khánh Dư "
                        },
                        {
                            number: 3,
                            from: "Trạm Trung Chuyển Xe Buýt Trần Khánh Dư",
                            to: "358-360 Lê Duẩn"
                        }],
                        time: 52,
                        money: 14000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 19,
                            from: "Viện Kinh Tế Và Kỹ Thuật Dệt May",
                            to: "Bãi Đỗ Xe Buýt Trần Khánh Dư "
                        },
                        {
                            number: 3,
                            from: "Trạm Trung Chuyển Xe Buýt Trần Khánh Dư",
                            to: "358-360 Lê Duẩn"
                        }],
                        time: 52,
                        money: 14000
                    }
                ])
            }
            else{
                return res.status(200).json([
                   {
                    car_line: [{
                        number: 19,
                        from: "Viện Kinh Tế Và Kỹ Thuật Dệt May",
                        to: "Bãi Đỗ Xe Buýt Trần Khánh Dư "
                    },
                    {
                        number: 3,
                        from: "Trạm Trung Chuyển Xe Buýt Trần Khánh Dư",
                        to: "358-360 Lê Duẩn"
                    }],
                    time: 52,
                    money: 14000
                   }
                ])
            }
        }
        if(req.body.from == 'Times City' && req.body.to == 'Bệnh viện Thanh Nhàn'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Đối Diện 346 Kim Ngưu",
                            to: "Qua Cổng Bệnh Viện Thanh Nhàn "
                        }],
                        time: 22,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Đối Diện 346 Kim Ngưu",
                            to: "Qua Cổng Bệnh Viện Thanh Nhàn "
                        }],
                        time: 22,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                   {
                    car_line: [{
                        number: 26,
                        from: "Đối Diện 346 Kim Ngưu",
                        to: "Qua Cổng Bệnh Viện Thanh Nhàn "
                    }],
                    time: 22,
                    money: 7000
                   }
                ])
            }
        }
        if(req.body.from == 'Nhà tù Hỏa Lò' && req.body.to == 'Bệnh viện Thanh Nhàn'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 159,
                            from: "Cung VH Hữu Nghị Việt Xô",
                            to: "33 - 35 Thanh Nhàn "
                        }],
                        time: 31,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 159,
                            from: "Cung VH Hữu Nghị Việt Xô",
                            to: "33 - 35 Thanh Nhàn "
                        }],
                        time: 31,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 159,
                            from: "Cung VH Hữu Nghị Việt Xô",
                            to: "33 - 35 Thanh Nhàn "
                        }],
                        time: 31,
                        money: 7000
                    },
                    {
                        car_line: [{
                            number: 2,
                            from: "49 Hai Bà Trưng - Tháp Hà Nội",
                            to: "Bãi Đỗ Xe Buýt Trần Khánh Dư "
                        },
                        {
                            number: 51,
                            from: "Trạm Trung Chuyển Xe Buýt Trần Khánh Dư",
                            to: "Qua Cổng Bệnh Viện Thanh Nhàn "
                        }],
                        time: 32,
                        money: 14000
                    },
                    {
                        car_line: [{
                            number: 40,
                            from: "49 Hai Bà Trưng - Tháp Hà Nội",
                            to: "Học viện tư pháp "
                        },
                        {
                            number: 51,
                            from: "Học viện tư pháp",
                            to: "Qua Cổng Bệnh Viện Thanh Nhàn "
                        }],
                        time: 39,
                        money: 14000
                    },
                ])
            }
        }
        if(req.body.from == 'Nhà tù Hỏa Lò' && req.body.to == 'Đại học Bách Khoa Hà Nội'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 3,
                            from: "80 Trần Hưng Đạo",
                            to: "Đối Diện Cổng Parabol ĐH Bách Khoa Hà Nội"
                        }],
                        time: 31,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 3,
                            from: "80 Trần Hưng Đạo",
                            to: "Đối Diện Cổng Parabol ĐH Bách Khoa Hà Nội"
                        }],
                        time: 31,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 34,
                            from: "Đối Diện Tháp Hà Nội",
                            to: "Gần nhà sách sư phạm"
                        }],
                        time: 34,
                        money: 7000
                    }
                ])
            }
        }
        if(req.body.from == 'Nhà tù Hỏa Lò' && req.body.to == 'Đại học Quốc Gia Hà Nội'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 34,
                            from: "Đối Diện Tháp Hà Nội",
                            to: "Gần nhà sách sư phạm"
                        }],
                        time: 34,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 34,
                            from: "Đối Diện Tháp Hà Nội",
                            to: "Gần nhà sách sư phạm"
                        }],
                        time: 34,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 3,
                            from: "80 Trần Hưng Đạo",
                            to: "Đối Diện Cổng Parabol ĐH Bách Khoa Hà Nội"
                        }],
                        time: 31,
                        money: 7000
                    }
                ])
            }
        }
        if(req.body.from == 'Nhà tù Hỏa Lò' && req.body.to == 'Công viên nước Hồ Tây'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 159,
                            from: "65 Quán Sứ (Đối Diện 80 Quán Sứ)",
                            to: "Đối Diện KĐT Nam Thăng Long"
                        }],
                        time: 57,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 159,
                            from: "65 Quán Sứ (Đối Diện 80 Quán Sứ)",
                            to: "Đối Diện KĐT Nam Thăng Long"
                        }],
                        time: 57,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 159,
                            from: "65 Quán Sứ (Đối Diện 80 Quán Sứ)",
                            to: "Đối Diện KĐT Nam Thăng Long"
                        }],
                        time: 57,
                        money: 7000
                    }
                ])
            }
        }
        if(req.body.from == 'Nhà tù Hỏa Lò' && req.body.to == 'Công viên Thống Nhất'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 3,
                            from: "80 Trần Hưng Đạo",
                            to: "358-360 Lê Duẩn"
                        }],
                        time: 22,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 3,
                            from: "80 Trần Hưng Đạo",
                            to: "358-360 Lê Duẩn"
                        }],
                        time: 22,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 3,
                            from: "80 Trần Hưng Đạo",
                            to: "358-360 Lê Duẩn"
                        }],
                        time: 22,
                        money: 7000
                    }
                ])
            }
        }
        if(req.body.from == 'Công viên Thủ Lệ' && req.body.to == 'Công viên Thống Nhất'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 32,
                            from: "593 - 595 Kim Mã",
                            to: "358-360 Lê Duẩn"
                        }],
                        time: 32,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 32,
                            from: "593 - 595 Kim Mã",
                            to: "358-360 Lê Duẩn"
                        }],
                        time: 32,
                        money: 7000
                    },
                    {
                        car_line: [{
                            number: 25,
                            from: "Số 9 Đào Tấn",
                            to: "Ngân Hàng GP Bank - Số 7 Đào Duy Anh"
                        }],
                        time: 40,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 32,
                            from: "593 - 595 Kim Mã",
                            to: "358-360 Lê Duẩn"
                        }],
                        time: 32,
                        money: 7000
                    },
                    {
                        car_line: [{
                            number: 25,
                            from: "Số 9 Đào Tấn",
                            to: "Ngân Hàng GP Bank - Số 7 Đào Duy Anh"
                        }],
                        time: 40,
                        money: 7000
                    }
                ])
            }
        }
        if(req.body.from == 'Công viên Thủ Lệ' && req.body.to == 'Công viên nước Hồ Tây'){
                if(req.body.filter == 'time'){
                    return res.status(200).json([
                        {
                            car_line: [{
                                number: 09,
                                from: "Dốc Tập Lái - 202 Đường Bưởi",
                                to: "Khu Liên Cơ Quan Sở Ngành Hà Nội"
                            }],
                            time: 46,
                            money: 7000
                        }
                    ])
                }
                else if(req.body.filter == 'money'){
                    return res.status(200).json([
                        {
                            car_line: [{
                                number: 09,
                                from: "Dốc Tập Lái - 202 Đường Bưởi",
                                to: "Khu Liên Cơ Quan Sở Ngành Hà Nội"
                            }],
                            time: 46,
                            money: 7000
                        }
                    ])
                }
                else{
                    return res.status(200).json([
                        {
                            car_line: [{
                                number: 09,
                                from: "Dốc Tập Lái - 202 Đường Bưởi",
                                to: "Khu Liên Cơ Quan Sở Ngành Hà Nội"
                            }],
                            time: 46,
                            money: 7000
                        }
                    ])
                }
                
        }
        if(req.body.from == 'Công viên Thủ Lệ' && req.body.to == 'Đại học Bách Khoa Hà Nội'){
                    if(req.body.filter == 'time'){
                        return res.status(200).json([
                            {
                                car_line: [{
                                    number: 25,
                                    from: "Số 9 Đào Tấn (Đối Diện 22 Đào Tấn)",
                                    to: "Đối Diện Cổng Parabol ĐH Bách Khoa Hà Nội"
                                }],
                                time: 33,
                                money: 7000
                            }
                        ])
                    }
                    else if(req.body.filter == 'money'){
                        return res.status(200).json([
                            {
                                car_line: [{
                                    number: 25,
                                    from: "Số 9 Đào Tấn (Đối Diện 22 Đào Tấn)",
                                    to: "Đối Diện Cổng Parabol ĐH Bách Khoa Hà Nội"
                                }],
                                time: 33,
                                money: 7000
                            }
                        ])
                    }
        }
        if(req.body.from == 'Công viên Thủ Lệ' && req.body.to == 'Đại học Quốc Gia Hà Nội'){
                    if(req.body.filter == 'time'){
                        return res.status(200).json([
                            {
                                car_line: [{
                                    number: 34,
                                    from: "10 Đào Tấn - Viện Vật Lý",
                                    to: "Bệnh Viện Đa Khoa Y Học Cổ Truyền "
                                }],
                                time: 33,
                                money: 7000
                            }
                        ])
                    }
                    else if(req.body.filter == 'money'){
                        return res.status(200).json([
                            {
                                car_line: [{
                                    number: 34,
                                    from: "10 Đào Tấn - Viện Vật Lý",
                                    to: "Bệnh Viện Đa Khoa Y Học Cổ Truyền "
                                }],
                                time: 33,
                                money: 7000
                            }
                        ])
                    }
                    else{
                        return res.status(200).json([
                            {
                                car_line: [{
                                    number: 34,
                                    from: "10 Đào Tấn - Viện Vật Lý",
                                    to: "Bệnh Viện Đa Khoa Y Học Cổ Truyền "
                                }],
                                time: 33,
                                money: 7000
                            }
                        ])
                    }
        }
        if(req.body.from == 'Công viên Thủ Lệ' && req.body.to == 'Bệnh viện Thanh Nhàn'){
                    if(req.body.filter == 'time'){
                        return res.status(200).json([
                            {
                                car_line: [{
                                    number: 159,
                                    from: "Trường Quốc Tế Hà Nội - 48 Liễu Giai",
                                    to: "33 - 35 Thanh Nhàn"
                                }],
                                time: 46,
                                money: 7000
                            }
                        ])
                    }
                    else if(req.body.filter == 'money'){
                        return res.status(200).json([
                            {
                                car_line: [{
                                    number: 159,
                                    from: "Trường Quốc Tế Hà Nội - 48 Liễu Giai",
                                    to: "33 - 35 Thanh Nhàn"
                                }],
                                time: 46,
                                money: 7000
                            }
                        ])
                    }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 159,
                            from: "Trường Quốc Tế Hà Nội - 48 Liễu Giai",
                            to: "33 - 35 Thanh Nhàn"
                        }],
                        time: 46,
                        money: 7000
                    }
                ])
            }
        }
        if(req.body.from == 'Sân vận động quốc gia Mỹ Đình' && req.body.to == 'Bệnh viện Thanh Nhàn'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Điểm Đỗ Xe Buýt SVĐ Quốc Gia",
                            to: "33 - 35 Thanh Nhàn"
                        }],
                        time: 54,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Điểm Đỗ Xe Buýt SVĐ Quốc Gia",
                            to: "33 - 35 Thanh Nhàn"
                        }],
                        time: 54,
                        money: 7000
                    },
                    {
                        ccar_line: [{
                            number: 30,
                            from: "BĐX Sân Vận Động Mỹ Đình",
                            to: "Tập Thể E6 Quỳnh Mai - Kim Ngưu"
                        }],
                        time: 75,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Điểm Đỗ Xe Buýt SVĐ Quốc Gia",
                            to: "33 - 35 Thanh Nhàn"
                        }],
                        time: 54,
                        money: 7000
                    },
                    {
                        ccar_line: [{
                            number: 30,
                            from: "BĐX Sân Vận Động Mỹ Đình",
                            to: "Tập Thể E6 Quỳnh Mai - Kim Ngưu"
                        }],
                        time: 75,
                        money: 7000
                    }
                ])
            }
        }
        if(req.body.from == 'Sân vận động quốc gia Mỹ Đình' && req.body.to == 'Đại học Bách Khoa Hà Nội'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Điểm Đỗ Xe Buýt SVĐ Quốc Gia",
                            to: "ĐH Bách Khoa (Điểm Cuối Tuyến 31)"
                        }],
                        time: 49,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Điểm Đỗ Xe Buýt SVĐ Quốc Gia",
                            to: "ĐH Bách Khoa (Điểm Cuối Tuyến 31)"
                        }],
                        time: 49,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Điểm Đỗ Xe Buýt SVĐ Quốc Gia",
                            to: "ĐH Bách Khoa (Điểm Cuối Tuyến 31)"
                        }],
                        time: 49,
                        money: 7000
                    }
                ])
            }
        }
        if(req.body.from == 'Sân vận động quốc gia Mỹ Đình' && req.body.to == 'Đại học Bách Khoa Hà Nội'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Điểm Đỗ Xe Buýt SVĐ Quốc Gia",
                            to: "Số 197-199 Xuân Thủy "
                        }],
                        time: 50,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Điểm Đỗ Xe Buýt SVĐ Quốc Gia",
                            to: "Số 197-199 Xuân Thủy "
                        }],
                        time: 50,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Điểm Đỗ Xe Buýt SVĐ Quốc Gia",
                            to: "Số 197-199 Xuân Thủy "
                        }],
                        time: 50,
                        money: 7000
                    }
                ])
            }
        }
        if(req.body.from == 'Sân vận động quốc gia Mỹ Đình' && req.body.to == 'Công viên Thống Nhất'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Điểm Đỗ Xe Buýt SVĐ Quốc Gia",
                            to: "Ngân Hàng GP Bank - Số 7 Đào Duy Anh "
                        }],
                        time: 33,
                        money: 7000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Điểm Đỗ Xe Buýt SVĐ Quốc Gia",
                            to: "Ngân Hàng GP Bank - Số 7 Đào Duy Anh "
                        }],
                        time: 33,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Điểm Đỗ Xe Buýt SVĐ Quốc Gia",
                            to: "Ngân Hàng GP Bank - Số 7 Đào Duy Anh "
                        }],
                        time: 33,
                        money: 7000
                    }
                ])
            }
        }
        if(req.body.from == 'Sân vận động quốc gia Mỹ Đình' && req.body.to == 'Công viên nước Hồ Tây'){
            if(req.body.filter == 'time'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Điểm Đỗ Xe Buýt SVĐ Quốc Gia",
                            to: "Số 9 Hồ Tùng Mậu "
                        },
                        {
                            number: 13,
                            from: "Số 9 Hồ Tùng Mậu",
                            to: "Công Viên Nước Hồ Tây "
                        }],
                        time: 68,
                        money: 14000
                    }
                ])
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Điểm Đỗ Xe Buýt SVĐ Quốc Gia",
                            to: "Số 9 Hồ Tùng Mậu "
                        },
                        {
                            number: 13,
                            from: "Số 9 Hồ Tùng Mậu",
                            to: "Công Viên Nước Hồ Tây "
                        }],
                        time: 68,
                        money: 14000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: [{
                            number: 26,
                            from: "Điểm Đỗ Xe Buýt SVĐ Quốc Gia",
                            to: "Số 9 Hồ Tùng Mậu "
                        },
                        {
                            number: 13,
                            from: "Số 9 Hồ Tùng Mậu",
                            to: "Công Viên Nước Hồ Tây "
                        }],
                        time: 68,
                        money: 14000
                    }
                ])
            }
        }
    }
    catch(err){
        res.status(500).json(err)
    }
})

