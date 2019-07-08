-- CREATE DATABASE fcflqw2ed3fwf6q1;
USE 	ol3j0cn1ayza2tod;

DROP TABLE users;
CREATE TABLE `users` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `service_provider` boolean,
 `pet_owner` boolean,
 `role` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
 `image` varbinary(200),
 `about_me` varchar(300) COLLATE utf8_unicode_ci NULL,
 `location` varchar(30) COLLATE utf8_unicode_ci NULL,
 `created` datetime NOT NULL,
 `modified` datetime NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `pets` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `pet_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `owner_id` int(11) NOT NULL,
 `pet_type` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `image` varbinary(200),
 `about_me` varchar(300) COLLATE utf8_unicode_ci NULL,
 `location` varchar(30) COLLATE utf8_unicode_ci NULL,
 `created` datetime NOT NULL,
 `modified` datetime NOT NULL,
 PRIMARY KEY (`id`),
 FOREIGN KEY(owner_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE reviews (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `rating` int(11) NOT NULL,
  `review` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `author_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
   PRIMARY KEY (`id`),
   foreign key (`author_id`) references pets(id),
   foreign key (`owner_id`) references users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE posts (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `post` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `author_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
   PRIMARY KEY (`id`),
   foreign key (`author_id`) references pets(id),
   foreign key (`owner_id`) references users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

USE 	ol3j0cn1ayza2tod;