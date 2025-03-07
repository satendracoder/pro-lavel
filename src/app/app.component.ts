
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Lexer } from './core/utils/Lexer';
import { Parser } from './core/utils/Parser';
import { CodeGenerator } from './core/utils/CodeGenerator';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pro-lavel';
  sourceCode: string = '';
  output: string = '';

  compile() {
    try {
      const lexer = new Lexer();
      const tokens = lexer.tokenize(this.sourceCode);

      const parser = new Parser(tokens);
      const ast = parser.parse();

      const codeGenerator = new CodeGenerator();
      this.output = codeGenerator.generate(ast);
    } catch (error) {
      this.output = `Compilation Error: ${(error as Error).message}`;
    }
  }
}