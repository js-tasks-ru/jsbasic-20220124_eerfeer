function showSalary(users, age) {
  let usersCount = users.length - 1;
  return users.reduce((resultStr, user, i) => 
                        resultStr += (user.age <= age) ? 
                        `${user.name}, ${user.balance}\n` : 
                        '', '')
              .trim();
}
