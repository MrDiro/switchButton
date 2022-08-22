/**
 * pluguin para crear boton interruptor
 * @param {*} checked parametro que indica el estado del interruptor
 * @param {*} autohandler habilita o no el manejador del interruptor
 * @author Dairo Carrasquilla (c) 2022
 */
function switchButton(checked = false, autohandler = true) {

    return new class {

        constructor () {

            let button = document.createElement("switchButton");

            button.__proto__.checked = false;
            button.style.cursor = "pointer";
            button.style.display = "inline-block";
            button.style.width = "40px";
            button.style.height = "20px";
            button.style.border = "1px solid #ccc";
            button.style.borderRadius = "12px";
            button.style.backgroundColor = "transparent";

            button.__proto__.checkLeft = function (btn) {

                btn.checked = true;
                btn.title = "deshabilitado";
                btn.style.backgroundImage = "url('assets/img/Buttons/circle_button.svg')";
                btn.style.backgroundRepeat = "no-repeat";
                btn.style.backgroundSize = "18px";
                btn.style.backgroundPosition = "left";
            }

            button.__proto__.checkRight = function (btn) {

                btn.checked = false;
                btn.title = "habilitado";
                btn.style.backgroundImage = "url('assets/img/Buttons/circle_button.svg')";
                btn.style.backgroundRepeat = "no-repeat";
                btn.style.backgroundSize = "18px";
                btn.style.backgroundPosition = "right";
            }
            
            checked ? button.checkRight(button) : button.checkLeft(button);

            if (autohandler) {

                button.addEventListener("mousedown", (ev) => {

                    ev.stopPropagation();

                    ev.target.checked ? button.checkRight(ev.target) : button.checkLeft(ev.target);
                });
            }

            return button;
        }
    }
}
