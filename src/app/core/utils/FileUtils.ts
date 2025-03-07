// src/app/utils/file-utils.ts
export class FileUtils {
    static downloadFile(fileName: string, content: string) {
      const blob = new Blob([content], { type: 'text/plain' });
      const anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.download = fileName;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }
  }
  