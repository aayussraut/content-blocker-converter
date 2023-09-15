# Content Blocker Converter

The Content Blocker Converter is a simple JavaScript utility that converts a data stream of host blocklist entries into content blocker format. It takes a data stream as input and returns an array of objects that can be used to configure content blockers to block specific websites or hosts.

## Installation

You can install the Content Blocker Converter package using npm:

```
npm install content-blocker-converter
```

## Usage

Once you've installed the package, you can use it in your JavaScript code as follows:

```
import { convertToContentBlockerFormat } from 'content-blocker-converter';

const dataStream = `
0.0.0.0 example.com
0.0.0.0 adserver.com
# Comments are ignored
`;

const contentBlockerRules = convertToContentBlockerFormat(dataStream);

console.log(contentBlockerRules);
```

The convertToContentBlockerFormat function takes a data stream as input and returns an array of objects representing content blocker rules. Each rule object has two properties:

- `trigger`: This property contains a urlFilter key, which specifies the URL or host to block.

- `action`: This property specifies the action to take, which is set to "block" in this utility.

## Example

Suppose you have a data stream like this:

```
0.0.0.0 example.com
0.0.0.0 adserver.com
```

Running the convertToContentBlockerFormat function on this data will produce the following output:

```
[
  {
    trigger: {
      urlFilter: 'example.com'
    },
    action: {
      type: 'block'
    }
  },
  {
    trigger: {
      urlFilter: 'adserver.com'
    },
    action: {
      type: 'block'
    }
  }
]
```

## Contributions

Contributions are welcome! If you have any suggestions or improvements, please open an issue or create a pull request on the <a href="https://github.com/aayussraut/content-blocker-converter">GitHub repository</a>.
