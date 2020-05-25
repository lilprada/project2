```json
{
  "engines": {
    "node": "12.16.2"
  },
  "name": "project2",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

remember ur engines or it won't work! make sure you have "start"!


when i want files to go to github, 'git push origin master'

when i want files to go to heroku, 'git push heroku master'


on local:
    -make some changes
    -git add -A
    git commit -m ""




WHAT TO WORK ON NEXT: 5/25/2020 2:32AM

-figure out what's going on with Log Out button!

-pushing items to Closet or Laundry depending on if "ready to wear?" is selected during Create Item phase

****ISSUE WITH "MAP" BEING UNDEFINED ON LAUNDRY PAGE?****

****ISSUE WITH TEXT SHIFTING ON EACH SHOW PAGE DEPENDING ON LENGTH OF NAME DESPITE POSITION BEING ABSOLUTE?*****

-styling Laundry Index (((JUST SAME AS CLOSET INDEX EXCEPT FOR TITLE)))

-how to push items from Laundry > Closet and vice versa depending on whether Ready To Wear? is selected/deselected