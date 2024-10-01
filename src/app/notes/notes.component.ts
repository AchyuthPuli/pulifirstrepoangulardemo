import { Component } from '@angular/core';
interface Note {
  id: number;
  title: string;
  content: string;
}


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  notes: Note[] = [];
  newNote: Note = { id: 0, title: '', content: '' };

  addNote() {
    this.newNote.id = this.notes.length + 1;
    this.notes.push({ ...this.newNote });
    this.newNote = { id: 0, title: '', content: '' };
  }

  deleteNote(noteId: number) {
    this.notes = this.notes.filter(note => note.id !== noteId);
  }

}
