# NgKeypressWp

## Architecture

The keyBinderCore class holds the interfacing methods with any other key binding library. 
The keyBinderService exposes a service to all the components at the module level to assign shortcuts.

## Exposed Methods

### keyBinderCore
The core exposes the following methods. This will call the binding libraries methods internally
```javascript
bind()
unbind()
unbindAll()
getAll()
```


### keyBinderService
The application interfacing methods will be provided by this service which will talk to the core class's methods.

```javascript
setKeyEventListner()
setKeyEventListnerMap()
destroyKeyEventListener()
destroyAllEventLisnteners()
getAllShortcuts()
```

To change the key binding library, the core methods will need to be updated. The current library used does not support a wide variety of actions on key bindings so the type is not considered. Although the Core layer has support to pass types to any other library which supports it.

The key binding library used is `angular2-hotkeys` which is very minimal

### State

To fetch all the shortcuts, the core maintains a `state` variable which will return the keyboard mappings in the format below

```javascript
  component: [{
    source: string,
    key: string,
    type: string,
    listener: any,
    options: object,
    description: string,
  }]
```

### Demo:

https://keybinder.herokuapp.com/

### Documentation:

https://dark-blaze.github.io/ng-keypress-wp/documentation/

## To run it locally:

- Clone the project
- Execute npm i or yarn install
- Execute ng serve
- Open `http://localhost:4200/`
