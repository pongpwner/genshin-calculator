# Genshin Impact Companion
Quickly calculate weapon materials, character materials, talent materials that you need!<br>
## Practical Usage
This calculator will convert any extra materials you have into the next tier of rarity.  So if you have 3 extra green rarity items, it will convert those to 1 blue.<br>  This calculator is useful for telling you when you have farmed enough while you are in a domain for talent or weapon materials. <br>
It is also useful for telling you if you need to farm at all for a new character. For example if you have 300 green talent books, it will convert those to blue and purple and tell you if you have enough materials if you crafted. <br>
This calculator does not tell you what characters need what items, so its primary usage is for when you already know what your character needs, but there are links to resources that do say what each character or weapon needs.<br>
The homepage has spreadsheets for materials.  This is useful for knowing the cost at each upgrade breakpoint without taking into account what you already have

## Features
* weapon level up calculator
* character level up calculator
* talent level up calculator
* artifact crit value calculator
* character power level calculator (mainly for fun, not really a useful metric)
* spreadsheets with cost at break points for characters and weapons

## How to use
Calculators:
Select what you want to calculate on the header.  Then enter the materials you have for the calculator.  The input is colorcoded based on the rarity of the material.  You do not have to fill in every field, just the ones you are interested in.  Then hit the submit button when you are done.  On the right there is a section that tells you what you need.  The calculator converts any extra material you have to the next level of rarity.  It will tell you what you still need, and how much of each material you have left if you were to convert them all.


## Built With
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)


## What I learned 
Calculators
This is my first project I created using react class componentes and redux.  The Weapon component is a class component where the state is stored in the component. The Character and Talent have their state stored in their respective reducers.  The  I also used the reselect library for selectors to use in mapStateToProps.
I learned to use a folder structure with components, pages, redux, and images all having their own folder.  Each component has its own folder with a stylesheet to go with it.  I also learned how to use react-router to link to different pages on my app.
