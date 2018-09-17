# ToDoList
It a simple todo-list app. You can add, modify, remove todos, also mark them as finished or redo again. You can sort and display them by whether they are finished, and their priority.
The front end project was already compiled down to `/project/frontend/static/frontend/main.js`. So there is no need to configure front end code.

## Installation && Run
* Make sure you have git, python 2.7, virtualenv, virtualenvwrapper-win, django 1.8, django rest framework 3.5.4 installed.
* Create a virtual python environment with python 2.7 named "nine_env"
* Activate this environment by running this in cmd: `C:\Users\Ting\Documents\NineAlgo\todoFinal>workon nine_env`
* Go to the project floder, and install required modules to "nine_env" environment:`pip install -r requirements.txt`
* go to the inner project floder, run this command to erase my testing data in database:`>python manage.py flush`.
* run this command to start the server: `>python manage.py runserver`
* Open http://localhost:8000/ in the browser. Congraduation!
![dashboardpage](https://cl.ly/9e52c68a764b/Image%202018-09-17%20at%208.59.59%20AM.png)

## Basic operations
### Add a todo. 
If the input is empty, it won't be added, and an error message will be shown on the top. The date-picker is powered by react-dates module.
![add a todo](https://cl.ly/588035082805/Screen%20Recording%202018-09-17%20at%2009.11.07.03%20AM.gif)

### Sort, display, and change the finish state. 
Sort and display them by whether they are finished, and their priority.
![sort todos](https://cl.ly/808586ab06b0/Screen%20Recording%202018-09-17%20at%2009.12.02.26%20AM.gif)


### Remove or edit a todo.
You can change the priority, date range, todo content.( But you can't change the finish state here. That should be done in the dashboard page.)
![modify a todo](https://cl.ly/e8e63f828bfd/Screen%20Recording%202018-09-17%20at%2009.12.50.46%20AM.gif)
