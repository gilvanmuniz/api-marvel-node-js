use heroes;
CREATE TABLE `comic` (
    `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `digitalId` int,
    `title` varchar(60) ,
    `issueNumber` int,
    `variantDescription` varchar(250) ,
    `description` varchar(250),
    `modified` Date,
    `isbn` varchar(150),
    `upc` varchar(150),
    `diamondCode` varchar(150),
    `ean` varchar(150),
    `issn` varchar(150),
    `format` varchar(150),
    `pageCount` int,
    `resourceURI` varchar(150),
	`comics_id` bigint,
    FOREIGN KEY (`comics_id`) REFERENCES caractere (`heroes_id`)   
);

/* campos para relacionamentos 
textObjects (Array[TextObject], optional): A set of descriptive text blurbs for the comic.,
urls (Array[Url], optional): A set of public web site URLs for the resource.,
series (SeriesSummary, optional): A summary representation of the series to which this comic belongs.,
variants (Array[ComicSummary], optional): A list of variant issues for this comic (includes the "original" issue if the current issue is a variant).,
collections (Array[ComicSummary], optional): A list of collections which include this comic (will generally be empty if the comic's format is a collection).,'
collectedIssues (Array[ComicSummary], optional): A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine").,
dates (Array[ComicDate], optional): A list of key dates for this comic.,
prices (Array[ComicPrice], optional): A list of prices for this comic.,
thumbnail (Image, optional): The representative image for this comic.,
images (Array[Image], optional): A list of promotional images associated with this comic.,
creators (CreatorList, optional): A resource list containing the creators associated with this comic.,
characters (CharacterList, optional): A resource list containing the characters which appear in this comic.,
stories (StoryList, optional): A resource list containing the stories which appear in this comic.,
events (EventList, optional): A resource list containing the events in which this comic appears. */
