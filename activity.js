// 2. Find users with letter s in their first name or d in their last name.
// - Use the $or operator.
// - Show only the firstName and lastName fields and hide the _id field.

db.users.find( 
	{$or:[
		{ "firstName": {$regex: 's', $options: 'i'}} , 
		{ "lastName": {$regex: 'd', $options: 'i'}}
	]},
	{ "_id": 0, "firstName": 1, "lastName": 1 }
);


// 3. Find users who are from the HR department and their age is greater then or equal to 70.
// - Use the $and operator

db.users.find( 
	{$and:[
		{ "department": "HR"} , 
		{ "age": {$gte: 70}}
	]}
);

// 4. Find users with the letter e in their first name and has an age of less than or equal to 30.
// - Use the $and, $regex and $lte operators

db.users.find( 
	{$and:[
		{ "firstName": {$regex: 'e', $options: 'i'}} , 
		{ "age": {$lte: 30}}
	]}
);