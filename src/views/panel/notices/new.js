import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Api from "../../../services/api";

export default function NewNotice() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const save = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            await Api.post("/notices", {
                title,
                description,
            });

            setLoading(false);
            history.push("/painel/avisos");
        } catch (err) {
            setLoading(false);
            alert(err.message);
        }
    };

    return (
        <div>
            <form onSubmit={save}>
                <label>Titulo</label>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    name="title"
                    value={title}
                    required
                />
                <br />
                <label>Descrição</label>
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    name="description"
                    value={description}
                    required
                />
                <br />
                <button type="submit">
                    {loading ? "Salvando..." : "Salvar"}
                </button>
            </form>
        </div>
    );
}
