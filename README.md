Meteor wrapper for clndr.js

Add the dependencies

```
meteor add underscore
```

The moment.js dependency is being included by clndr.js so I added it to the
package. To use moment.js in Meteor, however, use the momentjs:moment Atmosphere
package.

Add the clndr wrapper

```
meteor add ericksond:clndr
```

CLNDR.js is included unmodified and will add itself to ``window`` and ``$``
respectively.

Visit the clndr.js official project at

https://www.npmjs.com/package/clndr

## Usage

In the template

```
<template name='clndr'>
  <div id='clndr'></div>
</template>
```

In the template helper

```
Template.clndr.rendered = function() {
  $('#clndr').clndr()
}
```
