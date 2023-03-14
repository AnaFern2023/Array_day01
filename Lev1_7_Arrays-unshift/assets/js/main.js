console.log("Hallo");
let person = ["Bruce", "Wayne", "Superreich"];
let friends = ["Farid", "Christian", "Sergio"];
let favoriteFood = ["Burger", "Sushi", "Mais-Käsebällchen"];


friends.push("Marzio", "Freddy");
let lastFriends = friends.pop();
console.log(friends);
let firstFriends = friends.unshift("Julia", "Lea");
console.log(friends);

favoriteFood.push("Pizza", "Currywurst")
let lastFavoriteFood = favoriteFood.pop();
console.log(favoriteFood);
let firstFavoriteFood = favoriteFood.unshift("Leberkäse", "Spinat");
console.log(favoriteFood);