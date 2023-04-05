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

const deleteSpecifiedUser = (userId) => users.map((user) =>
{
    if(user.id === "1234")
    {
        return user;
    }
});

console.log(deleteSpecifiedUser("1234"))