class ClickableRow {


  constructor(node) {
    this.text = node.querySelector('[data-type=expandable-text]');
    this.button = node.querySelector('[data-type=expand-button]');
    this.button.addEventListener('click',  () =>{
      this.rowVisible = !this.rowVisible;
      this.render();

    });
    this.render();
    console.log("constructor");

  }


  render() {
    console.log("render");
    
    if (this.rowVisible) {
      this.text.classList.add("row-shown");
      console.log('visible');

    }

    else {
      this.text.classList.remove("row-shown");
      console.log('invisible');
    }

  }

}

window.onload = function () {
  document.querySelectorAll('[data-type=clickable-row]').forEach(row => { return new ClickableRow(row); })
};


