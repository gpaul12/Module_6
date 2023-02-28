fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// per_page: The number of results per page
// state: Indicates the state of the issues to return.
// sort: What to sort results by.
// direction: The direction to sort the results by.