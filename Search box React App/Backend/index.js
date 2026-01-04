import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: "Wooden",
            table: "Dining",
            image: "https://via.placeholder.com/300?text=Dining+Table+1",
            price: 8500
        },
        {
            id: 2,
            name: "Modern Study Table",
            table: "Study",
            image: "https://via.placeholder.com/300?text=Study+Table+2",
            price: 4200
        },
        {
            id: 3,
            name: "Office Workstation Table",
            table: "Office",
            image: "https://via.placeholder.com/300?text=Office+Table+3",
            price: 9600
        },
        {
            id: 4,
            name: "Glass Coffee Table",
            table: "Coffee",
            image: "https://via.placeholder.com/300?text=Coffee+Table+4",
            price: 3800
        },
        {
            id: 5,
            name: "Round Dining Table",
            table: "Dining",
            image: "https://via.placeholder.com/300?text=Dining+Table+5",
            price: 10500
        },
        {
            id: 30,
            name: "Adjustable Study Table",
            table: "Study",
            image: "https://via.placeholder.com/300?text=Study+Table+30",
            price: 3600
        }
    ]

    if(req.query.search){
        const filterProducts =  products.filter((product) => product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }

    setTimeout(() =>{
        res.send((products));
    }, 3000)

})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})