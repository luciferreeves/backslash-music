
# BackSlash Music

BackSlash Music is a simple and fast music player, built from the ground up, using web technologies such as HTML, CSS and JavaScript, all wrapped on Electron Framework.

## Downloads

Download for BackSlash Linux/Ubuntu/Debian: https://drive.google.com/open?id=1WnjhkEJ8h0zO35LvzQH49xBa-guZH1JC

Download for macOS: https://drive.google.com/open?id=1Zi5B9xxciWhAnskKZ4_ICLc9bErf4EY8

Download for Windows: https://drive.google.com/open?id=1B393Cvrk2TgXDM4sMc4iueWuq1ThJnvf

## Development
This app is built using Electron. It requires the following dependencies:

```bash
    dialogs >=1.1.20
    electron >=1.7.11
    electron-builder >=19.55.3
    musicmetadata: >=2.0.5
    photonkit: >=0.1.2
    snazzy: >=7.0.0
    about-window: >= 1.10.0
```


## Contributing
If you want to contribute, please follow this guidelines:
### Feedback
Always follow this structure when reporting a new bug or suggesting a new feature:

 1. Type: bug, feature or suggestion
 2. OS: Windows, macOS or linux
 3. OS version:
 4. App version:
 5. When did the bug happen?
 6. What did you try when the bug happened?
 7. Description/More information:

You can ommit 5. and 6. if you are making a suggestion or proposing a feature.

### Code
JavaScript code follows the JavaScript Standard Code Style. You can check it out [here](https://github.com/standard/standard). Also, you can run `npm run-script fix` (assuming you have standard and snazzy installed) to check for js errors and coding style.

CSS follows this style:

 1. Use two spaces to indent each property. Never tabs or a mix of tabs and spaces
 2. Each selector should be on its own line, ending in either a comma or an opening curly brace. 
 3. Use human readable selectors that describe what element(s) they style. Avoid using camelcase and underscores
 4. Attribute selectors should use double quotes around values
 5. Refrain from using over-qualified selectors, `div.container` can simply be stated as `.container`
 6. Use hex code for colors, or `rgba()` if opacity is needed. Always use complete lowercase hex color codes (`#ffffff`) instead of shortened ones (`#FFF`).
 7. Order the properties alphabetically and in blocks:
	    - Positioning
	    - Display
	    - Box model
	    - Other
 8. `z-index` always goes inmmediately below position. Position atributtes follow this order: Top/Right/Bottom/Left
 9. Space before the value but not before the semicolon. Also, always end with a semicolon.
 10. Use double quotes rather than single quotes.
 11. Font weights should be defined using numeric values (e.g. 400 instead of normal, 700 rather than bold).
 12. 0 values should not have units unless necessary.
 
 This rules have been extracted from [here](https://github.com/necolas/idiomatic-css).

## Versioning
Musify is maintained under the Semantic Versioning guidelines.

Releases will be numbered with the following format:

> [major].[minor].[patch]

And constructed with the following guidelines:

 - Breaking backward compatibility bumps the **major** while **resetting minor
   and patch**.
 - New additions without breaking backward compatibility bumps the **minor**
   while **resetting the patch**.
 - Bug fixes and misc changes bumps only the **patch**.
