const sortSelect = (cars) => {
    const option = document.getElementById('selectSort').value;
    switch (option) {
        case "byDefault":
            cars.sort((car1, car2) => car1.id - car2.id);
            break;
        case "sortByPriceUp":
            cars.sort((car1, car2) => car1.price - car2.price);
            break;
        case "sortByPriceDown":
            cars.sort((car1, car2) => car2.price - car1.price);
            break;
        case "sortByNameUP":
            cars.sort((car1, car2) => car2.name > car1.name ? -1 : 1); //don't work
            break;
        case "sortByNameDown":
            cars.sort((car1, car2) => car1.name > car2.name ? -1 : 1);
            break;
        case "sortByYearUp":
            cars.sort((car1, car2) => car2.year > car1.year ? -1 : 1);
            break;
        case "sortByYearDown":
            cars.sort((car1, car2) => car1.year > car2.year ? -1 : 1);
            break;
        case "sortByMileageUp":
            cars.sort((car1, car2) => car2.mileage > car1.mileage ? -1 : 1);
            break;
        case "sortByMileageDown":
            cars.sort((car1, car2) => car1.mileage > car2.mileage ? -1 : 1);
            break;
        case "sortByHorsePowewrUp":
            cars.sort((car1, car2) => car2.hp > car1.hp ? -1 : 1);
            break;
        case "sortByHorsePowewrDown":
            cars.sort((car1, car2) => car1.hp > car2.hp ? -1 : 1);
            break;        
        default:
            break;
    }
    return cars;
}
export default sortSelect;