export const movieFilter = (cars, word) => {

    let filterdCars = [];
    cars.forEach(car => {
        if (car.brand.toLowerCase().includes(word.toLowerCase()) || car.model.toLowerCase().includes(word.toLowerCase())) {
            filterdCars.push(car);
        }
    });

    return filterdCars;

}
