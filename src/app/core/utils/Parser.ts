// parser.ts
export class Parser {
  private tokens: { type: string; value: string }[];
  private currentTokenIndex = 0;

  constructor(tokens: { type: string; value: string }[]) {
    this.tokens = tokens;
  }

  parse() {
    const ast = [];
    while (this.currentTokenIndex < this.tokens.length) {
      const token = this.tokens[this.currentTokenIndex];
      if (token.type === 'PREPROCESSOR') {
        ast.push(this.parsePreprocessorDirective());
      } else if (token.type === 'KEYWORD' && token.value === 'int') {
        ast.push(this.parseFunction()); // Parse functions like 'int main() { ... }'
      } else {
        throw new Error(`Unexpected token: ${token.value}`);
      }
    }
    return ast;
  }

  parseFunction() {
    const returnType = this.consume('KEYWORD').value; // 'int'
    const functionName = this.consume('IDENTIFIER').value; // 'main'
    this.consume('LEFT_PAREN', '('); // '('
    this.consume('RIGHT_PAREN', ')'); // ')'
    this.consume('LEFT_BRACE', '{'); // '{'

    // Parse function body (e.g., variable declarations)
    const body = [];
    while (this.tokens[this.currentTokenIndex].type !== 'RIGHT_BRACE') {
      if (this.tokens[this.currentTokenIndex].type === 'KEYWORD') {
        body.push(this.parseVariableDeclaration());
      } else {
        this.currentTokenIndex++;
      }
    }

    this.consume('RIGHT_BRACE', '}'); // '}'
    return {
      type: 'FunctionDeclaration',
      returnType,
      name: functionName,
      body,
    };
  }

  parseVariableDeclaration() {
    const type = this.consume('KEYWORD').value;
    const identifier = this.consume('IDENTIFIER').value;
    this.consume('OPERATOR', '=');
    const value = this.consume('NUMBER').value;
    this.consume('SEMICOLON', ';');
    return {
      type: 'VariableDeclaration',
      dataType: type,
      identifier,
      value: parseInt(value),
    };
  }

  parsePreprocessorDirective() {
    const directive = this.consume('PREPROCESSOR').value;
    return { type: 'PreprocessorDirective', directive };
  }

  consume(expectedType: string, expectedValue?: string) {
    const token = this.tokens[this.currentTokenIndex++];
    if (token.type !== expectedType || (expectedValue && token.value !== expectedValue)) {
      throw new Error(`Expected ${expectedType} but found ${token.type}`);
    }
    return token;
  }
}