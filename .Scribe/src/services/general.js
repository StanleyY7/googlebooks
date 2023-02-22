// Fetching Function
export const doSearch = (searchTerm, setBooks, setisSearchStarted) => {
  if (searchTerm) {
    const searchBooks = async (searchTerm) => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=39`
      );
      const data = await response.json();
      console.log(data.items);
      if (data.items) {
        setisSearchStarted(true);
        setBooks(data.items);
      } else if (!data.items || data.items === 0) {
        alert("No results found");
      }
    };
    searchBooks(searchTerm);
  } else {
    alert("Please enter something to search for");
  }
};

export const HideBooks = (display, setDisplay) => {
  setDisplay(!display);
};
