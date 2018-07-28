export class FileUpload {

  key: string;
  name: string;
  url: string;
  uploadRefPath: string;

  file: File;

  constructor(file: File) {
    this.file = file;
  }
}
