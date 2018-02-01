import React from 'react';

export class Preview extends React.Component {
  updatePreview() {
    const preview = document.querySelector('#application-preview');
    const text = document.querySelector('#application-text').value;
    preview.textContent = text;
  }
  togglePreview() {
    document.querySelector('#application-preview').classList.toggle('hidden');
  }
  render() {
    return (
      <div>
        <p id="message">&nbsp;</p>
        <button id="preview-toggle" onClick={this.togglePreview()}>Show Preview</button>
        <section id="application-preview" className="hidden">{this.updatePreview()}</section>
      </div>
    );
  }
}




