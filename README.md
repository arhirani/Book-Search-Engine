# Search-Engine-Utility
Search Engine that matches the given query in the database and returns relevant results.

#Task1: Search Utility
This function will take in the query and number of suggestion and will group the given query into possible word formations, and list the results depending on the probability of occuring the word. The recommendations for the given query display on the basis of probability of occuring of each word. As of now, the search has the overall time complexity of O(N*K), where N is the total number of summaries and k is the total number of words in the query. When a query is entered, following operations happen - 
* It searches through the entire summaries db and groups the book summaries based on the number of words matching between the query and the summary. This is done to show the relevant results to the user.
* Grouping happens on the basis of chances of occuring of the maximum query words in the summary, where the probablity(chance) is set as a key and summaries for that keys as values.

ChallengeFaced: To bring down the search complexity to O(N) by creating a look up table. Currently, working on the same.

#Task2: Front End Design
Front End Design for Task 1 where the suggestions will be fetched based on the query given. It uses debouncing technique to limit the function calls. 
