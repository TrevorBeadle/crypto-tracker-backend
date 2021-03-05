const hashedPassword =
  "$2a$14$qHqCbXUImiBOgXlFNX47wuA7uFWNGNAZutYLvOeye9eotewGlfYV6";

// password is abc12345

exports.seed = async function (knex) {
  await knex("users").insert([
    { id: 1, username: "tbeadle", password: hashedPassword },
    { id: 2, username: "sshadle", password: hashedPassword },
  ]);
};
