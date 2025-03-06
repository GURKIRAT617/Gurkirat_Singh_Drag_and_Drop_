
document.addEventListener("DOMContentLoaded", () => {

    let theThumbnails = document.querySelectorAll('#buttonHolder img'),
        gameBoard = document.querySelector('.puzzle-board'),
        pzlPiecesContainer = document.querySelector('.puzzle-pieces'),
        pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
        dropZones = document.querySelectorAll('.drop-zone');

    
    pzlPieces.forEach(piece => piece.setAttribute('draggable', 'true'));

    
    function changeImageSet() {
        console.log('Changing puzzle image set');

        dropZones.forEach(zone => {
            while (zone.firstChild) {
                pzlPiecesContainer.appendChild(zone.firstChild);
            }
        });

        pzlPieces.forEach(piece => {
            pzlPiecesContainer.appendChild(piece);
        });

        gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
    }

    function allowDrag(event) {
        console.log('Started dragging an image');

        
        event.dataTransfer.setData('draggedEl', event.target.id);
    }

    function allowDragOver(event) {
        event.preventDefault();
        console.log('Dragging over a drop zone');
    }

    function allowDrop(event) {
        event.preventDefault();

        let droppedElId = event.dataTransfer.getData('draggedEl');

        
        let droppedEl = document.getElementById(droppedElId);

        
        if (!this.hasChildNodes()) {
            this.appendChild(droppedEl);
        }
    }

    theThumbnails.forEach(thumbnail => thumbnail.addEventListener('click', changeImageSet));
    pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', allowDragOver);
        zone.addEventListener('drop', allowDrop);
    });

});
