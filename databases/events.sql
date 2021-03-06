use heroes;
CREATE TABLE `comic` (
    `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` varchar(60) ,
    `description` varchar(250),
    `resourceURI` varchar(150),
    `modified` Date,
    `start` Date,
    `end` Date,
    `events_id` bigint,
    FOREIGN KEY (`events_id`) REFERENCES caractere (`heroes_id`)   
);

INSERT INTO `heroes`.`event` (
    `id`, `title`, `description`, `resourceURI`, `modified`, `start`, `end`, `events_id`) 
VALUES (
    '269', 'Secret Invasion', 'The shape-shifting Skrulls have been ', 'http://gateway.marvel.com/v1/public/events/269', '1988-11-01', '1988-07-01', '2019-11-01', '1011334');
/*
urls (Array[Url], optional): A set of public web site URLs for the event.,


thumbnail (Image, optional): The representative image for this event.,
comics (ComicList, optional): A resource list containing the comics in this event.,
stories (StoryList, optional): A resource list containing the stories in this event.,
series (SeriesList, optional): A resource list containing the series in this event.,
characters (CharacterList, optional): A resource list containing the characters which appear in this event.,
creators (CreatorList, optional): A resource list containing creators whose work appears in this event.,
next (EventSummary, optional): A summary representation of the event which follows this event.,
previous (EventSummary, optional): A summary representation of the event which preceded this event.
*/