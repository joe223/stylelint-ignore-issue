# stylelint-ignore-issue

https://github.com/stylelint/stylelint/issues/4134

## Reproduce

```shell
$ npm install
$ npm start
```

## What we expected?  

`index.css` is not supposed to be lint according to `.stylelintignore` if we set `ignorePath` in `.postcssrc.js` or not.

## Actual results

```shell
├── index.1.css
└── index.css
```
Stylelint lint all of theme.

## Speculate

https://github.com/stylelint/stylelint/blob/0fb8b6d561ca59830cb6d66addf588cfe6169ff1/lib/postcssPlugin.js#L101

I think it's because stylelint postcss plugin did not resolve `.stylelintignore` file.

Is it a historical design?
