function getNews() {
  console.log("getNews function called");
  news
    .getNewsFromAPI()
    .then(newsData => {
      console.log("News data received:", newsData);
    })
    .catch(error => {
      console.error("Error fetching news:", error);
    });
}
getNews();
