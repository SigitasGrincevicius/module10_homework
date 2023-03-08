/* Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y». */

let users = new Map();

users.set(100, "Ahsoka Tano");
users.set(101, "Luke Skywalker");
users.set(102, "Yoda");

for (let id of users.keys()) {
   console.log(`Ключ — ${id}, значение — ${users.get(id)}`);
}