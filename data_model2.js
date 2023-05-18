/*
For this exercise, you will create complex objects that are meant to be
parsed by specified functions.
*/

//~~~~~~1
// Create the data object that this function is expecting
//
// Example
//
// printUsers(users1)
// 0: UserName1
// 1: UserName2
// ...and so forth, for all the users

var users1 = [
  {id: 0, username: 'Elena'},
  {id: 1, username: 'Charlie'},
  {id: 2, username: 'Zelda'},
  {id: 3, username: 'Janet'},
  {id: 4, username: 'Steve'}
]

function printUsers(users) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log(user.id + ": " + user.username);
  }
}

// printUsers(users1); // uncomment when ready to test


//~~~~~~2
// Create the data object that this function is expecting
//
// Example
//
// printUsersWebsites(users2)
// ~~UserName1~~
//   -siteName1
//   -siteName2
// ~~UserName2~~
//   -siteName3
//   -siteName4
//   -siteName5
// ...and so forth, for all the users

var users2 = [
  {username: 'Bob', sites: [{url: 'https://www.amazon.com'}, {url: 'https://www.nytimes.com'}, {url: 'https://www.wsj.com'}]},
  {username: 'Nyamekye', sites: [{url: 'https://www.yahoo.com'}, {url: 'https://www.google.com'}, {url: 'https://www.weather.com'}]}
]

function printUsersWebsites (users) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log("~~" + user.username + "~~");
    for (var j = 0; j < user.sites.length; j++) {
      var site = user.sites[j];
      console.log("  -" + site.url);
    }
  }
}

// printUsersWebsites(users2); // uncomment when ready to test


//~~~~~~3
// Create the data object that this function is expecting
//
// Example
//
// printUsersWebsitesInfo(users3)
// ~~UserName1~~
//   -siteName1.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
//   -siteName2.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
// ~~UserName2~~
//   -siteName3.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
//   -siteName4.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
//   -siteName5.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
// ...and so forth, for all the users

var users3 = [
  {userName: 'Zelda', sites: [
    {url: 'https://www.amazon.com', load: '21%', '# of users': 21000, 'popularity score': 32},
    {url: 'https://www.yahoo.com', load: '35%', '# of users': 45000, 'popularity score': 45},
], userName: 'Marcus', sites: [
    {url: 'https://www.linkedin.com', load: '18%', userCount: 150008, pop: 99},
    {url: 'https://www.facebook.com', load: '56%', userCount: 65, pop: 15},
    {url: 'https://www.twitter.com', load: '13%', userCount: 33, pop: 9}
  ]}]

function printUsersWebsitesInfo (users) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log("~~" + user.username + "~~");

    for (var j = 0; j < user.sites.length; j++) {
      var site = user.sites[j];
      console.log("  -" + site.url);
      console.log("    -load: " + site.load + "%");
      console.log("    -# of users: " + site.userCount);
      console.log("    -popularity score: " + site.pop);
    }
  }
}

printUsersWebsitesInfo(users3); // uncomment when ready to test
