# Regular Expression Notes in JavaScript

A regular expression is a pattern that the regular expression engine attempts to match in input text. A pattern consists of one or more character literals, operators, or constructs.

The regular expression engine uses the pattern to search input text for matches. The pattern describes the text to match, such as a particular string, a number range, or a certain pattern of characters. The pattern is constructed using a series of characters and special characters representing anchors, character-sets, and modifiers.

## Regular Expression Syntax

The following table lists the characters and constructs that you can use to construct regular expressions.

| Character | Description                                                                                                                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \         | Escapes the next character. This allows you to use reserved characters (such as parentheses and brackets) as literals.                                                                                           |
| ^         | Matches the beginning of input. If the multiline flag is set to true, also matches immediately after a line break character.                                                                                     |
| $         | Matches the end of input. If the multiline flag is set to true, also matches immediately before a line break character.                                                                                          |
| \*        | Matches the preceding expression 0 or more times.                                                                                                                                                                |
| +         | Matches the preceding expression 1 or more times.                                                                                                                                                                |
| ?         | Matches the preceding expression 0 or 1 time. So it is optional to search for the expression.                                                                                                                    |
| .         | Matches any single character except line terminators such as \n.                                                                                                                                                 |
| (x)       | Matches x and remembers the match. These are called capturing groups.                                                                                                                                            |
| (?:x)     | Matches x and does not remember the match. These are called non-capturing groups.                                                                                                                                |
| x(?=y)    | Matches x only if x is followed by y. This is called a lookahead.                                                                                                                                                |
| x(?!y)    | Matches x only if x is not followed by y. This is called a negated lookahead.                                                                                                                                    |
| x\|y      | Matches either x or y.                                                                                                                                                                                           |
| {n}       | Where n is a positive integer, matches exactly n occurrences of the preceding expression.                                                                                                                        |
| {n,}      | Where n is a positive integer, matches at least n occurrences of the preceding expression.                                                                                                                       |
| {n,m}     | Where n and m are positive integers and n <= m, matches at least n and at most m occurrences of the preceding expression.                                                                                        |
| [xyz]     | A character set. Matches any one of the enclosed characters. You can specify a range of characters by using a hyphen. For example, [abcd] is the same as [a-d].                                                  |
| [^xyz]    | A negated or complemented character set. That is, it matches anything that is not enclosed in the brackets. You can specify a range of characters by using a hyphen. For example, [^abcd] is the same as [^a-d]. |
| \b        | Matches a word boundary, such as a space.                                                                                                                                                                        |
| \B        | Matches a non-word boundary.                                                                                                                                                                                     |
| \d        | Matches a digit character. Equivalent to [0-9].                                                                                                                                                                  |
| \D        | Matches a non-digit character. Equivalent to [^0-9].                                                                                                                                                             |
| \f        | Matches a form-feed character.                                                                                                                                                                                   |
| \n        | Matches a line-feed character.                                                                                                                                                                                   |
| \r        | Matches a carriage return character.                                                                                                                                                                             |
| \s        | Matches any white space including space, tab, form-feed, etc. Equivalent to [ \f\n\r\t\v].                                                                                                                       |
| \S        | Matches any non-white space character. Equivalent to [^ \f\n\r\t\v].                                                                                                                                             |
| \t        | Matches a tab character.                                                                                                                                                                                         |
| \v        | Matches a vertical tab character.                                                                                                                                                                                |
| \w        | Matches any word character including underscore. Equivalent to [A-Za-z0-9_].                                                                                                                                     |
| \W        | Matches any non-word character. Equivalent to [^A-Za-z0-9_].                                                                                                                                                     |
| \0        | Matches a NULL character. Do not follow this with another digit.                                                                                                                                                 |
| \xhh      | Matches the character with the code hh (two hexadecimal digits).                                                                                                                                                 |
| \uhhhh    | Matches the character with the code hhhh (four hexadecimal digits).                                                                                                                                              |
| \         | In a replacement pattern, inserts the portion of the string that matches the entire regular expression.                                                                                                          |

## Regular Expression Modifiers

The following table lists the modifiers that you can use to change how a regular expression pattern matches input text.

| Modifier | Description                                                                                                                                                                                                                       |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| g        | Global search. The regular expression engine searches for all occurrences. Without the g modifier, the engine stops after the first match.                                                                                        |
| i        | Case-insensitive search. For example, /aBc/i would match AbC.                                                                                                                                                                     |
| m        | Multi-line search. The regular expression engine searches each line, starting at the beginning of the input string. Without the m modifier, the engine searches the entire input string, starting at the beginning of the string. |
| s        | Allows the dot character (.) to match all characters, including line terminators.                                                                                                                                                 |
| u        | Enables the use of Unicode point escapes (\u{...}) in the regular expression pattern.                                                                                                                                             |
| y        | Perform a "sticky" search that matches starting at the current position in the target string. See Sticky flag for more information.                                                                                               |

## Regular Expression Examples

### Matching a string
