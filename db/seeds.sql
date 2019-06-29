USE 	g57v06z3jkgspbrm;

INSERT INTO Users(first_name, last_name, service_provider, pet_owner, role, email, password, image, about_me, location, created, modified) VALUES ("Betsy", "Smith", 0, 1, "Owner", "betsy.smith@gmail.com", "password234", "http://www.yarramalongclydesdales.com.au/wp-content/uploads/2017/04/person-1.jpg", "I love pets! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Provo, Utah", "2019-05-01 12:00:00", "2019-05-01 12:00:00");
INSERT INTO Users(first_name, last_name, service_provider, pet_owner, role, email, password, image, about_me, location, created, modified) VALUES ("John", "Hammerford", 0, 1, "Owner", "anemail@yahoo.com", "passwor234234", "http://www.yarramalongclydesdales.com.au/wp-content/uploads/2017/04/person-1.jpg", "I love dogs!", "Orem, Utah", "2019-05-01 12:00:00", "2019-05-01 12:00:00");
INSERT INTO Users(first_name, last_name, service_provider, pet_owner, role, email, password, image, about_me, location, created, modified) VALUES ("Lauren", "Oswald", 1, 0, "Walker", "unicornFlower@gmail.com", "passworsdfs", "http://www.yarramalongclydesdales.com.au/wp-content/uploads/2017/04/person-1.jpg", "I love cats!", "Salt Lake City, Utah", "2019-05-01 12:00:00", "2019-05-01 12:00:00");
INSERT INTO Users(first_name, last_name, service_provider, pet_owner, role, email, password, image, about_me, location, created, modified) VALUES ("Billy", "McMann", 0, 1, "Owner", "billMc@aol.com", "passwordo7yuk", "http://www.yarramalongclydesdales.com.au/wp-content/uploads/2017/04/person-1.jpg", "I love animals!", "Taylorsville, Utah", "2019-05-01 12:00:00", "2019-05-01 12:00:00");

INSERT INTO Pets(pet_name, owner_id, pet_type, image, about_me, location, created, modified) VALUES ("Steve", "2", "Snake", "https://vetstreet-brightspot.s3.amazonaws.com/2f/51/318e274047bb8bfebfbde3787546/pet-snake-istock-000010368879.jpg", "I'm a snake who likes eggs!", "Orem, Utah", "2019-05-02 12:00:00", "2019-05-02 12:00:00");
INSERT INTO Pets(pet_name, owner_id, pet_type, image, about_me, location, created, modified) VALUES ("Spot", "1", "Dog", "https://www.petmd.com/sites/default/files/breedopedia/dalmatian.jpg", "I'm a dog who likes to fetch! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Provo, Utah", "2019-05-02 12:00:00", "2019-05-02 12:00:00");
INSERT INTO Pets(pet_name, owner_id, pet_type, image, about_me, location, created, modified) VALUES ("Marty", "3", "Cat", "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg", "I'm a cat who likes to sleep!", "Salt Lake City, Utah", "2019-05-02 12:00:00", "2019-05-02 12:00:00");
INSERT INTO Pets(pet_name, owner_id, pet_type, image, about_me, location, created, modified) VALUES ("Betsy", "4", "Cow", "https://cdn.britannica.com/55/174255-050-526314B6.jpg", "I'm a cow who likes grass!", "Taylorsville, Utah", "2019-05-02 12:00:00", "2019-05-02 12:00:00");

INSERT INTO Reviews(title, rating, review, author_id, owner_id, created, modified) VALUES ("Review example", "10", "They were awesome! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "4", "1", "2019-05-03 12:00:00", "2019-05-03 12:00:00");
INSERT INTO Reviews(title, rating, review, author_id, owner_id, created, modified) VALUES ("Review example 2", "8", "They were so attentive", "1", "2", "2019-05-03 12:00:00", "2019-05-03 12:00:00");
INSERT INTO Reviews(title, rating, review, author_id, owner_id, created, modified) VALUES ("Review example 3", "3", "They sucked", "2", "3", "2019-05-03 12:00:00", "2019-05-03 12:00:00");
INSERT INTO Reviews(title, rating, review, author_id, owner_id, created, modified) VALUES ("Review example 5", "6", "They were so sweet", "3", "4", "2019-05-03 12:00:00", "2019-05-03 12:00:00");

INSERT INTO reviews(title, rating, review, author_id, owner_id, created, modified) VALUES ("Review example", "10", "They were awesome! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "4", "1", "2019-05-03 12:00:00", "2019-05-03 12:00:00");
INSERT INTO reviews(title, rating, review, author_id, owner_id, created, modified) VALUES ("Review example 2", "8", "They were so attentive", "1", "2", "2019-05-03 12:00:00", "2019-05-03 12:00:00");
INSERT INTO reviews(title, rating, review, author_id, owner_id, created, modified) VALUES ("Review example 3", "3", "They sucked", "2", "3", "2019-05-03 12:00:00", "2019-05-03 12:00:00");
INSERT INTO reviews(title, rating, review, author_id, owner_id, created, modified) VALUES ("Review example 5", "6", "They were so sweet", "3", "4", "2019-05-03 12:00:00", "2019-05-03 12:00:00");

SELECT * FROM users;

INSERT INTO Posts(title, post, author_id, owner_id, created, modified) VALUES ("Post example", "My pet is doing awesome :) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "4", "1", "2019-05-03 12:00:00", "2019-05-03 12:00:00");
INSERT INTO Posts(title, post, author_id, owner_id, created, modified) VALUES ("Post example 2", "Look how cute", "1", "2", "2019-05-03 12:00:00", "2019-05-03 12:00:00");
INSERT INTO Posts(title, post, author_id, owner_id, created, modified) VALUES ("Post example 3", "Omg I love my pet", "2", "3", "2019-05-03 12:00:00", "2019-05-03 12:00:00");
INSERT INTO Posts(title, post, author_id, owner_id, created, modified) VALUES ("Post example 5", "Look how cute my pet is", "3", "4", "2019-05-03 12:00:00", "2019-05-03 12:00:00");