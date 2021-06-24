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
            history.push("avisos");
        } catch (err) {
            setLoading(false);
            alert(err.message);
        }
    };


    return (
        <div class="bg-white  shadow  p-10 md:w-1/2 max-w-lg mx-auto my-24">
            <div class="text-left p-0 font-sans">
                <h1 class=" text-gray-800 text-xl font-medium">
                    Cadastrar novo Aviso
                </h1>
            </div>
            <form action="#" class="p-0" onSubmit={save}>
                <div class="mt-5">
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        name="title"
                        class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                        placeholder="Titulo"
                        value={title}
                        required
                    />
                </div>
                <div class="mt-5">
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                        placeholder="User-name"
                        name="description"
                        value={description}
                        required
                    />
                </div>
                <br />
                <button
                    type="submit"
                    className=" focus:outline-none text-green-600 text-sm py-2.5 px-5 rounded-md border border-green-600 hover:bg-green-50 flex items-center"
                >
                    <svg
                        class="w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        ></path>
                    </svg>
                    {loading ? "Salvando..." : "Salvar"}
                </button>

                
            </form>
        </div>
    );
}
