import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileUtils } from '../../core/utils/FileUtils';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  cCode: string = `#include <stdio.h>\nint main() {\n  printf("Hello, World!\\n");\n  return 0;\n}`;
  output: string = '';

  compileAndRun() {
    this.output = ''; // Reset output
    if (!this.cCode.includes('#include <stdio.h>')) {
      this.output = 'Error: Missing #include <stdio.h>';
      return;
    }
    if (!this.cCode.includes('int main()')) {
      this.output = 'Error: Missing int main() function';
      return;
    }

    // Simulate printf output
    const printfRegex = /printf\("(.*?)\\n?"\);/g;
    let match;
    while ((match = printfRegex.exec(this.cCode)) !== null) {
      this.output += match[1] + '\n';
    }

    if (this.output === '') {
      this.output = 'Compilation successful, but no output.';
    }
  }

  downloadCode() {
    FileUtils.downloadFile('program.c', this.cCode);
  }
}