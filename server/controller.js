const houses = require('./db.json');
let id = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        const { id } = req.params;
        const tgtIndex = houses.findIndex(function(houseObj) {
            return houseObj.id === parseInt(id);
        });

        if (tgtIndex === -1) {
            res.status(404).send('Wrong house!')
        } else {
            houses.splice(tgtIndex, 1);
            res.status(200).send(houses);
        }
    },
    createHouse: (req, res) => {
        const { address, price, imageURL } = req.body;

        const newHouse = {
            id,
            address,
            price,
            imageURL
        }
        houses.push(newHouse);
        id++;

        res.status(200).send(houses);

    },
    updateHouse: (req, res) => {
        const { id } = req.params;
        const { type } = req.body;

        const tgtIndex = houses.findIndex(function(houseObj) {
            return houseObj.id === parseInt(id);
        })

        const tgtHouseObj = houses[tgtIndex];

        if (type === 'minus') {
            if (tgtHouseObj.price > 30000) {
                tgtHouseObj.price -= 10000;
            }
            res.status(200).send(houses);

        } else if (type === 'plus') {

            tgtHouseObj.price += 10000;
            res.status(200).send(houses);

        } else {
            res.status(400).send('What did you do? Somthing went wrong!');
        }
    }


};