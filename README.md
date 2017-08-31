# Color Psychology
Contributors:  Ian Nordeck, Connie Kephart, Tyler Clark, Jeff Reynolds

## Scope
### Why make this app?
To help people make color choices based on personality attributes, rather than on subjectivity.

### How is this app different?
Color selection is subject to taste or color theory, but there is no app on the market that bases color selection on the color psychology.

### What are we making?
Using the Dewey Color System, we are creating an app that proposes color palettes based on 32 different personality attributes. Conversely, we can identify personality traits to a user's existing color palette.

### Stretch Goals
* Render a complementary, monochromatic, analogous, triad, compound, or shades color palette based on the user's selected personality attribute(s).
* Color accessibility

## Installation
### To run locally:
1. Clone from GitHub: https://github.com/mtclark0518/project3
2. Set up the postgres database
  * Start the database (postgres -D /usr/local/var/postgres)
  * Create the color_psych db (CREATE DATABASE color_psych)
  * Setup the db for the app (ts-node src/db/dbSetup.ts)
  * Seed the db with colors and attributes (ts-node src/db/seed.ts)
3. Build and run the app (npm start)
4. App is running at localhost:3000

### To run anywhere in the world:
[https://hidden-citadel-94665.herokuapp.com/](https://hidden-citadel-94665.herokuapp.com/)

## Data Models
### Entity Relationship Diagram (ERD)
![ERD](/colorpsych/assets/ERD.JPG)

## Sitemap
![SITEMAP](/sitemap.jpg)
* color indicates same component

## Wireframes
![WIREFRAMES1](/wires1.jpg)

![WIREFRAMES2](/wires2.jpg)

## Color Palette
![COLORPALETTE](/color-palette-01.jpg)
### colors
* lime green: #cddc39 | 24c 0m 94y 0k
* green: #4caf50 | 72c 5m 95y 0k
* teal: #009688 | 83c 19m 53y 2k
* blue: #2196f3 | 71c 34m 0y 0k
* indigo: #3f51b5 | 84c 76m 0y 0k
* purple: #9c27b0 | 50c 90m 0y 0k
* magenta: #e91e63 | 2c 98m 42y 0k
* red: #f44336 | 0c 89m 84y 0k
* red-orange: #ff5722 | 0c 80m 93y 0k
* orange: #ff9800 | 0c 48m 100y 0k
* gold: #ffd600 | 1c 13m 100y 0k
* yellow: #ffeb3b | 2c 2m 87y 0k

### neutrals
* black: #000 | 60c 40m 40y 100k
* brown: #795548 | 42c 62m 66y 29k
* white: #fff | 0c 0m 0y 0k

### greys
* grey 100: #f5f5f5
* grey 300: #e0e0e0
* grey 500: #9e9e9e
* grey 700: #616161
* grey 900: #212121


## Task Delegation
### Tyler 
* Repo Master
* Express Routing

### Connie
* SQL

### Ian
* Front-end Angular components

### Jeff
* Front-end Angular components

### Front-End Components
* Login / Register
* User Profile (Index of saved pallet)
* Create By Attribute
	* Form (Dismiss -> Either / Or -> Narrow to 3 and Rank)
	* Resulting Color Pallet
		* Color Details
* Create By Color
	* Color Picker Form (Color Wheel, Neutral)
	* Color Details (One for color, one for neutral)
* Colors
* Attributes
	* Attribute Detail
* About the App / Team Profile

## User Research
### Questions
1. A lot of logos utilize the color red. Why do you think that is?
   * Even more companies have blue logos. Do you suppose there's a reason companies choose the color blue? 
2. Do you think the color of a company's branding has an effect on its consumers?
3. If you were to start a company, what colors would you choose for your logo? Why?

4. If you were to start a company, what would you sell? 
	* If you could convey a feeling to the masses about your product and your company, what would you try to convey? 
	* From a mass communications standpoint, a lot of [marketing research](http://www.jstor.org/stable/3151897?seq=1#page_scan_tab_contents) has suggested that branding colors have a psychological effect on consumers viewing a brand. What would you want your branding to convey to potential customers?
### Findings
User 1:
1. It's a very vivid color, noticeable.
   * Blue is safe looking and it's a strong color.
2. Yes. Usually you either like it or don't, but I don't think I've ever avoided a company because of the colors they used.
3. Teal and lime because I like them.
4. Coaching
   * Competent, honest, personal, safe
   * See above!
