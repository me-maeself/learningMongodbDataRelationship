# Learning data relationship with MongoDB

## Overview:
Crucial:
- One to Few
- One to Many
- One to Bazillions
- Populate

Important:
- Mongo Schema Design

Nice to have:
- SQL relationship Overview

## 462. Mongo Relationship
Example of data relationship:
- Post
  - Comment
    - Comment on comment
  - Ownership
  - Votes
- Ads
- etc...

## 463. SQL Relationship Overview
- tables

## 464. (Note)
## 465. One to Few
- Inserting few object in an array inside of an object

One to few example:
- User:
  - Name:
  - Address: []
    - {address1}
    - {address2}

```js
// Example of one to few.
{
    name: "Joe",
    addresses: [
        {city: "NY"}, {city: "LA"},
    ]
}
```
## 466. One to Many
- Inserting ID of objects in array in an object
- to see more look at populate documentation
  
```js
user: 
{
  type: Schema.Types.ObjectId, ref: "User",
},
```

## 467. Mongoose Populate
```js
Farm.findOne({ name: "Full Belly Farms" })
	.populate("products")
	.then((data) => console.log(data));
```

## 468. One to Bazillions
- When you have so much child, 
  - It's just better for the child to refer to the parents

```js
const i = await <Models>
    .findOne({<query>})
    .populate(<populationId>, ...<populationKeys>);

console.log(i);
```

## 469. Mongo schema design
- Rules of Thumb:
  - One : Favor embedding unless there is a compelling reason not to.
  - Two : Needing to access an object on its own is a compelling reason not to embed it.
  - Three : Array should not be unlimited. The many side should be the one who refer to one.
  - Four: ...
  - Five: Denormalization

What is denormalization?
- Both side referring to each other