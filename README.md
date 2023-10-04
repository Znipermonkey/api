1  https://swapi.dev/api/people/?search=vader

2  https://swapi.dev/api/planets/?search=alderaan

3  https://swapi.dev/api/starships/?search=falcon

4  https://swapi.dev/api/people/?search=c-3 
https://swapi.dev/api/species/2/


5https://swapi.dev/api/people/?search=obi
"https://swapi.dev/api/films/1/",
"https://swapi.dev/api/films/2/",
"https://swapi.dev/api/films/3/",
"https://swapi.dev/api/films/4/",
"https://swapi.dev/api/films/5/",
"https://swapi.dev/api/films/6/"


6   https://swapi.dev/api/starships/?search=falcon

1 query and body

2 - application/json

3 https://practiceapi.devmountain.com/api/posts?id=555

4Return array of filtered posts, and  request query is missing required text property

5https://practiceapi.devmountain.com/api/posts
{
    "id": 1820,
    "text": "Robert Free",
    "date": "04 Oct 2023"
  },


6https://practiceapi.devmountain.com/api/posts?id=1820
{
    "id": 1820,
    "text": "Black",
    "date": "04 Oct 2023"
  }



7 https://practiceapi.devmountain.com/api/posts/filter?text=blue


8application/json; charset=utf-8

9missing query id or body text
10it gives an error because there is no option for it to filter in the code
