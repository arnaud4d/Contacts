
var arrAdd = []     // Create an empty array
arrAdd[0] = {lastName: "Potter", firstName: "Harold", salary: 3200};
arrAdd[1] = {lastName: "Luke", firstName: "Lucy", salary: 5300, married: true};
     // 'married' is ignored if the attribute does not exist in the datastore class
arrAdd[2] = {lastName: "Blue", firstName: "George", salary: 3200};
var newColl = ds.Employee.fromArray(arrAdd);     // entities are created and saved

newColl;
