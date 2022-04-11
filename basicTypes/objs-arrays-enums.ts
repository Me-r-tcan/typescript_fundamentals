// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple
// } = {
//   name: "Mertcan",
//   age: 26,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// person.role.push("admin");
// person.role[1] = 10;

// dogru hata - push ile yapılınca bu hatayı vermiyor
//person.role = [0, "admin", "user"]; // tuple hatası verecek

// for (const hobby of percson.hobbies) {
//   console.log(hobby.toUpperCase());
// }

// *******************************************

// eger boş gecilirse 0 dan baslayarak gider - eger sayı ile baslanırsa o sayıdan baslayıp devam eder
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  AUTHOR = 1,
  NONE,
}

const person2 = {
  name: "Mertcan",
  age: 26,
  hobbies: ["Sports", "Cooking"],
  role: Role.NONE,
};

console.log(person2.role);
