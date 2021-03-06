-- CREATE DATABASE ol3j0cn1ayza2tod;
USE 	ol3j0cn1ayza2tod;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS messages;


CREATE TABLE `users` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
`client_type` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `role` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
 `image` varchar(255),
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
 `image` varchar(255),
 `about_me` varchar(300) COLLATE utf8_unicode_ci NULL,
 `location` varchar(30) COLLATE utf8_unicode_ci NULL,
 `created` datetime NOT NULL,
 `modified` datetime NOT NULL,
 PRIMARY KEY (`id`),
 FOREIGN KEY(`owner_id`) REFERENCES users(id)
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

CREATE TABLE messages (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender_id`int(11) NOT NULL,
  `receiver_id`int(11) NOT NULL,
  `has_chatted` boolean,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
   PRIMARY KEY (`id`),
   foreign key (`id`) references users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

USE 	ol3j0cn1ayza2tod;