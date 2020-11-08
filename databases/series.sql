use heroes;
CREATE TABLE `series` (
    `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` varchar(60) ,
    `description` varchar(250),
    `resourceURI` varchar(150),
    `startYear` bigint,
    `endYear` bigint,
    `rating` varchar(250),
    `modified` Date,
    `series_id` bigint,
    FOREIGN KEY (`series_id`) REFERENCES caractere (`heroes_id`)   
);