// code-generator.ts
export class CodeGenerator {
  generate(ast: any[]) {
    let assemblyCode = [];
    for (const node of ast) {
      if (node.type === 'PreprocessorDirective') {
        assemblyCode.push(`; ${node.directive}`);
      } else if (node.type === 'FunctionDeclaration') {
        assemblyCode.push(`${node.name}:`);
        assemblyCode.push(...this.generateFunctionBody(node.body));
      }
    }
    return assemblyCode.join('\n');
  }

  generateFunctionBody(body: any[]) {
    const code = [];
    for (const statement of body) {
      if (statement.type === 'VariableDeclaration') {
        code.push(`mov eax, ${statement.value}`);
      }
    }
    return code;
  }
}