## How to Contribute

Don't push changes directly to the master branch, make all changes in some other branch first (such as `dev`) and make a pull request so the code can be reviewed. 


## How to Run Locally

Make sure you have [Ruby](https://www.ruby-lang.org) installed. Then make sure you have bundler installed: `gem install bundler`. Then `cd` to the project root and run `bundle install` to install any dependencies. Finally, run `bundle exec jekyll serve` to serve the site locally.

## Adding Members

To add a member to the members page, simply fill out their info in `members.md` and add their profile photo (must be square) to `assets/profiles/`. Here is a template:

```
Firstname Lastname:
  desc: "A nice description/bio goes here"
  img: "someimg.jpg"
  social:
    facebook: "https://link.here"
    twitter: "https://link.here"
    linkedin: "https://link.here"
    email: "email@goes.here"
```

**NOTE:** Jekyll markdown doesn't like tabs, make sure you use spaces for indentation.