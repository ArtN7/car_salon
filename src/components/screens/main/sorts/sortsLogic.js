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
        case "sortByAZ":
            cars.sort((car1, car2) => car1.name > car2.name ? 1 : -1);
            break;
        case "sortByZA":
            cars.sort((car1, car2) => car1.name > car2.name ? -1 : 1);
            break;
        default:
            break;
    }
    return cars;
}
export default sortSelect;