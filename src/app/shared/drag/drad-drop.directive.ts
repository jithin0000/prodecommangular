import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appDradDrop]'
})
export class DradDropDirective {

  @Output() filesDroped = new EventEmitter<FileList>();
  @Output() fileHovered = new EventEmitter();

  constructor() { }

  @HostListener('drop',['$event'])
  onDrop($event){

    $event.preventDefault()
    let transfer = $event.dataTransfer
    this.filesDroped.emit(transfer.files)

    this.fileHovered.emit(false)
  }

  @HostListener('dragover',['$event'])
  onDragOver($event){
    $event.preventDefault()

    this.fileHovered.emit(true)
  }


  @HostListener('dragleave',['$event'])
  onDragLeave($event){
    this.fileHovered.emit(false)

  }

}
