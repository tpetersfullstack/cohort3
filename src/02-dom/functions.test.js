import operations from './functions.js';

test('Add Buttons', () => {
    let ol = document.createElement("ol");
    for (var i=1; i < 4; i++) {
        let itm = document.createElement("li");
        let txt = document.createTextNode(`Item${i}`);
        itm.appendChild(txt);
        ol.appendChild(itm);
    }
    operations.addClick(ol);
    expect(ol.children[3].textContent).toBe("Item4");
    operations.addClick(ol);
    expect(ol.children[3].textContent).toBe("Item4");
    expect(ol.children[4].textContent).toBe("Item5");
    operations.addStartClick(ol);
    expect(ol.children[5].textContent).toBe("Item5");
    expect(ol.children[0].textContent).toBe("Item6");
});
test('Remove Buttons', () => {
    let ol = document.createElement("ol");
    for (var i=1; i < 5; i++) {
        let itm = document.createElement("li");
        let txt = document.createTextNode(`Item${i}`);
        itm.appendChild(txt);
        ol.appendChild(itm);
    }
    operations.removeClick(ol);
    expect(ol.children.length).toBe(3);
    operations.addStartClick(ol);
    expect(ol.children.length).toBe(4);
    operations.removeClick(ol);
    operations.removeClick(ol);
    expect(ol.children.length).toBe(2);
    operations.removeClick(ol);
    operations.removeClick(ol);
    expect(ol.children.length).toBe(0);
    operations.removeClick(ol);
    expect(ol.children.length).toBe(0);
});
test('Show Button', () => {
    let ol = document.createElement("ol");
    for (var i=1; i < 4; i++) {
        let itm = document.createElement("li");
        let txt = document.createTextNode(`Item${i}`);
        itm.appendChild(txt);
        ol.appendChild(itm);
    }
    expect(operations.showClick(ol.children)).toEqual(['Item1', 'Item2', 'Item3']);
});
