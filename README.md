# _Pizza Parlor_

#### _project description._

#### By _**Grafton Borge**_

## Technologies Used

* _HTML5_
* _CSS_
* _Javascript_
* _Jquery_
* _VScode_
* _Github_

## Description

_This program needs to be able to let the user make a pizza with the toppings the user chooses._

## Setup/Installation Requirements

* _Open up my github profile_
* _Clone my repository into your desired local repository_
* _Open index.html into your browser_
* _Edit as needed_

_There is no extra servers or databases that need to be ran. The files in this current repository is all you will need to successfully run the application. It is recommended that you use the chrome browser to run this application successfully but it is not a requirement._

## Tests
Describe:PizzaOrder

TEST:Should return the size choses for pizza. 
CODE:
class Pizza {
  constructor() {
    this.size = [];
  }
};

function pizzaSizeChoice(sizeChoice) {
  const db = db_sizes;
  for (let i = 0; i < db.length; i++) {
    let currentSize = db[i];
    if (currentSize.size === sizeChoice) {
      const smallPizza = new Pizza()
      smallPizza.size = sizeChoice
    }
  }
}
  const db_sizes = [
    {
    size: "small",
    cost: 1.00
    },
  ];
OUTPUT: Pizza[size{"small"}]

## Known Bugs

* _No known bugs._

## License

_Copyright (c) [2021] [Grafton Borge]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
_

## Contact Information

_Grafton Borge <graftonmborge@gmail.com>_
