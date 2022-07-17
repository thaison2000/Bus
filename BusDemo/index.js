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
                return res.status(200).json({
                    car_line: 32,
                    time: 25,
                    money: 7000
                })
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json({
                    car_line: 32,
                    time: 25,
                    money: 7000
                })
            }
            else{
                return res.status(200).json([
                    {
                        car_line: 32,
                        time: 25,
                        money: 7000
                    },
                    {
                        car_line: [02,26],
                        time: 39,
                        money: 14000
                    },
                ])
            }
        }
        if(req.body.from == 'Times City' && req.body.to == 'Đại học Quốc Gia Hà Nội'){
            if(req.body.filter == 'time'){
                return res.status(200).json({
                    car_line: 26,
                    time: 51,
                    money: 7000
                })
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json({
                    car_line: 26,
                    time: 51,
                    money: 7000
                })
            }
            else{
                return res.status(200).json([
                    {
                        car_line: 26,
                        time: 51,
                        money: 7000
                    },
                    {
                        car_line: [159,32],
                        time: 65,
                        money: 14000
                    },
                    {
                        car_line: [19,16],
                        time: 59,
                        money: 14000
                    },
                ])
            }
        }
        if(req.body.from == 'Nhà tù Hỏa Lò' && req.body.to == 'Công viên nước Hồ Tây'){
            if(req.body.filter == 'time'){
                return res.status(200).json({
                    car_line: 86,
                    time: 64,
                    money: 7000
                })
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json({
                    car_line: 86,
                    time: 64,
                    money: 7000
                })
            }
            else{
                return res.status(200).json([
                    {
                        car_line: 86,
                        time: 64,
                        money: 7000
                    },
                    {
                        car_line: [322,55],
                        time: 413,
                        money: 14000
                    },
                    {
                        car_line: [2,31],
                        time: 400,
                        money: 14000
                    },
                ])
            }
        }
        if(req.body.from == 'Công viên Thủ Lệ' && req.body.to == 'Công viên Thống Nhất'){
            if(req.body.filter == 'time'){
                return res.status(200).json({
                    car_line: 32,
                    time: 32,
                    money: 7000
                })
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: 32,
                        time: 32,
                        money: 7000
                    },
                    {
                        car_line: 26,
                        time: 40,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: 32,
                        time: 32,
                        money: 7000
                    },
                    {
                        car_line: 26,
                        time: 40,
                        money: 7000
                    }
                ])
            }
        }
        if(req.body.from == 'Sân vận động quốc gia Mỹ Đình' && req.body.to == 'Bệnh viện Thanh Nhàn'){
            if(req.body.filter == 'time'){
                return res.status(200).json({
                    car_line: 26,
                    time: 54,
                    money: 7000
                })
            }
            else if(req.body.filter == 'money'){
                return res.status(200).json([
                    {
                        car_line: 26,
                        time: 54,
                        money: 7000
                    },
                    {
                        car_line: 30,
                        time: 75,
                        money: 7000
                    }
                ])
            }
            else{
                return res.status(200).json([
                    {
                        car_line: 26,
                        time: 54,
                        money: 7000
                    },
                    {
                        car_line: 30,
                        time: 75,
                        money: 7000
                    },
                    {
                        car_line: [104,51],
                        time: 81,
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

