// lexer.ts
export class Lexer {
  private static TOKENS = [
    { type: 'PREPROCESSOR', pattern: /#include\s*<[^>]+>/ },
    { type: 'KEYWORD', pattern: /int|float|char|return/ }, // Add 'return' keyword
    { type: 'IDENTIFIER', pattern: /[a-zA-Z_][a-zA-Z0-9_]*/ },
    { type: 'NUMBER', pattern: /[0-9]+/ },
    { type: 'OPERATOR', pattern: /\+|\-|\*|\/|\=|\</ }, // Add '<' operator
    { type: 'LEFT_PAREN', pattern: /\(/ }, // Add '('
    { type: 'RIGHT_PAREN', pattern: /\)/ }, // Add ')'
    { type: 'LEFT_BRACE', pattern: /\{/ }, // Add '{'
    { type: 'RIGHT_BRACE', pattern: /\}/ }, // Add '}'
    { type: 'SEMICOLON', pattern: /;/ },
    { type: 'WHITESPACE', pattern: /\s+/ },
    { type: 'COMMA', pattern: /,/ },
  { type: 'INCREMENT', pattern: /\+\+/ },
  { type: 'DECREMENT', pattern: /--/ },
  { type: 'KEYWORD', pattern: /if|else|for|while/ }, // Add more keywords
  ];

  tokenize(sourceCode: string) {
    const tokens = [];
    let remainingCode = sourceCode;

    while (remainingCode.length > 0) {
      let matched = false;

      for (const token of Lexer.TOKENS) {
        const match = remainingCode.match(token.pattern);
        if (match && match.index === 0) {
          if (token.type !== 'WHITESPACE') {
            tokens.push({ type: token.type, value: match[0] });
          }
          remainingCode = remainingCode.slice(match[0].length);
          matched = true;
          break;
        }
      }

      if (!matched) {
        throw new Error(`Invalid token: ${remainingCode[0]}`);
      }
    }

    return tokens;
  }
}