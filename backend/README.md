# Node.js TypeScript Template


A complete Node.js project template using TypeScript and following general best practices.  It allows you to skip the tedious details for the following:

* Adding and configuring TypeScript support.
* Enabling TypeScript linting.
* Setting up unit tests and code coverage reports.
* Creating an NPM package for your project.
* Managing ignored files for Git and NPM.


## Project Creation

Clone this repo into the directory you want to use for your new project, delete the Git history, and then reinit as a fresh Git repo:

```bash
$ git clone https://github.com/AndreCin2802/template-typescript-node <your project directory>
$ cd <your project directory>
$ rm -rf ./.git/
$ git init
$ yarn or yarn install
```

## Rebranding


Use exact searches to perform the following replacements throughout this project for the most efficient rebranding process:


1. Replace my *NPM* project name with yours: `template-typescript-all`
2. Update [package.json](package.json):
	* Change `description` to suit your project.
	* Update the `keywords` list.
	* In the `author` section, add `email` if you want to include yours.

3. Update this README.md file to describe your project.


### Initial Publish

Some additional steps need to be performed for a new project.  Specifically, you'll need to:



0. Write awesome code in the `src` directory.
1. Build (clean, lint, and transpile): `yarn build`
2. Create unit tests in the `test` directory.  If your code is not awesome, you may have to fix some things here.
3. run a tests : yarn test
3. Commit your changes using `git add`
4. Push to GitHub using `git push` and wait for the CI builds to complete.  Again, success depends upon the awesomeness of your code.
