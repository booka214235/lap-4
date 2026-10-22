const express=require("express");
const app=express();
app.use(express.json());

const port = 8000;
const Hostname = '127.0.0.1';

const trips = [
    { id: 1, destination: "Paris", Country: "france", cost: 400},
    { id: 1, destination: "LN", Country: "EN", cost: 100},
    { id: 1, destination: "CA", Country: "EG", cost: 200}
];

app.get('/trips', (req,res)=> {
    res.status(200).json({
        status: 'success',
        message: 'trip retrived successfully',
        results: trips.length,
        data: trips
    });

});

app.post('/trips', (req, res) => {
    const {destination, country, cost, description} = req.body;
    if (!destination || !country || cost == null){
        return res.status(400).json({
            status: 'fail',
            message: 'please provide all required fields'

        });
    }

    const newTrip = {
        id: trips.length +1,
        destination,
        country,
        cost,
        description: description || "no description avilable"
    };

    trips.push(newTrip);

    res.status(201).json({
        status: 'success',
        message: 'trip created succ',
        data: newTrip
    });



});

app.get('/trips/:id',(req, res)=>{
    const id = Number(req.params.id);

    for (let i = 0; i< trips.lemgth; i++){
        if (trips[i].id == id){
            return res.status(200).json({
                status: 'success',
                data: trips[i]
            });
        }
    }


    return res.status(404).json({
        status: 'fail',
        message: 'trip not found'
    });
 });

 app.listen(port, Hostname, ()=>{
    console.log('server is running on port 8000');

 });



// app.get("/booka", (req,res)=>{
//     res.send("hello");
// })


// app.post("/modify", (req,res)=>{
//     const name=req.body.name;
//     const modified= name.toUpperCase();
//     if(!name)
//     {
//         return res.status(400).json({
//             error:"please enter a name"
//         })
//     }
    
//     res.json({
//         original:name,
//         modifiedText:modified
//     })

// })



// app.listen(8080, "127.0.0.1", ()=>{console.log("running")})

