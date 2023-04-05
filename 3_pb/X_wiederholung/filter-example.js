console.clear();

let users = [
    {
        id: "1234",
        name: "rick"
    },
    {
        id: "1111",
        name: "Mandy"
    },
    {
        id: "6543",
        name: "Paul"
    }
];

console.log("altes array:", users);

const deleteSpecifiedUser = (userId) => users.filter((user) =>
{
    // 1. durchlauf:
    // user = { id: "1234", name: "rick" }
    // 2. durchlauf:
    // user = { id: "1111", name: "mandy" }
    // 3. durchlauf:
    // user = { id: "6543", name: "paul" }

    // 1. durchlauf: user.id = "1234"
    // 2. durchlauf: user.id = "1111"
    // 3. durchlauf: user.id = "6543"

    return user.id !== userId;
});

users = [...deleteSpecifiedUser("1234")];

console.log("neues array:", users);


