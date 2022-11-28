import React, { useState } from "react";

const FormToDo = props => {
    
    const [description, setDescription] = useState("");

    const {addItem} = props;

    const handleSubmit = e => {
        e.preventDefault();
        console.log(description);

        addItem({
            done: false,
            id: (+new Date).toString(),
            description
        });

        setDescription("");
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="input">
                    <input
                        type="text"
                        className="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button
                        className="button pink"
                        // Operador Ternario --> ?
                        /*
                            if (Description == "") {
                                disable = "disable";
                            } else {
                                disable=""
                            }
                        */
                        disabled={description ? "": "disable"}
                        >
                        Agregar Tarea
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FormToDo;