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
- populate

## 467. Mongoose Populate
## 468. One to Bazillions
## 469. Mongo schema design
