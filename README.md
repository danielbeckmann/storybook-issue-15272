# Storybook

Repro for https://github.com/storybookjs/storybook/issues/15272

## Steps

- Open `Header > Logged In` story in the browser
- See that the `user` object input control is not working correctly and displaying "Set object"
- Open `Button.stories.ts`
- Remove or comment line `29`
- Open `Header > Logged In` story in the browser
- Hit refresh in the browser
- The `user` object input control is working again
