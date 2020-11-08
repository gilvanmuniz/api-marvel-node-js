use heroes;
CREATE TABLE `story` (
    `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` varchar(60) ,
    `description` varchar(250),
    `resourceURI` varchar(150),
    `type` varchar(150),
    `modified` Date,
    `start` Date,
    `end` Date,
    `stories_id` bigint,
    FOREIGN KEY (`stories_id`) REFERENCES caractere (`heroes_id`)   
);