#Project Overview


![Alt Text](http://giphygifs.s3.amazonaws.com/media/a2q1PYp4wPNW8/giphy.gif)

# Project Description
Marvel Wiki allows the user to click on their favorite Marvel hero displaying the comics that the hero has been in,or they can search up the hero by name.

## Wireframes

<img src="https://res.cloudinary.com/df2vpxtrb/image/upload/v1571410494/Project/Screen_Shot_2019-10-18_at_9.21.55_AM_jjocbs.png" width = "300" height="300">
## MVP

-Have two pages,one that lists all characters and another that shows information on the character selected

-API call that grabs character name and short description.And lists comics that the character has been in.

-Style header including logo and search bar

-Style main page 




## Post-MVP

## Additional Libraries
MD5-npm i -S md5

Axios- npm i axios



## Code Snippet

## Issues and Resolutions
Had a problem calling the API.To solve this I looked online and found you needed to define your public,and private key along with setting ts(timestamp) to Date.now. Creating a variable to hash the ts+privatekey+publickey.Then when calling the api request using axios I interpolated the variables into the link. 
#### https://gateway.marvel.com:443/v1/public/characters?&limit=100&apikey=${publicKey}&hash=${hash}&ts=${ts}