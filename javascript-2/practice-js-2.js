/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = "Git is a tool used by developers to track changes made to code. It allows users to remotely download code from a central source like github, make changes, and reupload that code back to that source. This means it's great for group coding projects."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = "Github is a popular website built to host code repositories. It allows users to remotely download, fork, and reupload code while tracking all changes made. This makes it useful for large projects with multiple coders."

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = {
    description: "This command initializes a repository in your current folder. Once this is done, git will begin tracking your changes. It's neccesary to initialize a repository before you can push or commit any code.",
    code: "git init"
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

let clone = {
    description: "Clone makes a local copy of an already exisitng repository, normally copied from a site like github. This allows you to make local changes before reuploading.",
    code: "git clone [PASTE URL OF REPOSITORY HERE FOLLOWED BY .git]"
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

let status = {
    description: "This command checks where your project is. If you've committed data or made changes since the last commit/push, it will show here.",
    code: "git status"
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

let add = {
    description: "This will stage your code to be committed. You have to specify what you want to add, which we typically do with '.' This helps with git tracking changes you've made.",
    code: "git add ."
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let commit = {
    description: "This basically saves your work. It creates a copy of all the files in the directory and prepares them for a push to the online repository.",
    code: "git commit -m 'this is where I normally leave witty messages' "
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

let addRemote = {
    description:"This attaches your local directory to a repository you created separately on github. Once you've added a remote origin, you can commit changes to it. This is done when you don't want to clone a repository",
    code: "git remote add origin [URL GOES HERE]"
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

let push = {
    description: "This uploads the code in your local directory that you've already added, then commited, all the way to your repository (typically on github) for anyone on your team to access.",
    code: "git push"
}
