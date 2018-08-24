Portal

Wraz z nadejściem Reacta w wersji 16 pojawiła się funkcjonalność o dość osobliwej nazwie Portal.
Słysząc po raz pierwszy tą nazwę (przynajmniej w moim przypadku :) pierwsze co przyszło mi na myśl to film Gwiezdne Wrota
i odkopany przez jakżeby inaczej amerykańskich naukowców kamienny portal do podróży międzygwiezdnych. 
Bądź co bądź ale nazwa nie jest tutaj bynajmniej nadużyciem ! Portal w ReactJS umożliwa nam przeniesienie elementów strony
w miejsce bardzo odległe od komponentu - rodzica, będące poza jego hierarchią, a jednocześnie zachowuje on połaczenie z kontekstem komponentu.

Bardzo dobrym przykładem wykorzystania tej funkcjonalności są komponenty typu: modal, tooltip czy popover. 
Z reguły elementy htmlowe tych konstrukcji są umieszczane na końcu strony w okolicach taga </body>, tak jak to było np. 
w dobrze znanej wtyczce colorbox. Pozwala to uniknąć problemu, gdy element-rodzic w drzewie DOM ma np. atrybut overflow: hidden.

Jak to można rozwiązać w ReactJS ?
Zakładając, że główny komponent renderowany jest w kontenerze o id='root', dodajmy linię niżej kontener, w którym bedziemy chcieli
wyświetlić nasz modal:
     
```html
<body>
<div id="root"></div>
<div id="portal"></div>
</body>

```
Teraz stworzymy komponent o nazwie Portal, w którym zaimplementujemy jego działanie.
Będzie,on jakby 'pośrednikiem' pomiędzy komponentem reactowym, a elementem w drzewie DOM gdzie  wyświetli się modal.

Potrzebujemy zaimportować pakiety ReactDOM, gdzie znajduje się funckjonalnośc tworzenia portali, oraz Component, aby stworzyć
reużywalny komponent typu Portal.
```javascript
import { Component } from 'react';
import ReactDOM from 'react-dom';
```

Następnie komponent musi wiedzieć gdzie ma "otworzyć" portal, także podajemy element w DOM gdzie się on otworzy: 
```javascript
const portalRoot = document.getElementById('portal');
```

W konstruktorze definiujemy nowy element, który wrzucimy do konteneru portala:

```javascript
export class PortalComponent extends Component {

    constructor() {
        super();
        this.element = document.createElement('div');
    }
}
```

Gdy komponent zostanie zostanie wyrenderowany, wrzucimy nowo utworzony element, korzystamy zatem z lifecycle-hook componentDidMount:
```javascript
componentDidMount() {
    portalRoot.appendChild(this.element);
}
```

Zostało nam jedynie zaimplementować funkcję render, gdzie utworzymy portal, dodamy komponent modala, który chcemy wyświetlić i podamy element 
w którym "otworzy się portal": 
```javascript
render() {
    const { children } = this.props; // skorzystamy z destrukturyzacji ES6
    return ReactDOM.createPortal(children, this.element); // tworzymy portal i wrzucamy childrena
} 
```
Komponent modala przekażemy do komponentu Portal poprzez propa children, w komponencie About będzie to wyglądać tak:
```javascript
<PortalComponent>
    <ModalComponent toggleModal={this.onModalClick} visibility={this.state.showModal}>
        <h1>Tytuł modala </h1>
        <div>To jest treść modala który się wyświetli przekazana jako children</div>
    </ModalComponent>
</PortalComponent>
```
Poniżej dodajmy też przycisk z prostym togglowaniem modala:
```javascript
<button className="btn" onClick={this.onModalClick}>
    Wyświetl modal
</button>
```

Po kliknięciu możemy zobaczyć, że modal faktycznie wyświetla się moza divem 'root', ponadto zachowuje dostęp do zmiennych i funkcji zdefiniowanych
w ramach komponentu rodzica.

