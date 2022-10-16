let cities = ["Amsterdam", "Kiev", "Zurich", "Prague", "Berlin", "Barcelona"];
//ticket availaible of routes
let routes =
    [
        ['Paris', 'Skopje'],
        ['Zurich', 'Amsterdam'],
        ['Prague', 'Zurich'],
        ['Barcelona', 'Berlin'],
        ['Kiev', 'Prague'],
        ['Skopje', 'Paris'],
        ['Amsterdam', 'Barcelona'],
        ['Berlin', 'Kiev'],
        ['Berlin', 'Amsterdam'],

    ];

let currentCity = "Kiev";
let allCities = [];
allCities.push(currentCity)

for (let j = 0; j <= cities.length; j++) {

    for (let i = 0; i < routes.length; i++) {
        if (routes[i][0] == currentCity) {
            let a = allCities.includes(routes[i][1]);
            if (a) {
                continue;
            } else {
                currentCity = routes[i][1];

                allCities.push(routes[i][1])
                break
            }
        }
    }
}

console.log(allCities);

