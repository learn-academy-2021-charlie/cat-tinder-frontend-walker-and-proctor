# Cat Tinder Frontend

# Testing With Enzyme and Jest
$ yarn test
- jest with any JS
- Enzyme with only React

# Vocab
Jest
Enzyme
Shallow Render
debug()
props()

# set up
$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
```javascript
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter()})
```
Describe
It
Expect

# __tests__
    directories in both components and pages that jest and enzyme look for to run test
# Imports and configuration
    Import ... from ...
    Enzyme.configure({ adapter: new Adapter()})
# Arrange Act Assert
    ex shallow
        find
        expect
# Selector syntax
https://enzymejs.github.io/enzyme/docs/api/selector.html
# Assertion Syntax 
expect(<componentVariable>.<elementQueryMethod>()).<matcher>(<expectedValue>)
    expect(<actualThing>).<matcher>(<expectedValue>)
