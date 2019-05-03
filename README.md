# 21 Day Coding Challenge by Lighthouse Labs (2019)

## Challenge #1
You are the captain of the exploratory vessel, the ISS Lighthouse, on a mission to explore the galaxy. Just as you depart the solar system, you encounter a gigantic space bug, which knocks you off course! Now you're lost in space, your radio and navigation are out, and it's up to you to work with your computer to get things going again.

Fortunately, your ship enabled your LARRY (Language-Aware Repair Robot of the Year), when the systems went offline. For some reason, the engineers who created LARRY made him duck-shaped, but he is very good at doing exactly what he is told to do. He has a terminal on his back that lets you use JavaScript to make changes to the ship.

Your job as captain of the ISS Lighthouse is to use your JavaScript skills to talk to LARRY and get your ship back in working order! You've got 21 days to fix the navigation and radio before the command centre back on Earth gets worried and launches another ship to come looking for you.

"POWER OFF!" quacks LARRY. That sounds like a big problem! You should probably get the power back on, otherwise things are not going to go very well for you in the depths of uncharted space! Unfortunately, the manual for your ship is hard to read in the dark.

"Ship's powerOn property set to false!" LARRY exclaims. "MUST CHANGE VALUE! QUACK!" Okay, that sounds pretty serious. Fortunately, you remember from orientation that there are things called "properties" in JavaScript. You access properties using the '.' operator. With just the light from LARRY's terminal, you need to write a function called powerOn() which will change the 'powerOn' property of the 'ship' object. If that's set to 'false', changing it to 'true' should get things going.

**Hint:** LARRY loudly quacks out, "Set values in JavaScript using a single equals sign."

## Challenge #2
The lights flicker on, and you can see the interior of the ship, along with LARRY, your duck-shaped friend. You feel relieved, until LARRY’s eyes start to glow red, and he starts blaring, "SHIP IN DANGER! SHIP IN DANGER!"

What can it be? You've turned the power back on, everything should be back to normal, right? "MODULES NOT ACTIVE!" Modules, what modules? A quick check of the ship's status board reveals an empty array labelled 'modules'.

You flip through the manual to the section labelled 'Modules', where the first page describes a number of available modules. They are stored in memory in the availableModules array. Each module is an object, with four properties:

the name of the module is a string
the size of the module is an integer
the enabled and essential properties are booleans
Start off by finding out how many modules there are. Make a method called countModules to reveal how many modules there are to choose from.
