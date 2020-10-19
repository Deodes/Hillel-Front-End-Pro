const { xmasTree } = require('./index');

test('Xmas tree height 5', () => {
    expect(xmasTree(5, '$')).toBe(`    $
   $$$
  $$$$$
 $$$$$$$
$$$$$$$$$
`)
})