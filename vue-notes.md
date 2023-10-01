## Mounting The App

vue will automatically use the container's `innerHTML` as the templae if there is not template option

innerHTML: allow you to get the raw text

## Drirectives

e.g. `<span v-html="rawHtml/>"` the `v-` is a directive and are specal attributes tha vue provides to apply reacive behaviour to the rendered DOM.

### v-bind

`<div v-bind:id="dynamicId"></div>`
`<div :id="dynamicId"></div>` - shorthand
id is kept in sync with dynaimcId

### when bidings

flow control won't work either, use ternary expressions
`{{ if (ok) { return message } }}`

### arguments

`<a v-on:click="doSomething"> ... </a>`

`<a @click="doSomething"> ... </a>` - shorthand


### Modifiers - postfixes
`<form @submit.prevent="onSubmit">...</form>`