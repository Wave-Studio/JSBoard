# Commiting to JSBoard

## Quirks

### License

Please add this to the beginning of any new files you create

```js
/*
JSBoard (also JS Board) is a freemium open source forums software.
Copyright (C) 2021 - Present  JS Services

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
```

### Naming

We use some very _wierd_ naming schemas compared to the norm.

- We use camelCase unless said here otherwise
- Interfaces should end in Typings and be capitolized like this: `OutputTypings`
- When defining a model the definition word should be capitolized and not be plural. You should use the same word when defining the schema for the model (shown below)
- Schemas should end in Schema and start wityh the model name in lowercase, like so: `forumSchema`

### Other

- Typings that appear in multiple files should be defined in the `lib/typings` folder and imported
- Use import over require whenever possible
