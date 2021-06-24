import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../../../services/api";

export default function Notices() {
    const [notices, setNotices] = useState([]);

    const fetch = async () => {
        try {
            const { data } = await Api.get("/notices");

            setNotices(data);
        } catch (err) {
            console.log(err);
        }
    };

    const remove = async (notice) => {
        if (window.confirm("Deseja realmente remover este aviso?")) {
            await Api.delete(`/notices/${notice._id}`);

            fetch();
        }
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div>
            <div>
                <Link to="/painel/avisos/novo">Adicionar aviso</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {notices.map((notice, index) => (
                        <tr key={index}>
                            <td>{notice.title}</td>
                            <td>{notice.description}</td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => remove(notice)}
                                >
                                    Remover
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
