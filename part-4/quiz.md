1. What is the PATH environment variable used for in UNIX systems?
"The PATH environment is a specified set of directories where executables are
located.  When we run a command in the terminal like 'ls', the PATH has a directory
which contains the 'ls' command and then runs it.  We can update our path to include
paths to other directories which will be searched through when we run commands".

2. On a UNIX computer, how do you stop a running process?
"You can use Ctrl-z command to stop a process, which is like a sleep signal, that
can be undone and the process resumed. The kill command followed by the process
ID will work as well."


3. Which command can you use to see which homebrew packages you've installed?
"The 'brew list' command will show which homebrew packages are installed"

4. On a UNIX computer, how do you find the process id of a running process?
"A way to find the process id is using the command 'ps aux' which will list all process statuses.  If you want to search for specific process you can use
'ps aux | grep SEARCH-PATTERN "

5. In a terminal, what does control-c do?
"Ctrl-c is used to kill a process with SIGINT(polite kill)"

6. What would be the result of typing the following commands?

$ cd /Users/lucy      //This changes into the directory "/Users/lucy"
$ mkdir one          //Makes directory 'one' inside current directory
$ touch alpha       //Makes file 'alpha' in current directory
$ cd one           //Changes from current directory into 'one' directory
$ touch alpha     //Makes file 'alpha' inside current directory
$ pwd            //This will 'print working directory' /Users/lucy/one

7. How do you see which environment variables are set in your shell?
"You can print out all set environment variables using the 'printenv' command."

8. What keyboard shortcut do you use to perform a "Find" search in your editor?
"When I want to perform a 'find' search I use the 'command + f' shortcut."

9. How do you see which aliases you have in your shell?
"To create an alias in current shell you simply type the 'alias' command
and then redefine the environment variable you want to change for example:
alias ls='ls -la'
would have the ls command print the all files including hidden ones in long format "

10. When a terminal command completes, how can you tell if it was successful or not?
"If a command was not successful it will usually throw an error like 'command not found', also the command line should be visible and you should be able to type a new command..."

11. What does your ~/.gitconfig have in it? (paste the whole file here)
"My gitconfig file contains variables that affect my git command behaviors
The file contains this:
[color]
        ui = true
[user]
        name = Jose Moreno
        email = morenojr90@yahoo.com
"

12. What is the difference between a relative and absolute path?
The difference between relative and an absolute path is that when
using a relative path, this takes as reference the current working directory
while absolute paths reference the root directory.

13. Lets say you have the following file structure

~
└── Projects
    ├── airbnb-for-llamas
    │   └── package.json
    └── facebook-for-mimes
        ├── README.md
        └── package.json
And you were in the facebook-for-mimes folder. What command would you use to copy the README.md file to the airbnb-for-llamas folder?
"The command I would use to copy the README.md file to the airbnb-for-llamas folder is:
'cp README.md ../pinterest-for-dogs/'."

14. What keyboard shortcut do you use in your editor to quickly navigate to a file in the current project?
"I use 'command-p' then type the file name, to go to a file in the project I have open"

15. Give an example of a file or folder pattern you commonly add to a .gitignore file and why you add it.
"Some common files and folders we want ignored are
Operating system files, Application files, Language and framework files,
Files downloaded with package managers, Credentials...etc.
Example of a commonly ignored file is .DS_Store and .gitignore itself."

16. What are the main differences between Array.sort and Array.filter in JavaScript?
"The sort() method sorts the elements of an array in place and returns the array. The filter() method creates a new array with all elements that pass the test implemented by the provided function. 
